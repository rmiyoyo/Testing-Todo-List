(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(81),r=n.n(i),o=n(645),a=n.n(o),c=n(667),s=n.n(c),d=new URL(n(869),n.b),l=a()(r());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap);"]);var p=s()(d);l.push([e.id,`* {\n  box-sizing: border-box;\n  font-size: 1rem;\n}\n\n.hrzntl {\n  display: flex;\n  flex-direction: row;\n}\n\n.flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  background-color: #e0ffff;\n  height: auto;\n}\n\n.activity-zone {\n  width: 90%;\n  margin: 8% 5%;\n  box-shadow: 20px 10px 21px #2f4f4f;\n}\n\n.todo-container {\n  background-color: #d3d3d3;\n}\n\n.app-header {\n  border-bottom: 1px solid #708090;\n  height: 44px;\n  align-items: center;\n  padding-left: 1.9%;\n}\n\n.header-area,\n.userArea,\n.activity-area {\n  position: relative;\n}\n\ni {\n  position: absolute;\n  color: #2f4f4f;\n  right: 2.9%;\n  top: 15px;\n  font-size: 18px;\n}\n\n.header-area i,\n.userArea i {\n  right: 2.9%;\n}\n\ni:hover {\n  cursor: pointer;\n}\n\ni.bin {\n  right: 8%;\n}\n\ni.modify {\n  right: 13%;\n}\n\n.description-input {\n  width: 100%;\n  height: 45px;\n  border: 0 solid #2f4f4f;\n  border-bottom: 1px solid #2f4f4f;\n  padding-left: 1.9%;\n}\n\n.error-message {\n  margin: 0;\n  color: red;\n  font-size: 0.9rem;\n  padding-left: 1.9%;\n  transition: visibility 6s;\n}\n\n.description-input:focus {\n  outline: none;\n}\n\n.description-input::placeholder {\n  font-style: oblique;\n}\n\n.activity-area {\n  border-bottom: 1px solid #2f4f4f;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.activity-area:focus-within {\n  outline: none;\n  background-color: #708090;\n}\n\n.activity-description-area {\n  padding-left: 1.9%;\n  gap: 0.6rem;\n  width: 75%;\n}\n\n.activity-details {\n  width: 69%;\n  height: 45px;\n  margin: 2px;\n  padding: 15px;\n}\n\n.activity-details:focus {\n  outline: none;\n}\n\n.mark-activity:hover {\n  cursor: pointer;\n}\n\n.period-container {\n  gap: 0.2rem;\n  padding-right: 3%;\n}\n\n.period {\n  height: 6px;\n  width: 6px;\n  background-color: #000;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.period-container:hover {\n  cursor: url(${p}), move;\n}\n\n.period-container:hover .period {\n  background-color: #000;\n}\n\n.delete-finished-activities {\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  background-color: #708090;\n}\n\n.delete-finished-activities:hover {\n  cursor: url(${p}), move;\n  text-decoration: underline;\n}\n`,""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&a[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=i.base?s[0]+i.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var v=r(f,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:v,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var s=i(e,r),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},869:(e,t,n)=>{e.exports=n.p+"bc9344bc174473180276.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),r=n.n(i),o=n(569),a=n.n(o),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),f=n(426),v={};v.styleTagTransform=u(),v.setAttributes=s(),v.insert=a().bind(null,"head"),v.domAPI=r(),v.insertStyleElement=l(),t()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;const h=e=>{const t=document.querySelector(".todo-container"),n=[];for(let i=0;i<e.length;i+=1){n[i]=document.createElement("div"),n[i].classList.add("hrzntl","activity-area");for(let t=i;t<e.length;t+=1)e[t].index<e[i].index&&([e[i],e[t]]=[e[t],e[i]]);""!==e[i].description?(n[i].innerHTML=`<div class = "activity-description-area hrzntl">\n                                <input class = "confirmChoice${e[i].index} mark-activity" type = "checkbox">\n                                  <p class = "d${e[i].index} activity-details">${e[i].description}</p>\n                                </div>\n                                <div class = "d${e[i].index} display-periods period-container flex-column"><span class = "period"></span><span class = "period"></span><span class = "period"></span></div>\n                                <i class="d${e[i].index}  fa-regular fa-pen-to-square modify"></i>\n                                <i id = "d${e[i].index}" class="fa-regular fa-trash-can bin"></i>\n                                `,t.appendChild(n[i])):""!==e[i].description&&e[i].completed&&(n[i].innerHTML=`<div class = "activity-description-area hrzntl">\n      <input class = "confirmChoice${e[i].index} mark-activity" type = "checkbox" checked>\n      <p class = "d${e[i].index} activity-details">${e[i].description}</p>\n      </div>\n      <div class = "d${e[i].index} display-periods period-container flex-column"><span class = "period"></span><span class = "period"></span><span class = "period"></span></div>\n      <i class="d${e[i].index}  fa-regular fa-pen-to-square modify"></i>\n      <i id = "d${e[i].index}" class="fa-regular fa-trash-can bin"></i>\n      `,t.appendChild(n[i]),document.querySelector(`.d${e[i].index}`).style.textDecoration="line-through"),document.querySelector(`.d${e[i].index}`).contentEditable=!0}},m=new class{constructor(){this.activities=JSON.parse(localStorage.getItem("savedActivities"))||[]}addActivity=e=>{if(""!==e.description){const t={description:e.description,completed:!1,index:this.activities.length+1};this.activities.push(t),localStorage.setItem("savedActivities",JSON.stringify(this.activities))}return this.activities};removeActivity=e=>{this.activities.splice(e-1,1);for(let t=e-1;t<this.activities.length;t+=1)this.activities[t].index-=1;return localStorage.setItem("savedActivities",JSON.stringify(this.activities)),this.activities};modifyActivity=e=>{const t=document.querySelector(`.d${e}`).innerHTML;this.activities[e-1].description=t,localStorage.setItem("savedActivities",JSON.stringify(this.activities))};changeActivityState=e=>{this.activities[e-1].completed?this.activities[e-1].completed&&(this.activities[e-1].completed=!1,document.querySelector(`p.d${e}`).style.textDecoration="none"):(this.activities[e-1].completed=!0,document.querySelector(`p.d${e}`).style.textDecoration="line-through"),localStorage.setItem("savedActivities",JSON.stringify(this.activities))};deleteAllFinished=()=>{this.activities=this.activities.filter((e=>!1===e.completed));for(let e=0;e<this.activities.length;e+=1)this.activities[e].index=e+1;return localStorage.setItem("savedActivities",JSON.stringify(this.activities)),this.activities}},g=JSON.parse(localStorage.getItem("savedActivities"))||[];h(g);const y=document.querySelector("#activityDetails");document.querySelector("#activityCheck").addEventListener("click",(()=>{let e={};""===y.value&&(document.querySelector(".error-message").textContent="Error, Description cannot be blank"),""!==y.value&&(document.querySelector(".error-message").textContent="",e={description:y.value},document.querySelectorAll(".activity-area").forEach((e=>e.remove())),h(m.addActivity(e))),y.value=""}));const x=document.querySelector(".todo-container");x.addEventListener("click",(e=>{if(e.target&&e.target.matches("i.bin")){const t=Number(e.target.id.replace("d",""));document.querySelectorAll(".activity-area").forEach((e=>e.remove())),h(m.removeActivity(t))}if(e.target&&e.target.matches("i.modify")){const t=e.target.classList;document.querySelector(`p.${t[0]}`).focus()}if(e.target&&e.target.matches("input.mark-activity")){const t=e.target.classList;m.changeActivityState(Number(t[0].replace("confirmChoice","")))}})),x.addEventListener("input",(e=>{if(e.target&&e.target.matches("p")){const t=e.target.classList;m.modifyActivity(Number(t[0].replace("d","")))}})),document.querySelector(".delete-finished-activities").addEventListener("click",(()=>{m.deleteAllFinished(),document.querySelectorAll(".activity-area").forEach((e=>e.remove())),h(m.deleteAllFinished())}))})()})();