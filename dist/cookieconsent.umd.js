/*!
* CookieConsent 3.0.0-beta.1
* https://github.com/orestbida/cookieconsent.git
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(){'use strict';const e={mode:'opt-in',revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},t={t:0,o:0,i:0},a='cc:onFirstConsent',n='cc:onConsent',r='cc:onChange',o=e=>{const o={cookie:s.l};function i(e){return'function'==typeof e}function c(e){return JSON.parse(JSON.stringify(e))}e===a&&i(t.t)&&t.t(c(o)),e===n&&i(t.o)&&t.o(c(o)),e===r&&(o.changedCategories=s._,o.changedServices=s.v,i(t.i)&&t.i(c(o))),window.dispatchEvent(new CustomEvent(e,{detail:c(o)}))},i={p:0,u:0,m:0,g:0,h:0,C:0,S:0,k:0,T:0,M:0,A:0,N:0,D:0,B:0,O:0,J:0,V:0,H:0,j:0,F:0,I:0,P:0,G:0,L:0,R:0,U:0,q:0,X:0,K:0,W:{},Y:{}},c=e.cookie,l='data-category',s={Z:null,$:'',ee:{},te:null,l:null,ae:null,ne:null,re:null,oe:'',ie:!0,ce:!1,le:!1,se:!1,de:!1,_e:!1,ve:[],fe:!1,pe:!0,_:[],ue:!1,me:'',ge:!1,be:[],ye:[],he:[],we:[],Ce:!1,Se:!1,ke:!1,Te:[],xe:[],Me:[],Ae:{},Ne:{},De:{},v:{},Be:{},Oe:[],Je:[]},d=(e,t)=>-1!==e.indexOf(t),_=e=>{var t=document.createElement(e);return'button'===e&&v(t,'type',e),t},v=(e,t,a)=>{e.setAttribute(t,a)},f=(e,t)=>{e.appendChild(t)},p=(e,t,a,n)=>{e.addEventListener(t,a,!0===n&&{passive:!0})},u=e=>{if('object'==typeof e)return Object.keys(e)},m=(e,t)=>{e.classList.add(t)},g=(e,t)=>{e.classList.remove(t)},b=()=>{var e=c.expiresAfterDays;return'function'==typeof e?e(s.me):e},y=(e,t)=>e.filter((e=>!d(t,e))).concat(t.filter((t=>!d(e,t)))),h=e=>{var t='custom';return e.accepted.length===s.be.length?t='all':e.accepted.length===s.he.length&&(t='necessary'),t},w=()=>{s.me=h(S())},C=(e,t)=>{for(var a='accept-',n=s('show-preferencesModal'),r=s('show-consentModal'),o=s(a+'all'),i=s(a+'necessary'),c=s(a+'custom'),l=0;l<n.length;l++)v(n[l],'aria-haspopup','dialog'),p(n[l],'click',(e=>{e.preventDefault(),t.showPreferences()}));for(l=0;l<r.length;l++)v(r[l],'aria-haspopup','dialog'),p(r[l],'click',(e=>{e.preventDefault(),t.show(!0)}));for(l=0;l<o.length;l++)p(o[l],'click',(e=>{d(e,'all')}));for(l=0;l<c.length;l++)p(c[l],'click',(e=>{d(e)}));for(l=0;l<i.length;l++)p(i[l],'click',(e=>{d(e,[])}));function s(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function d(e,a){e.preventDefault(),t.accept(a),t.hidePreferences(),t.hide()}},S=()=>{var e=s.be.filter((e=>!d(s.ye,e)));return{accepted:s.ye,rejected:e}},k=t=>{if(e.manageScriptTags){var a=s.Oe,n=t||s.l.categories||[],r=s.Ne,o=(e,t)=>{if(t<e.length){var a=e[t],i=s.Je[t],c=i.Ee,f=i.Ve,p=d(n,c),u=!!f&&d(r[c],f);if(!i.He){var m=!i.je&&p,g=!i.je&&u,b=i.je&&!p&&d(s._,c),y=i.je&&!u&&d(s.v[c]||[],f);if(m||b||g||y){i.He=!0,a.removeAttribute('type'),a.removeAttribute(l);var h=a.getAttribute('data-src');h&&a.removeAttribute('data-src');var w=_('script');if(w.textContent=a.innerHTML,((e,t)=>{for(var a=t.attributes,n=a.length,r=0;r<n;r++){var o=a[r].nodeName;v(e,o,t[o]||t.getAttribute(o))}})(w,a),h?w.src=h:h=a.src,h&&(w.onload=w.onerror=()=>{w.onload=w.onerror=null,o(e,++t)}),a.parentNode.replaceChild(w,a),h)return}}o(e,++t)}};s.be.forEach((e=>{(s.v[e]||s.Ne[e]||[]).forEach((t=>{const a=s.Ae[e][t];!a.enabled&&d(s.Ne[e],t)&&'function'==typeof a.onAccept?(a.enabled=!0,a.onAccept()):a.enabled&&!d(s.Ne[e],t)&&'function'==typeof a.onAccept&&(a.enabled=!1,a.onReject())}))})),o(a,0)}},T=e=>{var t=s.Z.guiOptions,a=t&&t.consentModal,n=t&&t.preferencesModal;function r(e,t,a,n,r,o){var c=a&&a.layout,l=a&&a.position,s=a&&!0===a.flipButtons,_=a&&!1===a.equalWeightButtons,v=c&&c.split(' ')||[],f=l&&l.split(' ')||[],p=v[0],u=v[1],b=f[0],y='pm--'===n?f[0]:f[1],h=p,w=t[p];w||(w=t[r],h=r);var C=d(w.Fe,u)&&u,S=d(w.Ie,b)?b:w.Pe,k=d(w.Ge,y)?y:w.Le;e.className=o,m(e,n+h),C&&m(e,n+C),S&&m(e,n+S),k&&m(e,n+k),s&&m(e,n+'flip');var T='btn--secondary',x=o+'__';'cm'===o?(i.O&&g(i.O,x+T),i.H&&g(i.H,x+T),_&&(i.O&&m(i.O,x+T),i.H&&m(i.H,x+T))):(i.X&&g(i.X,x+T),_&&i.X&&m(i.X,x+T))}if(0===e&&s.ce){var o=['middle','top','bottom'],c=['left','center','right'],l={box:{Fe:['wide','inline'],Ie:o,Ge:c,Pe:'bottom',Le:'right'},cloud:{Fe:['inline'],Ie:o,Ge:c,Pe:'bottom',Le:'center'},bar:{Fe:['inline'],Ie:o.slice(1),Ge:[],Pe:'bottom',Le:''}};r(i.C,l,a,'cm--','box','cm')}1===e&&r(i.j,{box:{Fe:[],Ie:[],Ge:[],Pe:'',Le:''},bar:{Fe:['wide'],Ie:[],Ge:['left','right'],Pe:'',Le:'left'}},n,'pm--','box','pm')},x=e=>{var t=s.te.consentModal;if(t){!0===s.Z.disablePageInteraction&&m(i.u,'disable--interaction');var a=t.acceptAllBtn,n=t.acceptNecessaryBtn,r=t.showPreferencesBtn,o=t.closeIconLabel,c=t.footer;i.g||(i.g=_('div'),i.C=_('div'),i.S=_('div'),i.k=_('div'),i.A=_('div'),m(i.g,'cm-wrapper'),m(i.C,'cm'),m(i.S,'cm__body'),m(i.k,'cm__texts'),m(i.A,'cm__btns'),v(i.C,'role','dialog'),v(i.C,'aria-modal','true'),v(i.C,'aria-hidden','false'),v(i.C,'aria-labelledby','cm__title'),v(i.C,'aria-describedby','cm__desc'),i.C.style.visibility='hidden',o&&(i.H||(i.H=_('button'),i.H.className='cm__btn cm__btn--close',p(i.H,'click',(()=>{e.hide(),e.accept([])})),f(i.S,i.H)),v(i.H,'aria-label',o)),f(i.S,i.k),(a||n||r)&&f(i.S,i.A),f(i.C,i.S),f(i.g,i.C),f(i.m,i.g));var l=t.title;l&&(i.T||(i.T=_('div'),i.T.className=i.T.id='cm__title',v(i.T,'role','heading'),v(i.T,'aria-level','2'),f(i.k,i.T)),i.T.innerHTML=l);var d=t.description;if(d&&(s.fe&&(d=d.replace('{{revisionMessage}}',s.pe?'':t.revisionMessage||'')),i.M||(i.M=_('div'),i.M.className=i.M.id='cm__desc',f(i.k,i.M)),i.M.innerHTML=d),a&&(i.B||(i.B=_('button'),m(i.B,'cm__btn'),p(i.B,'click',(()=>{e.hide(),e.accept('all')}))),i.B.innerHTML=a),n&&(i.O||(i.O=_('button'),m(i.O,'cm__btn'),p(i.O,'click',(()=>{e.hide(),e.accept([])}))),i.O.innerHTML=n),r&&(i.J||(i.J=_('button'),i.J.className='cm__btn cm__btn--secondary',p(i.J,'click',(()=>{e.showPreferences()}))),i.J.innerHTML=r),!i.D&&r&&(i.D=_('div'),m(i.D,'cm__btn-group'),f(i.D,i.J),f(i.A,i.D)),i.N||(i.N=_('div'),m(i.N,'cm__btn-group'),n&&f(i.N,i.O),a&&f(i.N,i.B),(a||n)&&f(i.S,i.N),f(i.A,i.N)),c){if(!i.V){var u=_('div'),g=_('div');i.V=_('div'),m(u,'cm__footer'),m(g,'cm__links'),m(i.V,'cm__link-group'),f(g,i.V),f(u,g),f(i.C,u)}i.V.innerHTML=c}s.ce=!0,T(0)}},M=e=>{var t=s.te.preferencesModal;if(t){var a=t.title,n=t.closeIconLabel,r=t.acceptAllBtn,o=t.acceptNecessaryBtn,c=t.savePreferencesBtn,l=t.sections;if(i.h)i.L=_('div'),m(i.L,'pm__body');else{i.h=_('div'),m(i.h,'pm-wrapper'),i.j=_('div'),i.j.style.visibility='hidden',m(i.j,'pm'),v(i.j,'role','dialog'),v(i.j,'aria-hidden',!0),v(i.j,'aria-modal',!0),p(i.u,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()}),!0),i.F=_('div'),m(i.F,'pm__header'),i.I=_('div'),m(i.I,'pm__title'),v(i.I,'role','heading'),i.P=_('button'),m(i.P,'pm__close-btn'),v(i.P,'aria-label',t.closeIconLabel||''),p(i.P,'click',(()=>{e.hidePreferences()})),i.G=_('div'),m(i.G,'pm__body'),i.U=_('div'),m(i.U,'pm__footer');var d=_('div');m(d,'pm__btns');var b=_('div'),y=_('div');m(b,'pm__btn-group'),m(y,'pm__btn-group'),f(i.U,y),f(i.U,b),f(i.F,i.I),f(i.F,i.P),f(i.j,i.F),f(i.j,i.G),f(i.j,i.U),f(i.h,i.j),f(i.m,i.h)}a&&(i.I.innerHTML=a,n&&v(i.P,'aria-label',n)),l&&l.forEach((e=>{var a=e.title,n=e.description,r=e.linkedCategory,o=r&&s.ge[r],c=e.cookieTable,l=c&&c.body,d=l&&l.length>0,b=!!o,y=b&&s.Ae[r]||!1,h=y&&u(y)||[],w=b&&(!!n||!!d||u(y).length>0),C=_('div');if(m(C,'pm__section'),w||n){var S=_('div');m(S,'pm__section-desc-wrapper')}if(w&&h.length>0){var k=_('div');m(k,'pm__section-services'),h.forEach((e=>{var t=y[e].label||e,a=_('div'),n=_('div'),i=_('div'),c=_('span'),l=_('div');m(a,'pm__service'),m(l,'pm__service-title'),m(c,'gg-code-slash'),m(n,'pm__service-header'),m(i,'pm__service-icon');var s=A(t,e,o,0,!0,r);l.innerHTML=t,f(i,c),f(n,i),f(n,l),f(a,n),f(a,s),f(k,a)})),f(S,k)}if(a){var T=_('div'),x=_(b?'button':'div');if(m(T,'pm__section-title-wrapper'),m(x,'pm__section-title'),x.innerHTML=a,f(T,x),b){C.className+='--toggle';var M=A(a,r,o);if(h.length>0){var N=_('span');m(N,'pm__service-counter'),v(N,'aria-hidden',!0),v(N,'data-servicecounter',h.length);var D=t.serviceCounterLabel;D&&'string'==typeof D&&v(N,'data-counterlabel',D),f(x,N)}if(w){m(C,'pm__section--expandable');var B=r+'-desc';v(x,'aria-expanded',!1),v(x,'aria-controls',B)}f(T,M)}else v(x,'role','heading'),v(x,'aria-level','3');f(C,T)}if(n){var O=_('div');m(O,'pm__section-desc'),O.innerHTML=n,f(S,O)}if(w&&(v(S,'aria-hidden','true'),S.id=B,((e,t,a)=>{p(x,'click',(()=>{t.classList.contains('is-expanded')?(g(t,'is-expanded'),v(a,'aria-expanded','false'),v(e,'aria-hidden','true')):(m(t,'is-expanded'),v(a,'aria-expanded','true'),v(e,'aria-hidden','false'))}),!1)})(S,C,x),d)){var J=_('table'),E=_('thead'),V=_('tbody');m(J,'pm__section-table'),m(E,'pm__table-head'),m(V,'pm__table-body');var H=c.headers,j=u(H),F=i.p.createDocumentFragment(),I=_('tr');v(I,'role','row');for(var P=0;P<j.length;P++){var G=H[j[P]],L=_('th');L.id='cc__row-'+G,v(L,'role','columnheader'),v(L,'scope','col'),m(L,'pm__table-th'),L.innerHTML=G,f(F,L)}f(I,F),f(E,I);var R=i.p.createDocumentFragment();for(P=0;P<l.length;P++){var U=l[P],q=_('tr');v(q,'role','row'),m(q,'pm__table-tr');for(var X=0;X<j.length;X++){var z=j[X],K=H[z],Q=U[z],W=_('td'),Y=_('div');m(W,'pm__table-td'),v(W,'data-column',K),v(W,'headers','cc__row-'+K),Y.insertAdjacentHTML('beforeend',Q),f(W,Y),f(q,W)}f(R,q)}f(V,R),f(J,E),f(J,V),f(S,J)}(w||n)&&f(C,S),f(i.G,C),i.L?f(i.L,C):f(i.G,C)})),(r||o)&&(o&&(i.X||(i.X=_('button'),m(i.X,'pm__btn'),f(b,i.X),p(i.X,'click',(()=>{h([])}))),i.X.innerHTML=o),r&&(i.q||(i.q=_('button'),m(i.q,'pm__btn'),f(b,i.q),p(i.q,'click',(()=>{h('all')}))),i.q.innerHTML=r)),c&&(i.K||(i.K=_('button'),i.K.className='pm__btn pm__btn--secondary',f(y,i.K),p(i.K,'click',(()=>{h()}))),i.K.innerHTML=c),i.L&&(i.j.replaceChild(i.L,i.G),i.G=i.L),T(1)}function h(t){e.accept(t),e.hidePreferences(),e.hide()}};function A(e,t,a,n,r,o){var c=_('label'),u=_('input'),g=_('span'),b=_('span'),y=_('span'),h=_('span');if(u.type='checkbox',m(c,'section__toggle-wrapper'),m(u,'section__toggle'),m(y,'toggle__icon-on'),m(h,'toggle__icon-off'),m(g,'toggle__icon'),m(b,'toggle__label'),v(g,'aria-hidden','true'),r?(m(c,'toggle-service'),m(u,'toggle-service'),v(u,l,o),i.Y[o][t]=u):i.W[t]=u,r?(e=>{p(u,'change',(()=>{var t=i.Y[e],a=i.W[e];for(var n in s.De[e]=[],t){const a=t[n];a.checked&&s.De[e].push(a.value)}s.De[e].length>0?a.checked=!0:a.checked=!1}))})(o):(e=>{p(u,'click',(()=>{var t=i.Y[e];if(s.De[e]=[],u.checked)for(var a in t)t[a].checked=!0;else for(a in t)t[a].checked=!1}))})(t),u.value=t,b.textContent=e,f(g,h),f(g,y),s.ie)(a.enabled||a.readOnly)&&(u.checked=!0);else if(r){var w=s.Ne[o];w&&d(w,t)&&(u.checked=!0)}else d(s.l.categories,t)&&(u.checked=!0);return a.readOnly&&(u.disabled=!0),f(c,u),f(c,g),f(c,b),c}const N=e=>{var t=u(s.ee);return d(t,e)?e:d(t,s.$)?s.$:t[0]},D=(e,t)=>{e&&(s.$=N(e)),s.te=s.ee[s.$],'string'==typeof s.te?((e,t)=>{var a=new XMLHttpRequest;a.onreadystatechange=()=>{if(4===a.readyState){var e,n=a.status;if(200===n)try{e=JSON.parse(a.responseText)}catch(e){}else a.statusText;t(n,e)}},a.open(e.method,e.path),a.send(e.data)})({method:'GET',path:s.te},((e,a)=>{200===e&&(s.te=a,s.ee[s.$]=a,t())})):(s.te=s.ee[s.$],t())},B=e=>{var t=c.domain;s.ue=!1;var a=H(),n=[t,'.'+t];if('www.'===t.slice(0,4)){var r=t.substring(4);n.push(r,'.'+r)}var o,i=e?s.be:s._;i=i.filter((e=>{var t=s.ge[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var l=0;l<i.length;l++){var _=i[l],v=s.ge[_].autoClear,f=v&&v.cookies||[],p=d(s._,_),u=!d(s.ye,_),m=p&&u;if(e&&u||!e&&m){var g=f.length;!0===v.reloadPage&&m&&(s.ue=!0);for(var b=0;b<g;b++){var y=[],h=f[b].name,w=!!h&&'string'!=typeof h,C=f[b].domain||null,S=f[b].path||!1;if(C&&(n=[C,'.'+C]),w)for(var k=0;k<a.length;k++)h.test(a[k])&&y.push(a[k]);else{var T=(o=h,a.indexOf(o));T>-1&&y.push(a[T])}y.length>0&&E(y,S,n)}}}},O=(e,t,a)=>{var n,r=encodeURIComponent(t),o=a?(n=s.re?new Date-s.re:0,864e5*b()-n):864e5*b(),l=new Date;l.setTime(l.getTime()+o);var _=e+'='+(r||'')+(0!==o?'; expires='+l.toUTCString():'')+'; Path='+c.path+';';_+=' SameSite='+c.sameSite+';',d(window.location.hostname,'.')&&(_+=' Domain='+c.domain+';'),'https:'===window.location.protocol&&(_+=' Secure;'),i.p.cookie=_,JSON.parse(decodeURIComponent(r))},J=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},E=(e,t,a)=>{for(var n=t||'/',r=0;r<e.length;r++){for(var o=0;o<a.length;o++)i.p.cookie=e[r]+'=; path='+n+(d(a[o],'.')?'; domain='+a[o]:'')+'; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';e[r]}},V=(e,t)=>{let a=i.p.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return a=a?t?a.pop():e:'',a},H=e=>{const t=i.p.cookie.split(/;\s*/);let a=[];for(var n=0;n<t.length;n++){let r=t[n].split('=')[0];if(e)try{e.test(r)&&a.push(r)}catch(e){}else a.push(r)}return a},j={accept:(t,l)=>{var _=t||void 0,v=l||[],f=!1,p=[];if(_)if('object'==typeof _&&'number'==typeof _.length)for(var m=0;m<_.length;m++)d(s.be,_[m])&&p.push(_[m]);else'string'==typeof _&&('all'===_?p=s.be.slice():d(s.be,_)&&p.push(_));else p=(()=>{var e=i.W,t=[];for(var a in e)e[a].checked&&t.push(e[a].value);return t})(),f=!0;if(v.length>=1)for(m=0;m<v.length;m++)p=p.filter((e=>e!==v[m]));for(m=0;m<s.he.length;m++)d(p,s.he[m])||p.push(s.he[m]);s.ye=p,w(),f||(s.De={}),s.Be=JSON.parse(JSON.stringify(s.Ne)),s.be.forEach((e=>{var t=i.Y[e];if(0===u(t).length)return;const a=s.Ae[e],n=u(a);if(s.Ne[e]=[],d(s.he,e))n.forEach((t=>{s.Ne[e].push(t)}));else if('all'===s.me)f&&s.De[e]&&s.De[e].length>0?s.De[e].forEach((t=>{s.Ne[e].push(t)})):n.forEach((t=>{s.Ne[e].push(t)}));else if('necessary'===s.me)s.Ne[e]=[];else if(f&&s.De[e]&&s.De[e].length>0)s.De[e].forEach((t=>{s.Ne[e].push(t)}));else for(let a in t){const n=t[a];n.checked&&s.Ne[e].push(n.value)}})),(()=>{s._=y(s.ye,s.l.categories||[]);var t=s._.length>0,l=!1;s.be.forEach((e=>{s.v[e]=y(s.Ne[e]||[],s.Be[e]||[]),s.v[e].length>0&&(l=!0)}));var _=i.W;for(var v in _)d(s.ye,v)?_[v].checked=!0:_[v].checked=!1;s.be.forEach((e=>{var t=i.Y[e],a=s.Ne[e];for(var n in t){const e=t[n];d(a,n)?e.checked=!0:e.checked=!1}})),!s.ie&&e.autoClearCookies&&t&&B(),s.ne||(s.ne=new Date),s.oe||(s.oe=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),s.l={categories:JSON.parse(JSON.stringify(s.ye)),revision:e.revision,data:s.ae,consentTimestamp:s.ne.toISOString(),consentId:s.oe,services:JSON.parse(JSON.stringify(s.Ne))};var f=!1;(s.ie||t||l)&&(s.ie&&(s.ie=!1,f=!0),w(),s.re?s.re=new Date:s.re=s.ne,s.l.lastConsentTimestamp=s.re.toISOString(),O(c.name,JSON.stringify(s.l)),k()),f&&(e.autoClearCookies&&B(!0),o(a),o(n),'opt-in'===e.mode)||((t||l)&&o(r),s.ue&&window.location.reload())})()},acceptService:(e,t)=>{if(!e||!t||'string'!=typeof t||!d(s.be,t))return!1;const a=i.Y[t]||{};if(s.De[t]=[],'string'==typeof e)if('all'===e)for(var n in a)a[n].checked=!0,r(a[n]);else for(n in a)a[n].checked=e===n,r(a[n]);else if('object'==typeof e&&Array.isArray(e))for(n in a)d(e,n)?a[n].checked=!0:a[n].checked=!1,r(a[n]);function r(e){e.dispatchEvent(new Event('change'))}j.accept()},validCookie:e=>''!==V(e,!0),eraseCookies:(e,t,a)=>{var n=[],r=c.domain,o=a?[a,'.'+a]:[r,'.'+r];if(Array.isArray(e))for(var i=0;i<e.length;i++)l(e[i]);else l(e);function l(e){if('string'==typeof e){let t=V(e);''!==t&&n.push(t)}else n=n.concat(H(e))}E(n,t,o)},setLanguage:(e,t)=>{if('string'==typeof e){var a=N(e);return(a!==s.$||!0===t)&&(s.$=a,D(s.$,(()=>{s.ce&&(x(j),C(i.Re,j)),M(j)})),!0)}},getUserPreferences:()=>{var e,t=!s.ie&&S();return{acceptType:s.me,acceptedCategories:s.ie?[]:t.accepted,rejectedCategories:s.ie?[]:t.rejected,acceptedServices:s.ie?{}:s.Ne,rejectedServices:s.ie?{}:(e={},s.be.forEach((t=>{e[t]=y(s.Ne[t]||[],u(s.Ae[t])||[])})),e)}},loadScript:(e,t,a)=>{var n='function'==typeof t;if(i.p.querySelector('script[src="'+e+'"]'))n&&t();else{var r=_('script');if(a&&a.length>0)for(var o=0;o<a.length;++o)a[o]&&v(r,a[o].name,a[o].value);n&&(r.onload=t),r.src=e,f(i.p.head,r)}},setCookieData:e=>{var t=e.value,a=!1;if('update'===e.mode){s.ae=j.getCookie('data');var n=typeof s.ae==typeof t;if(n&&'object'==typeof s.ae)for(var r in!s.ae&&(s.ae={}),t)s.ae[r]!==t[r]&&(s.ae[r]=t[r],a=!0);else!n&&s.ae||s.ae===t||(s.ae=t,a=!0)}else s.ae=t,a=!0;return a&&(s.l.data=s.ae,O(c.name,JSON.stringify(s.l),!0)),a},getCookie:(e,t)=>{var a=J(V(t||c.name,!0));return e?a[e]:a},getConfig:t=>e[t]||s.Z[t],updateScripts:()=>{k()},show:e=>{!0===e&&x(j),s.ce&&(m(i.u,'show--consent'),v(i.C,'aria-hidden','false'),s.le=!0,setTimeout((()=>{s.Se=i.p.activeElement,s.ve=s.Te}),200))},hide:()=>{s.ce&&(g(i.u,'show--consent'),v(i.C,'aria-hidden','true'),s.le=!1,setTimeout((()=>{s.Se.focus(),s.ve=null}),200))},hidePreferences:()=>{g(i.u,'show--preferences'),s.se=!1,v(i.j,'aria-hidden','true'),setTimeout((()=>{s._e=!1}),1),s.le?(s.ke&&s.ke.focus(),s.ve=s.Te):(s.Se&&s.Se.focus(),s.ve=null),s.de=!1},acceptedCategory:t=>{var a;return a=s.ie&&'opt-in'!==e.mode?s.we:S().accepted||[],d(a,t)},acceptedService:(e,t)=>d(s.Ne[t]||[],e),showPreferences:()=>{m(i.u,'show--preferences'),v(i.j,'aria-hidden','false'),s.se=!0,setTimeout((()=>{s._e=!0}),1),setTimeout((()=>{s.le?s.ke=i.p.activeElement:s.Se=i.p.activeElement,0!==s.xe.length&&(s.xe[3]?s.xe[3].focus():s.xe[0].focus(),s.ve=s.xe)}),200)},validConsent:()=>!s.ie,run:a=>{if(!i.p.getElementById('cc-main')){if((a=>{s.Z=a,s.ee=a.language.translations,s.ge=s.Z.categories,'boolean'==typeof a.autoShow&&(e.autoShow=a.autoShow);var n=a.cookie;if(n&&'object'==typeof n){var r=n.name,o=n.domain,_=n.path,v=n.sameSite,f=n.expiresAfterDays;r&&(c.name=r),o&&(c.domain=o),_&&(c.path=_),v&&(c.sameSite=v),f&&(c.expiresAfterDays=f)}t.t=a.onFirstConsent,t.o=a.onConsent,t.i=a.onChange;var p=a.mode,m=a.revision,g=a.autoClearCookies,b=a.manageScriptTags,y=a.hideFromBots;'opt-out'===p&&(e.mode=p),'number'==typeof m&&(m>-1&&(e.revision=m),s.fe=!0),'boolean'==typeof g&&(e.autoClearCookies=g),'boolean'==typeof b&&(e.manageScriptTags=b),!1===y&&(e.hideFromBots=!1),!0===e.hideFromBots&&(s.Ce=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),e.autoClearCookies,s.fe,e.manageScriptTags;var h=s.Z.language.default;h&&(s.$=h),s.$=function(){var e,t=s.Z.language.autoDetect;if(t){if('browser'===t)return N(((e=navigator.language||navigator.browserLanguage).length>2&&(e=e[0]+e[1]),e.toLowerCase()));if('document'===t)return N(i.p.documentElement.lang)}return N(s.Z.language.default)}(),s.te=s.ee[s.$],s.$,s.be=u(s.ge),s.be.forEach((e=>{const t=s.ge[e].services||{},a=t&&!!(n=t)&&'object'==typeof n&&!Array.isArray(n)&&u(t)||[];var n;s.Ae[e]={},s.Ne[e]=[],i.Y[e]={},0!==a.length&&a.forEach((a=>{const n=t[a];n.enabled=!1,s.Ae[e][a]=n}))}));for(var w=0;w<s.be.length;w++)!0===s.ge[s.be[w]].readOnly&&s.he.push(s.be[w]);e.manageScriptTags&&(s.Oe=i.p.querySelectorAll('script[data-category]'),s.Je=[],s.Oe.forEach((e=>{let t=e.getAttribute(l)||'',a=e.dataset.service||'',n=!1;if('!'===t.charAt(0)&&(t=t.slice(1),n=!0),'!'===a.charAt(0)&&(a=a.slice(1),n=!0),d(s.be,t)&&(s.Je.push({He:!1,je:n,Ee:t,Ve:a}),a)){const e=s.Ae[t];e[a]||(e[a]={enabled:!1})}})))})(a),s.Ce)return;s.l=J(V(c.name,!0)),s.oe=s.l.consentId;var r=void 0!==s.oe;s.ne=s.l.consentTimestamp,s.ne&&(s.ne=new Date(s.ne)),s.re=s.l.lastConsentTimestamp,s.re&&(s.re=new Date(s.re));var v=s.l.data;s.ae=void 0!==v?v:null,s.fe&&r&&s.l.revision!==e.revision&&(s.pe=!1),s.ce=s.ie=!(r&&s.pe&&s.ne&&s.re&&s.oe),s.ie,s.ie?'opt-out'===e.mode&&s.be.forEach((e=>{if(s.ge[e].enabled){s.we.push(e);const a=s.Ae[e]||{};for(var t in a)s.Ne[e].push(t)}})):(s.ye=s.l.categories,s.me=h(S()),s.Ne=s.l.services||{}),D(null,(()=>{(e=>{i.m=_('div'),i.m.id='cc-main',i.m.style.position='fixed',i.m.style.zIndex='1000000',s.ce&&x(e),M(e),f(s.Z.root||i.p.body,i.m)})(j),(()=>{var e=['[href]','button','input','details','[tabindex="0"]'];function t(t,a){var n=!1,r=!1;try{for(var o,i=t.querySelectorAll(e.join(':not([tabindex="-1"]), ')),c=i.length,l=0;l<c;)o=i[l].getAttribute('data-focus'),r||'1'!==o?'0'===o&&(n=i[l],r||'0'===i[l+1].getAttribute('data-focus')||(r=i[l+1])):r=i[l],l++}catch(a){return t.querySelectorAll(e.join(', '))}a[0]=i[0],a[1]=i[i.length-1],a[2]=n,a[3]=r}t(i.j,s.xe),s.ce&&t(i.C,s.Te)})(),C(null,j),e.autoShow&&s.ce&&j.show(),setTimeout((()=>{m(i.m,'c--anim')}),100),setTimeout((()=>{(e=>{var t=!1,a=!1;p(i.u,'keydown',(e=>{'Tab'===e.key&&(s.ve&&(e.shiftKey?i.p.activeElement===s.ve[0]&&(s.ve[1].focus(),e.preventDefault()):i.p.activeElement===s.ve[1]&&(s.ve[0].focus(),e.preventDefault()),a||s.de||(a=!0,!t&&e.preventDefault(),e.shiftKey?s.ve[3]?s.ve[2]?s.ve[2].focus():s.ve[0].focus():s.ve[1].focus():s.ve[3]?s.ve[3].focus():s.ve[0].focus())),!a&&(t=!0))})),p(i.m,'click',(t=>{s._e?i.j.contains(t.target)?s.de=!0:(e.hidePreferences(0),s.de=!1):s.le&&i.C.contains(t.target)&&(s.de=!0)}),!0)})(j)}),100),s.ie?'opt-out'===e.mode&&(e.mode,s.we,k(s.we)):(k(),o(n))}))}}};return{init:()=>(c.domain=window.location.hostname,i.p=document,i.u=i.p.documentElement,j)}},'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):(e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent=t();