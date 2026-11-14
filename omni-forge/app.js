/**
 * LLM Forge Client Core
 */

const state = {
  activeTab: 'studio',
  apis: [],
  activeApiId: null,
  activeApiData: null,
  sdkLang: 'python',
  streamAbortController: null
};

document.addEventListener('DOMContentLoaded', () => {
  fetchLlmApis();
});

// Fetch all generated LLM APIs
async function fetchLlmApis() {
  try {
    const res = await fetch('/api-forge/llm-apis');
    const data = await res.json();
    state.apis = data.apis || [];

    // Update metrics
    if (data.metrics) {
      document.getElementById('metric-apis-count').innerText = state.apis.length;
      document.getElementById('metric-requests-count').innerText = data.metrics.totalRequests || 0;
      document.getElementById('metric-tokens-count').innerText = data.metrics.totalTokens || 0;
    }

    if (state.apis.length > 0) {
      if (!state.activeApiId || !state.apis.find(a => a.id === state.activeApiId)) {
        state.activeApiId = state.apis[0].id;
      }
      renderApiList();
      loadActiveApi();
    }
  } catch (err) {
    console.error('Failed to load LLM APIs:', err);
  }
}

// Render Left Sidebar
function renderApiList() {
  const container = document.getElementById('llm-api-list');
  if (!container) return;
  container.innerHTML = '';

  state.apis.forEach(api => {
    const isSelected = api.id === state.activeApiId;
    const div = document.createElement('div');
    div.className = `p-3 rounded-xl cursor-pointer border transition text-left flex flex-col space-y-1 ${
      isSelected 
        ? 'border-indigo-500 bg-indigo-950/40 shadow-md' 
        : 'bg-gray-900/40 border-gray-800/80 hover:border-gray-700 hover:bg-gray-800/40'
    }`;
    div.onclick = () => selectApi(api.id);

    div.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold ${isSelected ? 'text-indigo-300' : 'text-gray-200'} truncate">${api.name}</span>
        <span class="text-[9px] uppercase px-1.5 py-0.2 rounded font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
          ${api.provider}
        </span>
      </div>
      <div class="flex items-center space-x-2 text-[10px] text-gray-500 font-mono">
        <span class="text-gray-400 truncate">${api.model}</span>
        <span>•</span>
        <span>${api.apiKeyRequired ? 'Auth' : 'Open'}</span>
      </div>
    `;
    container.appendChild(div);
  });
}

function selectApi(apiId) {
  state.activeApiId = apiId;
  renderApiList();
  loadActiveApi();
}

function loadActiveApi() {
  const api = state.apis.find(a => a.id === state.activeApiId);
  if (!api) return;
  state.activeApiData = api;

  // Header & Info
  document.getElementById('active-api-name').innerText = api.name;
  document.getElementById('active-api-desc').innerText = api.description;
  document.getElementById('active-provider-badge').innerText = api.provider.toUpperCase();
  document.getElementById('active-model-id').innerText = api.id;
  document.getElementById('hint-model-id').innerText = `"${api.id}"`;
  document.getElementById('active-secret-key').innerText = api.secretApiKey;
  document.getElementById('endpoint-direct-chat').innerText = `/api/llm/${api.id}/chat`;

  const authBadge = document.getElementById('active-auth-badge');
  if (api.apiKeyRequired) {
    authBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30';
    authBadge.innerText = 'AUTH REQUIRED';
  } else {
    authBadge.className = 'px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
    authBadge.innerText = 'OPEN ACCESS';
  }

  // Hyperparameters
  document.getElementById('studio-system-prompt').value = api.systemPrompt || '';
  document.getElementById('studio-temperature').value = api.temperature !== undefined ? api.temperature : 0.7;
  document.getElementById('temp-display').innerText = api.temperature !== undefined ? api.temperature : 0.7;
  document.getElementById('studio-maxtokens').value = api.maxTokens || 4096;
  document.getElementById('studio-auth-required').checked = !!api.apiKeyRequired;

  if (state.activeTab === 'sdk') renderSdkCode();
  if (state.activeTab === 'docs') loadOpenApiViewer();
}

async function saveActiveApiSettings() {
  const api = state.activeApiData;
  if (!api) return;

  api.systemPrompt = document.getElementById('studio-system-prompt').value;
  api.temperature = parseFloat(document.getElementById('studio-temperature').value);
  api.maxTokens = parseInt(document.getElementById('studio-maxtokens').value);
  api.apiKeyRequired = document.getElementById('studio-auth-required').checked;

  try {
    const res = await fetch('/api-forge/llm-apis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(api)
    });
    if (res.ok) {
      alert(`Updated settings for "${api.name}"!`);
      fetchLlmApis();
    }
  } catch (err) {
    alert('Save failed: ' + err.message);
  }
}

// Navigation Tabs
function switchTab(tabId) {
  state.activeTab = tabId;
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active-tab'));

  const view = document.getElementById(`view-${tabId}`);
  const nav = document.getElementById(`nav-${tabId}`);
  if (view) {
    view.classList.remove('hidden');
    if (tabId === 'playground' || tabId === 'sdk') view.classList.add('flex');
  }
  if (nav) nav.classList.add('active-tab');

  if (tabId === 'sdk') renderSdkCode();
  if (tabId === 'docs') loadOpenApiViewer();
}

function testInPlayground() {
  switchTab('playground');
}

function openSdkTab() {
  switchTab('sdk');
}

// LIVE TESTER
async function executeLlmTestRequest() {
  const prompt = document.getElementById('tester-prompt-input').value.trim();
  let clientKey = document.getElementById('tester-client-key').value.trim();
  // If the user pasted their Omni-Forge Secret API Key into the upstream box, ignore it for upstream
  if (clientKey.startsWith('sk-forge-')) clientKey = '';
  const shouldStream = document.getElementById('tester-stream-toggle').checked;
  const viewer = document.getElementById('tester-response-viewer');
  const badge = document.getElementById('tester-status-badge');
  const latencySpan = document.getElementById('tester-latency');
  const tokensSpan = document.getElementById('tester-tokens');

  if (!prompt) return;

  viewer.innerText = '// Dispatching request to model...';
  badge.className = 'px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-amber-500/20 text-amber-300';
  badge.innerText = 'INFERRING...';

  const startTime = performance.now();

  try {
    const api = state.activeApiData;

    // Use standard OpenAI-compatible endpoint with streaming
    if (shouldStream) {
      const response = await fetch('/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${api.secretApiKey}`,
          'x-provider-api-key': clientKey
        },
        body: JSON.stringify({
          model: api.id,
          messages: [{ role: 'user', content: prompt }],
          stream: true
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      viewer.innerText = '';
      badge.className = 'px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-emerald-500/20 text-emerald-300 animate-pulse';
      badge.innerText = 'STREAMING...';

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let totalText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        // Parse SSE chunk or raw text
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6).trim();
            if (dataStr === '[DONE]') continue;
            try {
              const parsed = JSON.parse(dataStr);
              const delta = parsed.choices?.[0]?.delta?.content || parsed.candidates?.[0]?.content?.parts?.[0]?.text || '';
              totalText += delta;
              viewer.innerText = totalText;
            } catch (e) {
              totalText += dataStr;
              viewer.innerText = totalText;
            }
          } else if (line.trim() && !line.startsWith('event:')) {
            totalText += line + '\n';
            viewer.innerText = totalText;
          }
        }
      }

      const elapsed = Math.round(performance.now() - startTime);
      latencySpan.innerText = `${elapsed} ms`;
      badge.className = 'px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-emerald-500/20 text-emerald-300';
      badge.innerText = '200 STREAM COMPLETE';
      fetchLlmApis(); // refresh tokens metric
      return;
    }

    // Direct Non-streaming
    const res = await fetch(`/api/llm/${api.id}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': api.secretApiKey
      },
      body: JSON.stringify({
        prompt,
        clientApiKey: clientKey
      })
    });

    const elapsed = Math.round(performance.now() - startTime);
    latencySpan.innerText = `${elapsed} ms`;

    const data = await res.json();
    if (res.ok) {
      badge.className = 'px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-emerald-500/20 text-emerald-300';
      badge.innerText = '200 OK';
      viewer.innerText = data.output;
      if (data.usage?.total_tokens) {
        tokensSpan.innerText = data.usage.total_tokens;
      }
      fetchLlmApis();
    } else {
      badge.className = 'px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-red-500/20 text-red-300';
      badge.innerText = 'ERROR';
      viewer.innerText = 'Error: ' + (data.error || JSON.stringify(data));
    }
  } catch (err) {
    badge.className = 'px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-red-500/20 text-red-300';
    badge.innerText = 'FAILED';
    viewer.innerText = 'Execution Failed: ' + err.message;
  }
}

// SDK EXPORTER
function switchSdkLang(lang) {
  state.sdkLang = lang;
  document.querySelectorAll('.sdk-lang-btn').forEach(btn => {
    btn.className = 'sdk-lang-btn px-3 py-1.5 rounded-lg font-bold transition text-gray-400 hover:text-white';
  });
  const active = document.getElementById(`sdk-tab-${lang}`);
  if (active) active.className = 'sdk-lang-btn px-3 py-1.5 rounded-lg font-bold transition bg-gray-800 text-white';
  renderSdkCode();
}

function renderSdkCode() {
  const viewer = document.getElementById('sdk-code-content');
  const title = document.getElementById('sdk-code-title');
  const api = state.activeApiData;
  if (!viewer || !api) return;

  const baseUrl = `${window.location.origin}/v1`;

  if (state.sdkLang === 'python') {
    title.innerText = 'Python (Official openai package)';
    viewer.value = `from openai import OpenAI

# Connect directly to your generated LLM API!
client = OpenAI(
    base_url="${baseUrl}",
    api_key="${api.secretApiKey}"
)

response = client.chat.completions.create(
    model="${api.id}",
    messages=[
        {"role": "user", "content": "Hello! What are your capabilities?"}
    ],
    temperature=${api.temperature || 0.7}
)

print(response.choices[0].message.content)`;
  } else if (state.sdkLang === 'cursor') {
    title.innerText = 'Cursor / Continue / Cline IDE Settings (JSON)';
    viewer.value = JSON.stringify({
      "model": api.id,
      "provider": "openai",
      "apiBase": baseUrl,
      "apiKey": api.secretApiKey,
      "title": api.name,
      "contextLength": api.maxTokens || 4096
    }, null, 2);
  } else if (state.sdkLang === 'langchain') {
    title.innerText = 'LangChain Python Integration';
    viewer.value = `from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    model="${api.id}",
    openai_api_base="${baseUrl}",
    openai_api_key="${api.secretApiKey}",
    temperature=${api.temperature || 0.7}
)

