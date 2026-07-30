const en = {
  "К конвейеру": "Skip to the conveyor",
  "На главную": "Home",
  "Конвейер": "Conveyor",
  "Принципы": "Principles",
  "Архитектура": "Architecture",
  "AI FABRIC · ОПЕРАЦИОННЫЙ КОНТУР ЛАБОРАТОРИИ": "AI FABRIC · THE LAB'S OPERATING LOOP",
  "Инфраструктура нового поколения:": "Next-generation infrastructure:",
  "люди и AI-агенты": "humans and AI agents",
  "в одном контуре": "in one loop",
  "Разговор в индустрии уходит от «какую LLM выбрать?» к взрослому вопросу: как построить управляемую среду, где люди и AI-агенты вместе ведут работу — от идеи до продакшена. Ниже — наш контур в действии: AI анализирует, предлагает и оформляет. Человек решает.":
    "The industry conversation is moving on from “which LLM should we pick?” to a more mature question: how do you build a governed environment where humans and AI agents work together — from idea to production. Below is our loop in action: AI analyses, proposes and prepares. The human decides.",
  "Конвейер задач": "Task conveyor",
  "в проде:": "in prod:",
  "гейт остановил:": "stopped by gate:",
  "затраты AI:": "AI spend:",
  "токены:": "tokens:",
  "карточка — задача из трекера": "card — a task from the tracker",
  "вспышка — сработал гейт": "flash — the gate fired",
  "зелёная — принята человеком": "green — accepted by a human",
  "Автоматизировано всё,": "Everything is automated,",
  "кроме решения.": "except the decision.",
  "Конвейер убирает налог на вспоминание и не даёт начать задачу, которая не додумана. Решения он не принимает.":
    "The conveyor removes the tax of remembering and refuses to start a task that has not been thought through. It makes no decisions.",
  "Human in the loop": "Human in the loop",
  "Ни одно изменение наружу — в трекер, в код, в прод — без явного «ДА» человека. AI предлагает и оформляет, решение не делегируется.":
    "No outward change — to the tracker, the code or production — without an explicit human “YES”. AI proposes and prepares; the decision is never delegated.",
  "Управляемость по умолчанию": "Governed by default",
  "У агентов — свои identity, политики и гейты, как у людей. Гейт ловит забывчивость до того, как она станет техдолгом.":
    "Agents get their own identities, policies and gates — just like people. The gate catches forgetfulness before it becomes tech debt.",
  "Экономика видна": "Visible economics",
  "Каждый токен посчитан: стоимость → экономия → ROI. Инвестиции в AI защищаются цифрами из леджера, а не ощущениями.":
    "Every token is accounted for: cost → savings → ROI. AI investments are defended with ledger numbers, not gut feeling.",
  "Архитектура, к которой": "The architecture the",
  "идёт индустрия.": "industry is heading to.",
  "Microsoft, Google и Snowflake в 2026-м описывают один и тот же стек управляемого Enterprise AI. Мы собрали его в миниатюре — и он работает.":
    "In 2026 Microsoft, Google and Snowflake all describe the same governed Enterprise AI stack. We built it in miniature — and it works.",
  "планёрки · SOC · приёмка подрядчика": "stand-ups · SOC · contractor acceptance",
  "агенты + человек с правом «ДА»": "agents + a human holding the “YES”",
  "оркестратор · tool-use loop": "orchestrator · tool-use loop",
  "RBAC · confirmation pattern": "RBAC · confirmation pattern",
  "DWH · ERP · корп. системы": "DWH · ERP · corporate systems",
  "хосты · контейнеры · CI": "hosts · containers · CI",
  "поперёк всех слоёв:": "across every layer:",
  "Почему это важно.": "Why it matters.",
  "Конкурентное преимущество ближайших лет — не доступ к моделям, он есть у всех. Преимущество — управляемый контур, в котором тысячи решений AI ежедневно превращаются в проверяемые действия: с владельцем, с политикой, с ценой и с человеческим «ДА» в нужных местах. Такой контур мы строим и проверяем на себе.":
    "The competitive edge of the coming years is not access to models — everyone has that. The edge is a governed loop in which thousands of AI decisions turn into verifiable actions every day: with an owner, a policy, a price tag and a human “YES” in the right places. That is the loop we build and test on ourselves.",
  "Фабрика работает.": "The fabric runs.",
  "Решает — человек.": "The human decides.",
  "Публикации →": "Publications →",
  "Наверх ↑": "Back to top ↑",
  "Анализ": "Analysis",
  "/standup · репо + трекер": "/standup · repo + tracker",
  "Задачи": "Tasks",
  "issues · DoD обязателен": "issues · DoD required",
  "Работа": "Work",
  "код · гейт инвариантов": "code · invariant gate",
  "Приёмка": "Acceptance",
  "DoD против факта · «ДА»": "DoD vs facts · “YES”",
  "Прод": "Prod",
  "деплой · CI": "deploy · CI"
};

