(()=>{var e=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},t=(t,s,i)=>(e(t,s,"read from private field"),i?i.call(t):s.get(t)),s=(t,s,i,n)=>(e(t,s,"write to private field"),n?n.call(t,i):s.set(t,i),i)
var i,n=()=>{if(!window||"node"!==window.appEnvironment){let e=document.getElementsByName("renderingMode")
return 1!==e.length?null:e[0].getAttribute("data-mode")}return null},r=class{constructor(e,t=!1,s=!1,i){this.type=e,this.bubbles=t,this.cancelable=s,this.target=i,this.defaultPrevented=void 0}stopPropagation(){}preventDefault(){this.defaultPrevented=!0}}
i=new WeakMap
function a(){return!!(window&&window.performance&&window.performance.getEntriesByName)}function o(e){if("string"!=typeof e)throw new Error("Expecting to receive a string but got "+typeof e)}var h,d,l,u,p,c,f,w,g,m,v=new WeakMap,E=class{constructor(e,i,n){h.set(this,void 0)
d.set(this,void 0)
l.set(this,void 0)
u.set(this,void 0)
p.set(this,void 0)
c.set(this,void 0)
f.set(this,void 0)
w.set(this,void 0)
g.set(this,void 0)
m.set(this,void 0)
s(this,h,{}),s(this,d,0),s(this,l,new Set),s(this,u,!0),s(this,p,""),this.status=0,this.readyState=0,s(this,f,e),s(this,w,i),s(this,c,n)
for(let e in i)t(this,l).add(e)
let r=["loadstart","load","loadend"]
for(let s of r)e.addEventListener(s,(e=>{let i=`on${s}`,n=t(this,w)[i]
n&&"function"==typeof n&&n.call(e.target,e)}))}INSPECT(){}getHeader(e){return"Content-Type"===e?"application/json":this.responseHeaders?this.responseHeaders[e]:void 0}getAllHeaders(){return this.readyState<2?"":this.responseHeaders?Object.entries(this.responseHeaders).reduce(((e,t)=>{let[s,i]=t
return e+`${s}: ${i}\r\n`}),"Content-Type: application/json\r\n"):"Content-Type: application/json\r\n"}addEvent(e,s){t(this,f).addEventListener(e,s)}removeEvent(e,s){t(this,f).removeEventListener(e,s)}isKnownKey(e){return t(this,l).has(e)}getState(){return void 0===t(this,g)?0:t(this,c).hasResponse(t(this,g))?(s(this,d,2),t(this,d)):j(t(this,g))||!t(this,c).isBufferingRequests()?(s(this,d,1),t(this,d)):t(this,d)}attachPostData(e){"POST"===t(this,m)&&(s(this,p,e),o(t(this,g)),s(this,g,O(t(this,g),e)))}open(e,t,i=!0){s(this,m,e.toUpperCase()),s(this,g,t),s(this,u,i),this.readyState=1}setRequestHeader(e,s){t(this,h)[e]?t(this,h)[e]+=`,${s}`:t(this,h)[e]=s}send(){o(t(this,g)),this.emitStartMarker(),t(this,c).addRequest(t(this,g),this),this.readyState=1,t(this,f).dispatchEvent(new r("loadstart"))}resolve(){this.send(),this.fulfill(),this.remove()}refire(){s(this,d,1),t(this,w).send(t(this,p)),this.remove()}fulfill(){o(t(this,g))
let e=t(this,c).getResponse(t(this,g))
!function(e){if(!("object"==typeof e&&null!==e&&"url"in e&&"status"in e&&"data"in e))throw new Error(`Expecting to receive a response but got ${typeof e} ${JSON.stringify(e)}`)}(e)
let{status:s,headers:i={},data:n}=e
this.status=s,this.headers(i),this.body(n),this.markFullfillment()}checkRequestBypass(){o(t(this,m)),A(t(this,m),I(t(this,m),t(this,h)))&&s(this,d,1)}remove(){o(t(this,g)),t(this,c).removeRequest(t(this,g),this)}markFullfillment(){if(a()){o(t(this,g))
let{start:e,end:s,measure:i}=this.createMarkerNames()
window.performance.getEntriesByName(e).length>0?(window.performance.mark(s),window.performance.measure(i,e,s)):window.jet&&window.jet.error(new Error(`start marker not found: ${e}`),["bpr","perf_measure"],!1)}}emitStartMarker(){if(a()){let{start:e}=this.createMarkerNames()
0===window.performance.getEntriesByName(e).length&&window.performance.mark(e)}}createMarkerNames(){o(t(this,g))
let e=`mark_bigpipe_${t(this,g)}`
return{measure:`${e}_phase`,start:`${e}_start`,end:`${e}_end`}}headers(e){this.responseHeaders=e,t(this,u)?this.stateChange(2):this.readyState=2}stateChange(e){this.readyState=e,"function"==typeof t(this,w).onreadystatechange&&t(this,w).onreadystatechange(new r("readystatechange")),t(this,f).dispatchEvent(new r("readystatechange")),4===this.readyState&&t(this,f).dispatchEvent(new r("load",!1,!1,t(this,w))),(0===this.readyState||4===this.readyState)&&t(this,f).dispatchEvent(new r("loadend",!1,!1,t(this,w)))}body(e){t(this,u)&&this.stateChange(3),this.responseText=e,this.response=e,t(this,u)?this.stateChange(4):this.readyState=4}}
h=new WeakMap,d=new WeakMap,l=new WeakMap,u=new WeakMap,p=new WeakMap,c=new WeakMap,f=new WeakMap,w=new WeakMap,g=new WeakMap,m=new WeakMap
var y=e=>new Proxy(XMLHttpRequest,{construct:n=>function(e,n){let r=new class{constructor(){i.set(this,void 0)
s(this,i,new Map)}dispatchEvent(e){var s
let{type:n}=e
t(this,i).has(n)&&(null==(s=t(this,i).get(n))||s.forEach((t=>{"function"==typeof t?t.call(this,e):t.handleEvent(e)})))}addEventListener(e,s){if(t(this,i).has(e)){let n=t(this,i).get(e)
void 0!==n&&n.push(s)}else t(this,i).set(e,[s])}removeEventListener(e,s){if(t(this,i).has(e)){let n=t(this,i).get(e),r=void 0===n?-1:n.indexOf(s);-1!==r&&(null==n||n.splice(r,1))}}},a=new Proxy(e,{set:(e,t,s)=>(e[t]=s,!0),get(e,t){let s=function(e,t){let s=e[t]
return"function"==typeof s?s.bind(e):s}(e,t)
switch(t){case"getResponseHeader":return function(e,t){return s=>{let i=v.get(e)
return R(i),1===i.getState()?t(s):i.getHeader(s)}}(a,s)
case"getAllResponseHeaders":return function(e,t){return()=>{let s=v.get(e)
return R(s),1===s.getState()?t():s.getAllHeaders()}}(a,s)
case"setRequestHeader":return function(e,t){return(s,i)=>{t(s,i)
let n=v.get(e)
R(n),0===n.getState()&&n.setRequestHeader(s,i)}}(a,s)
case"addEventListener":return function(e,t){return(s,i,n)=>{t(s,i,n)
let r=v.get(e)
R(r),r.addEvent(s,i)}}(a,s)
case"removeEventListener":return function(e,t){return(s,i)=>{t(s,i)
let n=v.get(e)
R(n),n.removeEvent(s,i)}}(a,s)
case"send":return function(e,t){return(s="")=>{let i=v.get(e)
if(R(i),1!==i.readyState&&1!==i.getState())throw new DOMException("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.")
switch(i.checkRequestBypass(),i.attachPostData(s),i.getState()){case 1:t(s)
break
case 2:i.resolve()
break
case 0:i.send()
break
default:return t(s)}}}(a,s)
case"open":return function(e,t){return(s,i,n=!0,r=null,a=null)=>{let o=v.get(e)
R(o),0===o.getState()&&o.open(s,i,n),t(s,i,n,r,a)}}(a,s)
default:return function(e,t,s,i){let n=v.get(e)
R(n)
let r=n.getState(),a=!n.isKnownKey(s)
if(1===r||a)return i
let o=n[s]
if(void 0!==o)return o
let h=t[s]
return function(e){return"function"==typeof e}(h)?0===r?h.bind(t):h.bind(e):i}(a,e,t,s)}}}),o=new E(r,a,n)
return v.set(a,o),a}(new n,e)})
function R(e){if(!(e instanceof E))throw new Error("Expecting a ShadowXHR but got "+typeof e)}function M(e,t){let s=document.querySelector(`meta[name="${e}"]`)
return s&&s.getAttribute("content")||t}var b=M("bigpipeResponseTimeout","12000"),k="string"==typeof b?parseInt(b):b,S=JSON.parse(M("bigpipeDenylistUrls","[]")),q=JSON.parse(M("bigpipeBlacklistUrls","[]"))
S.push(...q)
var P,T,W,_=S.map((e=>new RegExp(e)))
P=new WeakMap,T=new WeakMap,W=new WeakMap
var H,$,L,B,N,C,x,D="mark_data_streaming"
H=new WeakMap,$=new WeakMap,L=new WeakMap,B=new WeakMap,N=new WeakMap,C=new WeakMap,x=new WeakMap
function O(e,t){return t?`${e};${t}`:e}var j=e=>_.some((t=>t.test(e))),A=(e,t)=>"GET"!==e&&!t,I=(e,t={})=>"POST"===e&&"GET"===t["x-http-method-override"]
window._bpr=class{constructor(e){H.set(this,void 0)
$.set(this,void 0)
L.set(this,void 0)
B.set(this,void 0)
N.set(this,void 0)
C.set(this,void 0)
x.set(this,void 0)
s(this,H,!1),s(this,$,!1),s(this,L,!1),s(this,B,!1),s(this,C,setTimeout((()=>{this.handleResponseTimeout()}),k)),s(this,N,e),s(this,x,XMLHttpRequest),window.XMLHttpRequest=y(t(this,N)),this.attachDataletEventListener()}static create(){return new this(new class{constructor(e){P.set(this,void 0)
T.set(this,void 0)
W.set(this,void 0)
s(this,P,new Map),s(this,T,new Map),s(this,W,!0)}isBufferingRequests(){return t(this,W)}freeAllRequests(){s(this,W,!1)}hasResponse(e){return t(this,T).has(e)}hasRequest(e){return t(this,P).has(e)}removeRequest(e,s){var i,n
this.hasRequest(e)&&(null==(i=t(this,P).get(e))||i.delete(s),0===(null==(n=t(this,P).get(e))?void 0:n.size)&&t(this,P).delete(e))}addRequest(e,s){var i
t(this,P).has(e)?null==(i=t(this,P).get(e))||i.add(s):t(this,P).set(e,new Set([s]))}getResponse(e){if(this.hasResponse(e))return t(this,T).get(e)}fulfillAllPendingRequests(){for(let[e]of t(this,P))this.fulfillPendingRequestsFor(e)}fulfillPendingRequestsFor(e){var s
if(t(this,P).has(e))for(let i of null!=(s=t(this,P).get(e))?s:[])this.hasResponse(e)&&(i.fulfill(),i.remove())}refirePending(){for(let[e,s]of t(this,P))s.forEach((e=>e.refire())),t(this,T).delete(e)}addResponse(e){let{url:s}=e
t(this,T).set(s,e)}reset(){t(this,P).clear(),t(this,T).clear()}})}get isTerminated(){return t(this,$)}get isRendered(){return t(this,L)}get isLoaded(){return t(this,B)}getRenderMode(){return n()}isBigPipeMode(){return(()=>{let e=n()
return null!==e&&["BIGPIPE","SSRPIPE"].includes(e)})()}response(e){let s
s="object"!=typeof e?JSON.parse(this.getResponseData(e)):e
let{request:i}=s,{status:n,body:r,headers:a={}}=s,o=this.getResponseData(r)
s.method&&"POST"===s.method&&(i=O(i,s.encodedRequestBody))
let h={url:i,status:n,headers:a,data:o}
t(this,N).addResponse(h),t(this,N).fulfillPendingRequestsFor(i)}done(){if(t(this,$))throw new Error("Terminator cannot be called multiple times.")
s(this,$,!0),t(this,N).freeAllRequests(),this.clearResponseTimer(),t(this,N).fulfillAllPendingRequests(),t(this,N).refirePending(),t(this,L)&&this.reset()}rendered(){if(t(this,L))throw new Error("Initial page render cannot be called multiple times.")
s(this,L,!0),t(this,$)&&this.reset()}measureStreamingStart(){!1===t(this,H)&&(s(this,H,!0),a()&&window.performance.mark(`${D}_start`))}measureStreamingEnd(){if(a()){let e=`${D}_start`,t=`${D}_end`,s=`${D}_phase`
window.performance.getEntriesByName(e).length>0&&(window.performance.mark(t),window.performance.measure(s,e,t))}}attachDataletEventListener(){let e="datalet-bpr-guid",t=e.length,s=i=>{let n=i.target
if(n instanceof Element&&"IMG"===n.tagName){let i=n.classList
i=i||[],1===i.length&&i[0].substring(0,t)===e&&(this.measureStreamingStart(),this.response(i[0])),1===i.length&&"terminatorlet"===i[0]&&(this.measureStreamingEnd(),this.done(),document.removeEventListener("load",s,!0))}}
document.addEventListener("load",s,!0)}getResponseData(e){var t
let s=document.getElementById(e),i="{}"
return s&&(s.normalize(),i=(null==(t=s.firstChild)?void 0:t.nodeValue)||""),i}handleResponseTimeout(){console.info(`Terminator datalet is not seen within ${b} ms.`)}reset(){if(t(this,B))throw new Error("Bigpipe Client cannot be reset multiple times.")
t(this,N).reset(),s(this,B,!0),window.XMLHttpRequest=t(this,x)}clearResponseTimer(){t(this,C)&&clearTimeout(t(this,C))}}.create()
window._bigpipeClient=window._bpr
window._getRenderMode=window._bpr.getRenderMode.bind(window._bpr)
window._isBigPipeMode=window._bpr.isBigPipeMode.bind(window._bpr)})()

//# sourceMappingURL=bigpipe-v2.min.map