/*!
* CookieConsent 3.0.1
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',a='disable--interaction',s='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',u='preferencesModal',p='btsModal';class g{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],v:!1,h:null,C:null,S:null,M:'',T:!0,D:!1,k:!1,A:!1,N:!1,H:!1,B:!1,V:[],I:!1,L:!0,j:[],F:!1,P:'',O:!1,R:[],G:[],J:[],U:[],$:!1,q:!1,K:!1,W:[],X:[],Y:[],Z:{},ee:{},te:{},oe:{},ne:{},ae:[]},this.se={ce:{},re:{}},this.ie={},this.le={de:'cc:onFirstConsent',fe:'cc:onConsent',_e:'cc:onChange',ue:'cc:onModalShow',pe:'cc:onModalHide',ge:'cc:onModalReady'}}}const m=new g,b=(e,t)=>e.indexOf(t),v=(e,t)=>-1!==b(e,t),y=e=>Array.isArray(e),h=e=>'string'==typeof e,w=e=>!!e&&'object'==typeof e&&!y(e),C=e=>'function'==typeof e,S=e=>Object.keys(e),x=e=>Array.from(new Set(e)),M=()=>document.activeElement,T=e=>e.preventDefault(),D=(e,t)=>e.querySelectorAll(t),k=e=>e.dispatchEvent(new Event('change')),E=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},A=(e,t,o)=>e.setAttribute(t,o),N=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},H=(e,t,o)=>e.getAttribute(o?'data-'+t:t),B=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),I=(e,t)=>V(e,'cm__'+t),L=(e,t)=>V(e,'pm__'+t),j=(e,t)=>e.classList.remove(t),F=(e,t)=>e.classList.contains(t),P=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=P(n)}return t},O=()=>{const e={},{R:t,Z:o,ee:n}=m.o;for(const a of t)e[a]=U(n[a],S(o[a]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),G=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({me:e,be:t,ve:o})},J=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.P):e},U=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!v(n,e))).concat(n.filter((e=>!v(o,e))))},$=e=>{m.o.G=x(e),m.o.P=(()=>{let e='custom';const{G:t,R:o,J:n}=m.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},z=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>D(f,`[data-cc="${e}"]`),u=(e,t)=>{T(e),l(t),i(),r()},p=_('show-preferencesModal'),g=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=m.t.lazyHtmlGeneration;for(const e of p)A(e,'aria-haspopup','dialog'),G(e,d,(e=>{T(e),c()})),h&&(G(e,'mouseenter',(e=>{T(e),m.o.N||o(t,n)}),!0),G(e,'focus',(()=>{m.o.N||o(t,n)})));for(let e of g)A(e,'aria-haspopup','dialog'),G(e,d,(e=>{T(e),s(!0)}),!0);for(let e of b)G(e,d,(e=>{u(e,'all')}),!0);for(let e of y)G(e,d,(e=>{u(e)}),!0);for(let e of v)G(e,d,(e=>{u(e,[])}),!0)},q=(e,t)=>{e&&(t&&(e.tabIndex=-1),e.focus(),t&&e.removeAttribute('tabindex'))},K=(e,t)=>{const o=n=>{n.target.removeEventListener('transitionend',o),'opacity'===n.propertyName&&'1'===getComputedStyle(e).opacity&&q((e=>1===e?m.se.ye:m.se.he)(t))};G(e,'transitionend',o)};let Q;const W=e=>{clearTimeout(Q),e?V(m.se.we,a):Q=setTimeout((()=>{j(m.se.we,a)}),500)},X=['M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5','M 3.572 13.406 L 8.281 18.115 L 20.428 5.885','M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 '],Y=(e=0,t=1.5)=>`<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${X[e]}"/></svg>`,Z=e=>{const t=m.se,o=m.o;(e=>{const n=e===t.Ce,a=o.i.disablePageInteraction?t.we:n?t.Se:t.we;G(a,'keydown',(t=>{if('Tab'!==t.key||!(n?o.k&&!o.A:o.A))return;const a=M(),s=n?o.W:o.X;0!==s.length&&(t.shiftKey?a!==s[0]&&e.contains(a)||(T(t),q(s[1])):a!==s[1]&&e.contains(a)||(T(t),q(s[0])))}),!0)})(e)},ee=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),te=e=>{const{o:t,se:o}=m,n=(e,t)=>{const o=D(e,ee);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.D&&n(o.Ce,t.W),2===e&&t.N&&n(o.xe,t.X)},oe=(e,t,o)=>{const{_e:n,fe:a,de:s,pe:c,ge:r,ue:i}=m.ie,l=m.le;if(t){const n={modalName:t};return e===l.ue?C(i)&&i(n):e===l.pe?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),R(e,n)}const d={cookie:m.o.p};e===l.de?C(s)&&s(P(d)):e===l.fe?C(a)&&a(P(d)):(d.changedCategories=m.o.j,d.changedServices=m.o.oe,C(n)&&n(P(d))),R(e,P(d))},ne=(e,t)=>{try{return e()}catch(e){return!t&&console.warn('CookieConsent:',e),!1}},ae=e=>{const{ee:t,oe:o,R:n,Z:a,ae:c,p:r,j:i}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Me&&v(t[e],o)?(n.Me=!0,C(s)&&s()):n.Me&&!v(t[e],o)&&(n.Me=!1,C(c)&&c())}}if(!m.t.manageScriptTags)return;const l=c,d=e||r.categories||[],f=(e,n)=>{if(n>=e.length)return;const a=c[n];if(a.Te)return f(e,n+1);const r=a.De,l=a.ke,_=a.Ee,u=v(d,l),p=!!_&&v(t[l],_);if(!_&&!a.Ae&&u||!_&&a.Ae&&!u&&v(i,l)||_&&!a.Ae&&p||_&&a.Ae&&!p&&v(o[l]||[],_)){a.Te=!0;const t=H(r,'type',!0);N(r,'type',!!t),N(r,s);let o=H(r,'src',!0);o&&N(r,'src',!0);const c=E('script');c.textContent=r.innerHTML;for(const{nodeName:e}of r.attributes)A(c,e,r[e]||H(r,e));t&&(c.type=t),o?c.src=o:o=r.src;const i=!!o&&(!t||['text/javascript','module'].includes(t));if(i&&(c.onload=c.onerror=()=>{f(e,++n)}),r.replaceWith(c),i)return}f(e,++n)};f(l,0)},se='bottom',ce='left',re='center',ie='right',le='inline',de='wide',fe='pm--',_e=['middle','top',se],ue=[ce,re,ie],pe={box:{Ne:[de,le],He:_e,Be:ue,Ve:se,Ie:ie},cloud:{Ne:[le],He:_e,Be:ue,Ve:se,Ie:re},bar:{Ne:[le],He:_e.slice(1),Be:[],Ve:se,Ie:''}},ge={box:{Ne:[],He:[],Be:[],Ve:'',Ie:''},bar:{Ne:[de],He:[],Be:[ce,ie],Ve:'',Ie:ce}},me=e=>{const t=m.o.i.guiOptions,o=t&&t.consentModal,n=t&&t.preferencesModal;0===e&&be(m.se.Ce,pe,o,'cm--','box','cm'),1===e&&be(m.se.xe,ge,n,fe,'box','pm')},be=(e,t,o,n,a,s)=>{e.className=s;const c=o&&o.layout,r=o&&o.position,i=o&&o.flipButtons,l=!o||!1!==o.equalWeightButtons,d=c&&c.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],g=v(p.Ne,_)&&_,b=r&&r.split(' ')||[],y=b[0],h=n===fe?b[0]:b[1],w=v(p.He,y)?y:p.Ve,C=v(p.Be,h)?h:p.Ie,S=t=>{t&&V(e,n+t)};S(u),S(g),S(w),S(C),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Le:e,je:t}=m.se;e&&(l?j(e,x):V(e,x)),t&&(l?j(t,x):V(t,x))}else{const{Fe:e}=m.se;e&&(l?j(e,x):V(e,x))}},ve=(e,t)=>{const o=m.o,n=m.se,{hide:a,hidePreferences:s,acceptCategory:_}=e,p=e=>{_(e),s(),a()},g=o.u&&o.u.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,y=g.acceptAllBtn,C=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections||[],T=y||C||x;if(n.Pe)n.Oe=E(c),L(n.Oe,'body');else{n.Pe=E(c),V(n.Pe,'pm-wrapper');const e=E('div');V(e,'pm-overlay'),B(n.Pe,e),G(e,d,s),n.xe=E(c),V(n.xe,'pm'),A(n.xe,'role','dialog'),A(n.xe,i,!0),A(n.xe,'aria-modal',!0),A(n.xe,'aria-labelledby','pm__title'),G(n.we,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Re=E(c),L(n.Re,'header'),n.Ge=E('h2'),L(n.Ge,'title'),n.Ge.id='pm__title',n.Je=E(r),L(n.Je,'close-btn'),A(n.Je,'aria-label',g.closeIconLabel||''),G(n.Je,d,s),n.Ue=E('span'),n.Ue.innerHTML=Y(),B(n.Je,n.Ue),n.$e=E(c),L(n.$e,'body'),n.ze=E(c),L(n.ze,'footer');var D=E(c);V(D,'btns');var k=E(c),N=E(c);L(k,l),L(N,l),B(n.ze,k),B(n.ze,N),B(n.Re,n.Ge),B(n.Re,n.Je),n.he=E(c),A(n.he,'tabIndex',-1),B(n.xe,n.he),B(n.xe,n.Re),B(n.xe,n.$e),T&&B(n.xe,n.ze),B(n.Pe,n.xe)}let H;b&&(n.Ge.innerHTML=b,v&&A(n.Je,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,l=e.linkedCategory,f=l&&o.O[l],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,m=u&&u.length>0,b=!!f,v=b&&o.Z[l],y=w(v)&&S(v)||[],C=b&&(!!s||!!m||S(v).length>0);var x=E(c);if(L(x,'section'),C||s){var M=E(c);L(M,'section-desc-wrapper')}let T=y.length;if(C&&T>0){const e=E(c);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=E(c),s=E(c),r=E(c),i=E(c);L(a,'service'),L(i,'service-title'),L(s,'service-header'),L(r,'service-icon');const d=ye(n,t,f,!0,l);i.innerHTML=n,B(s,r),B(s,i),B(a,s),B(a,d),B(e,a)}B(M,e)}if(a){var D=E(c),k=E(b?r:c);if(L(D,'section-title-wrapper'),L(k,'section-title'),k.innerHTML=a,B(D,k),b){const e=E('span');e.innerHTML=Y(2,3.5),L(e,'section-arrow'),B(D,e),x.className+='--toggle';const t=ye(a,l,f);let o=g.serviceCounterLabel;if(T>0&&h(o)){let e=E('span');L(e,'badge'),L(e,'service-counter'),A(e,i,!0),A(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),B(k,e)}if(C){L(x,'section--expandable');var N=l+'-desc';A(k,'aria-expanded',!1),A(k,'aria-controls',N)}B(D,t)}else A(k,'role','heading'),A(k,'aria-level','3');B(x,D)}if(s){var I=E('p');L(I,'section-desc'),I.innerHTML=s,B(M,I)}if(C&&(A(M,i,'true'),M.id=N,((e,t,o)=>{G(k,d,(()=>{F(t,'is-expanded')?(j(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,i,'true')):(V(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,i,'false'))}))})(M,x,k),m)){const e=E('table'),o=E('thead'),a=E('tbody');if(p){const t=E('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,r=S(s),i=n.qe.createDocumentFragment(),l=E('tr');for(const e of r){const o=s[e],n=E('th');n.id='cc__row-'+o+t,A(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,B(i,n)}B(l,i),B(o,l);const d=n.qe.createDocumentFragment();for(const e of u){const o=E('tr');L(o,'table-tr');for(const n of r){const a=s[n],r=e[n],i=E('td'),l=E(c);L(i,'table-td'),A(i,'data-column',a),A(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',r),B(i,l),B(o,i)}B(d,o)}B(a,d),B(e,o),B(e,a),B(M,e)}(C||s)&&B(x,M);const P=n.Oe||n.$e;b?(H||(H=E(c),L(H,'section-toggles')),H.appendChild(x)):H=null,B(P,H||x)})),y&&(n.Ke||(n.Ke=E(r),L(n.Ke,'btn'),A(n.Ke,f,'all'),B(k,n.Ke),G(n.Ke,d,(()=>p('all')))),n.Ke.innerHTML=y),C&&(n.Fe||(n.Fe=E(r),L(n.Fe,'btn'),A(n.Fe,f,'necessary'),B(k,n.Fe),G(n.Fe,d,(()=>p([])))),n.Fe.innerHTML=C),x&&(n.Qe||(n.Qe=E(r),L(n.Qe,'btn'),L(n.Qe,'btn--secondary'),A(n.Qe,f,'save'),B(N,n.Qe),G(n.Qe,d,(()=>p()))),n.Qe.innerHTML=x),n.Oe&&(n.xe.replaceChild(n.Oe,n.$e),n.$e=n.Oe),me(1),o.N||(o.N=!0,oe(m.le.ge,u,n.xe),t(e),B(n.Se,n.Pe),Z(n.xe),setTimeout((()=>V(n.Pe,'cc--anim')),100)),te(2)};function ye(e,t,o,n,a){const c=m.o,r=m.se,l=E('label'),f=E('input'),_=E('span'),u=E('span'),p=E('span'),g=E('span'),b=E('span');if(g.innerHTML=Y(1,3),b.innerHTML=Y(0,3),f.type='checkbox',V(l,'section__toggle-wrapper'),V(f,'section__toggle'),V(g,'toggle__icon-on'),V(b,'toggle__icon-off'),V(_,'toggle__icon'),V(u,'toggle__icon-circle'),V(p,'toggle__label'),A(_,i,'true'),n?(V(l,'toggle-service'),A(f,s,a),r.re[a][t]=f):r.ce[t]=f,n?(e=>{G(f,'change',(()=>{const t=r.re[e],o=r.ce[e];c.te[e]=[];for(let o in t){const n=t[o];n.checked&&c.te[e].push(n.value)}o.checked=c.te[e].length>0}))})(a):(e=>{G(f,d,(()=>{const t=r.re[e],o=f.checked;c.te[e]=[];for(let n in t)t[n].checked=o,o&&c.te[e].push(n)}))})(t),f.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),B(u,b),B(u,g),B(_,u),c.T)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.ee[a];f.checked=o.readOnly||v(e,t)}else v(c.G,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),B(l,f),B(l,_),B(l,p),l}const he=(e,t)=>{const o=m.o,n=m.se,{hide:a,hideBTS:s,acceptCategory:_}=e,u=e=>{_(e),s(),a()},g=o.u&&o.u.BTSModal;if(!g)return;const b=g.title,v=g.closeIconLabel,y=g.acceptAllBtn,C=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections||[],T=y||C||x;if(n.Pe)n.Oe=E(c),L(n.Oe,'body');else{n.Pe=E(c),V(n.Pe,'pm-wrapper');const e=E('div');V(e,'pm-overlay'),B(n.Pe,e),G(e,d,s),n.xe=E(c),V(n.xe,'pm'),A(n.xe,'role','dialog'),A(n.xe,i,!0),A(n.xe,'aria-modal',!0),A(n.xe,'aria-labelledby','pm__title'),G(n.we,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Re=E(c),L(n.Re,'header'),n.Ge=E('h2'),L(n.Ge,'title'),n.Ge.id='pm__title',n.Je=E(r),L(n.Je,'close-btn'),A(n.Je,'aria-label',g.closeIconLabel||''),G(n.Je,d,s),n.Ue=E('span'),n.Ue.innerHTML=Y(),B(n.Je,n.Ue),n.$e=E(c),L(n.$e,'body'),n.ze=E(c),L(n.ze,'footer');var D=E(c);V(D,'btns');var k=E(c),N=E(c);L(k,l),L(N,l),B(n.ze,k),B(n.ze,N),B(n.Re,n.Ge),B(n.Re,n.Je),n.he=E(c),A(n.he,'tabIndex',-1),B(n.xe,n.he),B(n.xe,n.Re),B(n.xe,n.$e),T&&B(n.xe,n.ze),B(n.Pe,n.xe)}let H;b&&(n.Ge.innerHTML=b,v&&A(n.Je,'aria-label',v)),M.forEach(((e,t)=>{const a=e.title,s=e.description,l=e.linkedCategory,f=l&&o.O[l],_=e.cookieTable,u=_&&_.body,p=_&&_.caption,m=u&&u.length>0,b=!!f,v=b&&o.Z[l],y=w(v)&&S(v)||[],C=b&&(!!s||!!m||S(v).length>0);var x=E(c);if(L(x,'section'),C||s){var M=E(c);L(M,'section-desc-wrapper')}let T=y.length;if(C&&T>0){const e=E(c);L(e,'section-services');for(const t of y){const o=v[t],n=o&&o.label||t,a=E(c),s=E(c),r=E(c),i=E(c);L(a,'service'),L(i,'service-title'),L(s,'service-header'),L(r,'service-icon');const d=we(n,t,f,!0,l);i.innerHTML=n,B(s,r),B(s,i),B(a,s),B(a,d),B(e,a)}B(M,e)}if(a){var D=E(c),k=E(b?r:c);if(L(D,'section-title-wrapper'),L(k,'section-title'),k.innerHTML=a,B(D,k),b){const e=E('span');e.innerHTML=Y(2,3.5),L(e,'section-arrow'),B(D,e),x.className+='--toggle';const t=we(a,l,f);let o=g.serviceCounterLabel;if(T>0&&h(o)){let e=E('span');L(e,'badge'),L(e,'service-counter'),A(e,i,!0),A(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),B(k,e)}if(C){L(x,'section--expandable');var N=l+'-desc';A(k,'aria-expanded',!1),A(k,'aria-controls',N)}B(D,t)}else A(k,'role','heading'),A(k,'aria-level','3');B(x,D)}if(s){var I=E('p');L(I,'section-desc'),I.innerHTML=s,B(M,I)}if(C&&(A(M,i,'true'),M.id=N,((e,t,o)=>{G(k,d,(()=>{F(t,'is-expanded')?(j(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,i,'true')):(V(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,i,'false'))}))})(M,x,k),m)){const e=E('table'),o=E('thead'),a=E('tbody');if(p){const t=E('caption');L(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}L(e,'section-table'),L(o,'table-head'),L(a,'table-body');const s=_.headers,r=S(s),i=n.qe.createDocumentFragment(),l=E('tr');for(const e of r){const o=s[e],n=E('th');n.id='cc__row-'+o+t,A(n,'scope','col'),L(n,'table-th'),n.innerHTML=o,B(i,n)}B(l,i),B(o,l);const d=n.qe.createDocumentFragment();for(const e of u){const o=E('tr');L(o,'table-tr');for(const n of r){const a=s[n],r=e[n],i=E('td'),l=E(c);L(i,'table-td'),A(i,'data-column',a),A(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',r),B(i,l),B(o,i)}B(d,o)}B(a,d),B(e,o),B(e,a),B(M,e)}(C||s)&&B(x,M);const P=n.Oe||n.$e;b?(H||(H=E(c),L(H,'section-toggles')),H.appendChild(x)):H=null,B(P,H||x)})),y&&(n.Ke||(n.Ke=E(r),L(n.Ke,'btn'),A(n.Ke,f,'all'),B(k,n.Ke),G(n.Ke,d,(()=>u('all')))),n.Ke.innerHTML=y),C&&(n.Fe||(n.Fe=E(r),L(n.Fe,'btn'),A(n.Fe,f,'necessary'),B(k,n.Fe),G(n.Fe,d,(()=>u([])))),n.Fe.innerHTML=C),x&&(n.Qe||(n.Qe=E(r),L(n.Qe,'btn'),L(n.Qe,'btn--secondary'),A(n.Qe,f,'save'),B(N,n.Qe),G(n.Qe,d,(()=>u()))),n.Qe.innerHTML=x),n.Oe&&(n.xe.replaceChild(n.Oe,n.$e),n.$e=n.Oe),me(1),o.B||(o.B=!0,oe(m.le.ge,p,n.xe),t(e),B(n.Se,n.Pe),Z(n.xe),setTimeout((()=>V(n.Pe,'cc--anim')),100)),te(2)};function we(e,t,o,n,a){const c=m.o,r=m.se,l=E('label'),f=E('input'),_=E('span'),u=E('span'),p=E('span'),g=E('span'),b=E('span');if(g.innerHTML=Y(1,3),b.innerHTML=Y(0,3),f.type='checkbox',V(l,'section__toggle-wrapper'),V(f,'section__toggle'),V(g,'toggle__icon-on'),V(b,'toggle__icon-off'),V(_,'toggle__icon'),V(u,'toggle__icon-circle'),V(p,'toggle__label'),A(_,i,'true'),n?(V(l,'toggle-service'),A(f,s,a),r.re[a][t]=f):r.ce[t]=f,n?(e=>{G(f,'change',(()=>{const t=r.re[e],o=r.ce[e];c.te[e]=[];for(let o in t){const n=t[o];n.checked&&c.te[e].push(n.value)}o.checked=c.te[e].length>0}))})(a):(e=>{G(f,d,(()=>{const t=r.re[e],o=f.checked;c.te[e]=[];for(let n in t)t[n].checked=o,o&&c.te[e].push(n)}))})(t),f.value=t,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),B(u,b),B(u,g),B(_,u),c.T)(o.readOnly||o.enabled)&&(f.checked=!0);else if(n){const e=c.ee[a];f.checked=o.readOnly||v(e,t)}else v(c.G,t)&&(f.checked=!0);return o.readOnly&&(f.disabled=!0),B(l,f),B(l,_),B(l,p),l}const Ce=()=>{const e=E('span');return m.se.We||(m.se.We=e),e},Se=(e,t)=>{const o=m.o,n=m.se,{hide:a,showPreferences:s,showBTS:u,acceptCategory:p}=e,g=o.u&&o.u.consentModal;if(!g)return;const b=g.acceptAllBtn,v=g.acceptNecessaryBtn,y=g.showPreferencesBtn,h=g.showManageBTSBtn,w=g.closeIconLabel,C=g.footer,S=g.label,x=g.title,M=e=>{a(),p(e)};if(!n.Xe){n.Xe=E(c),n.Ce=E(c),n.Ye=E(c),n.Ze=E(c),n.et=E(c),V(n.Xe,'cm-wrapper'),V(n.Ce,'cm'),I(n.Ye,'body'),I(n.Ze,'texts'),I(n.et,'btns'),A(n.Ce,'role','dialog'),A(n.Ce,'aria-modal','true'),A(n.Ce,i,'false'),A(n.Ce,'aria-describedby','cm__desc'),S?A(n.Ce,'aria-label',S):x&&A(n.Ce,'aria-labelledby','cm__title');const e='box',t=o.i.guiOptions,a=t&&t.consentModal,s=(a&&a.layout||e).split(' ')[0]===e;x&&w&&s&&(n.je||(n.je=E(r),n.je.innerHTML=Y(),I(n.je,'btn'),I(n.je,'btn--close'),G(n.je,d,(()=>{M([])})),B(n.Ye,n.je)),A(n.je,'aria-label',w)),B(n.Ye,n.Ze),(b||v||y)&&B(n.Ye,n.et),n.ye=E(c),A(n.ye,'tabIndex',-1),B(n.Ce,n.ye),B(n.Ce,n.Ye),B(n.Xe,n.Ce)}x&&(n.tt||(n.tt=E('h2'),n.tt.className=n.tt.id='cm__title',B(n.Ze,n.tt)),n.tt.innerHTML=x);let T=g.description;if(T&&(o.I&&(T=T.replace('{{revisionMessage}}',o.L?'':g.revisionMessage||'')),n.ot||(n.ot=E('p'),n.ot.className=n.ot.id='cm__desc',B(n.Ze,n.ot)),n.ot.innerHTML=T),b&&(n.nt||(n.nt=E(r),B(n.nt,Ce()),I(n.nt,'btn'),A(n.nt,f,'all'),G(n.nt,d,(()=>{M('all')}))),n.nt.firstElementChild.innerHTML=b),v&&(n.Le||(n.Le=E(r),B(n.Le,Ce()),I(n.Le,'btn'),A(n.Le,f,'necessary'),G(n.Le,d,(()=>{M([])}))),n.Le.firstElementChild.innerHTML=v),y&&(n.st||(n.st=E(r),B(n.st,Ce()),I(n.st,'btn'),I(n.st,'btn--secondary'),A(n.st,f,'show'),G(n.st,'mouseenter',(()=>{o.N||ve(e,t)})),G(n.st,d,s)),n.st.firstElementChild.innerHTML=y),h&&(n.ct||(n.ct=E(r),B(n.ct,Ce()),I(n.ct,'btn'),I(n.ct,'btn--secondary'),A(n.ct,f,'show'),G(n.ct,'mouseenter',(()=>{o.B||he(e,t)})),G(n.ct,d,u)),n.ct.firstElementChild.innerHTML=h),n.rt||(n.rt=E(c),I(n.rt,l),b&&B(n.rt,n.nt),v&&B(n.rt,n.Le),(b||v)&&B(n.Ye,n.rt),B(n.et,n.rt)),!n.st&&!n.ct||n.it||(n.it=E(c),n.Le&&n.nt?(I(n.it,l),B(n.it,n.st),B(n.it,n.ct),B(n.et,n.it)):(B(n.rt,n.st),B(n.rt,n.ct),I(n.rt,l+'--uneven'))),C){if(!n.lt){let e=E(c),t=E(c);n.lt=E(c),I(e,'footer'),I(t,'links'),I(n.lt,'link-group'),B(t,n.lt),B(e,t),B(n.Ce,e)}n.lt.innerHTML=C}me(0),o.D||(o.D=!0,oe(m.le.ge,_,n.Ce),t(e),B(n.Se,n.Xe),Z(n.Ce),setTimeout((()=>V(n.Xe,'cc--anim')),100)),te(1),z(n.Ye,e,ve,he)},xe=e=>{if(!h(e))return null;if(e in m.o._)return e;let t=e.slice(0,2);return t in m.o._?t:null},Me=()=>m.o.l||m.o.i.language.default,Te=e=>{e&&(m.o.l=e)},De=async e=>{const t=m.o;let o=xe(e)?e:Me(),n=t._[o];return h(n)?n=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.error(e),!1}})(n):C(n)&&(n=await n()),!!n&&(t.u=n,Te(o),!0)},ke=()=>{let e=m.o.i.language.rtl,t=m.se.Se;e&&t&&(y(e)||(e=[e]),v(e,m.o.l)?V(t,'cc--rtl'):j(t,'cc--rtl'))},Ee=()=>{const e=m.se;if(e.Se)return;e.Se=E(c),e.Se.id='cc-main',e.Se.setAttribute('data-nosnippet',''),ke();let t=m.o.i.root;t&&h(t)&&(t=document.querySelector(t)),(t||e.qe.body).appendChild(e.Se)},Ae=e=>ne((()=>localStorage.removeItem(e))),Ne=(e,t)=>{if(t instanceof RegExp)return e.filter((e=>t.test(e)));{const o=b(e,t);return o>-1?[e[o]]:[]}},He=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c,useLocalStorage:r}=m.t.cookie,i=e?(()=>{const e=m.o.S,t=e?new Date-e:0;return 864e5*J()-t})():864e5*J(),l=new Date;l.setTime(l.getTime()+i),m.o.p.expirationTime=l.getTime();const d=JSON.stringify(m.o.p);let f=n+'='+encodeURIComponent(d)+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;v(t,'.')&&(f+='; Domain='+s),'https:'===o&&(f+='; Secure'),r?((e,t)=>{ne((()=>localStorage.setItem(e,t)))})(n,d):document.cookie=f,m.o.p},Be=(e,t,o)=>{if(0===e.length)return;const n=o||m.t.cookie.domain,a=t||m.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Ve=e=>{const t=e||m.t.cookie.name,o=m.t.cookie.useLocalStorage;return((e,t)=>{let o;return o=ne((()=>JSON.parse(t?e:decodeURIComponent(e))),!0)||{},o})(o?(n=t,ne((()=>localStorage.getItem(n)))||''):Ie(t,!0),o);var n},Ie=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Le=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];e?ne((()=>{e.test(t)&&o.push(t)})):o.push(t)}return o},je=(o,n=[])=>{((e,t)=>{const{R:o,G:n,J:a,N:s,te:c,U:r,Z:i}=m.o;let l=[];if(e){y(e)?l.push(...e):h(e)&&(l='all'===e?o:[e]);for(const e of o)c[e]=v(l,e)?S(i[e]):[]}else l=[...n,...r],s&&(l=(()=>{const e=m.se.ce;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})());l=l.filter((e=>!v(o,e)||!v(t,e))),l.push(...a),$(l)})(o,n),(e=>{const t=m.o,{te:o,J:n,ee:a,Z:s,R:c}=t,r=c;t.ne=P(a);for(const e of r){const c=s[e],r=S(c),i=o[e]&&o[e].length>0,l=v(n,e);if(0!==r.length){if(a[e]=[],l)a[e].push(...r);else if(i){const t=o[e];a[e].push(...t)}else a[e]=t.te[e];a[e]=x(a[e])}}})(),(()=>{const o=m.o;o.j=m.t.mode===t&&o.T?U(o.U,o.G):U(o.G,o.p.categories);let n=o.j.length>0,a=!1;for(const e of o.R)o.oe[e]=U(o.ee[e],o.ne[e]),o.oe[e].length>0&&(a=!0);const s=m.se.ce;for(const e in s)s[e].checked=v(o.G,e);for(const e of o.R){const t=m.se.re[e],n=o.ee[e];for(const e in t)t[e].checked=v(n,e)}o.C||(o.C=new Date),o.M||(o.M=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:P(o.G),revision:m.t.revision,data:o.h,consentTimestamp:o.C.toISOString(),consentId:o.M,services:P(o.ee)},o.S&&(o.p.lastConsentTimestamp=o.S.toISOString());let c=!1;const r=n||a;(o.T||r)&&(o.T&&(o.T=!1,c=!0),o.S=o.S?new Date:o.C,o.p.lastConsentTimestamp=o.S.toISOString(),He(),m.t.autoClearCookies&&(c||r)&&(e=>{const t=m.o,o=Le(),n=(e=>{const t=m.o;return(e?t.R:t.j).filter((e=>{const o=t.O[e];return!!o&&!o.readOnly&&!!o.autoClear}))})(e);for(const e in t.oe)for(const n of t.oe[e]){const a=t.Z[e][n].cookies;if(!v(t.ee[e],n)&&a)for(const e of a){const t=Ne(o,e.name);Be(t,e.path,e.domain)}}for(const a of n){const n=t.O[a].autoClear,s=n&&n.cookies||[],c=v(t.j,a),r=!v(t.G,a),i=c&&r;if(e?r:i){n.reloadPage&&i&&(t.F=!0);for(const e of s){const t=Ne(o,e.name);Be(t,e.path,e.domain)}}}})(c),ae()),c&&(oe(m.le.de),oe(m.le.fe),m.t.mode===e)||(r&&oe(m.le._e),o.F&&(o.F=!1,location.reload()))})()},Fe=e=>{const t=m.o.T?[]:m.o.G;return v(t,e)},Pe=(e,t)=>{const{R:o,Z:n}=m.o;if(!(e&&t&&h(t)&&v(o,t)&&0!==S(n[t]).length))return!1;((e,t)=>{const o=m.o,{Z:n,te:a,N:s}=o,c=m.se.re[t]||{},r=m.se.ce[t]||{},i=S(n[t]);if(a[t]=[],h(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,k(c[e])}else if(v(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,k(c[t])}else if(y(e))for(let o of i){const n=v(e,o);n&&a[t].push(o),s&&(c[o].checked=n,k(c[o]))}const l=0===a[t].length;o.G=l?o.G.filter((e=>e!==t)):x([...o.G,t]),s&&(r.checked=!l,k(r))})(e,t),je()},Oe=(e,t)=>{const o=m.o.T?[]:m.o.ee[t]||[];return v(o,e)},Re=e=>''!==Ie(e,!0),Ge=(e,t,o)=>{let n=[];const a=e=>{if(h(e)){let t=Ie(e);''!==t&&n.push(t)}else n.push(...Le(e))};if(y(e))for(let t of e)a(t);else a(e);Be(n,t,o)},Je=e=>{const{se:t,o:n}=m;if(!n.k){if(!n.D){if(!e)return;Se(We,Ee)}n.k=!0,n.q=M(),n.v&&W(!0),K(t.Ce,1),V(t.we,o),A(t.Ce,i,'false'),setTimeout((()=>{q(m.se.ye)}),100),oe(m.le.ue,_)}},Ue=()=>{const{se:e,o:t,le:n}=m;t.k&&(t.k=!1,t.v&&W(),q(e.We,!0),j(e.we,o),A(e.Ce,i,'true'),q(t.q),t.q=null,oe(n.pe,_))},$e=()=>{const e=m.o;e.A||(e.N||ve(We,Ee),e.A=!0,e.k?e.K=M():e.q=M(),K(m.se.xe,2),V(m.se.we,n),A(m.se.xe,i,'false'),setTimeout((()=>{q(m.se.he)}),100),oe(m.le.ue,u))},ze=()=>{const e=m.o;e.H||(e.B||ve(We,Ee),e.H=!0,e.k?e.K=M():e.q=M(),K(m.se.xe,2),V(m.se.we,n),A(m.se.xe,i,'false'),setTimeout((()=>{q(m.se.he)}),100),oe(m.le.ue,u))},qe=()=>{const e=nt(),t=m.o.O,o=m.se.ce,n=m.se.re,a=e=>v(m.o.U,e);for(const s in o){const c=!!t[s].readOnly;o[s].checked=c||(e?Fe(s):a(s));for(const t in n[s])n[s][t].checked=c||(e?Oe(t,s):a(s))}},Ke=()=>{const e=m.o;e.A&&(e.A=!1,qe(),q(m.se.Ue,!0),j(m.se.we,n),A(m.se.xe,i,'true'),e.k?(q(e.K),e.K=null):(q(e.q),e.q=null),oe(m.le.pe,u))},Qe=()=>{const e=m.o;e.H&&(e.H=!1,qe(),q(m.se.Ue,!0),j(m.se.we,n),A(m.se.xe,i,'true'),e.k?(q(e.K),e.K=null):(q(e.q),e.q=null),oe(m.le.pe,p))};var We={show:Je,hide:Ue,showPreferences:$e,showBTS:ze,hidePreferences:Ke,hideBTS:Qe,acceptCategory:je};const Xe=async(e,t)=>{if(!xe(e))return!1;const o=m.o;return!(e===Me()&&!0!==t||!await De(e)||(Te(e),o.D&&Se(We,Ee),o.N&&ve(We,Ee),o.B&&ve(We,Ee),ke(),0))},Ye=()=>{const{P:e,ee:t}=m.o,{accepted:o,rejected:n}=(()=>{const{T:e,G:t,R:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!v(t,e)))}})();return P({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},Ze=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=E('script'),w(t))for(const e in t)A(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,B(document.head,o)}))},et=e=>{let t,o=e.value,n=e.mode,a=!1;const s=m.o;if('update'===n){s.h=t=tt('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.h=t,s.p.data=t,He(!0)),a},tt=(e,t)=>{const o=Ve(t);return e?o[e]:o},ot=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},nt=()=>!m.o.T,at=async e=>{const{o:o,t:n,le:a}=m,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{se:o,t:n,o:a}=m,c=n,r=a,{cookie:i}=c,l=m.ie,d=e.cookie,f=e.categories,_=S(f)||[],u=navigator,p=document;o.qe=p,o.we=p.documentElement,i.domain=location.hostname,r.i=e,r.O=f,r.R=_,r._=e.language.translations,r.v=!!e.disablePageInteraction,l.de=e.onFirstConsent,l.fe=e.onConsent,l._e=e.onChange,l.pe=e.onModalHide,l.ue=e.onModalShow,l.ge=e.onModalReady;const{mode:g,autoShow:b,lazyHtmlGeneration:y,autoClearCookies:h,revision:C,manageScriptTags:x,hideFromBots:M}=e;g===t&&(c.mode=g),'boolean'==typeof h&&(c.autoClearCookies=h),'boolean'==typeof x&&(c.manageScriptTags=x),'number'==typeof C&&C>=0&&(c.revision=C,r.I=!0),'boolean'==typeof b&&(c.autoShow=b),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===M&&(c.hideFromBots=!1),!0===c.hideFromBots&&u&&(r.$=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),w(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.I,c.manageScriptTags,(e=>{const{O:t,Z:o,ee:n,te:a,J:s}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=w(r)&&S(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),m.se.re[c]={};for(let e of i){const t=r[e];t.Me=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o,t=D(document,'script['+s+']');for(const o of t){let t=H(o,s),n=o.dataset.service||'',a=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),v(e.R,t)&&(e.ae.push({De:o,Te:!1,Ae:a,ke:t,Ee:n}),n)){const o=e.Z[t];o[n]||(o[n]={Me:!1})}}})(),Te((()=>{const e=m.o.i.language.autoDetect;if(e){const t={browser:navigator.language,document:document.documentElement.lang},o=xe(t[e]);if(o)return o}return Me()})())})(e),o.$)return;(()=>{const e=m.o,o=m.t,n=Ve(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=y(a);e.p=n,e.M=c;const _=!!c&&h(c);e.C=r,e.C&&(e.C=new Date(r)),e.S=i,e.S&&(e.S=new Date(i)),e.h=void 0!==l?l:null,e.I&&_&&d!==o.revision&&(e.L=!1),e.T=!(_&&e.L&&e.C&&e.S&&f),o.cookie.useLocalStorage&&!e.T&&(e.T=(new Date).getTime()>(n.expirationTime||0),e.T&&Ae(o.cookie.name)),e.T,(()=>{const e=m.o;for(const o of e.R){const n=e.O[o];if(n.readOnly||n.enabled){e.U.push(o);const n=e.Z[o]||{};for(let a in n)e.te[o].push(a),e.i.mode===t&&e.ee[o].push(a)}}})(),e.T?o.mode===t&&(e.G=[...e.U]):(e.ee={...e.ee,...s},e.te={...e.ee},$([...e.J,...a]))})();const i=nt();if(!await De())return!1;if(z(null,r=We,ve,Ee),m.o.T&&Se(r,Ee),m.t.lazyHtmlGeneration||ve(r,Ee),n.autoShow&&!i&&Je(!0),i)return ae(),oe(a.fe);n.mode===t&&ae(o.U)}var r},st=e=>{const{Se:t,we:s}=m.se,{name:c,path:r,domain:i,useLocalStorage:l}=m.t.cookie;e&&(l?Ae(c):Ge(c,r,i));for(const{me:e,be:t,ve:o}of m.o.m)e.removeEventListener(t,o);t&&t.remove(),s&&s.classList.remove(a,n,o);const d=new g;for(const e in m)m[e]=d[e];window._ccRun=!1};export{je as acceptCategory,Pe as acceptService,Fe as acceptedCategory,Oe as acceptedService,Ge as eraseCookies,ot as getConfig,tt as getCookie,Ye as getUserPreferences,Ue as hide,Qe as hideBTS,Ke as hidePreferences,Ze as loadScript,st as reset,at as run,et as setCookieData,Xe as setLanguage,Je as show,ze as showBTS,$e as showPreferences,nt as validConsent,Re as validCookie};