const FL = {
  ru: { yes: "ДА", yesWord: "ДА", no: "НЕТ — вернуть в работу", dod: "DoD ✓", gate: "⚠ гейт: инвариант нарушен" },
  en: { yes: "YES", yesWord: "YES", no: "NO — back to work", dod: "DoD ✓", gate: "⚠ gate: invariant violated" }
};

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const svgNS = "http://www.w3.org/2000/svg";
const originalText = new WeakMap();
let currentLang = localStorage.getItem("ailab-lang") === "en" ? "en" : "ru";

/* ---------- conveyor ---------- */
const ST = [
  { x: 110, ico: "⌕", name: "Анализ",  cap: "/standup · репо + трекер" },
  { x: 310, ico: "▤", name: "Задачи",  cap: "issues · DoD обязателен" },
  { x: 510, ico: "⚙", name: "Работа",  cap: "код · гейт инвариантов" },
  { x: 710, ico: "✓", name: "Приёмка", cap: "DoD против факта · «ДА»" },
  { x: 910, ico: "▲", name: "Прод",    cap: "деплой · CI" }
];
const TY = 218;

function el(tag, attrs, parent) {
  const node = document.createElementNS(svgNS, tag);
  for (const key in attrs) node.setAttribute(key, attrs[key]);
  if (parent) parent.append(node);
  return node;
}

const stationsLayer = document.querySelector("#stations");
ST.forEach((station, index) => {
  el("circle", { cx: station.x, cy: TY, r: 30, class: "st-ring" + (index === 0 ? " hot" : "") }, stationsLayer);
  el("text", { x: station.x, y: TY + 5, "text-anchor": "middle", class: "st-ico" }, stationsLayer).textContent = station.ico;
  el("text", { x: station.x, y: TY + 58, "text-anchor": "middle", class: "st-name" }, stationsLayer).textContent = station.name;
  el("text", { x: station.x, y: TY + 76, "text-anchor": "middle", class: "st-cap" }, stationsLayer).textContent = station.cap;
});
const gateText = el("text", { x: ST[2].x, y: TY - 52, "text-anchor": "middle", class: "gate-t", opacity: 0 }, stationsLayer);
gateText.textContent = FL[currentLang].gate;

const chipsLayer = document.querySelector("#chips");
const floatsLayer = document.querySelector("#floats");
const stats = { prod: 0, yes: 0, gate: 0, money: 0, tok: 0 };
const statEls = {
  prod: document.querySelector("#sProd"), yes: document.querySelector("#sYes"),
  gate: document.querySelector("#sGate"), money: document.querySelector("#sMoney"),
  tok: document.querySelector("#sTok")
};

function paintStats() {
  const money = currentLang === "en"
    ? "₽ " + stats.money.toFixed(2)
    : "₽ " + stats.money.toFixed(2).replace(".", ",");
  statEls.prod.textContent = stats.prod;
  statEls.yes.textContent = `${stats.yes} × ${FL[currentLang].yesWord}`;
  statEls.gate.textContent = stats.gate;
  statEls.money.textContent = money;
  statEls.tok.textContent = Math.round(stats.tok) + "k";
}

