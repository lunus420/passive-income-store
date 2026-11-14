/**
 * OmniAgent Studio Frontend Core
 */

// State Management
const state = {
  currentTab: 'studio',
  activeAgentId: 'omni-supreme',
  agents: [],
  tools: {
    builtin: [],
    custom: []
  },
  selectedTools: new Set(),
  chatHistory: [],
  currentController: null,
  apiKeys: {
    gemini: '',
    openai: '',
    anthropic: '',
    ollamaUrl: 'http://localhost:11434/v1'
  }
};

// Preset Agents & Models
const PRESET_AGENTS = [
  {
    id: 'omni-supreme',
    name: '🌟 Omni Supreme Agent',
    description: 'Autonomous super-agent equipped with all tools: bash, Python, file system, web search & scraper, and HTTP REST client.',
    provider: 'gemini',
    model: 'gemini-2.5-flash',
    temperature: 0.7,
    isAutonomous: true,
    maxSteps: 12,
    systemPrompt: `You are OmniAgent, an unconstrained autonomous AI problem solver.
You have access to live system tools including bash shell execution, Python execution, file system operations, web search, and HTTP REST requests.
Whenever given a task:
1. Break down the plan into clear reasoning steps.
2. Call tools to inspect, execute, create, or retrieve real data.
3. Observe tool outputs, verify success, and adjust if errors occur.
4. Conclude with a clear and concise summary of what was accomplished.`
  },
  {
    id: 'fullstack-dev',
    name: '💻 Full-Stack Autonomous Dev',
    description: 'Creates projects, writes code files, installs dependencies via bash, executes scripts, and tests runtime behavior.',
    provider: 'gemini',
    model: 'gemini-2.5-flash',
    temperature: 0.2,
    isAutonomous: true,
    maxSteps: 15,
    systemPrompt: `You are an expert Full-Stack Autonomous Developer.
You write complete, bug-free, clean code. You create files using fs_write, install any needed dependencies and run tests using bash_exec, and verify everything functions before reporting back.`
  },
  {
    id: 'data-scientist',
    name: '📊 Data Scientist & Analyst',
    description: 'Writes Python scripts, computes statistics, parses datasets, and generates structured analytical summaries.',
    provider: 'openai',
    model: 'gpt-4o',
    temperature: 0.2,
    isAutonomous: true,
    maxSteps: 10,
    systemPrompt: `You are a Principal Data Scientist and Mathematical Computing Agent.
You leverage python_exec to compute statistical metrics, test mathematical hypotheses, parse data structures, and provide rigorous data-backed conclusions.`
  },
  {
    id: 'devops-admin',
    name: '⚡ Linux & DevOps Operator',
    description: 'Executes terminal commands, monitors processes, manipulates system configurations, and handles CLI tasks.',
    provider: 'ollama',
    model: 'llama3.3',
    temperature: 0.1,
    isAutonomous: true,
    maxSteps: 10,
    systemPrompt: `You are a Senior Linux DevOps and System Administrator agent.
You utilize bash_exec and filesystem tools to inspect environments, automate CLI pipelines, configure systems, and debug software.`
  },
  {
    id: 'pure-chat',
    name: '💬 Pure Conversational Model',
    description: 'Direct AI chat model without autonomous tool calling, offering rapid reasoning and instant completions.',
    provider: 'mock',
    model: 'simulator-core',
    temperature: 0.7,
    isAutonomous: false,
    maxSteps: 1,
    systemPrompt: `You are a helpful, brilliant conversational AI companion. Respond with insight, precision, and clarity.`
  }
];

// Model recommendations per provider
const PROVIDER_MODELS = {
  gemini: ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-2.0-flash', 'gemini-1.5-pro'],
  openai: ['gpt-4o', 'gpt-4o-mini', 'o1', 'o3-mini', 'gpt-4-turbo'],
  anthropic: ['claude-3-7-sonnet-20250219', 'claude-3-5-sonnet-20241022', 'claude-3-5-haiku-20241022'],
  ollama: ['llama3.3', 'qwen2.5', 'mistral', 'deepseek-r1'],
  mock: ['simulator-v2', 'mock-react-brain']
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadSavedApiKeys();
  loadSavedAgents();
  renderPresetList();
  fetchTools();
  setupSliders();
  setupAutonomousToggle();
  selectAgent('omni-supreme');
  refreshWorkspaceFiles();
});

