(function expose(root) {
  const curves = {
    ops: { p0:[405,90], p1:[500,90], p2:[490,210], p3:[600,210], agents:[["ОПРОС",.18],["МЕТРИКИ",.48],["СВОДКА",.77]] },
    security: { p0:[405,210], p1:[480,210], p2:[530,210], p3:[600,210], agents:[["SOC.L1",.18],["SOC.L2",.5],["SOC.L3",.8]] },
    redteam: { p0:[405,210], p1:[480,210], p2:[530,210], p3:[600,210], agents:[["PURPLE",.18],["DETECT",.5],["REPORT",.8]] },
    decision: { p0:[405,330], p1:[500,330], p2:[490,210], p3:[600,210], agents:[["БУХГ.",.18],["СКЛАД",.48],["СИНТЕЗ",.77]] }
  };
  function point(c,t){const u=1-t;return{x:u**3*c.p0[0]+3*u**2*t*c.p1[0]+3*u*t**2*c.p2[0]+t**3*c.p3[0],y:u**3*c.p0[1]+3*u**2*t*c.p1[1]+3*u*t**2*c.p2[1]+t**3*c.p3[1]}}
  function angle(c,t){const u=1-t,dx=3*u**2*(c.p1[0]-c.p0[0])+6*u*t*(c.p2[0]-c.p1[0])+3*t**2*(c.p3[0]-c.p2[0]),dy=3*u**2*(c.p1[1]-c.p0[1])+6*u*t*(c.p2[1]-c.p1[1])+3*t**2*(c.p3[1]-c.p2[1]);return Math.atan2(dy,dx)*180/Math.PI}
  const agentLayouts=Object.fromEntries(Object.entries(curves).map(([key,c])=>[key,c.agents.map(([label,t])=>({label,t,...point(c,t),angle:angle(c,t)}))]));
  const api={agentLayouts,curves,point}; root.PipelineLayout=api;
  if(typeof module!=="undefined"&&module.exports)module.exports=api;
})(typeof window!=="undefined"?window:globalThis);
