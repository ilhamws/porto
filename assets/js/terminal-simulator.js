// Interactive Layer 6 AI Security & MiniFW-AI Simulator
const scenarios = {
  legitimate: {
    name: "Legitimate API Call",
    endpoint: "POST /v1/auth/token",
    ip: "103.24.12.89",
    asn: "AS7713 (Telkom Indonesia, Trust: 0.98)",
    tls: "TLS 1.3 (ECDHE-ECDSA-AES256-GCM-SHA384, Let's Encrypt Valid)",
    payload: '{"client_id": "app_mobile_v2", "grant_type": "refresh_token"}',
    mlScore: 0.04,
    verdict: "PASS",
    badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    logs: [
      { step: "INGEST", text: "nftables tap captured frame on eth0:443 (len=842b)" },
      { step: "TLS", text: "Verified TLS 1.3 handshake. Cipher suite is secure." },
      { step: "ASN", text: "ASN AS7713 resolved. Reputation score: 0.98 / 1.0 (Trusted)" },
      { step: "SCHEMA", text: "JSON payload matches strict schema definition." },
      { step: "ML_ANOMALY", text: "Scikit-learn IsolationForest score: 0.04 (threshold: 0.55)" },
      { step: "VERDICT", text: "[PASS] Clean traffic allowed. Latency impact: 1.4ms" }
    ]
  },
  tls_anomaly: {
    name: "TLS Certificate Anomaly",
    endpoint: "POST /v1/api/telemetry",
    ip: "185.220.101.42",
    asn: "AS60729 (Zwiebelfreunde Tor Exit, Trust: 0.12)",
    tls: "TLS 1.0 (Weak Cipher: RC4-MD5, Self-Signed CN: unknown-ca)",
    payload: '{"metric_dump": "malicious_chunk_stream"}',
    mlScore: 0.89,
    verdict: "DROP & BAN",
    badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
    logs: [
      { step: "INGEST", text: "nftables tap captured frame on eth0:443 (len=1420b)" },
      { step: "TLS", text: "WARNING: Deprecated TLS 1.0 handshake detected! Invalid self-signed cert." },
      { step: "ASN", text: "FLAG: High-risk ASN identified. Known malicious threat actor list." },
      { step: "SCHEMA", text: "Key 'metric_dump' exceeds buffer limit size." },
      { step: "ML_ANOMALY", text: "Scikit-learn MLP inference flagged behavioral anomaly: 0.89" },
      { step: "VERDICT", text: "[DROP & BAN] nftables blacklist rule injected for IP 185.220.101.42" }
    ]
  },
  json_injection: {
    name: "JSON Schema Injection",
    endpoint: "POST /v1/orders/checkout",
    ip: "45.154.255.10",
    asn: "AS44477 (Hosting Provider, Trust: 0.41)",
    tls: "TLS 1.3 (Valid Cert, Non-standard user-agent: python-requests/2.28)",
    payload: '{"order_id": 9912, "coupon": "PROMO\'; DROP TABLE orders;--"}',
    mlScore: 0.76,
    verdict: "QUARANTINE",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    logs: [
      { step: "INGEST", text: "Frame ingested via MiniFW-AI L6 proxy socket tap" },
      { step: "TLS", text: "TLS 1.3 negotiated successfully." },
      { step: "ASN", text: "Cloud host ASN with medium trust score: 0.41" },
      { step: "SCHEMA", text: "SCHEMA VIOLATION: Regex failure on field 'coupon' (SQLi pattern detected)" },
      { step: "ML_ANOMALY", text: "Behavioral model scored request at 0.76 deviance." },
      { step: "VERDICT", text: "[QUARANTINE] Request diverted to Honeypot Sink. Alert dispatched to Flask SOC." }
    ]
  },
  asn_deviance: {
    name: "High-Risk ASN Credential Stuffing",
    endpoint: "POST /v1/auth/login",
    ip: "194.26.29.112",
    asn: "AS200019 (Bulletproof Hosting, Trust: 0.08)",
    tls: "TLS 1.2 (Automated bot TLS fingerprint mismatch)",
    payload: '{"user": "admin", "pwd": "password123"}',
    mlScore: 0.94,
    verdict: "RATE LIMIT & DROP",
    badgeColor: "text-red-400 border-red-500/30 bg-red-500/10",
    logs: [
      { step: "INGEST", text: "128 packets/sec burst rate on /v1/auth/login from AS200019" },
      { step: "TLS", text: "JA3 Fingerprint corresponds to known credential brute-forcing tool." },
      { step: "ASN", text: "ALERT: AS200019 blacklisted on global threat intelligence feeds." },
      { step: "SCHEMA", text: "Syntax valid, but request frequency violates sliding rate window." },
      { step: "ML_ANOMALY", text: "Scikit-learn model confidence: 0.94 anomaly probability." },
      { step: "VERDICT", text: "[DROP] Automated IP ban enforced. Logged to RitAPI Sentinel database." }
    ]
  }
};

