const scenarios = {
  ops: {
    route: "ZABBIX → AI OPS → TELEGRAM",
    latency: "LATENCY 1.8s",
    ru: {
      title: "Ops-чат",
      badge: "ИНЦИДЕНТ / SRV-DC01",
      prompt: "Promtail на SRV-DC01 умер, почини",
      messages: [
        { type: "user", text: "Promtail на SRV-DC01 умер, почини" },
        { author: "АНАЛИТИК", text: "Bookmark повреждён, служба crashed. Риск восстановления — низкий." },
        { author: "АНАЛИТИК", type: "action", text: "Удалить bookmark и перезапустить Promtail? Требуется подтверждение: ДА / НЕТ" },
        { type: "user", text: "ДА" },
        { author: "ИСПОЛНИТЕЛЬ", text: "Удалён 1 bookmark. Служба запущена." },
        { author: "ВЕРИФИКАТОР", type: "success", text: "Логи возобновлены. Инцидент закрыт ✓" }
      ]
    },
    en: {
      title: "Ops chat",
      badge: "INCIDENT / SRV-DC01",
      prompt: "Promtail is down on SRV-DC01. Fix it",
      messages: [
        { type: "user", text: "Promtail is down on SRV-DC01. Fix it" },
        { author: "ANALYST", text: "The bookmark is corrupted and the service has crashed. Recovery risk is low." },
        { author: "ANALYST", type: "action", text: "Delete the bookmark and restart Promtail? Confirmation required: YES / NO" },
        { type: "user", text: "YES" },
        { author: "EXECUTOR", text: "One bookmark removed. Service started." },
        { author: "VERIFIER", type: "success", text: "Log delivery restored. Incident closed ✓" }
      ]
    }
  },
  security: {
    route: "WAZUH → AI SECURITY → TELEGRAM",
    latency: "LATENCY 2.4s",
    ru: {
      title: "SOC-чат",
      badge: "CISO DAILY BRIEF / 08:00",
      prompt: "Доклад",
      messages: [
        { type: "user", text: "Доклад" },
        { author: "ОРКЕСТРАТОР", text: "Собираю дельту за сутки: 6 агентов, 5 слоёв защиты." },
        { author: "RECON", text: "5 hosts up · 32 порта · critical CVE: 0" },
        { author: "PURPLE", type: "action", text: "Новый хост вне scope: SMB / RPC / WinRM открыты. Приоритет #1." },
        { author: "AD.AUDIT", text: "9 привилегированных групп вернули 0 членов. Нужна ручная проверка." },
        { author: "CISO BRIEF", type: "success", text: "3 action items сформированы. Изменений без подтверждения нет ✓" }
      ]
    },
    en: {
      title: "SOC chat",
      badge: "CISO DAILY BRIEF / 08:00",
      prompt: "Brief me",
      messages: [
        { type: "user", text: "Brief me" },
        { author: "ORCHESTRATOR", text: "Compiling the 24-hour delta: 6 agents, 5 security layers." },
        { author: "RECON", text: "5 hosts up · 32 ports · critical CVEs: 0" },
        { author: "PURPLE", type: "action", text: "New host outside scope: SMB / RPC / WinRM exposed. Priority #1." },
        { author: "AD.AUDIT", text: "Nine privileged groups returned zero members. Manual validation required." },
        { author: "CISO BRIEF", type: "success", text: "Three action items created. No unconfirmed changes ✓" }
      ]
    }
  },
  redteam: {
    route: "RED TEAM → AI SECURITY → TELEGRAM",
    latency: "LATENCY 2.7s",
    ru: {
      title: "Red Team · изолир.",
      badge: "PURPLE TEAM / ATOMIC",
      prompt: "Проверь покрытие PowerShell TTP",
      messages: [
        { type: "user", text: "Проверь покрытие PowerShell TTP" },
        { author: "PURPLE", text: "T1059.001 PowerShell — детект есть ✓" },
        { author: "DETECT", type: "action", text: "EID 4104 ScriptBlock не доезжает до Wazuh ✕" },
        { author: "PURPLE", text: "Покрытие TTP: 60%. Гэп трёхслойный: Sysmon → default rule → custom rule." },
        { author: "REPORT", type: "success", text: "Создан action item на новое правило детектирования ✓" }
      ]
    },
    en: {
      title: "Red Team · isolated",
      badge: "PURPLE TEAM / ATOMIC",
      prompt: "Validate PowerShell TTP coverage",
      messages: [
        { type: "user", text: "Validate PowerShell TTP coverage" },
        { author: "PURPLE", text: "T1059.001 PowerShell — detection present ✓" },
        { author: "DETECT", type: "action", text: "EID 4104 ScriptBlock does not reach Wazuh ✕" },
        { author: "PURPLE", text: "TTP coverage: 60%. Three-layer gap: Sysmon → default rule → custom rule." },
        { author: "REPORT", type: "success", text: "Action item created for a new detection rule ✓" }
      ]
    }
  },
  decision: {
    route: "1C / DWH → AI DECISION → TELEGRAM",
    latency: "LATENCY 3.1s",
    ru: {
      title: "Bizbot-чат",
      badge: "BOARD / INVENTORY",
      prompt: "Что заканчивается на складе и как это влияет на финансы?",
      messages: [
        { type: "user", text: "Что заканчивается на складе и как это влияет на финансы?" },
        { author: "ДИРЕКТОР", text: "Подключаю Бухгалтера и Склад. Каждый видит только разрешённые таблицы." },
        { author: "СКЛАД", text: "Дефицит по 8 позициям, но все — класс C, около 5% оборота." },
        { author: "БУХГАЛТЕР", type: "action", text: "Главный риск: кабель NYM 5×35, класс A. Движения нет с 2022 года." },
        { author: "ПРОДАЖИ", text: "Подтверждаю: влияния на текущие заказы нет." },
        { author: "ДИРЕКТОР", type: "success", text: "Итог: C-дефициты некритичны; срочно выяснить статус NYM ✓" }
      ]
    },
    en: {
      title: "Bizbot chat",
      badge: "BOARD / INVENTORY",
      prompt: "What is running out of stock, and how does it affect finance?",
      messages: [
        { type: "user", text: "What is running out of stock, and how does it affect finance?" },
        { author: "DIRECTOR", text: "Bringing in Accounting and Warehouse. Each role can only access authorised tables." },
        { author: "WAREHOUSE", text: "Eight items are low, all class C, representing about 5% of turnover." },
        { author: "ACCOUNTING", type: "action", text: "Main risk: NYM 5×35 cable, class A. No movement since 2022." },
        { author: "SALES", text: "Confirmed: no impact on current orders." },
        { author: "DIRECTOR", type: "success", text: "Conclusion: class C shortages are non-critical; investigate NYM status urgently ✓" }
      ]
    }
  }
};