result = llm.invoke("Design an architecture plan for a distributed cache.")
print(result.content)`;
  } else if (state.sdkLang === 'curl') {
    title.innerText = 'cURL Terminal Command';
    viewer.value = `curl -X POST "${baseUrl}/chat/completions" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${api.secretApiKey}" \\
  -d '{
    "model": "${api.id}",
    "messages": [
      {"role": "user", "content": "Explain machine learning in simple terms"}
    ],
    "temperature": ${api.temperature || 0.7}
  }'`;
  } else if (state.sdkLang === 'js') {
    title.innerText = 'Node.js / JavaScript Fetch';
    viewer.value = `async function callGeneratedLlmApi() {
  const response = await fetch("${baseUrl}/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer ${api.secretApiKey}"
    },
    body: JSON.stringify({
      model: "${api.id}",
      messages: [{ role: "user", content: "Write a quicksort function in TypeScript" }]
    })
  });
  const data = await response.json();
  console.log(data.choices[0].message.content);
}

callGeneratedLlmApi();`;
  }
}

function copySdkCode() {
  const code = document.getElementById('sdk-code-content').value;
  navigator.clipboard.writeText(code);
  alert('Integration code copied to clipboard!');
}

function copySecretKey() {
  const key = document.getElementById('active-secret-key').innerText;
  navigator.clipboard.writeText(key);
  alert(`Copied API Key: ${key}`);
}

