import{m as K,r as we,j as Ee}from"./index-f90da802.js";var ae=e=>e.type==="checkbox",ee=e=>e instanceof Date,O=e=>e==null;const Ye=e=>typeof e=="object";var p=e=>!O(e)&&!Array.isArray(e)&&Ye(e)&&!ee(e),dr=e=>p(e)&&e.target?ae(e.target)?e.target.checked:e.target.value:e,yr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,gr=(e,i)=>e.has(yr(i)),hr=e=>{const i=e.constructor&&e.constructor.prototype;return p(i)&&i.hasOwnProperty("isPrototypeOf")},Oe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function j(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Oe&&(e instanceof Blob||e instanceof FileList))&&(s||p(e)))if(i=s?[]:{},!s&&!hr(e))i=e;else for(const t in e)e.hasOwnProperty(t)&&(i[t]=j(e[t]));else return e;return i}var le=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,d=(e,i,s)=>{if(!i||!p(e))return s;const t=le(i.split(/[,[\].]+?/)).reduce((l,a)=>O(l)?l:l[a],e);return D(t)||t===e?D(e[i])?s:e[i]:t};const We={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},M={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};K.createContext(null);var vr=(e,i,s,t=!0)=>{const l={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(l,a,{get:()=>{const c=a;return i._proxyFormState[c]!==M.all&&(i._proxyFormState[c]=!t||M.all),s&&(s[c]=!0),e[c]}});return l},N=e=>p(e)&&!Object.keys(e).length,br=(e,i,s,t)=>{s(e);const{name:l,...a}=e;return N(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(c=>i[c]===(!t||M.all))},Fe=e=>Array.isArray(e)?e:[e];function xr(e){const i=K.useRef(e);i.current=e,K.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var P=e=>typeof e=="string",_r=(e,i,s,t,l)=>P(e)?(t&&i.watch.add(e),d(s,e,l)):Array.isArray(e)?e.map(a=>(t&&i.watch.add(a),d(s,a))):(t&&(i.watchAll=!0),s),Te=e=>/^\w*$/.test(e),Ze=e=>le(e.replace(/["|']|\]/g,"").split(/\.|\[/));function A(e,i,s){let t=-1;const l=Te(i)?[i]:Ze(i),a=l.length,c=a-1;for(;++t<a;){const V=l[t];let _=s;if(t!==c){const L=e[V];_=p(L)||Array.isArray(L)?L:isNaN(+l[t+1])?{}:[]}e[V]=_,e=e[V]}return e}var Vr=(e,i,s,t,l)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:l||!0}}:{};const Se=(e,i,s)=>{for(const t of s||Object.keys(e)){const l=d(e,t);if(l){const{_f:a,...c}=l;if(a&&i(a.name)){if(a.ref.focus){a.ref.focus();break}else if(a.refs&&a.refs[0].focus){a.refs[0].focus();break}}else p(c)&&Se(c,i)}}};var $e=e=>({isOnSubmit:!e||e===M.onSubmit,isOnBlur:e===M.onBlur,isOnChange:e===M.onChange,isOnAll:e===M.all,isOnTouch:e===M.onTouched}),je=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Ar=(e,i,s)=>{const t=le(d(e,s));return A(t,"root",i[s]),A(e,s,t),e},re=e=>typeof e=="boolean",Le=e=>e.type==="file",z=e=>typeof e=="function",ce=e=>{if(!Oe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},fe=e=>P(e),Ce=e=>e.type==="radio",de=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},ze={value:!0,isValid:!0};var er=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ke}return Ke};const Ge={isValid:!1,value:null};var rr=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Ge):Ge;function Je(e,i,s="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||re(e)&&!e)return{type:s,message:fe(e)?e:"",ref:i}}var Z=e=>p(e)&&!de(e)?e:{value:e,message:""},Qe=async(e,i,s,t,l)=>{const{ref:a,refs:c,required:V,maxLength:_,minLength:L,min:X,max:m,pattern:b,validate:$,name:C,valueAsNumber:he,mount:oe,disabled:ve}=e._f,h=d(i,C);if(!oe||ve)return{};const U=c?c[0]:a,q=x=>{t&&U.reportValidity&&(U.setCustomValidity(re(x)?"":x||""),U.reportValidity())},S={},te=Ce(a),se=ae(a),be=te||se,B=(he||Le(a))&&D(a.value)&&D(h)||ce(a)&&a.value===""||h===""||Array.isArray(h)&&!h.length,G=Vr.bind(null,C,s,S),H=(x,v,F,T=W.maxLength,R=W.minLength)=>{const I=x?v:F;S[C]={type:x?T:R,message:I,ref:a,...G(x?T:R,I)}};if(l?!Array.isArray(h)||!h.length:V&&(!be&&(B||O(h))||re(h)&&!h||se&&!er(c).isValid||te&&!rr(c).isValid)){const{value:x,message:v}=fe(V)?{value:!!V,message:V}:Z(V);if(x&&(S[C]={type:W.required,message:v,ref:U,...G(W.required,v)},!s))return q(v),S}if(!B&&(!O(X)||!O(m))){let x,v;const F=Z(m),T=Z(X);if(!O(h)&&!isNaN(h)){const R=a.valueAsNumber||h&&+h;O(F.value)||(x=R>F.value),O(T.value)||(v=R<T.value)}else{const R=a.valueAsDate||new Date(h),I=ne=>new Date(new Date().toDateString()+" "+ne),J=a.type=="time",ie=a.type=="week";P(F.value)&&h&&(x=J?I(h)>I(F.value):ie?h>F.value:R>new Date(F.value)),P(T.value)&&h&&(v=J?I(h)<I(T.value):ie?h<T.value:R<new Date(T.value))}if((x||v)&&(H(!!x,F.message,T.message,W.max,W.min),!s))return q(S[C].message),S}if((_||L)&&!B&&(P(h)||l&&Array.isArray(h))){const x=Z(_),v=Z(L),F=!O(x.value)&&h.length>+x.value,T=!O(v.value)&&h.length<+v.value;if((F||T)&&(H(F,x.message,v.message),!s))return q(S[C].message),S}if(b&&!B&&P(h)){const{value:x,message:v}=Z(b);if(de(x)&&!h.match(x)&&(S[C]={type:W.pattern,message:v,ref:a,...G(W.pattern,v)},!s))return q(v),S}if($){if(z($)){const x=await $(h,i),v=Je(x,U);if(v&&(S[C]={...v,...G(W.validate,v.message)},!s))return q(v.message),S}else if(p($)){let x={};for(const v in $){if(!N(x)&&!s)break;const F=Je(await $[v](h,i),U,v);F&&(x={...F,...G(v,F.message)},q(F.message),s&&(S[C]=x))}if(!N(x)&&(S[C]={ref:U,...x},!s))return S}}return q(!0),S};function wr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=D(e)?t++:e[i[t++]];return e}function Fr(e){for(const i in e)if(e.hasOwnProperty(i)&&!D(e[i]))return!1;return!0}function E(e,i){const s=Array.isArray(i)?i:Te(i)?[i]:Ze(i),t=s.length===1?e:wr(e,s),l=s.length-1,a=s[l];return t&&delete t[a],l!==0&&(p(t)&&N(t)||Array.isArray(t)&&Fr(t))&&E(e,s.slice(0,-1)),e}function ke(){let e=[];return{get observers(){return e},next:l=>{for(const a of e)a.next&&a.next(l)},subscribe:l=>(e.push(l),{unsubscribe:()=>{e=e.filter(a=>a!==l)}}),unsubscribe:()=>{e=[]}}}var ye=e=>O(e)||!Ye(e);function Q(e,i){if(ye(e)||ye(i))return e===i;if(ee(e)&&ee(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const l of s){const a=e[l];if(!t.includes(l))return!1;if(l!=="ref"){const c=i[l];if(ee(a)&&ee(c)||p(a)&&p(c)||Array.isArray(a)&&Array.isArray(c)?!Q(a,c):a!==c)return!1}}return!0}var tr=e=>e.type==="select-multiple",kr=e=>Ce(e)||ae(e),De=e=>ce(e)&&e.isConnected,sr=e=>{for(const i in e)if(z(e[i]))return!0;return!1};function ge(e,i={}){const s=Array.isArray(e);if(p(e)||s)for(const t in e)Array.isArray(e[t])||p(e[t])&&!sr(e[t])?(i[t]=Array.isArray(e[t])?[]:{},ge(e[t],i[t])):O(e[t])||(i[t]=!0);return i}function ir(e,i,s){const t=Array.isArray(e);if(p(e)||t)for(const l in e)Array.isArray(e[l])||p(e[l])&&!sr(e[l])?D(i)||ye(s[l])?s[l]=Array.isArray(e[l])?ge(e[l],[]):{...ge(e[l])}:ir(e[l],O(i)?{}:i[l],s[l]):s[l]=!Q(e[l],i[l]);return s}var me=(e,i)=>ir(e,i,ge(i)),nr=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>D(e)?e:i?e===""?NaN:e&&+e:s&&P(e)?new Date(e):t?t(e):e;function pe(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Le(i)?i.files:Ce(i)?rr(e.refs).value:tr(i)?[...i.selectedOptions].map(({value:s})=>s):ae(i)?er(e.refs).value:nr(D(i.value)?e.ref.value:i.value,e)}var Dr=(e,i,s,t)=>{const l={};for(const a of e){const c=d(i,a);c&&A(l,a,c._f)}return{criteriaMode:s,names:[...e],fields:l,shouldUseNativeValidation:t}},ue=e=>D(e)?e:de(e)?e.source:p(e)?de(e.value)?e.value.source:e.value:e,mr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Xe(e,i,s){const t=d(e,s);if(t||Te(s))return{error:t,name:s};const l=s.split(".");for(;l.length;){const a=l.join("."),c=d(i,a),V=d(e,a);if(c&&!Array.isArray(c)&&s!==a)return{name:s};if(V&&V.type)return{name:a,error:V};l.pop()}return{name:s}}var pr=(e,i,s,t,l)=>l.isOnAll?!1:!s&&l.isOnTouch?!(i||e):(s?t.isOnBlur:l.isOnBlur)?!e:(s?t.isOnChange:l.isOnChange)?e:!0,Sr=(e,i)=>!le(d(e,i)).length&&E(e,i);const Er={mode:M.onSubmit,reValidateMode:M.onChange,shouldFocusError:!0};function Or(e={},i){let s={...Er,...e},t={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},l={},a=p(s.defaultValues)||p(s.values)?j(s.defaultValues||s.values)||{}:{},c=s.shouldUnregister?{}:j(a),V={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,X=0;const m={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:ke(),array:ke(),state:ke()},$=e.resetOptions&&e.resetOptions.keepDirtyValues,C=$e(s.mode),he=$e(s.reValidateMode),oe=s.criteriaMode===M.all,ve=r=>n=>{clearTimeout(X),X=setTimeout(r,n)},h=async r=>{if(m.isValid||r){const n=s.resolver?N((await B()).errors):await H(l,!0);n!==t.isValid&&b.state.next({isValid:n})}},U=r=>m.isValidating&&b.state.next({isValidating:r}),q=(r,n=[],u,y,f=!0,o=!0)=>{if(y&&u){if(V.action=!0,o&&Array.isArray(d(l,r))){const g=u(d(l,r),y.argA,y.argB);f&&A(l,r,g)}if(o&&Array.isArray(d(t.errors,r))){const g=u(d(t.errors,r),y.argA,y.argB);f&&A(t.errors,r,g),Sr(t.errors,r)}if(m.touchedFields&&o&&Array.isArray(d(t.touchedFields,r))){const g=u(d(t.touchedFields,r),y.argA,y.argB);f&&A(t.touchedFields,r,g)}m.dirtyFields&&(t.dirtyFields=me(a,c)),b.state.next({name:r,isDirty:v(r,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(c,r,n)},S=(r,n)=>{A(t.errors,r,n),b.state.next({errors:t.errors})},te=(r,n,u,y)=>{const f=d(l,r);if(f){const o=d(c,r,D(u)?d(a,r):u);D(o)||y&&y.defaultChecked||n?A(c,r,n?o:pe(f._f)):R(r,o),V.mount&&h()}},se=(r,n,u,y,f)=>{let o=!1,g=!1;const w={name:r};if(!u||y){m.isDirty&&(g=t.isDirty,t.isDirty=w.isDirty=v(),o=g!==w.isDirty);const k=Q(d(a,r),n);g=d(t.dirtyFields,r),k?E(t.dirtyFields,r):A(t.dirtyFields,r,!0),w.dirtyFields=t.dirtyFields,o=o||m.dirtyFields&&g!==!k}if(u){const k=d(t.touchedFields,r);k||(A(t.touchedFields,r,u),w.touchedFields=t.touchedFields,o=o||m.touchedFields&&k!==u)}return o&&f&&b.state.next(w),o?w:{}},be=(r,n,u,y)=>{const f=d(t.errors,r),o=m.isValid&&re(n)&&t.isValid!==n;if(e.delayError&&u?(L=ve(()=>S(r,u)),L(e.delayError)):(clearTimeout(X),L=null,u?A(t.errors,r,u):E(t.errors,r)),(u?!Q(f,u):f)||!N(y)||o){const g={...y,...o&&re(n)?{isValid:n}:{},errors:t.errors,name:r};t={...t,...g},b.state.next(g)}U(!1)},B=async r=>s.resolver(c,s.context,Dr(r||_.mount,l,s.criteriaMode,s.shouldUseNativeValidation)),G=async r=>{const{errors:n}=await B();if(r)for(const u of r){const y=d(n,u);y?A(t.errors,u,y):E(t.errors,u)}else t.errors=n;return n},H=async(r,n,u={valid:!0})=>{for(const y in r){const f=r[y];if(f){const{_f:o,...g}=f;if(o){const w=_.array.has(o.name),k=await Qe(f,c,oe,s.shouldUseNativeValidation&&!n,w);if(k[o.name]&&(u.valid=!1,n))break;!n&&(d(k,o.name)?w?Ar(t.errors,k,o.name):A(t.errors,o.name,k[o.name]):E(t.errors,o.name))}g&&await H(g,n,u)}}return u.valid},x=()=>{for(const r of _.unMount){const n=d(l,r);n&&(n._f.refs?n._f.refs.every(u=>!De(u)):!De(n._f.ref))&&xe(r)}_.unMount=new Set},v=(r,n)=>(r&&n&&A(c,r,n),!Q(Re(),a)),F=(r,n,u)=>_r(r,_,{...V.mount?c:D(n)?a:P(r)?{[r]:n}:n},u,n),T=r=>le(d(V.mount?c:a,r,e.shouldUnregister?d(a,r,[]):[])),R=(r,n,u={})=>{const y=d(l,r);let f=n;if(y){const o=y._f;o&&(!o.disabled&&A(c,r,nr(n,o)),f=ce(o.ref)&&O(n)?"":n,tr(o.ref)?[...o.ref.options].forEach(g=>g.selected=f.includes(g.value)):o.refs?ae(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(f)?!!f.find(w=>w===g.value):f===g.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(g=>g.checked=g.value===f):Le(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||b.values.next({name:r,values:{...c}})))}(u.shouldDirty||u.shouldTouch)&&se(r,f,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&ne(r)},I=(r,n,u)=>{for(const y in n){const f=n[y],o=`${r}.${y}`,g=d(l,o);(_.array.has(r)||!ye(f)||g&&!g._f)&&!ee(f)?I(o,f,u):R(o,f,u)}},J=(r,n,u={})=>{const y=d(l,r),f=_.array.has(r),o=j(n);A(c,r,o),f?(b.array.next({name:r,values:{...c}}),(m.isDirty||m.dirtyFields)&&u.shouldDirty&&b.state.next({name:r,dirtyFields:me(a,c),isDirty:v(r,o)})):y&&!y._f&&!O(o)?I(r,o,u):R(r,o,u),je(r,_)&&b.state.next({...t}),b.values.next({name:r,values:{...c}}),!V.mount&&i()},ie=async r=>{const n=r.target;let u=n.name,y=!0;const f=d(l,u),o=()=>n.type?pe(f._f):dr(r);if(f){let g,w;const k=o(),Y=r.type===We.BLUR||r.type===We.FOCUS_OUT,or=!mr(f._f)&&!s.resolver&&!d(t.errors,u)&&!f._f.deps||pr(Y,d(t.touchedFields,u),t.isSubmitted,he,C),Ve=je(u,_,Y);A(c,u,k),Y?(f._f.onBlur&&f._f.onBlur(r),L&&L(0)):f._f.onChange&&f._f.onChange(r);const Ae=se(u,k,Y,!1),fr=!N(Ae)||Ve;if(!Y&&b.values.next({name:u,type:r.type,values:{...c}}),or)return m.isValid&&h(),fr&&b.state.next({name:u,...Ve?{}:Ae});if(!Y&&Ve&&b.state.next({...t}),U(!0),s.resolver){const{errors:qe}=await B([u]),cr=Xe(t.errors,l,u),He=Xe(qe,l,cr.name||u);g=He.error,u=He.name,w=N(qe)}else g=(await Qe(f,c,oe,s.shouldUseNativeValidation))[u],y=isNaN(k)||k===d(c,u,k),y&&(g?w=!1:m.isValid&&(w=await H(l,!0)));y&&(f._f.deps&&ne(f._f.deps),be(u,w,g,Ae))}},ne=async(r,n={})=>{let u,y;const f=Fe(r);if(U(!0),s.resolver){const o=await G(D(r)?r:f);u=N(o),y=r?!f.some(g=>d(o,g)):u}else r?(y=(await Promise.all(f.map(async o=>{const g=d(l,o);return await H(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!y&&!t.isValid)&&h()):y=u=await H(l);return b.state.next({...!P(r)||m.isValid&&u!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:u}:{},errors:t.errors,isValidating:!1}),n.shouldFocus&&!y&&Se(l,o=>o&&d(t.errors,o),r?f:_.mount),y},Re=r=>{const n={...a,...V.mount?c:{}};return D(r)?n:P(r)?d(n,r):r.map(u=>d(n,u))},Ne=(r,n)=>({invalid:!!d((n||t).errors,r),isDirty:!!d((n||t).dirtyFields,r),isTouched:!!d((n||t).touchedFields,r),error:d((n||t).errors,r)}),ur=r=>{r&&Fe(r).forEach(n=>E(t.errors,n)),b.state.next({errors:r?t.errors:{}})},Ue=(r,n,u)=>{const y=(d(l,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...n,ref:y}),b.state.next({name:r,errors:t.errors,isValid:!1}),u&&u.shouldFocus&&y&&y.focus&&y.focus()},ar=(r,n)=>z(r)?b.values.subscribe({next:u=>r(F(void 0,n),u)}):F(r,n,!0),xe=(r,n={})=>{for(const u of r?Fe(r):_.mount)_.mount.delete(u),_.array.delete(u),n.keepValue||(E(l,u),E(c,u)),!n.keepError&&E(t.errors,u),!n.keepDirty&&E(t.dirtyFields,u),!n.keepTouched&&E(t.touchedFields,u),!s.shouldUnregister&&!n.keepDefaultValue&&E(a,u);b.values.next({values:{...c}}),b.state.next({...t,...n.keepDirty?{isDirty:v()}:{}}),!n.keepIsValid&&h()},_e=(r,n={})=>{let u=d(l,r);const y=re(n.disabled);return A(l,r,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:r}},name:r,mount:!0,...n}}),_.mount.add(r),D(n.value)||A(c,r,n.value),u?y&&A(c,r,n.disabled?void 0:d(c,r,pe(u._f))):te(r,!0,n.value),{...y?{disabled:n.disabled}:{},...s.progressive?{required:!!n.required,min:ue(n.min),max:ue(n.max),minLength:ue(n.minLength),maxLength:ue(n.maxLength),pattern:ue(n.pattern)}:{},name:r,onChange:ie,onBlur:ie,ref:f=>{if(f){_e(r,n),u=d(l,r);const o=D(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,g=kr(o),w=u._f.refs||[];if(g?w.find(k=>k===o):o===u._f.ref)return;A(l,r,{_f:{...u._f,...g?{refs:[...w.filter(De),o,...Array.isArray(d(a,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),te(r,!1,void 0,o)}else u=d(l,r,{}),u._f&&(u._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(gr(_.array,r)&&V.action)&&_.unMount.add(r)}}},Me=()=>s.shouldFocusError&&Se(l,r=>r&&d(t.errors,r),_.mount),Be=(r,n)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let y=j(c);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:f,values:o}=await B();t.errors=f,y=o}else await H(l);E(t.errors,"root"),N(t.errors)?(b.state.next({errors:{}}),await r(y,u)):(n&&await n({...t.errors},u),Me(),setTimeout(Me)),b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(t.errors),submitCount:t.submitCount+1,errors:t.errors})},lr=(r,n={})=>{d(l,r)&&(D(n.defaultValue)?J(r,d(a,r)):(J(r,n.defaultValue),A(a,r,n.defaultValue)),n.keepTouched||E(t.touchedFields,r),n.keepDirty||(E(t.dirtyFields,r),t.isDirty=n.defaultValue?v(r,d(a,r)):v()),n.keepError||(E(t.errors,r),m.isValid&&h()),b.state.next({...t}))},Ie=(r,n={})=>{const u=r||a,y=j(u),f=r&&!N(r)?y:a;if(n.keepDefaultValues||(a=u),!n.keepValues){if(n.keepDirtyValues||$)for(const o of _.mount)d(t.dirtyFields,o)?A(f,o,d(c,o)):J(o,d(f,o));else{if(Oe&&D(r))for(const o of _.mount){const g=d(l,o);if(g&&g._f){const w=Array.isArray(g._f.refs)?g._f.refs[0]:g._f.ref;if(ce(w)){const k=w.closest("form");if(k){k.reset();break}}}}l={}}c=e.shouldUnregister?n.keepDefaultValues?j(a):{}:j(f),b.array.next({values:{...f}}),b.values.next({values:{...f}})}_={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&i(),V.mount=!m.isValid||!!n.keepIsValid,V.watch=!!e.shouldUnregister,b.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!Q(r,a)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:n.keepDirtyValues?t.dirtyFields:n.keepDefaultValues&&r?me(a,r):{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Pe=(r,n)=>Ie(z(r)?r(c):r,n);return{control:{register:_e,unregister:xe,getFieldState:Ne,handleSubmit:Be,setError:Ue,_executeSchema:B,_getWatch:F,_getDirty:v,_updateValid:h,_removeUnmounted:x,_updateFieldArray:q,_getFieldArray:T,_reset:Ie,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then(r=>{Pe(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_subjects:b,_proxyFormState:m,get _fields(){return l},get _formValues(){return c},get _state(){return V},set _state(r){V=r},get _defaultValues(){return a},get _names(){return _},set _names(r){_=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:ne,register:_e,handleSubmit:Be,watch:ar,setValue:J,getValues:Re,reset:Pe,resetField:lr,clearErrors:ur,unregister:xe,setError:Ue,setFocus:(r,n={})=>{const u=d(l,r),y=u&&u._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),n.shouldSelect&&f.select())}},getFieldState:Ne}}function Nr(e={}){const i=K.useRef(),s=K.useRef(),[t,l]=K.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Or(e,()=>l(c=>({...c}))),formState:t});const a=i.current.control;return a._options=e,xr({subject:a._subjects.state,next:c=>{br(c,a._proxyFormState,a._updateFormState,!0)&&l({...a._formState})}}),K.useEffect(()=>{e.values&&!Q(e.values,s.current)?(a._reset(e.values,a._options.resetOptions),s.current=e.values):a._resetDefaultValues()},[e.values,a]),K.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=vr(t,a),i.current}const Ur=we.forwardRef(function({type:i="text",className:s="",isFocused:t=!1,...l},a){const c=a||we.useRef(null);return we.useEffect(()=>{t&&c.current&&c.current.focus()},[t]),Ee.jsx("input",{...l,type:i,className:"border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "+s,ref:c})});function Mr({message:e,className:i="",...s}){return e?Ee.jsx("p",{...s,className:"text-sm text-red-600 dark:text-red-400 "+i,children:e}):null}function Br({className:e="",disabled:i,children:s,...t}){return Ee.jsx("button",{...t,className:`inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${i&&"opacity-25"} `+e,disabled:i,children:s})}export{Mr as I,Br as P,Ur as T,Nr as u};