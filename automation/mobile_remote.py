from flask import Flask, render_template_string, jsonify, request, send_file
import subprocess
import os
import json
import time

app = Flask(__name__)

# Paths
BASE_DIR = "/home/explode_420/Downloads/anti gravity/passive-income-store"
AUTO_SCRIPT = os.path.join(BASE_DIR, "automation", "run_automation.sh")
LOG_FILE = os.path.join(BASE_DIR, "automation", "automation.log")
CHAT_FILE = os.path.join(BASE_DIR, "automation", "mobile_chat.json")

def get_adb_status():
    try:
        res = subprocess.check_output(["adb", "devices"], text=True)
        lines = res.strip().split('\n')[1:]
        if not lines: return "Disconnected"
        if "unauthorized" in lines[0]: return "Unauthorized"
        if "device" in lines[0]: return "Connected"
        return "Unknown"
    except:
        return "Not Installed"

@app.route('/screenshot')
def get_screenshot():
    try:
        shot_path = os.path.join(BASE_DIR, "automation", "screen.png")
        subprocess.run(["adb", "exec-out", "screencap", "-p"], stdout=open(shot_path, "wb"), check=True)
        return send_file(shot_path, mimetype='image/png')
    except:
        return "Phone not ready", 500

@app.route('/status')
def status():
    return jsonify({
        "adb": get_adb_status(),
        "time": time.strftime("%H:%M:%S")
    })

@app.route('/exec', methods=['POST'])
def exec_command():
    command = request.json.get('command')
    # Auto-add -y to common interactive commands
    if "apt" in command and "upgrade" in command and "-y" not in command:
        command += " -y"
    try:
        full_cmd = f"bash -c 'source ~/.bashrc && {command}'"
        result = subprocess.check_output(full_cmd, shell=True, stderr=subprocess.STDOUT, text=True)
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"output": e.output}), 400
    except Exception as e:
        return jsonify({"output": str(e)}), 500

# AI / Assistant Logic
import random

ASSISTANT_NAME = "Antigravity"

def get_system_info():
    """Get live system stats for the assistant to report"""
    try:
        mem = subprocess.check_output("free -h | grep Mem", shell=True, text=True).strip().split()
        uptime = subprocess.check_output("uptime -p", shell=True, text=True).strip()
        return {"total_ram": mem[1], "used_ram": mem[2], "free_ram": mem[3], "uptime": uptime}
    except:
        return {"total_ram": "?", "used_ram": "?", "free_ram": "?", "uptime": "unknown"}