// OPENAPI VIEWER
async function loadOpenApiViewer() {
  const viewer = document.getElementById('openapi-json-viewer');
  if (!viewer || !state.activeApiId) return;

  viewer.innerText = '// Fetching OpenAPI 3.1 Spec...';
  try {
    const res = await fetch(`/api/llm/${state.activeApiId}/openapi.json`);
    const spec = await res.json();
    viewer.innerText = JSON.stringify(spec, null, 2);
  } catch (err) {
    viewer.innerText = 'Failed to load OpenAPI spec: ' + err.message;
  }
}

function downloadOpenApi() {
  window.open(`/api/llm/${state.activeApiId}/openapi.json`, '_blank');
}

// PROMPT TO LLM API
function openPromptModal() {
  document.getElementById('prompt-modal').classList.remove('hidden');
}

function closePromptModal() {
  document.getElementById('prompt-modal').classList.add('hidden');
}

function setPromptExample(text) {
  document.getElementById('ai-llm-prompt-input').value = text;
}

async function generateLlmApiFromPrompt() {
  const prompt = document.getElementById('ai-llm-prompt-input').value.trim();
  if (!prompt) {
    alert('Please provide a prompt description');
    return;
  }

  try {
    const res = await fetch('/api-forge/llm-apis/generate-from-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    if (data.success) {
      closePromptModal();
      await fetchLlmApis();
      selectApi(data.api.id);
      switchTab('studio');
    }
  } catch (e) {
    alert('Failed: ' + e.message);
  }
}

// CUSTOM API CREATOR
function openCustomApiModal() {
  document.getElementById('custom-api-modal').classList.remove('hidden');
}

function closeCustomApiModal() {
  document.getElementById('custom-api-modal').classList.add('hidden');
}

async function submitCustomApi() {
  const name = document.getElementById('modal-api-name').value.trim();
  const provider = document.getElementById('modal-provider').value;
  const model = document.getElementById('modal-model-id').value.trim();
  const baseURL = document.getElementById('modal-base-url').value.trim();
  const systemPrompt = document.getElementById('modal-system-prompt').value.trim();

  if (!name) {
    alert('API Display Name is required');
    return;
  }

  try {
    const res = await fetch('/api-forge/llm-apis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        provider,
        model,
        baseURL: baseURL || undefined,
        systemPrompt
      })
    });
    if (res.ok) {
      closeCustomApiModal();
      await fetchLlmApis();
      switchTab('studio');
    }
  } catch (e) {
    alert('Failed: ' + e.message);
  }
}

async function deleteCurrentApi() {
  if (!confirm(`Delete LLM API "${state.activeApiData?.name}"?`)) return;
  try {
    await fetch(`/api-forge/llm-apis/${state.activeApiId}`, { method: 'DELETE' });
    state.activeApiId = null;
    await fetchLlmApis();
  } catch (e) {
    alert('Delete failed: ' + e.message);
  }
}
