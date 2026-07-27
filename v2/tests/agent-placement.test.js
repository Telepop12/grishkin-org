const assert = require("node:assert/strict");
const { agentLayouts, curves, point } = require("../pipeline-layout.js");

for (const scenario of ["ops", "security", "decision"]) {
  const layout = agentLayouts[scenario];
  assert.equal(layout.length, 3, `${scenario}: на потоке должны быть три агента`);
  layout.forEach(agent => {
    const expected = point(curves[scenario], agent.t);
    assert.ok(Math.hypot(agent.x - expected.x, agent.y - expected.y) < 0.01, `${scenario}/${agent.label}: агент оторван от активной дуги`);
  });
}
const meanY = key => agentLayouts[key].reduce((sum,a)=>sum+a.y,0)/agentLayouts[key].length;
assert.ok(meanY("ops") < meanY("security"), "Ops должен лежать на верхней дуге");
assert.ok(meanY("security") < meanY("decision"), "Decision должен лежать на нижней дуге");
console.log("agent placement: ok");
