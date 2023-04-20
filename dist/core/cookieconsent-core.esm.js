/*!
* CookieConsent 3.0.0-rc.13
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='data-category';class n{constructor(){this.t={mode:e,revision:0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,C:null,v:null,S:null,h:'',D:!0,T:!1,N:!0,k:[],F:!1,I:'',j:!1,M:[],O:[],A:[],R:[],P:!1,B:!1,J:!1,L:[],U:[],G:null,H:[],q:[],K:{},V:{},W:{},X:{},Y:{},Z:[],$:[]},this.ee={te:{},oe:{}},this.ne={},this.se={ce:'cc:onFirstConsent',ae:'cc:onConsent',re:'cc:onChange'}}}const s=new n,c=(e,t)=>e.indexOf(t),a=(e,t)=>-1!==c(e,t),r=e=>Array.isArray(e),i=e=>'string'==typeof e,l=e=>!!e&&'object'==typeof e&&!r(e),f=e=>'function'==typeof e,d=e=>Object.keys(e),_=e=>Array.from(new Set(e)),u=e=>e.dispatchEvent(new Event('change')),p=e=>{const t=document.createElement(e);return'button'===e&&(t.type=e),t},m=(e,t,o)=>e.setAttribute(t,o),g=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},C=(e,t,o)=>e.getAttribute(o?'data-'+t:t),v=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=v(n)}return t},y=()=>{const e={},{M:t,K:o,V:n}=s.o;for(const s of t)e[s]=h(n[s],d(o[s]));return e},S=()=>{const e=s.t.cookie.expiresAfterDays;return f(e)?e(s.o.I):e},h=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!a(n,e))).concat(n.filter((e=>!a(o,e))))},b=e=>{s.o.O=_(e),s.o.I=(()=>{let e='custom';const{O:t,M:o,A:n}=s.o,c=t.length;return c===o.length?e='all':c===n.length&&(e='necessary'),e})()},w=(e,t,o)=>{const{re:n,ae:c,ce:a,ie:r,le:i,fe:l}=s.ne,d=s.se,_={cookie:s.o.p};e===d.ce?f(a)&&a(v(_)):e===d.ae?f(c)&&c(v(_)):(_.changedCategories=s.o.k,_.changedServices=s.o.X,f(n)&&n(v(_))),((e,t)=>{dispatchEvent(new CustomEvent(e,{detail:t}))})(e,v(_))},D=e=>{const{V:t,X:n,M:c,K:r,Z:i,$:l,p:d,k:_}=s.o;for(const e of c){const o=n[e]||t[e]||[];for(const n of o){const o=r[e][n];if(!o)continue;const{onAccept:s,onReject:c}=o;!o.de&&a(t[e],n)&&f(s)?(o.de=!0,s()):o.de&&!a(t[e],n)&&f(c)&&(o.de=!1,c())}}if(!s.t.manageScriptTags)return;const u=i,v=e||d.categories||[],y=(e,s)=>{if(s<e.length){const c=e[s],r=l[s],i=r._e,f=r.ue,d=a(v,i),u=!!f&&a(t[i],f);if(!r.pe){let t=!f&&!r.me&&d,l=f&&!r.me&&u,v=!f&&r.me&&!d&&a(_,i),S=f&&r.me&&!u&&a(n[i]||[],f);if(t||v||l||S){r.pe=!0;const t=C(c,'type',!0);g(c,'type',!!t),g(c,o);let n=C(c,'src',!0);n&&g(c,'src',!0);const a=p('script');a.textContent=c.innerHTML;for(const{nodeName:e}of c.attributes)m(a,e,c[e]||C(c,e));if(t&&(a.type=t),n?a.src=n:n=c.src,n&&(a.onload=a.onerror=()=>{y(e,++s)}),c.replaceWith(a),n)return}}y(e,++s)}};y(u,0)},T=e=>{const{hostname:t,protocol:o}=location,{name:n,path:c,domain:r,sameSite:i}=s.t.cookie,l=encodeURIComponent(JSON.stringify(s.o.p)),f=e?(()=>{const e=s.o.S,t=e?new Date-e:0;return 864e5*S()-t})():864e5*S(),d=new Date;d.setTime(d.getTime()+f);let _=n+'='+l+(0!==f?'; expires='+d.toUTCString():'')+'; Path='+c+'; SameSite='+i;a(t,'.')&&(_+='; Domain='+r),'https:'===o&&(_+='; Secure'),document.cookie=_,s.o.p},E=(e,t,o)=>{const n=o||s.t.cookie.domain,c=t||s.t.cookie.path,a='www.'===n.slice(0,4),r=a&&n.substring(4),i=(e,t)=>{document.cookie=e+'=; path='+c+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)i(t),i(t,n),a&&i(t,r)},N=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(k(e||s.t.cookie.name,!0)),k=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},x=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},F=(o,n=[])=>{((e,t)=>{const{M:o,O:n,A:c,ge:l,W:f,K:_}=s.o;let u=[];if(e){r(e)?u.push(...e):i(e)&&(u='all'===e?o:[e]);for(const e of o)f[e]=a(u,e)?d(_[e]):[]}else u=l?(()=>{const e=s.ee.te;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;u=u.filter((e=>!a(o,e)||!a(t,e))),u.push(...c),b(u)})(o,n),(e=>{const t=s.o,{W:o,A:n,V:c,K:r,M:i}=t,l=i;t.Y=v(c);for(const e of l){const t=r[e],s=d(t),i=o[e]?.length>0,l=a(n,e);if(0!==s.length){if(c[e]=[],l)c[e].push(...s);else if(i){const t=o[e];c[e].push(...t)}else c[e]=[];c[e]=_(c[e])}}})(),(()=>{const o=s.o;s.t.mode===t&&o.D?o.k=h(o.R,o.O):o.k=h(o.O,o.p.categories);let n=o.k.length>0,r=!1;for(const e of o.M)o.X[e]=h(o.V[e],o.Y[e]),o.X[e].length>0&&(r=!0);const i=s.ee.te;for(let e in i)i[e].checked=a(o.O,e);for(const e of o.M){const t=s.ee.oe[e],n=o.V[e];for(const e in t)t[e].checked=a(n,e)}o.v||(o.v=new Date),o.h||(o.h=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:v(o.O),revision:s.t.revision,data:o.C,consentTimestamp:o.v.toISOString(),consentId:o.h,services:v(o.V)};let l=!1;(o.D||n||r)&&(o.D&&(o.D=!1,l=!0),o.S?o.S=new Date:o.S=o.v,o.p.lastConsentTimestamp=o.S.toISOString(),T(),s.t.autoClearCookies&&(l||!o.D&&n)&&(e=>{const t=s.o,o=x();t.F=!1;let n=e?t.M:t.k;n=n.filter((e=>{let o=t.j[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const s of n){const n=t.j[s].autoClear,r=n?.cookies||[],i=a(t.k,s),l=!a(t.O,s),f=i&&l;if(e&&l||!e&&f){!0===n.reloadPage&&f&&(t.F=!0);for(const e of r){let t=[];const n=e.name,s=e.domain,a=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=c(o,n);e>-1&&t.push(o[e])}t.length>0&&E(t,a,s)}}}})(l),D()),l&&(w(s.se.ce),w(s.se.ae),s.t.mode===e)||((n||r)&&w(s.se.re),o.F&&location.reload())})()},I=e=>{const t=s.o.D?[]:s.o.O;return a(t,e)},j=(e,t)=>{const{M:o,K:n}=s.o;if(!(e&&t&&i(t)&&a(o,t)&&0!==d(n[t]).length))return!1;((e,t)=>{const o=s.o,{K:n,W:c,ge:l}=o,f=s.ee.oe[t]||{},p=s.ee.te[t]||{},m=d(n[t]);if(c[t]=[],i(e)){if('all'===e){if(c[t].push(...m),l)for(let e in f)f[e].checked=!0,u(f[e])}else if(a(m,e)&&c[t].push(e),l)for(let t in f)f[t].checked=e===t,u(f[t])}else if(r(e))for(let o of m){const n=a(e,o);n&&c[t].push(o),l&&(f[o].checked=n,u(f[o]))}const g=0===c[t].length;o.O=g?o.O.filter((e=>e!==t)):_([...o.O,t]),l&&(p.checked=!g,u(p))})(e,t),F()},M=(e,t)=>{const o=s.o.D?[]:s.o.V[t];return a(o,e)},O=e=>''!==k(e,!0),A=(e,t,o)=>{let n=[];const s=e=>{if(i(e)){let t=k(e);''!==t&&n.push(t)}else n.push(...x(e))};if(r(e))for(let t of e)s(t);else s(e);E(n,t,o)},R=()=>{const{I:e,V:t}=s.o,{accepted:o,rejected:n}=(()=>{const{D:e,O:t,M:o}=s.o;return{accepted:t,rejected:e?[]:o.filter((e=>!a(t,e)))}})();return v({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:y()})},P=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=p('script'),l(t))for(const e in t)m(o,e,t[e]);var s,c;o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,s=document.head,c=o,s.appendChild(c)}))},B=e=>{let t,o=e.value,n=e.mode,c=!1;const a=s.o;if('update'===n){a.C=t=J('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],c=!0)}else!e&&t||t===o||(t=o,c=!0)}else t=o,c=!0;return c&&(a.C=t,a.p.data=t,T(!0)),c},J=(e,t)=>{const o=N(t);return e?o[e]:o},L=e=>{const t=s.t,o=s.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},U=()=>!s.o.D,G=async e=>{const{o:n,t:c,se:f}=s,_=window;if(!_._ccRun){if(_._ccRun=!0,(e=>{const{ee:n,t:c,o:r}=s,i=c,f=r,{cookie:_}=i,u=s.ne,p=e.cookie,m=e.categories,g=d(m)||[],v=navigator,y=document;n.Ce=y,n.ve=y.documentElement,_.domain=location.hostname,f.i=e,f.j=m,f.M=g,u.ce=e.onFirstConsent,u.ae=e.onConsent,u.re=e.onChange;const{mode:S,autoClearCookies:h,revision:b,manageScriptTags:w,hideFromBots:D}=e;S===t&&(i.mode=S),'boolean'==typeof h&&(i.autoClearCookies=h),'boolean'==typeof w&&(i.manageScriptTags=w),'number'==typeof b&&b>=0&&(i.revision=b,f.T=!0),!1===D&&(i.hideFromBots=!1),!0===i.hideFromBots&&v&&(f.P=v.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(v.userAgent)||v.webdriver),l(p)&&(i.cookie={..._,...p}),i.autoClearCookies,f.T,i.manageScriptTags,(e=>{const{j:t,K:o,V:n,W:c,A:a}=s.o;for(let r of e){const e=t[r],i=e.services||{},f=l(i)&&d(i)||[];o[r]={},n[r]=[],c[r]=[],e.readOnly&&(a.push(r),n[r]=f),s.ee.oe[r]={};for(let e of f){const t=i[e];t.de=!1,o[r][e]=t}}})(g),(()=>{if(!s.t.manageScriptTags)return;const e=s.o;var t,n;e.Z=(t=s.ee.Ce,n='script['+o+']',t.querySelectorAll(n)),e.$=[];for(const t of e.Z){let n=C(t,o),s=t.dataset.service||'',c=!1;if(n&&'!'===n.charAt(0)&&(n=n.slice(1),c=!0),'!'===s.charAt(0)&&(s=s.slice(1),c=!0),a(e.M,n)&&(e.$.push({pe:!1,me:c,_e:n,ue:s}),s)){const t=e.K[n];t[s]||(t[s]={de:!1})}}})()})(e),n.P)return;if((()=>{const e=s.o,o=s.t,n=N(),{categories:c,services:a,consentId:l,consentTimestamp:f,lastConsentTimestamp:d,data:_,revision:u}=n,p=r(c);e.p=n,e.h=l;const m=!!l&&i(l);e.v=f,e.v&&(e.v=new Date(f)),e.S=d,e.S&&(e.S=new Date(d)),e.C=void 0!==_?_:null,e.T&&m&&u!==o.revision&&(e.N=!1),e.D=!(m&&e.N&&e.v&&e.S&&p),e.D,e.D?o.mode===t&&((()=>{const e=s.o;for(const t of e.M){const o=e.j[t];if(o.enabled||o.readOnly){e.R.push(t);const o=e.K[t]||{};for(let n in o)e.V[t].push(n)}}})(),e.O=[...e.R]):(e.V={...e.V,...a},b([...e.A,...c])),e.W={...e.V}})(),U())return D(),w(f.ae);c.mode===t&&D(n.R)}},H=e=>{const{name:t,path:o,domain:c}=s.t.cookie;e&&A(t,o,c);for(const{ye:e,Se:t,he:o}of s.o.m)e.removeEventListener(t,o);const a=new n;for(const e in s)s[e]=a[e];window._ccRun=!1};export{F as acceptCategory,j as acceptService,I as acceptedCategory,M as acceptedService,A as eraseCookies,L as getConfig,J as getCookie,R as getUserPreferences,P as loadScript,H as reset,G as run,B as setCookieData,U as validConsent,O as validCookie};