let floats = [];
function addFloat(x, y, text, kind) {
  const node = el("text", { x, y, "text-anchor": "middle", class: "float-t " + kind }, floatsLayer);
  node.textContent = text;
  floats.push({ el: node, y, age: 0 });
}

let chips = [];
let issueNumber = 29;
const DWELL = [900, 1300, 3200, 2200, 700];

function makeChip() {
  const group = el("g", { class: "fab-chip", opacity: 0 }, chipsLayer);
  el("rect", { x: -27, y: -13, width: 54, height: 26, rx: 6, class: "chip-r" }, group);
  el("text", { x: 0, y: 4, "text-anchor": "middle", class: "chip-t" }, group).textContent = "#" + issueNumber++;
  const chip = {
    el: group, st: 0, x: ST[0].x, phase: "dwell", t: DWELL[0] * (0.8 + Math.random() * 0.5),
    gated: false, rejected: false, bob: Math.random() * 6.28, kick: 0, dead: false
  };
  chips.push(chip);
  return chip;
}

function stepChip(chip, dt) {
  chip.bob += dt * 0.004;
  const opacity = +chip.el.getAttribute("opacity");
  if (opacity < 1 && chip.phase !== "die") chip.el.setAttribute("opacity", Math.min(1, opacity + dt * 0.003));

  if (chip.phase === "dwell") {
    chip.t -= dt;
    if (chip.st === 2 && !chip.gated && chip.t < DWELL[2] * 0.5) {
      chip.gated = true;
      if (Math.random() < 0.45) {
        stats.gate++;
        gateText.setAttribute("opacity", "1");
        setTimeout(() => gateText.setAttribute("opacity", "0"), 1200);
        chip.t += 1400;
        chip.kick = 300;
      }
    }
    if (chip.t <= 0) {
      if (chip.st === 3) {
        if (!chip.rejected && Math.random() < 0.18) {
          chip.rejected = true;
          addFloat(chip.x, TY - 46, FL[currentLang].no, "bad");
          chip.phase = "move"; chip.target = 2;
          return;
        }
        stats.yes++;
        addFloat(chip.x, TY - 46, FL[currentLang].yes, "ok");
        chip.el.setAttribute("class", "fab-chip done");
      }
      if (chip.st === 4) {
        chip.phase = "die"; chip.t = 600;
        stats.prod++;
        stats.money += 0.9 + Math.random() * 1.6;
        const ring = el("circle", { cx: ST[4].x, cy: TY, r: 30, class: "pulse-ring", opacity: 0.8 }, floatsLayer);
        if (ring.animate) {
          ring.animate([{ opacity: .8, r: 30 }, { opacity: 0, r: 52 }], { duration: 700 }).onfinish = () => ring.remove();
        } else ring.remove();
        return;
      }
      chip.phase = "move"; chip.target = chip.st + 1;
    }
  } else if (chip.phase === "move") {
    const targetX = ST[chip.target].x;
    const dir = targetX > chip.x ? 1 : -1;
    chip.x += dir * dt * 0.14;
    if ((dir > 0 && chip.x >= targetX) || (dir < 0 && chip.x <= targetX)) {
      chip.x = targetX; chip.st = chip.target; chip.phase = "dwell";
      chip.t = DWELL[chip.st] * (0.8 + Math.random() * 0.5);
      if (chip.st === 2 && chip.rejected) chip.t *= 0.5;
      if (chip.st === 1) addFloat(chip.x, TY - 46, FL[currentLang].dod, "info");
    }
  } else if (chip.phase === "die") {
    chip.t -= dt;
    chip.el.setAttribute("opacity", Math.max(0, chip.t / 600));
    if (chip.t <= 0) { chip.dead = true; chip.el.remove(); }
  }

  let kickY = 0;
  if (chip.kick > 0) { chip.kick -= dt; if (chip.kick < 0) chip.kick = 0; kickY = Math.sin(chip.kick * 0.05) * 3; }
  const y = TY - 34 + Math.sin(chip.bob) * 2 + kickY;
  chip.el.setAttribute("transform", `translate(${chip.x},${y})`);
  if (chip.st === 2 && chip.phase === "dwell") stats.tok += dt * 0.004;
}