const en = {
  "К лаборатории": "Skip to the lab",
  "Системы": "Systems",
  "Принципы": "Principles",
  "Проекты": "Projects",
  "Публикации": "Publications",
  "Как и что мы": "How and what we",
  "строим.": "build.",
  "Общий принцип один: AI получает цель, работает внутри заданных границ и показывает результат человеку.": "The principle is simple: AI receives a goal, works within defined boundaries and presents the result to a human.",
  "Ниже — живой сценарий, в котором этот подход проходит путь от сигнала до безопасного действия.": "Below is a live scenario showing this approach from signal to safe action.",
  "AI Fabric — инженерный контур разработки и эксплуатации. AI Systems — прикладные решения, созданные внутри него.": "AI Fabric is our engineering loop for development and operations. AI Systems are the applied solutions built within it.",
  "AI FABRIC · ИНЖЕНЕРНЫЙ КОНТУР": "AI FABRIC · ENGINEERING LOOP",
  "От задачи до работающей AI-системы.": "From a task to a working AI system.",
  "Единый процесс связывает анализ, проектирование, работу агентов, проверки и человеческое подтверждение.": "One process connects analysis, design, agent work, validation and human approval.",
  "ЗАДАЧА": "TASK",
  "ПЛАН": "PLAN",
  "РАБОТА": "WORK",
  "«ДА»": "“YES”",
  "Как устроен AI Fabric ↗": "How AI Fabric works ↗",
  "AI SYSTEMS · ПРИКЛАДНЫЕ РЕШЕНИЯ": "AI SYSTEMS · APPLIED SOLUTIONS",
  "AI-системы для корпоративной ИТ-инфраструктуры.": "AI systems for enterprise IT infrastructure.",
  "Эксплуатация, кибербезопасность и управленческие решения — три направления на общем инженерном контуре.": "Operations, cybersecurity and management decisions — three domains on a shared engineering loop.",
  "Посмотреть решения ↓": "Explore solutions ↓",
  "НЕЗАВИСИМЫЙ R&D-ПРОЕКТ · С ИЮНЯ 2025": "INDEPENDENT R&D PROJECT · SINCE JUNE 2025",
  "AI-системы внутри": "AI systems inside",
  "корпоративной": "corporate",
  "ИТ-инфраструктуры": "IT infrastructure",
  "Мультиагентная лаборатория для ИТ-эксплуатации, кибербезопасности и управленческих решений. Агенты анализируют и предлагают. Последнее слово — за человеком.": "A multi-agent lab for IT operations, cybersecurity and management decisions. Agents analyse and propose. Humans retain the final say.",
  "Запустить сценарий": "Launch scenario",
  "Как это устроено ↓": "How it works ↓",
  "Орбиты": "Orbits",
  "Агенты": "Agents",
  "Полномочия": "Authority",
  "Выберите поток": "Select a flow",
  "Сценарий активирует маршрут, поднимает агентов и воспроизводит реальный диалог.": "A scenario activates the route, brings agents online and replays a real interaction.",
  "Инцидент инфраструктуры": "Infrastructure incident",
  "Проверка детектирования": "Detection validation",
  "Совет AI-директоров": "AI executive board",
  "источник": "source",
  "агенты": "agents",
  "человек": "human",
  "Схема мультиагентной лаборатории": "Multi-agent lab architecture",
  "Три источника передают данные в AI-платформы, после чего агенты доставляют результат человеку через Telegram.": "Data sources feed AI platforms; agents then deliver the result to a human through Telegram.",
  "3 агента online": "3 agents online",
  "DEMO · ОБЕЗЛИЧЕНО": "DEMO · ANONYMISED",
  "AI-агентов": "AI agents",
  "в рабочих ролях": "in operational roles",
  "платформы": "platforms",
  "на общем ядре": "on a shared core",
  "шум алертов": "noisy alerts",
  "в один инцидент": "into one incident",
  "действий — после": "actions require",
  "подтверждения": "confirmation",
  "Три предметные области.": "Three domains.",
  "Одна инженерная логика.": "One engineering model.",
  "Агент получает цель, вызывает инструменты, проверяет результаты и останавливается, когда задача решена.": "An agent receives a goal, calls tools, validates results and stops when the task is complete.",
  "Инфраструктура сама объясняет, что с ней происходит.": "Infrastructure explains what is happening to it.",
  "Агенты поверх Prometheus, Zabbix и Grafana коррелируют сигналы, диагностируют сбои и передают безопасное действие исполнителю.": "Agents on top of Prometheus, Zabbix and Grafana correlate signals, diagnose failures and hand safe actions to an executor.",
  "Триаж инцидентов": "Incident triage",
  "Схлопывание alert noise": "Alert-noise reduction",
  "Открыть в лаборатории ↗": "Open in the lab ↗",
  "SOC видит цепочку атаки, а не россыпь событий.": "The SOC sees the attack chain, not a cloud of events.",
  "Wazuh SIEM, CTEM и учебный Red Team: от L1-триажа до ежедневного CISO-брифа.": "Wazuh SIEM, CTEM and a training Red Team: from L1 triage to the daily CISO brief.",
  "слоёв защиты в одном отчёте": "security layers in one brief",
  "Данные 1С становятся предметом разговора.": "1C data becomes part of the conversation.",
  "DWH и совет AI-агентов обсуждают вопрос директора и проверяют друг друга.": "A DWH and an AI executive board discuss management questions and cross-check each other.",
  "Автономность": "Autonomy",
  "с": "with",
  "границами.": "boundaries.",
  "Не эффектные ответы модели, а предсказуемая инженерная система.": "Not impressive model answers, but a predictable engineering system.",
  "Перезапустить Promtail?": "Restart Promtail?",
  "НЕТ": "NO",
  "ДА": "YES",
  "Требуется явное подтверждение": "Explicit confirmation required",
  "Агент предлагает — человек решает. Любое изменение состояния требует подтверждения.": "The agent proposes; the human decides. Every state-changing action requires confirmation.",
  "Вызов инструментов, чтение результата, проверка и остановка.": "Call tools, read the result, validate and stop.",
  "Заземление на данных": "Grounded in data",
  "SIEM, метрики и витрины DWH вместо памяти модели.": "SIEM, metrics and DWH marts instead of model memory.",
  "Измеримость": "Measurability",
  "Токены, стоимость, latency, человеко-часы и ROI — на дашборде.": "Tokens, cost, latency, human hours and ROI — on a dashboard.",
  "Лаборатория": "The lab",
  "в движении.": "in motion.",
  "Журнал собранных систем и проверенных сценариев.": "A log of systems built and scenarios validated.",
  "Триаж, расследование и реагирование.": "Triage, investigation and response.",
  "Шесть AI-специалистов, один утренний отчёт.": "Six AI specialists, one morning brief.",
  "Три сквозные атаки и четыре слоя детекции.": "Three end-to-end attacks and four detection layers.",
  "База 1С, DWH и совет AI-директоров.": "A 1C database, DWH and an AI executive board.",
  "Токены, latency, cost per ticket и ROI.": "Tokens, latency, cost per ticket and ROI.",
  "Истории": "Stories",
  "из первых рук.": "from the field.",
  "Что произошло, когда агентам дали реальные задачи.": "What happened when agents were given real tasks.",
  "Бот, который отказался блокировать Red Team": "The bot that refused to block the Red Team",
  "Читать кейс ↗": "Read the case ↗",
  "На какую роль вы нанимаете AI?": "What role are you hiring AI for?",
  "Когда AI ошибается уверенно": "When AI is confidently wrong",
  "В вашей ERP уже есть ответы": "Your ERP already has the answers",
  "Уволен, но не ушёл": "Terminated, but not gone",
  "Открыть лабораторию.": "Open the lab.",
  "Не открывая периметр.": "Without opening the perimeter.",
  "Read-only дашборды, каталог реальных сценариев и изолированная песочница.": "Read-only dashboards, a catalogue of real scenarios and an isolated sandbox.",
  "● Живые витрины Grafana": "● Live Grafana dashboards",
  "○ Демо на изолированных данных": "○ Demo on isolated data",
  "○ Доступ по приглашению": "○ Invitation-only access",
  "Системы должны не впечатлять.": "Systems should not impress.",
  "Они должны работать.": "They should work.",
  "Наверх ↑": "Back to top ↑"
};

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const svgNS = "http://www.w3.org/2000/svg";
const feed = document.querySelector("#message-feed");
const originalText = new WeakMap();
const query = new URLSearchParams(location.search);
let currentLang = query.get("lang") === "en"
  ? "en"
  : query.get("lang") === "ru"
    ? "ru"
    : localStorage.getItem("ailab-lang") === "en" ? "en" : "ru";