function initTerminalSimulator() {
  const terminalConsole = document.getElementById("terminal-console");
  const scenarioSelector = document.getElementById("scenario-selector");
  const runSimBtn = document.getElementById("run-sim-btn");
  const simStatusBadge = document.getElementById("sim-status-badge");
  const simEndpoint = document.getElementById("sim-endpoint");
  const simIp = document.getElementById("sim-ip");
  const simAsn = document.getElementById("sim-asn");
  const simTls = document.getElementById("sim-tls");
  const simPayload = document.getElementById("sim-payload");

  if (!terminalConsole || !scenarioSelector) return;

  let currentKey = "legitimate";
  let isRunning = false;

  function updateScenarioView(key) {
    currentKey = key;
    const data = scenarios[key];
    if (!data) return;

    if (simEndpoint) simEndpoint.textContent = data.endpoint;
    if (simIp) simIp.textContent = data.ip;
    if (simAsn) simAsn.textContent = data.asn;
    if (simTls) simTls.textContent = data.tls;
    if (simPayload) simPayload.textContent = data.payload;

    if (simStatusBadge) {
      simStatusBadge.className = `px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${data.badgeColor}`;
      simStatusBadge.textContent = data.verdict;
    }

    // Highlight active button
    document.querySelectorAll(".scenario-btn").forEach(btn => {
      if (btn.dataset.scenario === key) {
        btn.classList.add("bg-emerald-500/20", "border-emerald-500", "text-emerald-300");
        btn.classList.remove("bg-slate-800/80", "border-slate-700", "text-slate-400");
      } else {
        btn.classList.remove("bg-emerald-500/20", "border-emerald-500", "text-emerald-300");
        btn.classList.add("bg-slate-800/80", "border-slate-700", "text-slate-400");
      }
    });

    renderLogs(data.logs, false);
  }

  function renderLogs(logs, animated = true) {
    terminalConsole.innerHTML = "";
    if (!animated) {
      logs.forEach(log => {
        const line = document.createElement("div");
        line.className = "font-mono text-xs leading-relaxed flex items-start gap-2 text-slate-300";
        line.innerHTML = `<span class="text-emerald-400 font-bold select-none">[${log.step}]</span><span>${log.text}</span>`;
        terminalConsole.appendChild(line);
      });
      return;
    }

    isRunning = true;
    if (runSimBtn) {
      runSimBtn.disabled = true;
      runSimBtn.innerHTML = `<span class="animate-spin inline-block mr-2">⚡</span> Inspecting...`;
    }

    let i = 0;
    function printNext() {
      if (i < logs.length) {
        const log = logs[i];
        const line = document.createElement("div");
        line.className = "font-mono text-xs leading-relaxed flex items-start gap-2 text-slate-300 opacity-0 transition-opacity duration-300";
        
        let colorClass = "text-emerald-400";
        if (log.step === "VERDICT") {
          colorClass = log.text.includes("PASS") ? "text-emerald-400 font-bold" : "text-rose-400 font-bold";
        } else if (log.step === "ML_ANOMALY") {
          colorClass = "text-cyan-400";
        } else if (log.step === "SCHEMA" || log.step === "TLS") {
          colorClass = "text-amber-300";
        }

        line.innerHTML = `<span class="${colorClass} font-bold select-none">[${log.step}]</span><span>${log.text}</span>`;
        terminalConsole.appendChild(line);
        setTimeout(() => { line.classList.remove("opacity-0"); }, 50);
        terminalConsole.scrollTop = terminalConsole.scrollHeight;
        i++;
        setTimeout(printNext, 320);
      } else {
        isRunning = false;
        if (runSimBtn) {
          runSimBtn.disabled = false;
          runSimBtn.innerHTML = `<span>Re-run Inspection</span>`;
        }
      }
    }
    printNext();
  }

  document.querySelectorAll(".scenario-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (isRunning) return;
      updateScenarioView(btn.dataset.scenario);
      renderLogs(scenarios[btn.dataset.scenario].logs, true);
    });
  });

  if (runSimBtn) {
    runSimBtn.addEventListener("click", () => {
      if (isRunning) return;
      renderLogs(scenarios[currentKey].logs, true);
    });
  }

  updateScenarioView("legitimate");
}

document.addEventListener("DOMContentLoaded", initTerminalSimulator);