if (reduced) {
  [0, 1, 2, 3].forEach(index => {
    const chip = makeChip();
    chip.st = index; chip.x = ST[index].x;
    chip.el.setAttribute("opacity", "1");
    chip.el.setAttribute("transform", `translate(${chip.x},${TY - 34})`);
  });
  stats.prod = 12; stats.yes = 12; stats.gate = 5; stats.money = 17.4; stats.tok = 348;
  paintStats();
} else {
  let spawnTimer = 0;
  let last = null;
  function loop(timestamp) {
    if (last === null) last = timestamp;
    const dt = Math.min(50, timestamp - last);
    last = timestamp;
    spawnTimer -= dt;
    if (spawnTimer <= 0 && chips.filter(chip => !chip.dead).length < 5) {
      makeChip();
      spawnTimer = 2600 + Math.random() * 1800;
    }
    chips.forEach(chip => { if (!chip.dead) stepChip(chip, dt); });
    chips = chips.filter(chip => !chip.dead);
    floats.forEach(item => {
      item.age += dt;
      item.el.setAttribute("y", item.y - item.age * 0.02);
      item.el.setAttribute("opacity", Math.max(0, 1 - item.age / 1400));
      if (item.age > 1400) item.el.remove();
    });
    floats = floats.filter(item => item.age <= 1400);
    paintStats();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* ---------- language ---------- */
function translateStatic(lang) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement?.closest("script, style, #chips, #floats")) continue;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const russian = originalText.get(node);
    const trimmed = russian.trim();
    node.nodeValue = lang === "en" && en[trimmed] ? russian.replace(trimmed, en[trimmed]) : russian;
  }
  document.documentElement.lang = lang;
  document.title = lang === "en" ? "AI Fabric · AI Innovation Lab" : "AI Fabric · AI Innovation Lab";
  document.querySelector('meta[name="description"]').content = lang === "en"
    ? "AI Fabric — the AI Innovation Lab operating loop: a task conveyor, gates and the human “YES”."
    : "AI Fabric — операционный контур AI Innovation Lab: конвейер задач, гейты и человеческое «ДА».";
  document.querySelector("nav").setAttribute("aria-label", lang === "en" ? "Navigation" : "Навигация");
  document.querySelector(".lang-switch").setAttribute("aria-label", lang === "en" ? "Language" : "Язык");
}

function updateThemeControl() {
  const dark = document.documentElement.dataset.theme === "dark";
  const button = document.querySelector("#theme-toggle");
  button.querySelector("span").textContent = dark ? "☼" : "◐";
  document.querySelector("#theme-label").textContent = dark ? "LIGHT" : "DARK";
  button.setAttribute("aria-label", currentLang === "en"
    ? `Switch to ${dark ? "light" : "dark"} theme`
    : `Переключить на ${dark ? "светлую" : "тёмную"} тему`);
}

function setLanguage(lang) {
  currentLang = lang === "en" ? "en" : "ru";
  localStorage.setItem("ailab-lang", currentLang);
  translateStatic(currentLang);
  gateText.textContent = FL[currentLang].gate;
  document.querySelectorAll("[data-lang]").forEach(button => {
    const selected = button.dataset.lang === currentLang;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-pressed", selected);
  });
  updateThemeControl();
  paintStats();
}

document.querySelectorAll("[data-lang]").forEach(button =>
  button.addEventListener("click", () => setLanguage(button.dataset.lang))
);
document.querySelector("#theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("ailab-theme", next);
  updateThemeControl();
});

const savedTheme = localStorage.getItem("ailab-theme");
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

setLanguage(currentLang);
