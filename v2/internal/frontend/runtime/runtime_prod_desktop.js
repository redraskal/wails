(()=>{var g=Object.defineProperty;var h=o=>g(o,"__esModule",{value:!0});var f=(o,n)=>{h(o);for(var e in n)g(o,e,{get:n[e],enumerable:!0})};var W={};f(W,{LogDebug:()=>T,LogError:()=>D,LogFatal:()=>F,LogInfo:()=>C,LogLevel:()=>U,LogPrint:()=>B,LogTrace:()=>R,LogWarning:()=>J,SetLogLevel:()=>G});function l(o,n){window.WailsInvoke("L"+o+n)}function R(o){l("T",o)}function B(o){l("P",o)}function T(o){l("D",o)}function C(o){l("I",o)}function J(o){l("W",o)}function D(o){l("E",o)}function F(o){l("F",o)}function G(o){l("S",o)}var U={TRACE:1,DEBUG:2,INFO:3,WARNING:4,ERROR:5};var E=class{constructor(n,e){e=e||-1,this.Callback=t=>(n.apply(null,t),e===-1?!1:(e-=1,e===0))}},s={};function d(o,n,e){s[o]=s[o]||[];let t=new E(n,e);s[o].push(t)}function I(o,n){d(o,n,-1)}function k(o,n){d(o,n,1)}function m(o){let n=o.name;if(s[n]){let e=s[n].slice();for(let t=0;t<s[n].length;t+=1){let r=s[n][t],i=o.data;r.Callback(i)&&e.splice(t,1)}s[n]=e}}function S(o){let n;try{n=JSON.parse(o)}catch(e){let t="Invalid JSON passed to Notify: "+o;throw new Error(t)}m(n)}function y(o){let n={name:o,data:[].slice.apply(arguments).slice(1)};m(n),window.WailsInvoke("EE"+JSON.stringify(n))}function L(o){s.delete(o),window.WailsInvoke("EX"+o)}var c={};function z(){var o=new Uint32Array(1);return window.crypto.getRandomValues(o)[0]}function A(){return Math.random()*9007199254740991}var p;window.crypto?p=z:p=A;function a(o,n,e){return e==null&&(e=0),new Promise(function(t,r){var i;do i=o+"-"+p();while(c[i]);var w;e>0&&(w=setTimeout(function(){r(Error("Call to "+o+" timed out. Request ID: "+i))},e)),c[i]={timeoutHandle:w,reject:r,resolve:t};try{let u={name:o,args:n,callbackID:i};window.WailsInvoke("C"+JSON.stringify(u))}catch(u){console.error(u)}})}function O(o){var n;try{n=JSON.parse(o)}catch(r){let i=`Invalid JSON passed to callback: ${r.message}. Message: ${o}`;throw wails.LogDebug(i),new Error(i)}var e=n.callbackid,t=c[e];if(!t){let r=`Callback '${e}' not registered!!!`;throw console.error(r),new Error(r)}clearTimeout(t.timeoutHandle),delete c[e],n.error?t.reject(n.error):t.resolve(n.result)}window.go={};function b(o){try{o=JSON.parse(o)}catch(n){console.error(n)}window.go=window.go||{},Object.keys(o).forEach(n=>{window.go[n]=window.go[n]||{},Object.keys(o[n]).forEach(e=>{window.go[n][e]=window.go[n][e]||{},Object.keys(o[n][e]).forEach(t=>{window.go[n][e][t]=function(){let r=0;function i(){let w=[].slice.call(arguments);return a([n,e,t].join("."),w,r)}return i.setTimeout=function(w){r=w},i.getTimeout=function(){return r},i}()})})})}var v={};f(v,{WindowCenter:()=>j,WindowFullscreen:()=>M,WindowGetPosition:()=>Z,WindowGetSize:()=>V,WindowHide:()=>K,WindowMaximise:()=>_,WindowMinimise:()=>no,WindowReload:()=>P,WindowSetMaxSize:()=>q,WindowSetMinSize:()=>N,WindowSetPosition:()=>X,WindowSetRGBA:()=>to,WindowSetSize:()=>Q,WindowSetTitle:()=>H,WindowShow:()=>Y,WindowUnFullscreen:()=>$,WindowUnmaximise:()=>oo,WindowUnminimise:()=>eo});function P(){window.location.reload()}function j(){window.WailsInvoke("Wc")}function H(o){window.WailsInvoke("WT"+o)}function M(){window.WailsInvoke("WF")}function $(){window.WailsInvoke("Wf")}function Q(o,n){window.WailsInvoke("Ws:"+o+":"+n)}function V(){return a(":wails:WindowGetSize")}function q(o,n){window.WailsInvoke("WZ:"+o+":"+n)}function N(o,n){window.WailsInvoke("Wz:"+o+":"+n)}function X(o,n){window.WailsInvoke("Wp:"+o+":"+n)}function Z(){return a(":wails:WindowGetPos")}function K(){window.WailsInvoke("WH")}function Y(){window.WailsInvoke("WS")}function _(){window.WailsInvoke("WM")}function oo(){window.WailsInvoke("WU")}function no(){window.WailsInvoke("Wm")}function eo(){window.WailsInvoke("Wu")}function to(o){let n=JSON.stringify(o);window.WailsInvoke("Wr:"+n)}var x={};f(x,{BrowserOpenURL:()=>io});function io(o){window.WailsInvoke("BO:"+o)}function ro(){window.WailsInvoke("Q")}window.runtime={...W,...v,...x,EventsOn:I,EventsOnce:k,EventsOnMultiple:d,EventsEmit:y,EventsOff:L,Quit:ro};window.wails={Callback:O,EventsNotify:S,SetBindings:b,eventListeners:s,callbacks:c};window.wails.SetBindings(window.wailsbindings);delete window.wails.SetBindings;delete window.wailsbindings;window.addEventListener("mousedown",o=>{let n=o.target;for(;n!=null&&!n.hasAttribute("data-wails-no-drag");){if(n.hasAttribute("data-wails-drag")){window.WailsInvoke("drag");break}n=n.parentElement}});})();