const scenarios = {
  ops: {
    route:"ZABBIX → AI OPS → TELEGRAM", title:"Ops-чат", badge:"INCIDENT / SRV-DC01",
    prompt:"Promtail на SRV-DC01 умер, почини", latency:"LATENCY 1.8s",
    messages:[
      {type:"user",text:"Promtail на SRV-DC01 умер, почини"},
      {author:"АНАЛИТИК",text:"Bookmark повреждён, служба crashed. Риск восстановления — низкий."},
      {author:"АНАЛИТИК",type:"action",text:"Удалить bookmark и перезапустить Promtail? Требуется подтверждение: ДА / НЕТ"},
      {type:"user",text:"ДА"},
      {author:"ИСПОЛНИТЕЛЬ",text:"Удалён 1 bookmark. Служба запущена."},
      {author:"ВЕРИФИКАТОР",type:"success",text:"Логи возобновлены. Инцидент закрыт ✓"}
    ]
  },
  security: {
    route:"WAZUH → AI SECURITY → TELEGRAM", title:"SOC-чат", badge:"CISO DAILY BRIEF / 08:00",
    prompt:"Доклад", latency:"LATENCY 2.4s",
    messages:[
      {type:"user",text:"Доклад"},
      {author:"ОРКЕСТРАТОР",text:"Собираю дельту за сутки: 6 агентов, 5 слоёв защиты."},
      {author:"RECON",text:"5 hosts up · 32 порта · critical CVE: 0"},
      {author:"PURPLE",type:"action",text:"Новый хост вне scope: SMB / RPC / WinRM открыты. Приоритет #1."},
      {author:"AD.AUDIT",text:"9 привилегированных групп вернули 0 членов. Нужна ручная проверка."},
      {author:"CISO BRIEF",type:"success",text:"3 action items сформированы. Изменений без подтверждения нет ✓"}
    ]
  },
  decision: {
    route:"1C / DWH → AI DECISION → TELEGRAM", title:"Bizbot-чат", badge:"BOARD / INVENTORY",
    prompt:"Что заканчивается на складе и как это влияет на финансы?", latency:"LATENCY 3.1s",
    messages:[
      {type:"user",text:"Что заканчивается на складе и как это влияет на финансы?"},
      {author:"ДИРЕКТОР",text:"Подключаю Бухгалтера и Склад. Каждый видит только разрешённые таблицы."},
      {author:"СКЛАД",text:"Дефицит по 8 позициям, но все — класс C, около 5% оборота."},
      {author:"БУХГАЛТЕР",type:"action",text:"Главный риск: кабель NYM 5×35, класс A. Движения нет с 2022 года."},
      {author:"ПРОДАЖИ",text:"Подтверждаю: влияния на текущие заказы нет."},
      {author:"ДИРЕКТОР",type:"success",text:"Итог: C-дефициты некритичны; срочно выяснить статус NYM ✓"}
    ]
  }
};

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const svgNS = "http://www.w3.org/2000/svg";
const feed = document.querySelector("#message-feed");
let active = "ops";
let timers = [];

function clearTimers(){timers.forEach(clearTimeout);timers=[]}
function messageNode(message){
  const node=document.createElement("div");node.className=`chat-message ${message.type||""}`;
  if(message.author){const author=document.createElement("b");author.textContent=message.author;node.append(author)}
  const text=document.createElement("p");text.textContent=message.text;node.append(text);return node;
}
function playMessages(){
  clearTimers();feed.replaceChildren();let delay=100;
  scenarios[active].messages.forEach(message=>{
    timers.push(setTimeout(()=>{feed.append(messageNode(message));feed.scrollTop=feed.scrollHeight},delay));
    delay+=reduced?50:620;
  });
}
function syncPackets(key){
  document.querySelector(".moving-packets").innerHTML=`
    <circle class="packet" r="4"><animateMotion dur="2.1s" repeatCount="indefinite"><mpath href="#${key}-in"/></animateMotion></circle>
    <circle class="packet" r="4"><animateMotion dur="2.1s" begin=".6s" repeatCount="indefinite"><mpath href="#${key}-out"/></animateMotion></circle>`;
}
function syncAgentPills(key){
  const layer=document.querySelector(".agent-pills");layer.replaceChildren();
  PipelineLayout.agentLayouts[key].forEach((agent,index)=>{
    const group=document.createElementNS(svgNS,"g");
    const width=Math.max(42,agent.label.length*6+14);
    group.setAttribute("transform",`translate(${agent.x.toFixed(1)} ${agent.y.toFixed(1)})`);
    group.style.setProperty("--delay",`${index*90}ms`);
    const rect=document.createElementNS(svgNS,"rect");
    [["x",-width/2],["y",-10],["width",width],["height",20],["rx",10]].forEach(([name,value])=>rect.setAttribute(name,value));
    const text=document.createElementNS(svgNS,"text");text.setAttribute("text-anchor","middle");text.setAttribute("y","1");text.textContent=agent.label;
    group.append(rect,text);layer.append(group);
  });
}
function activateScenario(key,scroll=false){
  if(!scenarios[key])return;active=key;const scenario=scenarios[key];
  document.querySelectorAll(".scenario").forEach(button=>{const isActive=button.dataset.scenario===key;button.classList.toggle("active",isActive);button.setAttribute("aria-selected",isActive)});
  document.querySelectorAll(".flow").forEach(path=>path.classList.toggle("active",path.classList.contains(key)));
  document.querySelectorAll(".map-node[data-map]").forEach(node=>node.classList.toggle("active",node.dataset.map===key));
  document.querySelector("#route-label").textContent=scenario.route;
  document.querySelector("#console-title").textContent=scenario.title;
  document.querySelector("#console-badge").textContent=scenario.badge;
  document.querySelector("#prompt-text").textContent=scenario.prompt;
  document.querySelector("#latency").textContent=scenario.latency;
  syncPackets(key);syncAgentPills(key);playMessages();
  if(scroll)document.querySelector("#lab").scrollIntoView({behavior:reduced?"auto":"smooth"});
}

document.querySelectorAll(".scenario").forEach(button=>button.addEventListener("click",()=>activateScenario(button.dataset.scenario)));
document.querySelectorAll("[data-launch]").forEach(button=>button.addEventListener("click",()=>activateScenario(button.dataset.launch,true)));
document.querySelector("#replay").addEventListener("click",playMessages);
document.querySelector("#send-demo").addEventListener("click",playMessages);
document.querySelector("#theme-toggle").addEventListener("click",()=>{
  const next=document.documentElement.dataset.theme==="dark"?"light":"dark";
  document.documentElement.dataset.theme=next;localStorage.setItem("ailab-theme",next);
});
const saved=localStorage.getItem("ailab-theme");if(saved==="light"||saved==="dark")document.documentElement.dataset.theme=saved;
if("IntersectionObserver"in window&&!reduced){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.1});
  document.querySelectorAll(".reveal").forEach(node=>observer.observe(node));
}else document.querySelectorAll(".reveal").forEach(node=>node.classList.add("visible"));
const initialScenario=new URLSearchParams(location.search).get("scenario");
activateScenario(scenarios[initialScenario]?initialScenario:"ops");