let active = "ops";
let timers = [];

function clearTimers() {
  timers.forEach(clearTimeout);
  timers = [];
}

function messageNode(message) {
  const node = document.createElement("div");
  node.className = `chat-message ${message.type || ""}`;
  if (message.author) {
    const author = document.createElement("b");
    author.textContent = message.author;
    node.append(author);
  }
  const text = document.createElement("p");
  text.textContent = message.text;
  node.append(text);
  return node;
}

function playMessages() {
  clearTimers();
  feed.replaceChildren();
  let delay = 100;
  scenarios[active][currentLang].messages.forEach(message => {
    timers.push(setTimeout(() => {
      feed.append(messageNode(message));
      feed.scrollTop = feed.scrollHeight;
    }, delay));
    delay += reduced ? 50 : 620;
  });
}

function syncPackets(key) {
  document.querySelector(".moving-packets").innerHTML = `
    <circle class="packet" r="4"><animateMotion dur="2.1s" repeatCount="indefinite"><mpath href="#${key}-in"/></animateMotion></circle>
    <circle class="packet" r="4"><animateMotion dur="2.1s" begin=".6s" repeatCount="indefinite"><mpath href="#${key}-out"/></animateMotion></circle>`;
}

function syncAgentPills(key) {
  const layer = document.querySelector(".agent-pills");
  layer.replaceChildren();
  PipelineLayout.agentLayouts[key].forEach((agent, index) => {
    const group = document.createElementNS(svgNS, "g");
    const width = Math.max(42, agent.label.length * 6 + 14);
    group.setAttribute("transform", `translate(${agent.x.toFixed(1)} ${agent.y.toFixed(1)})`);
    group.style.setProperty("--delay", `${index * 90}ms`);
    const rect = document.createElementNS(svgNS, "rect");
    [["x", -width / 2], ["y", -10], ["width", width], ["height", 20], ["rx", 10]]
      .forEach(([name, value]) => rect.setAttribute(name, value));
    rect.style.fill = document.documentElement.dataset.theme === "light" ? "#fff" : "#0e141d";
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("y", "1");
    text.textContent = agent.label;
    group.append(rect, text);
    layer.append(group);
  });
}

