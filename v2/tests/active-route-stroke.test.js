const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");

assert.match(
  html,
  /<linearGradient\s+id="hotline"[^>]*gradientUnits="userSpaceOnUse"/,
  "Активный градиент должен использовать координаты SVG-сцены: objectBoundingBox не рисуется на горизонтальном Security-пути"
);
assert.match(html, /id="security-in"[^>]*class="flow security"/, "Не найден входной Security-путь");
assert.match(html, /id="security-out"[^>]*class="flow security"/, "Не найден выходной Security-путь");
assert.match(html, /id="redteam-in"[^>]*class="flow redteam"/, "Не найден входной Red Team-путь");
assert.match(html, /id="redteam-out"[^>]*class="flow redteam"/, "Не найден выходной Red Team-путь");

console.log("active route stroke: ok");