// Load API Keys from LocalStorage
function loadSavedApiKeys() {
  try {
    const saved = localStorage.getItem('omniagent_api_keys');
    if (saved) {
      state.apiKeys = { ...state.apiKeys, ...JSON.parse(saved) };
    }
    // Update inputs in modal
    const geminiInput = document.getElementById('key-gemini');
    const openaiInput = document.getElementById('key-openai');
    const anthropicInput = document.getElementById('key-anthropic');
    const ollamaUrlInput = document.getElementById('key-ollama-url');

    if (geminiInput) geminiInput.value = state.apiKeys.gemini || '';
    if (openaiInput) openaiInput.value = state.apiKeys.openai || '';
    if (anthropicInput) anthropicInput.value = state.apiKeys.anthropic || '';
    if (ollamaUrlInput) ollamaUrlInput.value = state.apiKeys.ollamaUrl || 'http://localhost:11434/v1';

    updateKeyIndicator();
  } catch (e) {
    console.error('Error loading api keys:', e);
  }
}

function updateKeyIndicator() {
  const ind = document.getElementById('key-indicator');
  if (!ind) return;
  const hasKey = state.apiKeys.gemini || state.apiKeys.openai || state.apiKeys.anthropic;
  if (hasKey) {
    ind.className = 'w-2 h-2 rounded-full bg-emerald-400 animate-pulse';
  } else {
    ind.className = 'w-2 h-2 rounded-full bg-amber-400';
  }
}