function activateScenario(key, scroll = false) {
  if (!scenarios[key]) return;
  active = key;
  const scenario = scenarios[key];
  const copy = scenario[currentLang];
  document.querySelectorAll(".scenario").forEach(button => {
    const isActive = button.dataset.scenario === key;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", isActive);
  });
  document.querySelectorAll(".flow").forEach(path =>
    path.classList.toggle("active", path.classList.contains(key))
  );
  document.querySelectorAll(".map-node[data-map]").forEach(node =>
    node.classList.toggle("active", node.dataset.map.split(" ").includes(key))
  );
  document.querySelector("#route-label").textContent = scenario.route;
  document.querySelector("#console-title").textContent = copy.title;
  document.querySelector("#console-badge").textContent = copy.badge;
  document.querySelector("#prompt-text").textContent = copy.prompt;
  document.querySelector("#latency").textContent = scenario.latency;
  syncPackets(key);
  syncAgentPills(key);
  playMessages();
  if (scroll) document.querySelector("#lab").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}

function translateStatic(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("script, style, .message-feed")) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const russian = originalText.get(node);
    const trimmed = russian.trim();
    node.nodeValue = lang === "en" && en[trimmed] ? russian.replace(trimmed, en[trimmed]) : russian;
  }
  document.documentElement.lang = lang;
  document.title = lang === "en" ? "AI Innovation Lab · Live systems" : "AI Innovation Lab · Живые системы";
  document.querySelector('meta[name="description"]').content = lang === "en"
    ? "AI Innovation Lab — multi-agent AI systems inside corporate IT infrastructure."
    : "AI Innovation Lab — мультиагентные AI-системы внутри корпоративной ИТ-инфраструктуры.";
  document.querySelector("nav").setAttribute("aria-label", lang === "en" ? "Navigation" : "Навигация");
  document.querySelector(".lang-switch").setAttribute("aria-label", lang === "en" ? "Language" : "Язык");
  document.querySelector(".console").setAttribute("aria-label", lang === "en" ? "Agent demo chat" : "Демонстрационный чат");
}

