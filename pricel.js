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

  // ============================================================
  //  ПРИЦЕЛЫ (стили)
  //  Каждый прицел — функция, возвращающая CSS-строку.
  //  СВОЯ КОМАНДА прописана внутри функции: fn.cmd = "…".
  //  Чтобы добавить новый прицел:
  //    1) скопируй любую styleN(), поменяй CSS;
  //    2) под функцией напиши  styleN.cmd = "3";
  //    3) добавь  addStyle(styleN);
  //  В чате: /pricel 3   (или без слэша: pricel 3)
  // ============================================================

  // ---------- прицел №1 (белое кольцо с засечками + точка) ----------
  function style1() {
    var OUT = "drop-shadow(var(--sc-ow) 0 0 #000) drop-shadow(calc(var(--sc-ow)*-1) 0 0 #000) drop-shadow(0 var(--sc-ow) 0 #000) drop-shadow(0 calc(var(--sc-ow)*-1) 0 #000)";
    return ""
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
  }
  style1.cmd = "1"; // команда: /pricel 1

  // ---------- прицел №2 (зелёное кольцо + точка, без засечек) ----------
  function style2() {
    var OUT = "drop-shadow(var(--sc-ow) 0 0 #000) drop-shadow(calc(var(--sc-ow)*-1) 0 0 #000) drop-shadow(0 var(--sc-ow) 0 #000) drop-shadow(0 calc(var(--sc-ow)*-1) 0 #000)";
    return ""
      + ":root{--sc-base:3.15vh;--sc-spread:0px;--sc-size:calc(var(--sc-base) + var(--sc-spread));--sc-ring:.1vh;--sc-tick:.68vh;--sc-tw:.295vh;--sc-dot:.4vh;--sc-ow:.09vh;--sc-color:#00e676;--sc-op:1}"
      + RING + "{box-sizing:border-box!important;width:var(--sc-size)!important;height:var(--sc-size)!important;min-width:0!important;min-height:0!important;background-color:transparent!important;background-image:none!important;border-style:solid!important;border-width:var(--sc-ring)!important;border-color:var(--sc-color)!important;border-radius:50%!important;opacity:var(--sc-op)!important;overflow:visible!important;filter:" + OUT + "!important}"
      + A + "{transition:transform .18s ease!important}"
      + B + "{transition:none!important}"
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
  }
  style2.cmd = "2"; // команда: /pricel 2

  // ============================================================
  //  РЕЕСТР ПРИЦЕЛОВ
  //  Новый прицел регистрируется одной строкой: addStyle(styleN);
  //  Ключом становится fn.cmd — команда, прописанная в функции.
  // ============================================================
  var STYLES = {};
  function addStyle(fn) {
    if (typeof fn !== "function" || !fn.cmd) {
      console.warn("[pricel] у функции прицела не задана команда: fn.cmd = \"…\"");
      return false;
    }
    STYLES[String(fn.cmd).trim().toLowerCase()] = fn;
    return true;
  }
  addStyle(style1);
  addStyle(style2);

  // ============================================================
  //  ПРИМЕНЕНИЕ СТИЛЯ
  // ============================================================
  var curStyle = "1";
  function applyStyle(id) {
    id = String(id == null ? "" : id).trim().toLowerCase();
    if (!STYLES[id]) return false;
    curStyle = id;
    var el = D.getElementById(SID);
    if (!el) {
      el = D.createElement("style");
      el.id = SID;
      (D.head || ROOT).appendChild(el);
    }
    el.textContent = STYLES[id]();
    return true;
  }

  // ============================================================
  //  КОМАНДА ЧАТА — ОТДЕЛЬНАЯ ФУНКЦИЯ
  //  /pricel        — список доступных прицелов
  //  /pricel 1      — включить прицел с командой "1" (из style1.cmd)
  //  pricel 2       — работает и без слэша
  // ============================================================
  var CMD_WORDS = ["pricel", "/pricel", "прицел", "/прицел"]; // слова-триггеры

  // Разбор строки: возвращает { cmd, arg } или null, если это не команда прицела.
  function parseCommand(raw) {
    if (typeof raw !== "string") return null;
    var s = raw.trim().toLowerCase();
    for (var i = 0; i < CMD_WORDS.length; i++) {
      var w = CMD_WORDS[i];
      if (s.indexOf(w) !== 0) continue;
      // следующий символ должен быть пробелом или концом строки
      var rest = s.slice(w.length);
      if (rest.length && rest.charAt(0) !== " ") continue;
      return { cmd: w, arg: rest.trim() };
    }
    return null;
  }

  // Главный обработчик команды: ищет прицел по команде, прописанной в его функции.
  function handleCommand(raw) {
    var p = parseCommand(raw);
    if (!p) return false;
    var list = Object.keys(STYLES).join(", ");
    if (!p.arg) {
      console.log("[pricel] прицелы: " + list + " | текущий: " + curStyle);
      return true;
    }
    if (p.arg === "debug") {
      console.log("[pricel] отладка: текущий=" + curStyle + ", доступны: " + list);
      var e = W.engine;
      if (e && e.__sc_events) console.log("[pricel] события движка (зарегистрированы HUD-ом): " + Object.keys(e.__sc_events).join(", "));
      else console.log("[pricel] движок ещё не подключён (engine.on не вызывался HUD-ом)");
      var fields = D.querySelectorAll("input,textarea,[contenteditable]");
      console.log("[pricel] текстовых полей в DOM: " + fields.length);
      return true;
    }
    if (applyStyle(p.arg)) {
      console.log("[pricel] прицел " + p.arg + " применён");
      return true;
    }
    console.log("[pricel] прицел \"" + p.arg + "\" не найден. Доступны: " + list + " | отладка: pricel debug");
    return true;
  }

  // ============================================================
  //  ПЕРЕХВАТ МОСТА ДВИЖКА (cohtml: window.engine)
  //  1) engine.trigger — блокирует отправку команды прицела в чат игры
  //  2) engine.on      — авто-подписка на чат-события, которые
  //                      регистрирует HUD (Vue), как только они появляются
  // ============================================================
  function wrapEngine() {
    var e = W.engine;
    if (!e || e.__sc_wrapped) return false;
    // оригиналы сохраняем для снятия обёртки в destroy()
    e.__sc_orig_on = e.on;
    e.__sc_orig_trigger = e.trigger;
    e.__sc_orig_emit = e.emit;
    e.__sc_events = {};
    e.__sc_wrapped = true;

    if (typeof e.on === "function") {
      e.on = function (name) {
        try {
          if (typeof name === "string") {
            e.__sc_events[name] = true;
            // HUD зарегистрировал чат-событие — подписываемся рядом и слушаем текст
            if (/chat|message/i.test(name)) {
              var args = Array.prototype.slice.call(arguments);
              for (var i = 1; i < args.length; i++) {
                if (typeof args[i] === "function" && !args[i].__sc_chat) {
                  (function (origFn) {
                    var wrapper = function (msg) { handleCommand(msg); return origFn.apply(this, arguments); };
                    wrapper.__sc_chat = true;
                    args[i] = wrapper;
                  })(args[i]);
                }
              }
              return e.__sc_orig_on.apply(e, args);
            }
          }
        } catch (err) {}
        return e.__sc_orig_on.apply(e, arguments);
      };
    }

    if (typeof e.trigger === "function") {
      e.trigger = function (name) {
        try {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            // строка-сообщение, начинающаяся с pricel — не даём уйти в игру
            if (typeof a === "string" && parseCommand(a)) { handleCommand(a); return; }
          }
        } catch (err) {}
        return e.__sc_orig_trigger.apply(e, arguments);
      };
    }

    if (typeof e.emit === "function" && e.emit !== e.trigger) {
      e.emit = function (name) {
        try {
          for (var i = 1; i < arguments.length; i++) {
            var a = arguments[i];
            if (typeof a === "string" && parseCommand(a)) { handleCommand(a); return; }
          }
        } catch (err) {}
        return e.__sc_orig_emit.apply(e, arguments);
      };
    }
    return true;
  }

  function unwrapEngine() {
    var e = W.engine;
    if (!e || !e.__sc_wrapped) return;
    if (e.__sc_orig_on) e.on = e.__sc_orig_on;
    if (e.__sc_orig_trigger) e.trigger = e.__sc_orig_trigger;
    if (e.__sc_orig_emit) e.emit = e.__sc_orig_emit;
    e.__sc_wrapped = false;
  }

  // ============================================================
  //  ПОДКЛЮЧЕНИЕ К ЧАТУ Hassle (cohtml)
  //  Основной перехват — через engine.trigger/on (wrapEngine выше).
  //  Fallback — перехват Enter в поле ввода чата (keydown + keyup).
  // ============================================================
  function chatCommand() {
    var HOOK_CHAT_INPUT = true;
    var hooked = null;
    var lastHandled = 0; // защита от двойной обработки (keydown -> keyup -> input)

    function chatText(el) {
      if (!el) return null;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") return el.value;
      if (el.isContentEditable) return el.textContent || el.innerText || "";
      return null;
    }
    function chatClear(el) {
      if (!el) return;
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.value = "";
      else el.textContent = "";
      // синхронизируем v-model Vue: очищаем и само поле, и его состояние
      try { el.dispatchEvent(new Event("input", { bubbles: true })); } catch (e) {}
      try { el.dispatchEvent(new Event("change", { bubbles: true })); } catch (e) {}
    }
    function visible(el) { return !!(el && el.offsetWidth > 0 && el.offsetHeight > 0); }

    function findCommandField() {
      // сначала поле в фокусе (обычно это и есть чат)
      var t = D.activeElement, txt = chatText(t);
      if (txt != null && parseCommand(txt)) return t;
      // иначе ищем любое поле, где ввели pricel (в т.ч. скрытые прозрачностью)
      var all = D.querySelectorAll("input,textarea,[contenteditable]");
      for (var i = 0; i < all.length; i++) {
        var v = chatText(all[i]);
        if (v != null && parseCommand(v) && (visible(all[i]) || all[i] === D.activeElement)) return all[i];
      }
      return null;
    }

    function onKey(e) {
      if (!e || (e.key !== "Enter" && e.keyCode !== 13)) return;
      var now = Date.now();
      if (now - lastHandled < 120) return;
      var t = findCommandField();
      if (!t) return;
      if (e.preventDefault) e.preventDefault();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      if (e.stopPropagation) e.stopPropagation();
      lastHandled = now;
      handleCommand(chatText(t));
      chatClear(t);
    }

    function hook() {
      if (hooked) return;
      wrapEngine();
      if (HOOK_CHAT_INPUT) {
        D.addEventListener("keydown", onKey, true);
        D.addEventListener("keyup", onKey, true);
      }
      hooked = true;
    }

    function unhook() {
      if (!hooked) return;
      unwrapEngine();
      D.removeEventListener("keydown", onKey, true);
      D.removeEventListener("keyup", onKey, true);
      hooked = null;
    }

    return {
      hook: hook,
      unhook: unhook,
      active: function () { return !!hooked; }
    };
  }

  var chat = chatCommand();

  // ---------- общая механика ----------
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
    chat.hook();
  }

  function tick(ts) {
    if (st.dead) return;
    if (ts - st.last > 33) { st.last = ts; readSpread(); }
    st.raf = W.requestAnimationFrame(tick);
  }

  var api = {
    version: "4.3.0",
    styles: function () { return Object.keys(STYLES); },
    current: function () { return curStyle; },
    setStyle: function (id) { return applyStyle(id); },
    hit: function () { flash("hit"); return api; },
    kill: function () { flash("kill"); return api; },
    show: function () { st.hide = false; flag("data-sc-hide", false); return api; },
    hide: function () { st.hide = true; flag("data-sc-hide", true); return api; },
    command: function (text) { return handleCommand(text); },
    destroy: function () {
      st.dead = true;
      W.cancelAnimationFrame(st.raf); clearInterval(st.poll); clearTimeout(st.t1); clearTimeout(st.t2);
      if (st.obs) try { st.obs.disconnect(); } catch (e) {}
      if (st.hooked && st.hooked.off) try { st.hooked.off("HitDamage", onHit); } catch (e) {}
      chat.unhook();
      var s = D.getElementById(SID); if (s) s.remove();
      var m = D.querySelectorAll(".hud-aim.sc-host");
      for (var i = 0; i < m.length; i++) m[i].classList.remove("sc-host");
      ["data-sc-off", "data-sc-hide", "data-sc-hit", "data-sc-kill"].forEach(function (a) { ROOT.removeAttribute(a); });
      ROOT.style.removeProperty("--sc-spread");
      try { delete W.SampCrosshair; } catch (e) { W.SampCrosshair = undefined; }
    }
  };

  var old = D.getElementById(SID); if (old) old.remove();
  applyStyle("1");
  sync();

  st.obs = new MutationObserver(function () { sync(); });
  st.obs.observe(D.body || ROOT, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });
  st.poll = setInterval(function () { if (!st.hooked) hook(); if (!chat.active()) chat.hook(); }, 700);
  st.raf = W.requestAnimationFrame(tick);

  W.SampCrosshair = api;
})();