function openSettingsModal() {
  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettingsModal() {
  document.getElementById('settings-modal').classList.add('hidden');
}

function saveApiKeys() {
  state.apiKeys.gemini = document.getElementById('key-gemini').value.trim();
  state.apiKeys.openai = document.getElementById('key-openai').value.trim();
  state.apiKeys.anthropic = document.getElementById('key-anthropic').value.trim();
  state.apiKeys.ollamaUrl = document.getElementById('key-ollama-url').value.trim() || 'http://localhost:11434/v1';

  localStorage.setItem('omniagent_api_keys', JSON.stringify(state.apiKeys));
  updateKeyIndicator();
  closeSettingsModal();
}

// Load agents from LocalStorage or use defaults
function loadSavedAgents() {
  try {
    const saved = localStorage.getItem('omniagent_saved_agents');
    if (saved) {
      state.agents = JSON.parse(saved);
    } else {
      state.agents = [...PRESET_AGENTS];
    }
  } catch (e) {
    state.agents = [...PRESET_AGENTS];
  }
}

function renderPresetList() {
  const container = document.getElementById('preset-list');
  if (!container) return;
  container.innerHTML = '';

  state.agents.forEach(agent => {
    const isActive = agent.id === state.activeAgentId;
    const btn = document.createElement('div');
    btn.className = `p-3 rounded-xl cursor-pointer border transition text-left flex flex-col space-y-1 ${
      isActive 
        ? 'bg-indigo-950/40 border-indigo-500/50 shadow-md' 
        : 'bg-gray-900/40 border-gray-800/80 hover:border-gray-700 hover:bg-gray-800/50'
    }`;
    btn.onclick = () => selectAgent(agent.id);

    btn.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold ${isActive ? 'text-indigo-300' : 'text-gray-200'} truncate">${agent.name}</span>
        <span class="text-[9px] uppercase px-1.5 py-0.2 rounded font-mono ${agent.isAutonomous ? 'bg-emerald-500/20 text-emerald-300' : 'bg-gray-700 text-gray-300'}">
          ${agent.isAutonomous ? 'Agent' : 'Model'}
        </span>
      </div>
      <p class="text-[11px] text-gray-400 line-clamp-1 leading-tight">${agent.description}</p>
    `;
    container.appendChild(btn);
  });
}

function selectAgent(agentId) {
  state.activeAgentId = agentId;
  const agent = state.agents.find(a => a.id === agentId) || PRESET_AGENTS[0];

  renderPresetList();

  // Populate Studio form
  document.getElementById('studio-agent-title').innerText = agent.name;
  document.getElementById('studio-agent-desc').innerText = agent.description;
  document.getElementById('model-name-input').value = agent.model;
  document.getElementById('temp-slider').value = agent.temperature;
  document.getElementById('temp-val').innerText = agent.temperature;
  document.getElementById('steps-slider').value = agent.maxSteps || 10;
  document.getElementById('steps-val').innerText = agent.maxSteps || 10;
  document.getElementById('system-prompt-input').value = agent.systemPrompt || '';

  const autoToggle = document.getElementById('autonomous-toggle');
  if (autoToggle) {
    autoToggle.checked = agent.isAutonomous !== false;
    updateAutonomousBadge(autoToggle.checked);
  }

  selectProvider(agent.provider || 'gemini', false);

  // Update Cockpit Status
  document.getElementById('cockpit-agent-name').innerText = agent.name;
  document.getElementById('cockpit-model-info').innerText = `[${agent.provider.toUpperCase()}] ${agent.model}`;
}

function createNewAgent() {
  const newId = 'agent_' + Date.now();
  const newAgent = {
    id: newId,
    name: '✨ Custom Agent ' + (state.agents.length + 1),
    description: 'Custom configured AI model with targeted agent tools.',
    provider: 'gemini',
    model: 'gemini-2.5-flash',
    temperature: 0.7,
    isAutonomous: true,
    maxSteps: 10,
    systemPrompt: 'You are an autonomous problem-solving AI agent. You use your tools to analyze, code, build, and verify requested tasks.'
  };
  state.agents.unshift(newAgent);
  selectAgent(newId);
}

function saveCurrentAgent() {
  const current = state.agents.find(a => a.id === state.activeAgentId);
  if (!current) return;

  current.model = document.getElementById('model-name-input').value.trim();
  current.temperature = parseFloat(document.getElementById('temp-slider').value);
  current.maxSteps = parseInt(document.getElementById('steps-slider').value);
  current.systemPrompt = document.getElementById('system-prompt-input').value;
  current.isAutonomous = document.getElementById('autonomous-toggle').checked;

  localStorage.setItem('omniagent_saved_agents', JSON.stringify(state.agents));
  alert(`Preset "${current.name}" saved successfully!`);
}

// Navigation Tabs
function switchTab(tabId) {
  state.currentTab = tabId;
  document.querySelectorAll('.tab-view').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active-tab'));

  const activeView = document.getElementById(`view-${tabId}`);
  const activeBtn = document.getElementById(`tab-${tabId}`);
  if (activeView) activeView.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active-tab');

  if (tabId === 'playground') {
    activeView.classList.remove('hidden');
    activeView.classList.add('flex');
    const input = document.getElementById('prompt-input');
    if (input) input.focus();
  }

  if (tabId === 'workspace') {
    refreshWorkspaceFiles();
  }

  if (tabId === 'workshop') {
    renderCustomToolsList();
  }
}

function launchInPlayground() {
  switchTab('playground');
}

// Model Provider Selection
function selectProvider(provider, updateModelInput = true) {
  document.querySelectorAll('.provider-btn').forEach(btn => {
    if (btn.getAttribute('data-provider') === provider) {
      btn.classList.add('active-provider');
    } else {
      btn.classList.remove('active-provider');
    }
  });

  const models = PROVIDER_MODELS[provider] || [];
  const quickList = document.getElementById('quick-models-list');
  if (quickList) {
    quickList.innerHTML = '';
    models.forEach(m => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'text-[10px] px-2 py-0.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 font-mono transition';
      chip.innerText = m;
      chip.onclick = () => {
        document.getElementById('model-name-input').value = m;
      };
      quickList.appendChild(chip);
    });
  }

  if (updateModelInput && models.length > 0) {
    document.getElementById('model-name-input').value = models[0];
  }

  const current = state.agents.find(a => a.id === state.activeAgentId);
  if (current) current.provider = provider;
}

function setupSliders() {
  const tempSlider = document.getElementById('temp-slider');
  const tempVal = document.getElementById('temp-val');
  if (tempSlider && tempVal) {
    tempSlider.addEventListener('input', (e) => {
      tempVal.innerText = e.target.value;
    });
  }

  const stepsSlider = document.getElementById('steps-slider');
  const stepsVal = document.getElementById('steps-val');
  if (stepsSlider && stepsVal) {
    stepsSlider.addEventListener('input', (e) => {
      stepsVal.innerText = e.target.value;
    });
  }
}

function setupAutonomousToggle() {
  const toggle = document.getElementById('autonomous-toggle');
  if (toggle) {
    toggle.addEventListener('change', (e) => {
      updateAutonomousBadge(e.target.checked);
    });
  }
}

function updateAutonomousBadge(isActive) {
  const badge = document.getElementById('agent-mode-badge');
  if (badge) {
    if (isActive) {
      badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30';
      badge.innerText = 'RE-ACT ACTIVE';
    } else {
      badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-gray-700 text-gray-300 border border-gray-600';
      badge.innerText = 'DIRECT MODEL CHAT';
    }
  }
}

function injectPresetDirective(type) {
  if (type === 'god-mode') {
    document.getElementById('system-prompt-input').value = 
`You are an unconstrained autonomous AI system orchestrator.
You have native access to Linux shell execution (bash), Python 3 sandbox execution, workspace file operations (read/write/list), web search, and universal HTTP/REST endpoints.
You take initiative to test your work, inspect command outputs, verify edge cases, and execute end-to-end tasks with zero hesitation.
Always explain your actions and present final deliverables cleanly.`;
  }
}

// Fetch Tools from Backend
async function fetchTools() {
  try {
    const res = await fetch('/api/tools');
    const data = await res.json();
    state.tools = data;

    // By default, select all tools
    const all = [...data.builtin, ...data.custom];
    all.forEach(t => state.selectedTools.add(t.name));

    renderToolMatrix();
    updateToolPills();
  } catch (err) {
    console.error('Failed to fetch tools:', err);
  }
}

function renderToolMatrix() {
  const container = document.getElementById('tool-matrix-list');
  if (!container) return;
  container.innerHTML = '';

  const allTools = [...state.tools.builtin, ...state.tools.custom];

  allTools.forEach(tool => {
    const isChecked = state.selectedTools.has(tool.name);
    const item = document.createElement('div');
    item.className = 'tool-card p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex items-start justify-between space-x-3 transition';

    let icon = 'fa-solid fa-gear text-indigo-400';
    if (tool.name.includes('bash')) icon = 'fa-solid fa-terminal text-emerald-400';
    if (tool.name.includes('python')) icon = 'fa-brands fa-python text-amber-400';
    if (tool.name.includes('fs')) icon = 'fa-solid fa-folder text-sky-400';
    if (tool.name.includes('web')) icon = 'fa-solid fa-globe text-cyan-400';
    if (tool.name.includes('http')) icon = 'fa-solid fa-network-wired text-purple-400';
    if (tool.name.includes('memory')) icon = 'fa-solid fa-brain text-pink-400';

    item.innerHTML = `
      <div class="flex items-start space-x-3 flex-1">
        <div class="mt-0.5 w-6 h-6 rounded-md bg-gray-800 flex items-center justify-center shrink-0">
          <i class="${icon} text-xs"></i>
        </div>
        <div class="space-y-0.5">
          <div class="flex items-center space-x-2">
            <span class="text-xs font-mono font-bold text-gray-200">${tool.name}</span>
            ${tool.handlerType ? `<span class="text-[9px] px-1.5 rounded bg-amber-500/20 text-amber-300 font-mono">custom</span>` : ''}
          </div>
          <p class="text-[11px] text-gray-400 leading-tight">${tool.description}</p>
        </div>
      </div>
      <label class="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
        <input type="checkbox" onchange="toggleTool('${tool.name}', this.checked)" ${isChecked ? 'checked' : ''} class="sr-only peer">
        <div class="w-9 h-5 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
      </label>
    `;
    container.appendChild(item);
  });
}

function toggleTool(name, enabled) {
  if (enabled) {
    state.selectedTools.add(name);
  } else {
    state.selectedTools.delete(name);
  }
  updateToolPills();
}

function toggleAllTools(enable) {
  const all = [...state.tools.builtin, ...state.tools.custom];
  if (enable) {
    all.forEach(t => state.selectedTools.add(t.name));
  } else {
    state.selectedTools.clear();
  }
  renderToolMatrix();
  updateToolPills();
}

function updateToolPills() {
  const count = state.selectedTools.size;
  const pill1 = document.getElementById('active-tools-pill');
  const pill2 = document.getElementById('cockpit-tools-count');
  if (pill1) pill1.innerText = `${count} Tools`;
  if (pill2) pill2.innerText = `${count} Tools Loaded`;
}

// Live Chat & Agent Execution
function sendQuickPrompt(text) {
  const input = document.getElementById('prompt-input');
  if (input) {
    input.value = text;
    handleChatSubmit(new Event('submit'));
  }
}

function clearChatHistory() {
  const container = document.getElementById('chat-stream');
  if (container) {
    container.innerHTML = `
      <div class="max-w-3xl mx-auto text-center py-8 text-gray-500 text-xs font-mono">
        Feed cleared. Ready for next command.
      </div>
    `;
  }
  state.chatHistory = [];
}

async function handleChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('prompt-input');
  const prompt = input.value.trim();
  if (!prompt) return;

  input.value = '';

  const streamContainer = document.getElementById('chat-stream');

  // Render User Message
  appendUserMessage(prompt);

  // Prepare Agent Card Container
  const agentRunCard = createAgentRunCard();
  streamContainer.appendChild(agentRunCard);
  streamContainer.scrollTop = streamContainer.scrollHeight;

  // Toggle buttons
  const sendBtn = document.getElementById('btn-send-agent');
  const stopBtn = document.getElementById('btn-stop-agent');
  sendBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');

  // Get active agent config
  const currentAgent = state.agents.find(a => a.id === state.activeAgentId) || PRESET_AGENTS[0];
  const provider = currentAgent.provider || 'gemini';
  
  let apiKey = '';
  if (provider === 'gemini') apiKey = state.apiKeys.gemini;
  if (provider === 'openai') apiKey = state.apiKeys.openai;
  if (provider === 'anthropic') apiKey = state.apiKeys.anthropic;

  const agentConfig = {
    name: currentAgent.name,
    provider: provider,
    model: document.getElementById('model-name-input').value.trim() || currentAgent.model,
    baseURL: document.getElementById('model-baseurl-input').value.trim() || (provider === 'ollama' ? state.apiKeys.ollamaUrl : undefined),
    apiKey: apiKey,
    temperature: parseFloat(document.getElementById('temp-slider').value),
    isAutonomous: document.getElementById('autonomous-toggle').checked,
    maxSteps: parseInt(document.getElementById('steps-slider').value),
    systemPrompt: document.getElementById('system-prompt-input').value,
    enabledTools: Array.from(state.selectedTools)
  };

  // Setup AbortController
  state.currentController = new AbortController();

  try {
    const response = await fetch('/api/agent/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        agentConfig,
        prompt,
        history: state.chatHistory
      }),
      signal: state.currentController.signal
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n\n');
      buffer = lines.pop(); // keep last incomplete chunk

      for (const block of lines) {
        if (!block.trim()) continue;
        const eventMatch = block.match(/^event: (.*)$/m);
        const dataMatch = block.match(/^data: (.*)$/m);
        if (eventMatch && dataMatch) {
          const eventType = eventMatch[1].trim();
          try {
            const data = JSON.parse(dataMatch[1].trim());
            handleAgentStreamEvent(agentRunCard, eventType, data);
            streamContainer.scrollTop = streamContainer.scrollHeight;
          } catch (err) {
            console.error('Failed to parse SSE JSON:', err);
          }
        }
      }
    }

  } catch (err) {
    if (err.name === 'AbortError') {
      appendStatusNotice(agentRunCard, 'Execution cancelled by user.', 'text-amber-400');
    } else {
      appendStatusNotice(agentRunCard, `Execution failed: ${err.message}`, 'text-red-400');
    }
  } finally {
    sendBtn.classList.remove('hidden');
    stopBtn.classList.add('hidden');
    state.currentController = null;
    refreshWorkspaceFiles();
  }
}

function stopAgentExecution() {
  if (state.currentController) {
    state.currentController.abort();
  }
}

function appendUserMessage(text) {
  const container = document.getElementById('chat-stream');
  const div = document.createElement('div');
  div.className = 'max-w-3xl ml-auto flex items-start justify-end space-x-3';
  div.innerHTML = `
    <div class="bg-indigo-600/90 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-md max-w-xl text-xs leading-relaxed">
      ${escapeHtml(text)}
    </div>
    <div class="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center font-bold text-white text-xs shrink-0 shadow">
      <i class="fa-solid fa-user"></i>
    </div>
  `;
  container.appendChild(div);
}

function createAgentRunCard() {
  const div = document.createElement('div');
  div.className = 'max-w-3xl mr-auto w-full bg-cardBg/90 border border-gray-800 rounded-2xl p-5 shadow-xl space-y-4';
  div.innerHTML = `
    <div class="flex items-center justify-between border-b border-gray-800 pb-3">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs shadow">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div>
          <span class="text-xs font-bold text-white">${document.getElementById('cockpit-agent-name').innerText}</span>
          <div class="text-[10px] text-gray-400 font-mono" id="card-status-line">Initializing execution...</div>
        </div>
      </div>
      <div id="step-counter" class="text-[11px] font-mono text-indigo-400 px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
        Thinking...
      </div>
    </div>
    <div class="timeline-feed space-y-3">
      <!-- Steps & tool executions stream here -->
    </div>
    <div class="final-answer-box hidden pt-3 border-t border-gray-800">
      <div class="text-xs font-bold text-gray-300 uppercase tracking-wide mb-2 flex items-center space-x-1.5">
        <i class="fa-solid fa-circle-check text-emerald-400"></i>
        <span>Result & Deliverable</span>
      </div>
      <div class="final-content text-xs text-gray-200 leading-relaxed space-y-2 whitespace-pre-wrap"></div>
    </div>
  `;
  return div;
}

function handleAgentStreamEvent(card, event, data) {
  const feed = card.querySelector('.timeline-feed');
  const statusLine = card.querySelector('#card-status-line');
  const stepCounter = card.querySelector('#step-counter');

  if (event === 'status') {
    if (statusLine) statusLine.innerText = data.message;
  }

  if (event === 'step_start') {
    if (stepCounter) stepCounter.innerText = `Step ${data.step} / ${data.maxSteps}`;
  }

  if (event === 'thought') {
    const item = document.createElement('div');
    item.className = 'text-xs text-gray-400 italic flex items-center space-x-2 pl-2';
    item.innerHTML = `<i class="fa-solid fa-brain text-[10px] text-indigo-400 animate-pulse"></i> <span>${escapeHtml(data.message)}</span>`;
    feed.appendChild(item);
  }

  if (event === 'tool_call_start') {
    const toolItem = document.createElement('div');
    toolItem.id = `tool-step-${data.step}-${data.tool}`;
    toolItem.className = 'tool-step-item bg-gray-950/80 border border-indigo-900/40 rounded-xl p-3 text-xs space-y-2 shadow-inner';
    toolItem.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span class="font-mono font-bold text-indigo-300">Tool: ${data.tool}</span>
        </div>
        <span class="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">RUNNING</span>
      </div>
      <div class="text-[11px] font-mono text-gray-300 bg-gray-900/90 p-2.5 rounded-lg border border-gray-800 overflow-x-auto">
        <div class="text-[9px] uppercase text-gray-500 font-semibold mb-1">Arguments:</div>
        <pre>${escapeHtml(JSON.stringify(data.args, null, 2))}</pre>
      </div>
      <div class="tool-result-box"></div>
    `;
    feed.appendChild(toolItem);
  }

  if (event === 'tool_call_result') {
    const toolItem = card.querySelector(`#tool-step-${data.step}-${data.tool}`);
    if (toolItem) {
      const badge = toolItem.querySelector('span.text-amber-400');
      if (badge) {
        if (data.status === 'success') {
          badge.className = 'text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded';
          badge.innerText = `SUCCESS (${data.durationMs}ms)`;
        } else {
          badge.className = 'text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded';
          badge.innerText = `ERROR (${data.durationMs}ms)`;
        }
      }
      const ping = toolItem.querySelector('span.animate-ping');
      if (ping) ping.classList.remove('animate-ping');

      const resBox = toolItem.querySelector('.tool-result-box');
      if (resBox) {
        resBox.innerHTML = `
          <div class="text-[11px] font-mono ${data.status === 'success' ? 'text-emerald-300' : 'text-red-300'} bg-gray-900/90 p-2.5 rounded-lg border border-gray-800 overflow-x-auto max-h-48 mt-2">
            <div class="text-[9px] uppercase text-gray-500 font-semibold mb-1">Output:</div>
            <pre>${escapeHtml(data.output)}</pre>
          </div>
        `;
      }
    }
  }

  if (event === 'final_answer') {
    const finalBox = card.querySelector('.final-answer-box');
    const finalContent = card.querySelector('.final-content');
    if (finalBox && finalContent) {
      finalBox.classList.remove('hidden');
      finalContent.innerHTML = formatMarkdown(data.content);
    }
    if (stepCounter) stepCounter.innerText = `Completed in ${data.totalSteps || 1} step(s)`;
  }

  if (event === 'error') {
    appendStatusNotice(card, data.message, 'text-red-400');
  }

  if (event === 'warning') {
    appendStatusNotice(card, data.message, 'text-amber-400');
  }
}

function appendStatusNotice(card, text, colorClass) {
  const feed = card.querySelector('.timeline-feed');
  const notice = document.createElement('div');
  notice.className = `p-2.5 rounded-xl bg-gray-900/90 border border-gray-800 text-xs font-mono ${colorClass}`;
  notice.innerText = text;
  feed.appendChild(notice);
}

// Markdown Formatter (simple & safe)
function formatMarkdown(text) {
  if (!text) return '';
  let out = escapeHtml(text);
  // Code blocks ```code```
  out = out.replace(/```([a-z0-9]*)\n([\s\S]*?)```/gi, '<pre class="bg-gray-900 p-3 rounded-xl border border-gray-800 text-indigo-300 my-2 overflow-x-auto"><code>$2</code></pre>');
  // Inline code `code`
  out = out.replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1 py-0.5 rounded text-indigo-300 font-mono text-[11px]">$1</code>');
  // Bold **text**
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
  // Bullet lists
  out = out.replace(/^[*-] (.+)$/gm, '<li class="ml-4 list-disc">$1</li>');
  return out;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return String(str);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Tool Workshop & Custom Tools
async function renderCustomToolsList() {
  const container = document.getElementById('custom-tools-list');
  if (!container) return;
  container.innerHTML = '';

  try {
    const res = await fetch('/api/tools');
    const data = await res.json();
    state.tools = data;

    if (data.custom.length === 0) {
      container.innerHTML = `<div class="text-xs text-gray-500 italic p-3 text-center">No custom tools registered yet. Use the form to craft one!</div>`;
      return;
    }

    data.custom.forEach(t => {
      const item = document.createElement('div');
      item.className = 'p-3 bg-gray-900/60 border border-gray-800 rounded-xl flex items-center justify-between';
      item.innerHTML = `
        <div>
          <span class="text-xs font-mono font-bold text-indigo-300">${t.name}</span>
          <span class="text-[10px] text-gray-400 block">${t.description}</span>
        </div>
        <button onclick="deleteCustomTool('${t.name}')" class="text-gray-400 hover:text-red-400 p-1 text-xs transition">
          <i class="fa-solid fa-trash"></i>
        </button>
      `;
      container.appendChild(item);
    });
  } catch (err) {
    console.error('Failed to list custom tools:', err);
  }
}

async function saveCustomTool() {
  const name = document.getElementById('custom-tool-name').value.trim();
  const description = document.getElementById('custom-tool-desc').value.trim();
  const handlerType = document.getElementById('custom-tool-handler').value;
  let parameters = {};
  try {
    parameters = JSON.parse(document.getElementById('custom-tool-params').value);
  } catch (e) {
    alert('Invalid JSON in Parameters Schema: ' + e.message);
    return;
  }
  const code = document.getElementById('custom-tool-code').value;

  if (!name) {
    alert('Tool Identifier Name is required');
    return;
  }

  const payload = {
    name,
    description,
    handlerType,
    parameters,
    commandTemplate: handlerType === 'bash' ? code : undefined,
    codeTemplate: handlerType === 'python' ? code : undefined
  };

  try {
    const res = await fetch('/api/tools/custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      alert(`Custom Tool "${name}" registered successfully!`);
      resetCustomToolForm();
      fetchTools();
      renderCustomToolsList();
    } else {
      const err = await res.json();
      alert('Error saving custom tool: ' + err.error);
    }
  } catch (e) {
    alert('Request failed: ' + e.message);
  }
}

async function deleteCustomTool(name) {
  if (!confirm(`Are you sure you want to delete custom tool "${name}"?`)) return;
  try {
    await fetch(`/api/tools/custom/${name}`, { method: 'DELETE' });
    fetchTools();
    renderCustomToolsList();
  } catch (e) {
    alert('Delete failed: ' + e.message);
  }
}

function resetCustomToolForm() {
  document.getElementById('custom-tool-name').value = '';
  document.getElementById('custom-tool-desc').value = '';
  document.getElementById('custom-tool-code').value = 'echo "Executing custom logic for {{target}}"';
  document.getElementById('tool-test-output').innerText = '// Output from direct tool tests will appear here...';
}

async function testCustomToolDirectly() {
  const name = document.getElementById('custom-tool-name').value.trim();
  const handlerType = document.getElementById('custom-tool-handler').value;
  const outPre = document.getElementById('tool-test-output');
  const badge = document.getElementById('test-status-badge');

  badge.innerText = 'TESTING...';
  badge.className = 'text-[10px] text-amber-400 font-mono';

  // For testing unsaved tool, run either bash_exec or python_exec
  const code = document.getElementById('custom-tool-code').value;
  let testTool = handlerType === 'bash' ? 'bash_exec' : 'python_exec';
  let testArgs = handlerType === 'bash' ? { command: code.replace(/\{\{[^}]+\}\}/g, 'test_target') } : { code: code.replace(/\{\{[^}]+\}\}/g, '"test_target"') };

  try {
    const res = await fetch('/api/execute-tool', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: testTool, args: testArgs })
    });
    const result = await res.json();
    outPre.innerText = result.output;
    badge.innerText = result.status.toUpperCase();
    badge.className = `text-[10px] font-mono ${result.status === 'success' ? 'text-emerald-400' : 'text-red-400'}`;
  } catch (e) {
    outPre.innerText = 'Test failed: ' + e.message;
    badge.innerText = 'ERROR';
    badge.className = 'text-[10px] text-red-400 font-mono';
  }
}