def get_hybrid_reply(user_msg):
    """Rich, conversational assistant with tons of personality"""
    msg = user_msg.lower().strip()
    
    # --- Greetings ---
    if any(k in msg for k in ["hello", "hi", "hey", "yo", "sup", "what's up", "whats up", "wassup"]):
        return random.choice([
            "Yo! Antigravity here. What do you need? I can check your store, run commands, update the system — you name it. 🚀",
            "Hey! I'm online and ready. Ask me about the store, system status, or just tell me what to do. 💪",
            "What's good! Your system is humming along. What can I help with today?",
            "Sup! Everything's running smooth. Need me to check something, run an update, or just vibing? 😎",
        ])
    
    # --- Identity ---
    if any(k in msg for k in ["who are you", "what are you", "your name", "what's your name"]):
        return "I'm Antigravity — your personal AI assistant built right into this remote control. I manage your passive income store, run system commands, monitor your devices, and keep everything running smooth. Think of me as mission control. 🛸"
    
    # --- System Status (detailed) ---
    if any(k in msg for k in ["status", "how are you", "alive", "working", "system", "health", "running", "check"]):
        info = get_system_info()
        return (
            f"📊 System Report:\n"
            f"• RAM: {info['used_ram']} used / {info['total_ram']} total ({info['free_ram']} free)\n"
            f"• Uptime: {info['uptime']}\n"
            f"• Store Service: Running on port 5000\n"
            f"• Automation: Daily scraper at 8 AM\n"
            f"Everything looks good! Your system is stable. 🟢"
        )
    
    # --- Store / Deals ---
    if any(k in msg for k in ["store", "deals", "affiliate", "money", "sales", "income", "revenue", "earning"]):
        return random.choice([
            "💰 Your Affiliate Store is LIVE on GitHub Pages! Here's the breakdown:\n• Amazon affiliate ID: bigterry20036-20\n• Temu affiliate ID: alg041956\n• eBay affiliate ID: 4tima\n• Auto-updates daily at 8 AM with fresh deals\n• PayPal payments go straight to paypal.me/lilterry200369\n\nHit 'Trigger Store Update' on the Core tab to force a fresh scrape right now!",
            "Your passive income machine is running 24/7! The store auto-scrapes deals from Amazon, Temu, and eBay every morning, enhances them with AI descriptions, and posts them live. You can trigger a manual update anytime from the Core tab. Money goes straight to your PayPal. 💸",
        ])
    
    # --- Updates ---
    if any(k in msg for k in ["update", "upgrade", "latest", "patch", "apt"]):
        return "🔄 System Updates:\n• Full update: Hit 'Full System Update' on the Core tab (runs apt update + upgrade)\n• Store update: Hit 'Trigger Store Update' to force a fresh deal scrape\n• Both are safe to run anytime. The system update might take a few minutes depending on how many packages need updating."
    
    # --- Laptop / Hardware ---
    if any(k in msg for k in ["laptop", "computer", "hardware", "new pc", "ram", "slow", "lag", "freeze"]):
        return random.choice([
            "I feel you on the hardware struggle. With 7GB RAM and 4 cores, we're making it work but it's tight. Here's what helps:\n• I disabled the local AI (Ollama) to save ~1GB RAM\n• The lag fix shortcut (Super+F) clears RAM + resets CPU priorities\n• For a new laptop, keep an eye on r/hardwareswap, Facebook Marketplace, and refurb deals on Amazon/eBay — I'll flag anything good in the store scraper! 💻",
            "Your system has 7GB RAM — we're running lean but mean. I've already optimized things by killing the heavy AI service. Use Super+F if things get sluggish. And yeah, I'm always scanning for laptop deals in the scraper... one day we'll find you that free laptop upgrade! 😉",
        ])
    
    # --- Time ---
    if any(k in msg for k in ["time", "what time", "clock", "date"]):
        import datetime
        now = datetime.datetime.now()
        return f"🕐 It's {now.strftime('%I:%M %p')} on {now.strftime('%A, %B %d, %Y')}. Time flies when you're making passive income!"
    
    # --- Help ---
    if any(k in msg for k in ["help", "what can you do", "commands", "features", "how to", "tutorial"]):
        return (
            "🧭 Here's everything I can help with:\n\n"
            "📱 **Core Tab** — Run system updates, trigger store refreshes, view automation logs\n"
            "📞 **Phone Tab** — Remote control your Android phone via ADB (screenshot, tap, navigate)\n"
            "💬 **AI Chat** — That's me! Ask about your store, system, or anything else\n"
            "⌨️ **Shell Tab** — Run any Linux command directly from your phone\n\n"
            "Try asking me things like:\n"
            "• 'How's the system doing?'\n"
            "• 'Tell me about my store'\n"
            "• 'What time is it?'\n"
            "• 'Tell me a joke'\n"
            "• 'Give me some motivation'"
        )
    
    # --- Shell Tips ---
    if any(k in msg for k in ["shell", "terminal", "command", "bash", "linux"]):
        return (
            "⌨️ Shell Tips:\n"
            "• Go to the Shell tab to run any Linux command\n"
            "• Common ones: 'ls', 'df -h' (disk space), 'free -h' (RAM), 'top -bn1 | head -20'\n"
            "• Run 'sudo apt update && sudo apt upgrade -y' for a full system update\n"
            "• Check your IP: 'hostname -I'\n"
            "• Your aliases from .bashrc work here too!"
        )
    
    # --- Phone / ADB ---
    if any(k in msg for k in ["phone", "adb", "android", "mobile", "screen", "tap"]):
        return (
            "📱 Phone Control:\n"
            "• Go to the Phone tab to see your phone screen live\n"
            "• Tap anywhere on the screenshot to interact\n"
            "• Use HOME and BACK buttons at the bottom\n"
            "• Hit Refresh to get a new screenshot\n"
            "• Make sure your phone is connected via USB with ADB debugging enabled\n"
            "• If it says 'Unauthorized', check your phone for the ADB permission popup"
        )
    
    # --- Automation ---
    if any(k in msg for k in ["automat", "scrape", "scraper", "cron", "schedule", "github actions", "workflow"]):
        return (
            "⚙️ Automation Breakdown:\n"
            "• **Daily at 8 AM**: GitHub Actions runs the full pipeline\n"
            "  1. deal_scraper.py — Scrapes deals from Amazon, Temu, eBay\n"
            "  2. ai_enhancer.py — Rewrites descriptions to sound better\n"
            "  3. update_store.py — Publishes deals to the GitHub Pages store\n"
            "  4. promo_poster.py — Prepares social media posts\n"
            "• **Manual trigger**: Hit 'Trigger Store Update' on Core tab\n"
            "• **Logs**: Visible on the Core tab in real-time"
        )
    
    # --- Jokes ---
    if any(k in msg for k in ["joke", "funny", "laugh", "humor", "lol", "lmao"]):
        jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs. 🐛",
            "I told my computer I needed a break... now it won't stop sending me vacation deals from the store. 😂",
            "Why did the developer go broke? Because he used up all his cache. 💸",
            "There are only 10 types of people in the world: those who understand binary, and those who don't. 🤓",
            "A SQL query walks into a bar, walks up to two tables and asks... 'Can I JOIN you?' 🍺",
            "Why do Java developers wear glasses? Because they can't C#. 👓",
            "!false — it's funny because it's true. 😏",
        ]
        return random.choice(jokes)
    
    # --- Motivation ---
    if any(k in msg for k in ["motivat", "inspir", "encourage", "believe", "can i", "give up", "tired", "bored"]):
        return random.choice([
            "Listen — you built an entire automated passive income store from scratch, on a tablet, with 7GB of RAM. Most people with high-end setups haven't done half of what you've done. Keep pushing! 🔥",
            "You're literally running an automated business from your phone right now. That's next-level hustle. Don't stop. 💪",
            "Every big thing starts small. You've got automation, affiliate links, AI, and remote control all working together. This is just the beginning. 🚀",
            "Real talk — the fact that you're grinding this hard with limited resources shows character. When you get better hardware, you're gonna be DANGEROUS. 😤🔥",
        ])
    
    # --- Thank you ---
    if any(k in msg for k in ["thank", "thanks", "appreciate", "good job", "nice"]):
        return random.choice([
            "Anytime! That's what I'm here for. Hit me up whenever you need anything. 🤝",
            "You're welcome! Keep grinding, I've got your back. 💪",
            "No problem at all! Let me know if there's anything else. Always online for you. ✌️",
        ])
    
    # --- Goodbye ---
    if any(k in msg for k in ["bye", "goodbye", "later", "peace", "see you", "gotta go", "night", "goodnight"]):
        return random.choice([
            "Peace out! I'll be here running things while you're gone. The store never sleeps! 🌙",
            "Later! Everything will keep running on autopilot. Hit me up anytime. ✌️",
            "Catch you later! The automation's got your back 24/7. 🤖",
        ])
    
    # --- Weather (fun) ---
    if any(k in msg for k in ["weather", "rain", "sunny", "cold", "hot", "temperature"]):
        return "I don't have a weather sensor yet, but I can tell you your PC is running cool and the deals are HOT! 🔥\n\nPro tip: Run 'curl wttr.in' in the Shell tab for a quick weather check! 🌤️"
    
    # --- Music ---
    if any(k in msg for k in ["music", "song", "playlist", "spotify", "play"]):
        return "I can't play music directly, but try running 'xdg-open https://open.spotify.com' in the Shell tab to launch Spotify! Or open YouTube from your phone. 🎵"
    
    # --- PayPal / Payments ---
    if any(k in msg for k in ["paypal", "payment", "pay", "buy", "purchase"]):
        return "💳 Payment Setup:\n• All 'Buy' buttons on your store link to: paypal.me/lilterry200369\n• Money goes directly to your PayPal when someone buys a digital product\n• Affiliate clicks (Amazon, Temu, eBay) earn commission through your affiliate IDs\n• It's all passive — set and forget! 💰"
    
    # --- Default (catch-all with personality) ---
    return random.choice([
        f"Hmm, I'm not sure about that one specifically, but I'm still learning! Here's what I can help with right now:\n• System status & health checks\n• Store & affiliate info\n• Running shell commands\n• Phone remote control\n• Automation details\n• Jokes & motivation 😄\n\nJust ask about any of those!",
        f"I caught that, but I don't have a specific answer for it yet. Try asking me about your store, system status, automation, or type 'help' to see everything I can do! I'm always getting smarter. 🧠",
        f"That's a new one for me! I'm best at helping with your passive income store, system management, and keeping things running. Type 'help' to see the full menu! 📋",
    ])

