/*!
* CookieConsent 3.0.0-rc.13
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const e='opt-in',t='opt-out',o='show--consent',n='show--preferences',a='disable--interaction',s='data-category',c='div',r='button',i='aria-hidden',l='btn-group',d='click',f='data-role',_='consentModal',u='preferencesModal';class p{constructor(){this.t={mode:e,revision:0,autoShow:!0,lazyHtmlGeneration:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={i:{},l:'',_:{},u:{},p:{},m:[],g:!1,v:null,h:null,C:null,S:'',M:!0,T:!1,D:!1,A:!1,k:!1,N:!1,H:[],V:!1,F:!0,I:[],P:!1,j:'',O:!1,R:[],B:[],G:[],J:[],L:!1,U:!1,$:!1,q:[],K:[],W:null,X:[],Y:[],Z:{},ee:{},te:{},oe:{},ne:{},ae:[],se:[]},this.ce={re:{},ie:{}},this.le={},this.de={fe:'cc:onFirstConsent',_e:'cc:onConsent',ue:'cc:onChange',pe:'cc:onModalShow',me:'cc:onModalHide',ge:'cc:onModalReady'}}}const m=new p,g=(e,t)=>e.indexOf(t),b=(e,t)=>-1!==g(e,t),v=e=>Array.isArray(e),y=e=>'string'==typeof e,h=e=>!!e&&'object'==typeof e&&!v(e),C=e=>'function'==typeof e,w=e=>Object.keys(e),S=e=>Array.from(new Set(e)),x=()=>document.activeElement,M=e=>e.preventDefault(),T=(e,t)=>e.querySelectorAll(t),D=e=>e.dispatchEvent(new Event('change')),E=e=>{const t=document.createElement(e);return e===r&&(t.type=e),t},A=(e,t,o)=>e.setAttribute(t,o),k=(e,t,o)=>{e.removeAttribute(o?'data-'+t:t)},N=(e,t,o)=>e.getAttribute(o?'data-'+t:t),H=(e,t)=>e.appendChild(t),V=(e,t)=>e.classList.add(t),F=(e,t)=>V(e,'cm__'+t),I=(e,t)=>V(e,'pm__'+t),P=(e,t)=>e.classList.remove(t),j=e=>{if('object'!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());let t=Array.isArray(e)?[]:{};for(let o in e){let n=e[o];t[o]=j(n)}return t},O=()=>{const e={},{R:t,Z:o,ee:n}=m.o;for(const a of t)e[a]=J(n[a],w(o[a]));return e},R=(e,t)=>dispatchEvent(new CustomEvent(e,{detail:t})),B=(e,t,o,n)=>{e.addEventListener(t,o),n&&m.o.m.push({be:e,ve:t,ye:o})},G=()=>{const e=m.t.cookie.expiresAfterDays;return C(e)?e(m.o.j):e},J=(e,t)=>{const o=e||[],n=t||[];return o.filter((e=>!b(n,e))).concat(n.filter((e=>!b(o,e))))},L=e=>{m.o.B=S(e),m.o.j=(()=>{let e='custom';const{B:t,R:o,G:n}=m.o,a=t.length;return a===o.length?e='all':a===n.length&&(e='necessary'),e})()},U=(e,t,o,n)=>{const a='accept-',{show:s,showPreferences:c,hide:r,hidePreferences:i,acceptCategory:l}=t,f=e||document,_=e=>T(f,`[data-cc="${e}"]`),u=(e,t)=>{M(e),l(t),i(),r()},p=_('show-preferencesModal'),g=_('show-consentModal'),b=_(a+'all'),v=_(a+'necessary'),y=_(a+'custom'),h=m.t.lazyHtmlGeneration;for(const e of p)A(e,'aria-haspopup','dialog'),B(e,d,(e=>{M(e),c()})),h&&B(e,'mouseenter',(e=>{M(e),m.o.k||o(t,n)}),!0);for(let e of g)A(e,'aria-haspopup','dialog'),B(e,d,(e=>{M(e),s(!0)}),!0);for(let e of b)B(e,d,(e=>{u(e,'all')}),!0);for(let e of y)B(e,d,(e=>{u(e)}),!0);for(let e of v)B(e,d,(e=>{u(e,[])}),!0)},z=(e,t)=>{e?.focus(),t&&(m.o.W=e,m.o.X=1===t?m.o.q:m.o.K)};let $;const q=e=>{clearTimeout($),e?V(m.ce.he,a):$=setTimeout((()=>{P(m.ce.he,a)}),500)},K=['[href]',r,'input','details','[tabindex]'].map((e=>e+':not([tabindex="-1"])')).join(','),Q=e=>{const{o:t,ce:o}=m,n=(e,t)=>{const o=T(e,K);t[0]=o[0],t[1]=o[o.length-1]};1===e&&t.T&&n(o.Ce,t.q),2===e&&t.k&&n(o.we,t.K)},W=(e,t,o)=>{const{ue:n,_e:a,fe:s,me:c,ge:r,pe:i}=m.le,l=m.de,d={cookie:m.o.p};if(t){const n={modalName:t};return e===l.pe?C(i)&&i(n):e===l.me?C(c)&&c(n):(n.modal=o,C(r)&&r(n)),R(e,n)}e===l.fe?C(s)&&s(j(d)):e===l._e?C(a)&&a(j(d)):(d.changedCategories=m.o.I,d.changedServices=m.o.oe,C(n)&&n(j(d))),R(e,j(d))},X=e=>{const{ee:t,oe:o,R:n,Z:a,ae:c,se:r,p:i,I:l}=m.o;for(const e of n){const n=o[e]||t[e]||[];for(const o of n){const n=a[e][o];if(!n)continue;const{onAccept:s,onReject:c}=n;!n.Se&&b(t[e],o)&&C(s)?(n.Se=!0,s()):n.Se&&!b(t[e],o)&&C(c)&&(n.Se=!1,c())}}if(!m.t.manageScriptTags)return;const d=c,f=e||i.categories||[],_=(e,n)=>{if(n<e.length){const a=e[n],c=r[n],i=c.xe,d=c.Me,u=b(f,i),p=!!d&&b(t[i],d);if(!c.Te){let t=!d&&!c.De&&u,r=d&&!c.De&&p,f=!d&&c.De&&!u&&b(l,i),m=d&&c.De&&!p&&b(o[i]||[],d);if(t||f||r||m){c.Te=!0;const t=N(a,'type',!0);k(a,'type',!!t),k(a,s);let o=N(a,'src',!0);o&&k(a,'src',!0);const r=E('script');r.textContent=a.innerHTML;for(const{nodeName:e}of a.attributes)A(r,e,a[e]||N(a,e));if(t&&(r.type=t),o?r.src=o:o=a.src,o&&(r.onload=r.onerror=()=>{_(e,++n)}),a.replaceWith(r),o)return}}_(e,++n)}};_(d,0)},Y='bottom',Z='left',ee='center',te='right',oe='inline',ne='wide',ae='pm--',se=['middle','top',Y],ce=[Z,ee,te],re={box:{Ee:[ne,oe],Ae:se,ke:ce,Ne:Y,He:te},cloud:{Ee:[oe],Ae:se,ke:ce,Ne:Y,He:ee},bar:{Ee:[oe],Ae:se.slice(1),ke:[],Ne:Y,He:''}},ie={box:{Ee:[],Ae:[],ke:[],Ne:'',He:''},bar:{Ee:[ne],Ae:[],ke:[Z,te],Ne:'',He:Z}},le=e=>{const t=m.o.i.guiOptions,o=t?.consentModal,n=t?.preferencesModal;0===e&&de(m.ce.Ce,re,o,'cm--','box','cm'),1===e&&de(m.ce.we,ie,n,ae,'box','pm')},de=(e,t,o,n,a,s)=>{e.className=s;const c=o?.layout,r=o?.position,i=o?.flipButtons,l=!1!==o?.equalWeightButtons,d=c?.split(' ')||[],f=d[0],_=d[1],u=f in t?f:a,p=t[u],g=b(p.Ee,_)&&_,v=r?.split(' ')||[],y=v[0],h=n===ae?v[0]:v[1],C=b(p.Ae,y)?y:p.Ne,w=b(p.ke,h)?h:p.He,S=t=>V(e,n+t);S(u),S(g),S(C),S(w),i&&S('flip');const x=s+'__btn--secondary';if('cm'===s){const{Ve:e,Fe:t}=m.ce;e&&(l?P(e,x):V(e,x)),t&&(l?P(t,x):V(t,x))}else{const{Ie:e}=m.ce;e&&(l?P(e,x):V(e,x))}},fe=(e,t)=>{const o=m.o,n=m.ce,{hide:a,hidePreferences:s,acceptCategory:_}=e,p=e=>{_(e),s(),a()},g=o.u&&o.u.preferencesModal;if(!g)return;const b=g.title,v=g.closeIconLabel,C=g.acceptAllBtn,S=g.acceptNecessaryBtn,x=g.savePreferencesBtn,M=g.sections,T=C||S||x;if(n.Pe)n.je=E(c),I(n.je,'body');else{n.Pe=E(c),V(n.Pe,'pm-wrapper'),n.Pe.tabIndex=-1,n.we=E(c),n.we.style.visibility='hidden',V(n.we,'pm'),A(n.we,'role','dialog'),A(n.we,i,!0),A(n.we,'aria-modal',!0),A(n.we,'aria-labelledby','pm__title'),B(n.he,'keydown',(e=>{27===e.keyCode&&s()}),!0),n.Oe=E(c),I(n.Oe,'header'),n.Re=E(c),I(n.Re,'title'),n.Re.id='pm__title',A(n.Re,'role','heading'),A(n.Re,'aria-level','2'),n.Be=E(r),I(n.Be,'close-btn'),A(n.Be,'aria-label',g.closeIconLabel||''),B(n.Be,d,s),n.Ge=E('span'),n.Ge.tabIndex=-1,H(n.Be,n.Ge),n.Je=E(c),I(n.Je,'body'),n.Le=E(c),I(n.Le,'footer');var D=E(c);V(D,'btns');var k=E(c),N=E(c);I(k,l),I(N,l),H(n.Le,k),H(n.Le,N),H(n.Oe,n.Re),H(n.Oe,n.Be),H(n.we,n.Oe),H(n.we,n.Je),T&&H(n.we,n.Le),H(n.Pe,n.we)}let F;b&&(n.Re.innerHTML=b,v&&A(n.Be,'aria-label',v)),M?.forEach(((e,t)=>{const a=e.title,s=e.description,l=e.linkedCategory,f=l&&o.O[l],_=e.cookieTable,u=_?.body,p=_?.caption,m=u?.length>0,b=!!f,v=b&&o.Z[l],C=h(v)&&w(v)||[],S=b&&(!!s||!!m||w(v).length>0);var x=E(c);if(I(x,'section'),S||s){var M=E(c);I(M,'section-desc-wrapper')}let T=C.length;if(S&&T>0){const e=E(c);I(e,'section-services');for(const t of C){const o=v[t],n=o?.label||t,a=E(c),s=E(c),r=E(c),i=E(c);I(a,'service'),I(i,'service-title'),I(s,'service-header'),I(r,'service-icon');const d=_e(n,t,f,!0,l);i.innerHTML=n,H(s,r),H(s,i),H(a,s),H(a,d),H(e,a)}H(M,e)}if(a){var D=E(c),k=E(b?r:c);if(I(D,'section-title-wrapper'),I(k,'section-title'),k.innerHTML=a,H(D,k),b){const e=E('span');I(e,'section-arrow'),H(D,e),x.className+='--toggle';const t=_e(a,l,f);let o=g.serviceCounterLabel;if(T>0&&y(o)){let e=E('span');I(e,'badge'),I(e,'service-counter'),A(e,i,!0),A(e,'data-servicecounter',T),o&&(o=o.split('|'),o=o.length>1&&T>1?o[1]:o[0],A(e,'data-counterlabel',o)),e.innerHTML=T+(o?' '+o:''),H(k,e)}if(S){I(x,'section--expandable');var N=l+'-desc';A(k,'aria-expanded',!1),A(k,'aria-controls',N)}H(D,t)}else A(k,'role','heading'),A(k,'aria-level','3');H(x,D)}if(s){var j=E(c);I(j,'section-desc'),j.innerHTML=s,H(M,j)}if(S&&(A(M,i,'true'),M.id=N,((e,t,o)=>{B(k,d,(()=>{t.classList.contains('is-expanded')?(P(t,'is-expanded'),A(o,'aria-expanded','false'),A(e,i,'true')):(V(t,'is-expanded'),A(o,'aria-expanded','true'),A(e,i,'false'))}))})(M,x,k),m)){const e=E('table'),o=E('thead'),a=E('tbody');if(p){const t=E('caption');I(t,'table-caption'),t.innerHTML=p,e.appendChild(t)}I(e,'section-table'),I(o,'table-head'),I(a,'table-body');const s=_.headers,r=w(s),i=n.Ue.createDocumentFragment(),l=E('tr');A(l,'role','row');for(const e of r){const o=s[e],n=E('th');n.id='cc__row-'+o+t,A(n,'scope','col'),I(n,'table-th'),n.innerHTML=o,H(i,n)}H(l,i),H(o,l);const d=n.Ue.createDocumentFragment();for(const e of u){const o=E('tr');A(o,'role','row'),I(o,'table-tr');for(const n of r){const a=s[n],r=e[n],i=E('td'),l=E(c);I(i,'table-td'),A(i,'data-column',a),A(i,'headers','cc__row-'+a+t),l.insertAdjacentHTML('beforeend',r),H(i,l),H(o,i)}H(d,o)}H(a,d),H(e,o),H(e,a),H(M,e)}(S||s)&&H(x,M);const O=n.je||n.Je;b?(F||(F=E(c),I(F,'section-toggles')),F.appendChild(x)):F=null,H(O,F||x)})),(C||S)&&(S&&(n.Ie||(n.Ie=E(r),I(n.Ie,'btn'),A(n.Ie,f,'necessary'),H(k,n.Ie),B(n.Ie,d,(()=>p([])))),n.Ie.innerHTML=S),C&&(n.ze||(n.ze=E(r),I(n.ze,'btn'),A(n.ze,f,'all'),H(k,n.ze),B(n.ze,d,(()=>p('all')))),n.ze.innerHTML=C)),x&&(n.$e||(n.$e=E(r),I(n.$e,'btn'),I(n.$e,'btn--secondary'),A(n.$e,f,'save'),H(N,n.$e),B(n.$e,d,(()=>p()))),n.$e.innerHTML=x),n.je&&(n.we.replaceChild(n.je,n.Je),n.Je=n.je),le(1),o.k||(o.k=!0,W(m.de.ge,u,n.we),t(e),Q(2),H(n.qe,n.Pe),setTimeout((()=>V(n.Pe,'cc--anim')),100))};function _e(e,o,n,a,c){const r=m.o,l=m.ce,f=E('label'),_=E('input'),u=E('span'),p=E('span'),g=E('span'),v=E('span');if(_.type='checkbox',V(f,'section__toggle-wrapper'),V(_,'section__toggle'),V(g,'toggle__icon-on'),V(v,'toggle__icon-off'),V(u,'toggle__icon'),V(p,'toggle__label'),A(u,i,'true'),a?(V(f,'toggle-service'),A(_,s,c),l.ie[c][o]=_):l.re[o]=_,a?(e=>{B(_,'change',(()=>{const t=l.ie[e],o=l.re[e];r.te[e]=[];for(let o in t){const n=t[o];n.checked&&r.te[e].push(n.value)}o.checked=r.te[e].length>0}))})(c):(e=>{B(_,d,(()=>{const t=l.ie[e],o=_.checked;r.te[e]=[];for(let n in t)t[n].checked=o,o&&r.te[e].push(n)}))})(o),_.value=o,p.textContent=e.replace(/<.*>.*<\/.*>/gm,''),H(u,v),H(u,g),r.M)(n.readOnly||r.i.mode===t&&n.enabled)&&(_.checked=!0);else if(a){const e=r.ee[c];_.checked=n.readOnly||b(e,o)}else b(r.B,o)&&(_.checked=!0);return n.readOnly&&(_.disabled=!0),H(f,_),H(f,u),H(f,p),f}const ue=()=>{const e=E('span');return e.tabIndex=-1,m.ce.Ke||(m.ce.Ke=e),e},pe=(e,t)=>{const o=m.o,n=m.ce,{hide:a,showPreferences:s,acceptCategory:u}=e,p=o.u&&o.u.consentModal;if(!p)return;const g=p.acceptAllBtn,b=p.acceptNecessaryBtn,v=p.showPreferencesBtn,y=p.closeIconLabel,h=p.footer,C=p.label,w=p.title,S=e=>{a(),u(e)};if(!n.Qe){n.Qe=E(c),n.Ce=E(c),n.We=E(c),n.Xe=E(c),n.Ye=E(c),V(n.Qe,'cm-wrapper'),V(n.Ce,'cm'),F(n.We,'body'),F(n.Xe,'texts'),F(n.Ye,'btns'),n.Qe.tabIndex=-1,A(n.Ce,'role','dialog'),A(n.Ce,'aria-modal','true'),A(n.Ce,i,'false'),A(n.Ce,'aria-describedby','cm__desc'),C?A(n.Ce,'aria-label',C):w&&A(n.Ce,'aria-labelledby','cm__title'),n.Ce.style.visibility='hidden';const e='box',t=o.i.guiOptions,a=t?.consentModal,s=(a?.layout||e).split(' ')[0]===e;w&&y&&s&&(n.Fe||(n.Fe=E(r),F(n.Fe,'btn'),F(n.Fe,'btn--close'),B(n.Fe,d,(()=>{S([])})),H(n.We,n.Fe)),A(n.Fe,'aria-label',y)),H(n.We,n.Xe),(g||b||v)&&H(n.We,n.Ye),H(n.Ce,n.We),H(n.Qe,n.Ce)}w&&(n.Ze||(n.Ze=E(c),n.Ze.className=n.Ze.id='cm__title',A(n.Ze,'role','heading'),A(n.Ze,'aria-level','2'),H(n.Xe,n.Ze)),n.Ze.innerHTML=w);let x=p.description;if(x&&(o.V&&(x=x.replace('{{revisionMessage}}',o.F?'':p.revisionMessage||'')),n.et||(n.et=E(c),n.et.className=n.et.id='cm__desc',H(n.Xe,n.et)),n.et.innerHTML=x),g&&(n.tt||(n.tt=E(r),H(n.tt,ue()),F(n.tt,'btn'),A(n.tt,f,'all'),B(n.tt,d,(()=>{S('all')}))),n.tt.firstElementChild.innerHTML=g),b&&(n.Ve||(n.Ve=E(r),H(n.Ve,ue()),F(n.Ve,'btn'),A(n.Ve,f,'necessary'),B(n.Ve,d,(()=>{S([])}))),n.Ve.firstElementChild.innerHTML=b),v&&(n.ot||(n.ot=E(r),H(n.ot,ue()),F(n.ot,'btn'),F(n.ot,'btn--secondary'),A(n.ot,f,'show'),B(n.ot,'mouseenter',(()=>{o.k||fe(e,t)})),B(n.ot,d,s)),n.ot.firstElementChild.innerHTML=v),n.nt||(n.nt=E(c),F(n.nt,l),b&&H(n.nt,n.Ve),g&&H(n.nt,n.tt),(g||b)&&H(n.We,n.nt),H(n.Ye,n.nt)),n.ot&&!n.st&&(n.st=E(c),n.Ve&&n.tt?(F(n.st,l),H(n.st,n.ot),H(n.Ye,n.st)):(H(n.nt,n.ot),F(n.nt,l+'--uneven'))),h){if(!n.ct){let e=E(c),t=E(c);n.ct=E(c),F(e,'footer'),F(t,'links'),F(n.ct,'link-group'),H(t,n.ct),H(e,t),H(n.Ce,e)}n.ct.innerHTML=h}le(0),o.T||(o.T=!0,W(m.de.ge,_,n.Ce),t(e),Q(1),H(n.qe,n.Qe),setTimeout((()=>V(n.Qe,'cc--anim')),100)),U(n.We,e,fe,t)},me=e=>y(e)&&e in m.o._,ge=()=>m.o.l||m.o.i.language.default,be=e=>{e&&(m.o.l=e)},ve=async e=>{const t=m.o;let o;o=e&&me(e)?e:ge();let n=t._[o];if(!n)return!1;if(y(n)){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(n);if(!e)return!1;n=e}return t.u=n,be(o),!0},ye=()=>{let e=m.o.i.language.rtl,t=m.ce.qe;e&&t&&(v(e)||(e=[e]),b(e,m.o.l)?V(t,'cc--rtl'):P(t,'cc--rtl'))},he=e=>{const t=m.ce;if(!t.qe){t.qe=E(c),t.qe.id='cc-main',t.qe.style.position='fixed',t.qe.style.zIndex='2147483647',ye();let o=m.o.i.root;o&&y(o)&&(o=document.querySelector(o)),(o||t.Ue.body).appendChild(t.qe),(({hidePreferences:e})=>{const t=m.ce;B(t.qe,d,(o=>{m.o.N&&(t.we.contains(o.target)||e())}))})(e)}},Ce=e=>{const{hostname:t,protocol:o}=location,{name:n,path:a,domain:s,sameSite:c}=m.t.cookie,r=encodeURIComponent(JSON.stringify(m.o.p)),i=e?(()=>{const e=m.o.C,t=e?new Date-e:0;return 864e5*G()-t})():864e5*G(),l=new Date;l.setTime(l.getTime()+i);let d=n+'='+r+(0!==i?'; expires='+l.toUTCString():'')+'; Path='+a+'; SameSite='+c;b(t,'.')&&(d+='; Domain='+s),'https:'===o&&(d+='; Secure'),document.cookie=d,m.o.p},we=(e,t,o)=>{const n=o||m.t.cookie.domain,a=t||m.t.cookie.path,s='www.'===n.slice(0,4),c=s&&n.substring(4),r=(e,t)=>{document.cookie=e+'=; path='+a+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};for(const t of e)r(t),r(t,n),s&&r(t,c)},Se=e=>(e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t})(xe(e||m.t.cookie.name,!0)),xe=(e,t)=>{const o=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return o?t?o.pop():e:''},Me=e=>{const t=document.cookie.split(/;\s*/),o=[];for(const n of t){let t=n.split('=')[0];if(e)try{e.test(t)&&o.push(t)}catch(e){}else o.push(t)}return o},Te=(o,n=[])=>{((e,t)=>{const{R:o,B:n,G:a,k:s,te:c,Z:r}=m.o;let i=[];if(e){v(e)?i.push(...e):y(e)&&(i='all'===e?o:[e]);for(const e of o)c[e]=b(i,e)?w(r[e]):[]}else i=s?(()=>{const e=m.ce.re;if(!e)return[];let t=[];for(let o in e)e[o].checked&&t.push(o);return t})():n;i=i.filter((e=>!b(o,e)||!b(t,e))),i.push(...a),L(i)})(o,n),(e=>{const t=m.o,{te:o,G:n,ee:a,Z:s,R:c}=t,r=c;t.ne=j(a);for(const e of r){const t=s[e],c=w(t),r=o[e]?.length>0,i=b(n,e);if(0!==c.length){if(a[e]=[],i)a[e].push(...c);else if(r){const t=o[e];a[e].push(...t)}else a[e]=[];a[e]=S(a[e])}}})(),(()=>{const o=m.o;m.t.mode===t&&o.M?o.I=J(o.J,o.B):o.I=J(o.B,o.p.categories);let n=o.I.length>0,a=!1;for(const e of o.R)o.oe[e]=J(o.ee[e],o.ne[e]),o.oe[e].length>0&&(a=!0);const s=m.ce.re;for(let e in s)s[e].checked=b(o.B,e);for(const e of o.R){const t=m.ce.ie[e],n=o.ee[e];for(const e in t)t[e].checked=b(n,e)}o.h||(o.h=new Date),o.S||(o.S=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),o.p={categories:j(o.B),revision:m.t.revision,data:o.v,consentTimestamp:o.h.toISOString(),consentId:o.S,services:j(o.ee)};let c=!1;(o.M||n||a)&&(o.M&&(o.M=!1,c=!0),o.C?o.C=new Date:o.C=o.h,o.p.lastConsentTimestamp=o.C.toISOString(),Ce(),m.t.autoClearCookies&&(c||!o.M&&n)&&(e=>{const t=m.o,o=Me();t.P=!1;let n=e?t.R:t.I;n=n.filter((e=>{let o=t.O[e];return!!o&&!o.readOnly&&!!o.autoClear}));for(const a of n){const n=t.O[a].autoClear,s=n?.cookies||[],c=b(t.I,a),r=!b(t.B,a),i=c&&r;if(e&&r||!e&&i){!0===n.reloadPage&&i&&(t.P=!0);for(const e of s){let t=[];const n=e.name,a=e.domain,s=e.path;if(n instanceof RegExp)for(let e of o)n.test(e)&&t.push(e);else{let e=g(o,n);e>-1&&t.push(o[e])}t.length>0&&we(t,s,a)}}}})(c),X()),c&&(W(m.de.fe),W(m.de._e),m.t.mode===e)||((n||a)&&W(m.de.ue),o.P&&location.reload())})()},De=e=>{const t=m.o.M?[]:m.o.B;return b(t,e)},Ee=(e,t)=>{const{R:o,Z:n}=m.o;if(!(e&&t&&y(t)&&b(o,t)&&0!==w(n[t]).length))return!1;((e,t)=>{const o=m.o,{Z:n,te:a,k:s}=o,c=m.ce.ie[t]||{},r=m.ce.re[t]||{},i=w(n[t]);if(a[t]=[],y(e)){if('all'===e){if(a[t].push(...i),s)for(let e in c)c[e].checked=!0,D(c[e])}else if(b(i,e)&&a[t].push(e),s)for(let t in c)c[t].checked=e===t,D(c[t])}else if(v(e))for(let o of i){const n=b(e,o);n&&a[t].push(o),s&&(c[o].checked=n,D(c[o]))}const l=0===a[t].length;o.B=l?o.B.filter((e=>e!==t)):S([...o.B,t]),s&&(r.checked=!l,D(r))})(e,t),Te()},Ae=(e,t)=>{const o=m.o.M?[]:m.o.ee[t];return b(o,e)},ke=e=>''!==xe(e,!0),Ne=(e,t,o)=>{let n=[];const a=e=>{if(y(e)){let t=xe(e);''!==t&&n.push(t)}else n.push(...Me(e))};if(v(e))for(let t of e)a(t);else a(e);we(n,t,o)},He=e=>{const{ce:t,o:n}=m;if(!n.D){if(!n.T){if(!e)return;pe(Pe,he)}n.D=!0,n.U=x(),n.g&&q(!0),V(t.he,o),A(t.Ce,i,'false'),z(t.Qe,1),W(m.de.pe,_)}},Ve=()=>{const{ce:e,o:t,de:n}=m;t.D&&(t.D=!1,t.g&&q(),P(e.he,o),A(e.Ce,i,'true'),z(e.Ke),z(t.U),t.U=null,W(n.me,_))},Fe=()=>{const e=m.o;e.A||(e.k||fe(Pe,he),e.A=!0,V(m.ce.he,n),A(m.ce.we,i,'false'),setTimeout((()=>{e.N=!0}),1),e.D?e.$=x():e.U=x(),z(m.ce.Pe,2),W(m.de.pe,u))},Ie=()=>{const e=m.o;e.A&&(e.A=!1,P(m.ce.he,n),A(m.ce.we,i,'true'),setTimeout((()=>{e.N=!1}),1),e.D?(z(e.$),e.$=null):(z(m.ce.Ge),z(e.U),e.U=null),W(m.de.me,u))};var Pe={show:He,hide:Ve,showPreferences:Fe,hidePreferences:Ie,acceptCategory:Te};const je=async(e,t)=>{if(!me(e))return!1;const o=m.o;return!(e===ge()&&!0!==t||!await ve(e)||(be(e),o.T&&pe(Pe,he),o.k&&fe(Pe,he),ye(),0))},Oe=()=>{const{j:e,ee:t}=m.o,{accepted:o,rejected:n}=(()=>{const{M:e,B:t,R:o}=m.o;return{accepted:t,rejected:e?[]:o.filter((e=>!b(t,e)))}})();return j({acceptType:e,acceptedCategories:o,rejectedCategories:n,acceptedServices:t,rejectedServices:O()})},Re=(e,t)=>{let o=document.querySelector('script[src="'+e+'"]');return new Promise((n=>{if(o)return n(!0);if(o=E('script'),h(t))for(const e in t)A(o,e,t[e]);o.onload=()=>n(!0),o.onerror=()=>{o.remove(),n(!1)},o.src=e,H(document.head,o)}))},Be=e=>{let t,o=e.value,n=e.mode,a=!1;const s=m.o;if('update'===n){s.v=t=Ge('data');const e=typeof t==typeof o;if(e&&'object'==typeof t){!t&&(t={});for(let e in o)t[e]!==o[e]&&(t[e]=o[e],a=!0)}else!e&&t||t===o||(t=o,a=!0)}else t=o,a=!0;return a&&(s.v=t,s.p.data=t,Ce(!0)),a},Ge=(e,t)=>{const o=Se(t);return e?o[e]:o},Je=e=>{const t=m.t,o=m.o.i;return e?t[e]||o[e]:{...t,...o,cookie:{...t.cookie}}},Le=()=>!m.o.M,Ue=async e=>{const{o:o,t:n,de:a}=m,c=window;if(!c._ccRun){if(c._ccRun=!0,(e=>{const{ce:o,t:n,o:a}=m,c=n,r=a,{cookie:i}=c,l=m.le,d=e.cookie,f=e.categories,_=w(f)||[],u=navigator,p=document;o.Ue=p,o.he=p.documentElement,i.domain=location.hostname,r.i=e,r.O=f,r.R=_,r._=e.language.translations,r.g=!!e.disablePageInteraction,l.fe=e.onFirstConsent,l._e=e.onConsent,l.ue=e.onChange,l.me=e.onModalHide,l.pe=e.onModalShow,l.ge=e.onModalReady;const{mode:g,autoShow:v,lazyHtmlGeneration:y,autoClearCookies:C,revision:S,manageScriptTags:x,hideFromBots:M}=e;g===t&&(c.mode=g),'boolean'==typeof C&&(c.autoClearCookies=C),'boolean'==typeof x&&(c.manageScriptTags=x),'number'==typeof S&&S>=0&&(c.revision=S,r.V=!0),'boolean'==typeof v&&(c.autoShow=v),'boolean'==typeof y&&(c.lazyHtmlGeneration=y),!1===M&&(c.hideFromBots=!1),!0===c.hideFromBots&&u&&(r.L=u.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(u.userAgent)||u.webdriver),h(d)&&(c.cookie={...i,...d}),c.autoClearCookies,r.V,c.manageScriptTags,(e=>{const{O:t,Z:o,ee:n,te:a,G:s}=m.o;for(let c of e){const e=t[c],r=e.services||{},i=h(r)&&w(r)||[];o[c]={},n[c]=[],a[c]=[],e.readOnly&&(s.push(c),n[c]=i),m.ce.ie[c]={};for(let e of i){const t=r[e];t.Se=!1,o[c][e]=t}}})(_),(()=>{if(!m.t.manageScriptTags)return;const e=m.o;e.ae=T(m.ce.Ue,'script['+s+']'),e.se=[];for(const t of e.ae){let o=N(t,s),n=t.dataset.service||'',a=!1;if(o&&'!'===o.charAt(0)&&(o=o.slice(1),a=!0),'!'===n.charAt(0)&&(n=n.slice(1),a=!0),b(e.R,o)&&(e.se.push({Te:!1,De:a,xe:o,Me:n}),n)){const t=e.Z[o];t[n]||(t[n]={Se:!1})}}})(),be((()=>{const e=m.o.i.language.autoDetect;if(e){let t;if('browser'===e?t=navigator.language.slice(0,2).toLowerCase():'document'===e&&(t=document.documentElement.lang),me(t))return t}return ge()})())})(e),o.L)return;(()=>{const e=m.o,o=m.t,n=Se(),{categories:a,services:s,consentId:c,consentTimestamp:r,lastConsentTimestamp:i,data:l,revision:d}=n,f=v(a);e.p=n,e.S=c;const _=!!c&&y(c);e.h=r,e.h&&(e.h=new Date(r)),e.C=i,e.C&&(e.C=new Date(i)),e.v=void 0!==l?l:null,e.V&&_&&d!==o.revision&&(e.F=!1),e.M=!(_&&e.F&&e.h&&e.C&&f),e.M,e.M?o.mode===t&&((()=>{const e=m.o;for(const t of e.R){const o=e.O[t];if(o.enabled||o.readOnly){e.J.push(t);const o=e.Z[t]||{};for(let n in o)e.ee[t].push(n)}}})(),e.B=[...e.J]):(e.ee={...e.ee,...s},L([...e.G,...a])),e.te={...e.ee}})();const r=Le();if(!await ve())return!1;if(await(async e=>{U(null,e,fe,he),m.o.M&&pe(e,he),m.t.lazyHtmlGeneration||fe(e,he),(()=>{const e=m.ce,t=m.o;B(e.he,'keydown',(e=>{if('Tab'!==e.key)return;if(!t.A&&!t.D)return;const o=t.X,n=t.W;if(o.length>0){const t=x();e.shiftKey?t!==o[0]&&n.contains(t)||(M(e),z(o[1])):t!==o[1]&&n.contains(t)||(M(e),z(o[0]))}}),!0)})()})(Pe),n.autoShow&&!r&&He(!0),r)return X(),W(a._e);n.mode===t&&X(o.J)}},ze=e=>{const{qe:t,he:s}=m.ce,{name:c,path:r,domain:i}=m.t.cookie;e&&Ne(c,r,i);for(const{be:e,ve:t,ye:o}of m.o.m)e.removeEventListener(t,o);t?.remove(),s?.classList.remove(a,n,o);const l=new p;for(const e in m)m[e]=l[e];window._ccRun=!1};export{Te as acceptCategory,Ee as acceptService,De as acceptedCategory,Ae as acceptedService,Ne as eraseCookies,Je as getConfig,Ge as getCookie,Oe as getUserPreferences,Ve as hide,Ie as hidePreferences,Re as loadScript,ze as reset,Ue as run,Be as setCookieData,je as setLanguage,He as show,Fe as showPreferences,Le as validConsent,ke as validCookie};