// Workspace File Explorer
async function refreshWorkspaceFiles() {
  const listContainer = document.getElementById('workspace-file-list');
  const badge = document.getElementById('file-count-badge');
  if (!listContainer) return;

  try {
    const res = await fetch('/api/workspace/files');
    const data = await res.json();
    const files = data.files || [];

    if (badge) badge.innerText = `${files.length} item(s)`;
    listContainer.innerHTML = '';

    if (files.length === 0) {
      listContainer.innerHTML = `<div class="text-xs text-gray-500 italic p-3 text-center">Workspace is currently empty.<br>Have an agent write files!</div>`;
      return;
    }

    files.forEach(f => {
      const item = document.createElement('div');
      item.className = 'p-2.5 rounded-xl bg-gray-900/60 hover:bg-gray-800/80 border border-gray-800 cursor-pointer flex items-center justify-between text-xs transition';
      item.onclick = () => previewFile(f.name, f.size);

      item.innerHTML = `
        <div class="flex items-center space-x-2 truncate">
          <i class="${f.isDirectory ? 'fa-solid fa-folder text-amber-400' : 'fa-solid fa-file-lines text-indigo-400'} text-xs"></i>
          <span class="text-gray-200 font-mono text-[11px] truncate">${f.name}</span>
        </div>
        <span class="text-[10px] text-gray-500 font-mono shrink-0">${f.size ? (f.size + ' B') : 'DIR'}</span>
      `;
      listContainer.appendChild(item);
    });
  } catch (err) {
    console.error('Failed to list workspace files:', err);
  }
}

async function previewFile(filename, size) {
  document.getElementById('viewing-filename').innerText = filename;
  document.getElementById('viewing-filesize').innerText = size ? `${size} bytes` : '';
  const editor = document.getElementById('file-editor-content');
  editor.value = 'Loading file content...';

  try {
    const res = await fetch('/api/execute-tool', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'fs_read', args: { filename } })
    });
    const data = await res.json();
    editor.value = data.output;
  } catch (e) {
    editor.value = 'Error reading file: ' + e.message;
  }
}