function updateThemeControl() {
  const dark = document.documentElement.dataset.theme === "dark";
  const button = document.querySelector("#theme-toggle");
  button.querySelector("span").textContent = dark ? "☼" : "◐";
  document.querySelector("#theme-label").textContent = dark ? "LIGHT" : "DARK";
  button.setAttribute("aria-label", currentLang === "en"
    ? `Switch to ${dark ? "light" : "dark"} theme`
    : `Переключить на ${dark ? "светлую" : "тёмную"} тему`);
  document.querySelectorAll(".map-node rect, .agent-pills rect").forEach(rect => {
    rect.style.fill = dark ? "#0e141d" : "#fff";
    if (dark) rect.style.removeProperty("filter");
    else rect.style.filter = "none";
  });
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ru";
  localStorage.setItem("ailab-lang", currentLang);
  translateStatic(currentLang);
  document.querySelectorAll("[data-lang]").forEach(button => {
    const selected = button.dataset.lang === currentLang;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", selected);
  });
  updateThemeControl();
  activateScenario(active);
}

document.querySelectorAll(".scenario").forEach(button =>
  button.addEventListener("click", () => activateScenario(button.dataset.scenario))
);
document.querySelectorAll("[data-launch]").forEach(button =>
  button.addEventListener("click", () => activateScenario(button.dataset.launch, true))
);
document.querySelector("#replay").addEventListener("click", playMessages);
document.querySelector("#send-demo").addEventListener("click", playMessages);
document.querySelectorAll("[data-lang]").forEach(button =>
  button.addEventListener("click", () => setLanguage(button.dataset.lang))
);
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("ailab-theme", next);
  updateThemeControl();
});

const savedTheme = ["light", "dark"].includes(query.get("theme"))
  ? query.get("theme")
  : localStorage.getItem("ailab-theme");
document.documentElement.dataset.theme = savedTheme === "light" || savedTheme === "dark"
  ? savedTheme
  : matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

if ("IntersectionObserver" in window && !reduced) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }), { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
} else {
  document.querySelectorAll(".reveal").forEach(node => node.classList.add("visible"));
}

const initialScenario = query.get("scenario");
setLanguage(currentLang);
activateScenario(scenarios[initialScenario] ? initialScenario : "ops");
