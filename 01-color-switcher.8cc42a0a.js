!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]"),bodyRef:document.querySelector("body")},e=null;t.btnStop.disabled=!0,t.btnStart.addEventListener("click",(function(){e=setInterval((function(){t.bodyRef.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.btnStart.disabled=!0,t.btnStop.removeAttribute("disabled")})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),t.btnStop.disabled=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.8cc42a0a.js.map