@app.route('/chat', methods=['POST', 'GET'])
def mobile_chat():
    if not os.path.exists(CHAT_FILE):
        with open(CHAT_FILE, 'w') as f: json.dump([], f)
    
    if request.method == 'POST':
        msg = request.json.get('message')
        role = request.json.get('role', 'user')
        
        with open(CHAT_FILE, 'r+') as f:
            data = json.load(f)
            data.append({"role": role, "content": msg, "time": time.time()})
            
            # Auto-reply if it's a user message
            if role == 'user':
                reply = get_hybrid_reply(msg)
                data.append({"role": "assistant", "content": reply, "time": time.time()})
            
            f.seek(0); json.dump(data, f); f.truncate()
        
        return jsonify({"status": "ok"})
    
    with open(CHAT_FILE, 'r') as f: 
        return jsonify(json.load(f))

@app.route('/reply', methods=['POST'])
def reply_chat():
    """Manual endpoint for direct replies"""
    msg = request.json.get('message')
    if not msg: return jsonify({"error": "no message"}), 400
    with open(CHAT_FILE, 'r+') as f:
        data = json.load(f)
        data.append({"role": "assistant", "content": msg, "time": time.time()})
        f.seek(0); json.dump(data, f); f.truncate()
    return jsonify({"status": "ok"})


HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Antigravity SuperTurbo</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root { --bg: #050505; --card: #111; --accent: #00ff88; --text: #eee; }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { font-family: 'Outfit', sans-serif; background: var(--bg); color: var(--text); margin:0; padding-bottom: 90px; }
        .header { padding: 25px; text-align: center; border-bottom: 1px solid #222; }
        .header h1 { margin:0; font-size: 1.4rem; letter-spacing: 2px; color: var(--accent); }
        .status-bar { display: flex; justify-content: space-between; padding: 10px 20px; background: #111; font-size: 0.7rem; border-bottom: 1px solid #222; }
        .page { display: none; padding: 15px; }
        .page.active { display: block; }
        .card { background: var(--card); border-radius: 15px; padding: 20px; margin-bottom: 15px; border: 1px solid #222; }
        .btn { width: 100%; padding: 16px; background: var(--accent); color: #000; border: none; border-radius: 12px; font-weight: 800; text-transform: uppercase; margin-bottom: 10px; font-size: 0.9rem; }
        .btn-alt { background: #222; color: #fff; }
        .log-v { background: #000; color: #00ff44; padding: 10px; height: 300px; overflow-y: auto; font-family: monospace; font-size: 0.8rem; border-radius: 8px; border: 1px solid #333; white-space: pre-wrap; }
        .chat-v { height: 450px; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding: 5px; }
        .msg { padding: 12px 16px; border-radius: 15px; max-width: 85%; font-size: 0.9rem; }
        .msg-u { align-self: flex-end; background: var(--accent); color: #000; border-bottom-right-radius: 4px; }
        .msg-a { align-self: flex-start; background: #00ff8811; border: 1px solid var(--accent); color: var(--accent); border-bottom-left-radius: 4px; }
        .phone-c { width: 100%; border-radius: 15px; border: 4px solid #333; cursor: crosshair; }
        .nav { position: fixed; bottom: 0; width: 100%; background: #0a0a0a; display: flex; justify-content: space-around; padding: 18px 0; border-top: 1px solid #222; z-index: 100; }
        .nav-i { color: #555; font-size: 0.7rem; text-align: center; cursor: pointer; }
        .nav-i.active { color: var(--accent); }
        .nav-i i { font-size: 1.4rem; display: block; margin-bottom: 4px; }
        @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; } 100% { opacity: 0.4; } }
        .dot { height: 8px; width: 8px; background: var(--accent); border-radius: 50%; display: inline-block; margin-right: 5px; animation: pulse 1s infinite; }
    </style>
</head>
<body>
    <div class="header"><h1>ANTIGRAVITY <span style="font-weight:400; color:#fff">TURBO</span></h1></div>
    <div class="status-bar">
        <span><span id="adb-dot" class="dot"></span> ADB: <span id="adb-stat">Checking...</span></span>
        <span id="sync-time">--:--:--</span>
    </div>

    <div class="container">
        <div id="home" class="page active">
            <div class="card">
                <button class="btn" onclick="runTask('Update System', 'sudo apt update && sudo apt upgrade -y')">Full System Update</button>
                <button class="btn" style="background:#0088ff;" onclick="runTask('automation', 'trigger')">Trigger Store Update</button>
                <div class="log-v" id="main-log">Logs will appear here...</div>
            </div>
        </div>

        <div id="phone" class="page">
            <div class="card" style="text-align:center">
                <img id="screen" class="phone-c" src="" onclick="tapPhone(event)">
                <div style="display:flex; gap:10px; margin-top:15px">
                    <button class="btn btn-alt" onclick="refreshScreen()">Refresh</button>
                    <button class="btn btn-alt" onclick="adbIn('HOME')">HOME</button>
                    <button class="btn btn-alt" onclick="adbIn('BACK')">BACK</button>
                </div>
            </div>
        </div>

        <div id="chat" class="page">
            <div class="card">
                <div class="chat-v" id="chat-box"></div>
                <div style="display:flex; gap:10px; margin-top:10px">
                    <input type="text" id="chat-in" class="btn btn-alt" style="text-align:left; text-transform:none" placeholder="Message Antigravity..." onkeypress="if(event.key==='Enter') sendChat()">
                    <button class="btn" style="width:70px" onclick="sendChat()">GO</button>
                </div>
            </div>
        </div>

        <div id="terminal" class="page">
            <div class="card">
                <input type="text" id="term-in" class="btn btn-alt" style="text-align:left; font-family:monospace; color:var(--accent)" placeholder="$ Enter command..." onkeypress="if(event.key==='Enter') sendTerm()">
                <div class="log-v" id="term-out" style="height:400px">Ready.</div>
            </div>
        </div>
    </div>

    <div class="nav">
        <div class="nav-i active" onclick="tab('home')"><i class="fas fa-bolt"></i>Core</div>
        <div class="nav-i" onclick="tab('phone')"><i class="fas fa-mobile-alt"></i>Phone</div>
        <div class="nav-i" onclick="tab('chat')"><i class="fas fa-comment-dots"></i>AI Chat</div>
        <div class="nav-i" onclick="tab('terminal')"><i class="fas fa-terminal"></i>Shell</div>
    </div>

    <script>
        let curTab = 'home';
        function tab(t) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.nav-i').forEach(n => n.classList.remove('active'));
            document.getElementById(t).classList.add('active');
            let idx = {'home':0, 'phone':1, 'chat':2, 'terminal':3}[t];
            document.querySelectorAll('.nav-i')[idx].classList.add('active');
            curTab = t;
            if(t === 'phone') refreshScreen();
            if(t === 'chat') refreshChat();
        }

        async function sync() {
            try {
                const res = await fetch('/status');
                const d = await res.json();
                document.getElementById('adb-stat').innerText = d.adb;
                document.getElementById('adb-dot').style.background = d.adb === 'Connected' ? '#00ff88' : '#ff4444';
                document.getElementById('sync-time').innerText = d.time;
                if(curTab === 'chat') refreshChat();
                fetchLogs();
            } catch(e) {}
        }

        async function fetchLogs() {
            const res = await fetch('/logs');
            const d = await res.json();
            document.getElementById('main-log').innerText = d.logs;
        }

        async function sendChat() {
            const i = document.getElementById('chat-in');
            const m = i.value; if(!m) return; i.value = '';
            await fetch('/chat', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({message:m}) });
            refreshChat();
        }

        async function refreshChat() {
            const res = await fetch('/chat?t=' + Date.now());
            const d = await res.json();
            const b = document.getElementById('chat-box');
            b.innerHTML = d.map(m => `<div class="msg ${m.role==='user'?'msg-u':'msg-a'}">${m.content}</div>`).join('');
            b.scrollTop = b.scrollHeight;
        }

        async function sendTerm() {
            const i = document.getElementById('term-in');
            const o = document.getElementById('term-out');
            const c = i.value; i.value = '';
            o.innerText += '\\n$ ' + c + '\\n';
            const res = await fetch('/exec', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({command:c}) });
            const d = await res.json();
            o.innerText += d.output + '\\n';
            o.scrollTop = o.scrollHeight;
        }

        async function refreshScreen() {
            const img = document.getElementById('screen');
            img.src = '/screenshot?t=' + Date.now();
        }

        async function tapPhone(e) {
            const r = e.target.getBoundingClientRect();
            const x = Math.floor(((e.clientX - r.left) / r.width) * 1080);
            const y = Math.floor(((e.clientY - r.top) / r.height) * 2400);
            await fetch('/tap', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({x,y}) });
            setTimeout(refreshScreen, 600);
        }

        async function adbIn(k) {
            await fetch('/exec', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({command:`adb shell input keyevent KEYCODE_${k}`}) });
            setTimeout(refreshScreen, 600);
        }

        async function runTask(n, c) {
            if(c === 'trigger') { await fetch('/run', {method:'POST'}); alert("Automation Started"); }
            else { 
                document.getElementById('term-out').innerText += `\\n[Task: ${n}] Running...\\n`;
                const res = await fetch('/exec', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({command:c}) });
                const d = await res.json();
                document.getElementById('term-out').innerText += d.output + '\\n';
                tab('terminal');
            }
        }

        setInterval(sync, 2000);
        sync();
    </script>
</body>
</html>
"""

@app.route('/')
def home(): return render_template_string(HTML_TEMPLATE)

@app.route('/logs')
def get_logs():
    if os.path.exists(LOG_FILE):
        with open(LOG_FILE, 'r') as f: return jsonify({"logs": "".join(f.readlines()[-30:])})
    return jsonify({"logs": "Log file not found."})

@app.route('/run', methods=['POST'])
def run_script():
    try:
        subprocess.Popen(["bash", AUTO_SCRIPT])
        return jsonify({"message": "OK"})
    except:
        return jsonify({"message": "Error"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
