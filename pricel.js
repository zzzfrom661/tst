(function () {
  "use strict";
  var W = window, D = document, ROOT = D.documentElement;
  if (W.SampCrosshair && W.SampCrosshair.destroy) W.SampCrosshair.destroy();

  var SID = "sc-style";
  var A = ".hud-aim-crosshair__crosshair[data-v-bef93661]";
  var B = ".hud-aim__container[data-v-7f96fa59]";
  var WRAP = ".hud-aim-crosshair__crosshair-wrapper[data-v-bef93661]";
  var SPREAD = ".hud-aim-crosshair__spread-container[data-v-bef93661]";
  var SCOPE = ".sniper-aim[data-v-f6508f7b],.hud-aim__sniper[data-v-7f96fa59]";
  var HIDDEN = ".hud-iface-hidden[data-v-7f96fa59]";
  var ARROW = ".hud-aim__arrow[data-v-7f96fa59]";
  var HOST = ".hud-aim.sc-host[data-v-7f96fa59]";
  var RING = A + "," + B;
  var OUT = "drop-shadow(var(--sc-ow) 0 0 #000) drop-shadow(calc(var(--sc-ow)*-1) 0 0 #000) drop-shadow(0 var(--sc-ow) 0 #000) drop-shadow(0 calc(var(--sc-ow)*-1) 0 #000)";

  var CSS = ""
    + ":root{--sc-base:3.15vh;--sc-spread:0px;--sc-size:calc(var(--sc-base) + var(--sc-spread));--sc-ring:.04vh;--sc-tick:.68vh;--sc-tw:.295vh;--sc-dot:.21vh;--sc-ow:.09vh;--sc-color:#ffffff;--sc-op:1}"
    + RING + "{box-sizing:border-box!important;width:var(--sc-size)!important;height:var(--sc-size)!important;min-width:0!important;min-height:0!important;background-color:transparent!important;background-image:none!important;border-style:solid!important;border-width:var(--sc-ring)!important;border-color:var(--sc-color)!important;border-radius:50%!important;opacity:var(--sc-op)!important;overflow:visible!important;filter:" + OUT + "!important}"
    + A + "{transition:transform .18s ease!important}"
    + B + "{transition:none!important}"
    + A + ":before{content:''!important;display:block!important;position:absolute!important;left:50%!important;top:calc(var(--sc-ring)/-2)!important;width:var(--sc-tw)!important;height:var(--sc-tick)!important;background-color:var(--sc-color)!important;background-image:none!important;border-width:0!important;border-radius:0!important;transform:translate(-50%,-50%)!important;box-shadow:0 calc(var(--sc-size) - var(--sc-ring)) 0 var(--sc-color)!important}"
    + A + ":after{content:''!important;display:block!important;position:absolute!important;top:50%!important;left:calc(var(--sc-ring)/-2)!important;width:var(--sc-tick)!important;height:var(--sc-tw)!important;background-color:var(--sc-color)!important;background-image:none!important;border-width:0!important;border-radius:0!important;transform:translate(-50%,-50%)!important;box-shadow:calc(var(--sc-size) - var(--sc-ring)) 0 0 var(--sc-color)!important}"
    + WRAP + ":after," + HOST + ":after{content:''!important;display:block!important;position:absolute!important;left:0!important;top:0!important;width:var(--sc-dot)!important;height:var(--sc-dot)!important;margin-left:calc(var(--sc-dot)/-2)!important;margin-top:calc(var(--sc-dot)/-2)!important;background-color:var(--sc-color)!important;background-image:none!important;border-width:0!important;border-radius:50%!important;opacity:var(--sc-op)!important;pointer-events:none!important;filter:" + OUT + "!important}"
    + HOST + ":after{left:50%!important;top:50%!important}"
    + SPREAD + "{display:none!important}"
    + ARROW + "{background-color:var(--sc-color)!important;background-image:none!important;border-width:0!important;border-radius:0!important;opacity:var(--sc-op)!important;filter:none!important}"
    + ARROW + ":first-child{left:calc(var(--sc-ring)/-2)!important;right:auto!important;top:50%!important;bottom:auto!important;width:var(--sc-tick)!important;height:var(--sc-tw)!important;transform:translateY(-50%)!important}"
    + ARROW + ":nth-child(3){right:calc(var(--sc-ring)/-2)!important;left:auto!important;top:50%!important;bottom:auto!important;width:var(--sc-tick)!important;height:var(--sc-tw)!important;transform:translateY(-50%)!important}"
    + ARROW + ":nth-child(2){top:calc(var(--sc-ring)/-2)!important;bottom:auto!important;left:50%!important;right:auto!important;width:var(--sc-tw)!important;height:var(--sc-tick)!important;transform:translateX(-50%)!important}"
    + ARROW + ":nth-child(4){bottom:calc(var(--sc-ring)/-2)!important;top:auto!important;left:50%!important;right:auto!important;width:var(--sc-tw)!important;height:var(--sc-tick)!important;transform:translateX(-50%)!important}"
    + "html[data-sc-kill] " + A + ",html[data-sc-kill] " + B + ",html[data-sc-kill] " + WRAP + ":after,html[data-sc-kill] " + HOST + ":after,html[data-sc-kill] " + ARROW + ",.hud-aim-crosshair_kill " + A + ",.hud-aim-crosshair_kill " + WRAP + ":after,.hud-aim-crosshair_kill " + ARROW + "{--sc-color:#f64932!important}"
    + "html[data-sc-hit] " + A + ",html[data-sc-kill] " + A + ",.hud-aim-crosshair_hit " + A + ",.hud-aim-crosshair_kill " + A + "{animation:sc-pa .24s ease-out!important}"
    + "html[data-sc-hit] " + B + ",html[data-sc-kill] " + B + "{animation:sc-pb .24s ease-out!important}"
    + "html[data-sc-off] " + RING + ",html[data-sc-hide] " + RING + ",html[data-sc-off] " + WRAP + ":after,html[data-sc-hide] " + WRAP + ":after,html[data-sc-off] " + HOST + ":after,html[data-sc-hide] " + HOST + ":after,html[data-sc-off] " + ARROW + ",html[data-sc-hide] " + ARROW + "{opacity:0!important}"
    + "@keyframes sc-pa{0%{transform:translate(-50%,-50%) scale(1)}45%{transform:translate(-50%,-50%) scale(1.3)}100%{transform:translate(-50%,-50%) scale(1)}}"
    + "@keyframes sc-pb{0%{transform:scale(1)}45%{transform:scale(1.3)}100%{transform:scale(1)}}";

  var st = { off: false, hide: false, spread: 0, t1: 0, t2: 0, raf: 0, obs: null, poll: 0, hooked: null, last: 0, dead: false };

  function q(s) { try { return D.querySelector(s); } catch (e) { return null; } }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function vh(v) { return v * W.innerHeight / 100; }
  function flag(n, on) { if (on) ROOT.setAttribute(n, ""); else ROOT.removeAttribute(n); }

  function clearFlash() {
    clearTimeout(st.t1); clearTimeout(st.t2);
    ROOT.removeAttribute("data-sc-hit"); ROOT.removeAttribute("data-sc-kill");
  }
  function flash(kind) {
    var k = kind === "kill";
    clearFlash();
    void ROOT.offsetWidth;
    flag(k ? "data-sc-kill" : "data-sc-hit", true);
    var t = setTimeout(clearFlash, k ? 400 : 230);
    if (k) st.t2 = t; else st.t1 = t;
  }
  function onHit(k) { flash(k ? "kill" : "hit"); }

  function hook() {
    if (st.hooked) return;
    var e = W.engine;
    if (!e || typeof e.on !== "function") return;
    try { e.on("HitDamage", onHit); st.hooked = e; } catch (err) {}
  }

  function readSpread() {
    var extra = 0, el = q(SPREAD);
    if (el && el.style.width) {
      var raw = el.style.width, n = parseFloat(raw);
      if (!isNaN(n)) {
        var px = raw.indexOf("vh") > -1 ? vh(n) : raw.indexOf("vw") > -1 ? n * W.innerWidth / 100 : n;
        extra = Math.max(0, px - vh(1.86)) * 0.9;
      }
    } else {
      var box = q(B);
      if (box && box.style.width) {
        var w = parseFloat(box.style.width);
        if (!isNaN(w) && w > 0) extra = Math.max(0, w / 48 - 1) * vh(2.2);
      }
    }
    extra = clamp(extra, 0, vh(7));
    if (Math.abs(extra - st.spread) > 0.4) { st.spread = extra; ROOT.style.setProperty("--sc-spread", extra.toFixed(2) + "px"); }
  }

  function sync() {
    var off = !!q(SCOPE) || !!q(HIDDEN);
    if (off !== st.off) { st.off = off; flag("data-sc-off", off); }
    var box = q(B), host = box ? box.parentElement : null;
    var marked = D.querySelectorAll(".hud-aim.sc-host");
    for (var i = 0; i < marked.length; i++) if (marked[i] !== host) marked[i].classList.remove("sc-host");
    if (host && !host.classList.contains("sc-host")) host.classList.add("sc-host");
    hook();
  }

  function tick(ts) {
    if (st.dead) return;
    if (ts - st.last > 33) { st.last = ts; readSpread(); }
    st.raf = W.requestAnimationFrame(tick);
  }

  var api = {
    version: "4.0.0",
    hit: function () { flash("hit"); return api; },
    kill: function () { flash("kill"); return api; },
    show: function () { st.hide = false; flag("data-sc-hide", false); return api; },
    hide: function () { st.hide = true; flag("data-sc-hide", true); return api; },
    destroy: function () {
      st.dead = true;
      W.cancelAnimationFrame(st.raf); clearInterval(st.poll); clearTimeout(st.t1); clearTimeout(st.t2);
      if (st.obs) try { st.obs.disconnect(); } catch (e) {}
      if (st.hooked && st.hooked.off) try { st.hooked.off("HitDamage", onHit); } catch (e) {}
      var s = D.getElementById(SID); if (s) s.remove();
      var m = D.querySelectorAll(".hud-aim.sc-host");
      for (var i = 0; i < m.length; i++) m[i].classList.remove("sc-host");
      ["data-sc-off", "data-sc-hide", "data-sc-hit", "data-sc-kill"].forEach(function (a) { ROOT.removeAttribute(a); });
      ROOT.style.removeProperty("--sc-spread");
      try { delete W.SampCrosshair; } catch (e) { W.SampCrosshair = undefined; }
    }
  };

  var old = D.getElementById(SID); if (old) old.remove();
  var style = D.createElement("style");
  style.id = SID; style.textContent = CSS;
  (D.head || ROOT).appendChild(style);
  sync();

  st.obs = new MutationObserver(function () { sync(); });
  st.obs.observe(D.body || ROOT, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  st.poll = setInterval(function () { if (!st.hooked) hook(); }, 700);
  st.raf = W.requestAnimationFrame(tick);

  W.SampCrosshair = api;
})();