"use strict";(self.webpackChunkreact_single_ui=self.webpackChunkreact_single_ui||[]).push([[288],{40288:function(sa,ze,x){x.r(ze),x.d(ze,{Badge:function(){return ta},Breadcrumb:function(){return Kn},BreadcrumbItem:function(){return Qn},Button:function(){return ln},Icon:function(){return O},Image:function(){return Le},Input:function(){return Un},Loading:function(){return nn},Mask:function(){return Fe},Modal:function(){return Fn},Progress:function(){return we},Switch:function(){return wn},Toast:function(){return Tn},TreeSelect:function(){return ea},Uploader:function(){return ia}});var D=x(75271),Oe=x(82187),k=x.n(Oe),Ue=x(26068),I=x.n(Ue),We=x(67825),_=x.n(We),He=x(6024),Ze=x(31759),Ge=x.n(Ze),S="sn";function pe(i){return Array.isArray(i)?i:[i]}var Ve=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function Xe(i){return Ve.test(i)}function Je(i){return i.isImage?!0:i.file&&i.file.type?i.file.type.indexOf("image")===0:i.url?Xe(i.url):typeof i.content=="string"?i.content.indexOf("data:image")===0:!1}function je(i){return typeof i=="function"}function Ke(i){return i!==null&&Ge()(i)==="object"}function Qe(i){return Ke(i)&&je(i.then)&&je(i.catch)}function De(i,e){return pe(i).some(function(n){return n.file?je(e)?e(n.file):n.file.size>Number(e):!1})}function Ye(i,e){var n=[],a=[];return i.forEach(function(r){De(r,e)&&a.push(r),n.push(r)}),{valid:n,invalid:a}}var t=x(52676),qe=["className","icon"],_e=function(e){var n=e.className,a=e.icon,r=_()(e,qe),o=a,c=k()("".concat(S,"-icon"),n);return(0,t.jsx)(He.G,I()({icon:o,className:c},r))},O=_e,te=x(24168),K=x(36617);te.library.add(K.faSpinner,K.faCircleNotch,K.faRotate);var en=function(e){var n=e.children,a=e.type,r=a===void 0?"spinner":a,o=e.textSize,c=o===void 0?"12":o,d=e.className,l=e.textColor,s=l===void 0?"#000":l,u=e.color,v=u===void 0?"#000":u,m=e.size,b=m===void 0?"lg":m,C=k()("".concat(S,"-loading"),d),f=r||"spinner";return(0,t.jsxs)("div",{className:"".concat(C," inline-flex flex-col items-center"),children:[(0,t.jsx)(O,{icon:f,color:v,size:b,spin:!0}),(0,t.jsx)("span",{className:"inline-block mt-1",style:{fontSize:c+"px",color:s},children:n})]})},nn=en,an=x(82092),p=x.n(an),tn=x(77762),rn=["btnType","block","disabled","size","children","className","href","activeClassName","type"],da=function(i){return i.Large="lg",i.Small="sm",i}({}),ve=function(i){return i.Primary="primary",i.Default="default",i.Danger="danger",i.Link="link",i}({}),$e=function(e){var n=e.btnType,a=n===void 0?ve.Default:n,r=e.block,o=r===void 0?!1:r,c=e.disabled,d=c===void 0?!1:c,l=e.size,s=e.children,u=e.className,v=e.href,m=e.activeClassName,b=e.type,C=b===void 0?"button":b,f=_()(e,rn),h=S+"-btn",P=k()("".concat(h),u,p()(p()(p()(p()({},"".concat(h,"-").concat(a),a),"".concat(h,"-").concat(l),l),"".concat(h,"-block"),o),"disabled",a===ve.Link&&d));return a===ve.Link?(0,t.jsx)("a",I()(I()({className:P,href:v},f),{},{children:s})):(0,t.jsx)(tn.Z,{activeClassName:"".concat(h,"-active ").concat(m),children:(0,t.jsx)("button",I()(I()({className:P,type:C},f),{},{disabled:d,children:s}))})},ln=$e,on=$e,cn=x(25298),sn=x.n(cn),dn=x(17069),un=x.n(dn),vn=x(62657),ee=x.n(vn),fn=x(21742),hn=x.n(fn),mn=x(83136),gn=x.n(mn),fe=x(30967),Cn=!!fe.createPortal,xn=document.createElement("div");document.body.appendChild(xn);var bn=function(i){hn()(n,i);var e=gn()(n);function n(){var a;sn()(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return a=e.call.apply(e,[this].concat(o)),p()(ee()(a),"container",null),p()(ee()(a),"maskDom",function(){var d=a.props,l=d.backgroundColor,s=l===void 0?"#00000066":l,u=d.zIndex,v=u===void 0?999:u,m={backgroundColor:s,zIndex:v};return(0,t.jsx)("div",{className:"".concat(S,"-mask"),onClick:a.handleClickMask,style:m,children:a.props.children})}),p()(ee()(a),"handleClickMask",function(){a.removeContainer(),a.props.onMaskClick&&a.props.onMaskClick()}),p()(ee()(a),"getContainer",function(){if(!a.container){var d=document.createElement("div");d.style.height="100%";var l="".concat(S,"-container-").concat(new Date().getTime());d.setAttribute("id",l),document.body.appendChild(d),a.container=d}return a.container}),p()(ee()(a),"removeContainer",function(){a.container&&(document.body.removeChild(a.container),a.container=null)}),p()(ee()(a),"preventDefault",function(d){d.preventDefault()}),a}return un()(n,[{key:"render",value:function(){var r=this.props.visible;return Cn&&r?(document.body.addEventListener("touchmove",this.preventDefault,{passive:!1}),document.body.addEventListener("scroll",this.preventDefault,{passive:!1}),fe.createPortal(this.maskDom(),this.getContainer())):(document.body.removeEventListener("touchmove",this.preventDefault,!1),document.body.removeEventListener("scroll",this.preventDefault,!1),null)}}]),n}(D.Component),Fe=bn,yn=x(48305),Q=x.n(yn),pn=x(78760);te.library.add(K.faImage,K.faSadTear);var jn=function(e){var n=(0,D.useState)(!0),a=Q()(n,2),r=a[0],o=a[1],c=(0,D.useState)(!1),d=Q()(c,2),l=d[0],s=d[1],u=e.alt,v=e.width,m=v===void 0?"90px":v,b=e.height,C=b===void 0?"90px":b,f=e.src,h=e.fit,P=h===void 0?"fill":h,A=e.radius,E=e.round,L=E===void 0?!1:E,y=e.onLoad,$=e.onError,N=e.showLoading,M=N===void 0?!1:N,B=e.showError,F=e.lazyLoad;(0,D.useEffect)(function(){f||s(!0)},[]);var W=k()("".concat(S,"-image-wrap"),p()({},"".concat(S,"-image-wrap-round"),L)),G={width:m,height:C,borderRadius:L?"50%":A},V=function(){if(r&&M)return(0,t.jsx)("div",{className:"".concat(S,"-image-loading"),children:(0,t.jsx)(O,{icon:"image",color:"#969799",size:"3x"})});if(l&&B)return(0,t.jsx)("div",{className:"".concat(S,"-image-error"),children:(0,t.jsx)(O,{icon:"sad-tear",color:"#969799",size:"3x"})})},R=function(){if(!(!f||l)){var w=function(ue){o(!1),y&&y(ue)},q=function(ue){s(!0),$&&$(ue)},de={alt:u,src:f,style:{objectFit:P}};return F?(0,t.jsx)(pn.ZP,{scroll:!0,offset:-20,children:(0,t.jsx)("img",I()({className:"".concat(S,"-image-img"),onError:q,onLoad:w},de))}):(0,t.jsx)("img",I()({className:"".concat(S,"-image-img"),onError:q,onLoad:w},de))}};return(0,t.jsxs)("div",{style:G,className:W,children:[V(),R()]})},Le=jn,Sn=x(79236).Z,Y=null,he,Nn=document.createElement("div");document.body.appendChild(Nn);var ne=S+"-toast";function In(i,e){var n=k()(p()(p()({},"".concat(ne,"-mask"),i),"".concat(ne,"-nomask"),!i));Sn.newInstance({prefixCls:"".concat(ne),style:{},transitionName:"".concat(ne,"-fade"),className:n},function(a){return e&&e(a)})}var re=function(e){var n=e.content,a=e.mask,r=e.duration,o=e.onClose,c=e.type,d={info:"",success:"check-circle",fail:"times-circle",loading:"spinner"},l=d[c];he=!1,In(a,function(s){if(s){if(Y&&(Y.destroy(),Y=null),he){s.destroy(),he=!1;return}Y=s,s.notice({content:(0,t.jsxs)("div",{className:"".concat(ne,"-content"),role:"alert","aria-live":"assertive",children:[!!l&&(0,t.jsx)("div",{className:"".concat(ne,"-icon-wrap"),children:(0,t.jsx)(O,{icon:l,size:"2x",spin:c==="loading"})}),(0,t.jsx)("div",{children:n})]}),duration:r,onClose:function(){o&&o(),s.destroy(),s=null,Y=null}})}})},Pn={show:function(e,n,a,r,o){var c={content:e,type:n,mask:a,duration:r,onClose:o};return re(c)},info:function(e,n,a,r){var o={content:e,type:"info",mask:n,duration:a,onClose:r};return re(o)},success:function(e,n,a,r){var o={content:e,type:"success",mask:n,duration:a,onClose:r};return re(o)},fail:function(e,n,a,r){var o={content:e,type:"fail",mask:n,duration:a,onClose:r};return re(o)},loading:function(e,n,a,r){var o={content:e,type:"loading",mask:n,duration:a,onClose:r};return re(o)},hidden:function(){Y?(Y.destroy(),Y=null):he=!0}},Tn=Pn,zn=["visible"],me=S+"-modal",Dn=function(e){var n=e.visible,a=n===void 0?!1:n,r=_()(e,zn),o=function(l,s){var u={};if(l.style&&(u=l.style,typeof u=="string")){var v={cancel:{},default:{},destructive:{color:"red"}};u=v[u]||{}}var m=function(f){f.preventDefault(),l.onPress&&l.onPress()},b=I()({flex:1,padding:0,fontSize:"18px",height:"50px",lineHeight:"50px",textOverflow:"ellipsis",whiteSpace:"nowrap"},u);return(0,t.jsx)(on,{style:I()({},b),onClick:m,btnType:ve.Link,children:l.text||"Button"},s)},c=function(l){var s=l.title,u=l.message,v=l.footer;return(0,t.jsxs)("div",{className:"".concat(me),children:[(0,t.jsx)("div",{className:"".concat(me,"-header"),children:s}),(0,t.jsx)("div",{className:"".concat(me,"-body"),children:u}),(0,t.jsx)("div",{className:"".concat(me,"-footer"),children:v==null?void 0:v.map(function(m,b){return o(m,b)})})]})};return(0,t.jsx)(Fe,I()(I()({visible:a},r),{},{children:(0,t.jsx)(c,I()({},r))}))},Se=Dn,ke=x(32699),Ne=x.n(ke);function $n(i){var e=i.title,n=i.message,a=i.footer,r=document.createElement("div");document.body.appendChild(r);var o=!1;function c(){fe.unmountComponentAtNode(r),r&&r.parentNode&&r.parentNode.removeChild(r)}var d="";if(a){var l=Ne().cloneDeep(a);d=l.map(function(s){var u=s.onPress||function(){};return s.onPress=function(){if(!o){var v=u();v&&v.then?v.then(function(){o=!0,c()}).catch(function(){}):(o=!0,c())}},s})}fe.render((0,t.jsx)(Se,{visible:!0,title:e,message:n,footer:d}),r)}Se.alert=$n;var Fn=Se,Ln=["value","disabled","size","activeColor","inactiveColor"],ie=S+"-switch",kn=function(e){var n=e.value,a=n===void 0?!1:n,r=e.disabled,o=r===void 0?!1:r,c=e.size,d=e.activeColor,l=e.inactiveColor,s=_()(e,Ln),u=a,v=function(){o||(u=!a,e.onClick&&e.onClick(u))},m=k()("".concat(ie),p()(p()(p()({},"".concat(ie,"-disabled"),o),"".concat(ie,"-active"),u),"".concat(ie,"-").concat(c),c)),b={};return(d||l)&&(b={backgroundColor:u?d:l}),(0,t.jsx)("div",I()(I()({className:m,style:b},s),{},{onClick:v,children:(0,t.jsx)("div",{className:"".concat(ie,"-round")})}))},wn=kn,Bn=["onBlur","onFocus","onChange"],En=function(e){var n=e.onBlur,a=e.onFocus,r=e.onChange,o=_()(e,Bn),c=(0,D.useRef)(null),d=function(v){var m=v.target.value;n&&n(m)},l=function(v){var m=v.target.value;a&&a(m)},s=function(v){var m=v.target.value.trim();r&&r(m)};return(0,t.jsx)("input",I()({ref:c,onChange:s,onBlur:d,onFocus:l},o))},Rn=En,An=["type","maxLength","label","required","disabled","readonly","clearble","onChange","onFocus","onBlur","onClear","value"];te.library.add(K.faTimesCircle);var Mn=function(e){var n="";switch(e){case"tel":n="tel";break;case"password":n="password";break;case"number":n="number";break;default:n=e}return n},ge=S+"-input",On=function(e){var n=e.type,a=n===void 0?"text":n,r=e.maxLength,o=e.label,c=e.required,d=c===void 0?!1:c,l=e.disabled,s=l===void 0?!1:l,u=e.readonly,v=u===void 0?!1:u,m=e.clearble,b=m===void 0?!1:m,C=e.onChange,f=e.onFocus,h=e.onBlur,P=e.onClear,A=e.value,E=_()(e,An),L=k()("".concat(ge),p()(p()(p()({},"".concat(ge,"-disabled"),s),"".concat(ge,"-required"),d),"".concat(ge,"-readonly"),v)),y=(0,D.useState)(A||""),$=Q()(y,2),N=$[0],M=$[1];(0,D.useEffect)(function(){M(A||"")},[e.value]);var B=function(w){if(a==="tel"){var q;w=((q=w)===null||q===void 0?void 0:q.replace(/\D/g,""))||""}M(w||""),C&&C(w)},F=function(w){f&&f(w)},W=function(w){h&&h(w)},G=function(){M(""),P&&P()},V=function(){var w=(N==null?void 0:N.length)||0;return r?(0,t.jsxs)("div",{className:"".concat(S,"-input-max-length"),children:[w,"/",r]}):null},R=Mn(a);return(0,t.jsxs)("div",{className:L,children:[(0,t.jsx)("div",{className:"".concat(S,"-input-label"),children:o}),(0,t.jsx)(Rn,I()({className:"".concat(S,"-input-self"),onChange:B,onFocus:F,onBlur:W,readOnly:v,disabled:s,type:R,value:N,maxLength:r},E)),!s&&!v&&b&&N&&(0,t.jsx)("div",{className:"".concat(S,"-input-clear"),onClick:G,children:(0,t.jsx)(O,{icon:"times-circle"})}),V()]})},Un=On,Wn=x(15558),Ie=x.n(Wn),Hn=x(76246),le=S+"-progress",Zn=function(e){var n=e.percent,a=e.fixed,r=e.unfilled,o=e.color,c=e.trackColor,d=e.showPivot,l=e.pivoteText,s=e.textColor,u=e.pivotColor,v=e.inactive,m=e.children,b=e.wrapStyle,C=e.percentStyle,f,h,P,A=k()(le,"".concat(le,"-wrap"),p()({},"".concat(le,"-wrap-fixed"),a)),E=r?{background:"transparent"}:{background:c};b=I()(I()({},E),b);var L=k()("".concat(le,"-bar"));C=I()({width:"".concat(n,"%"),background:v?"rgb(202, 202, 202)":o},C);var y=function(){f&&console.log("barRef.style.width:",f.style.width);var R=l||"".concat(n,"%");if(!d)return"";var H={color:s,background:v?"rgb(202, 202, 202)":u,left:"".concat(W,"px")};return(0,t.jsxs)("span",{ref:M,style:H,className:"".concat(le,"-bar-pivot"),children:[R,m]})},$=function(R){h=R},N=function(R){f=R},M=function(R){P=R},B=(0,D.useState)(0),F=Q()(B,2),W=F[0],G=F[1];return(0,D.useEffect)(function(){setTimeout(function(){f&&h&&P&&G((h.offsetWidth-P.offsetWidth)*+n/100||f.offsetWidth)},10)},[]),(0,t.jsx)("div",{ref:$,className:A,style:b,role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,children:(0,t.jsx)("div",{className:L,style:C,ref:N,children:y()})})},we=Zn;te.library.add(K.faTimes);var oe="".concat(S,"-uploader-item"),Gn=function(e){var n=e.item,a=e.imageFit,r=e.previewSize,o=e.deletable,c=e.index,d=e.beforeDelete,l=e.name,s=e.onDelete,u=function(){if(d){var h=d.apply(null,[n,{name:l,index:c}]);Qe(h)?h.then(function(P){P&&s&&s()}):h&&s&&s()}else s&&s()},v=function(){if(Je(n))return(0,t.jsx)(Le,{fit:a,width:r||"90px",height:r||"90px",src:n.content||n.url||""})},m=function(){if(o)return(0,t.jsx)("div",{className:"".concat(oe,"-delete"),onClick:u,children:(0,t.jsx)("div",{className:"".concat(oe,"-delete-icon"),children:(0,t.jsx)(O,{size:"2x",icon:"times"})})})},b=function(){var h=n.status,P=n.message;if(!(!h||h==="done"))return(0,t.jsxs)("div",{className:"".concat(oe,"-mask"),children:[h==="loading"&&(0,t.jsx)(O,{size:"lg",icon:"spinner",spin:!0}),h==="failed"&&(0,t.jsx)(O,{size:"lg",icon:"exclamation-circle"}),(0,t.jsx)("span",{children:P})]})},C=function(){var h=n.percent,P=n.status;if(P==="uploading")return(0,t.jsx)("div",{className:"".concat(oe,"-progress-wrap"),children:(0,t.jsx)(we,{percent:h||0,wrapStyle:{height:"8px"}})})};return(0,t.jsxs)("div",{className:oe,children:[v(),m(),b(),C()]})},Vn=Gn,Be=(0,D.createContext)({length:0}),Xn=S+"-breadcrmb",Jn=function(e){var n=e.separator,a=e.children,r=e.inactiveColor,o=e.activeColor,c=e.onSelect,d=function(m){c&&c(m)},l={length:(a==null?void 0:a.length)||0,separator:"/",inactiveColor:r,activeColor:o,onSelect:d},s=k()(Xn),u=function(){return D.Children.map(a,function(m,b){var C=m;if(C.type.displayName==="TabBarItem")return D.cloneElement(C,{index:b});console.error("Warning: Breadcrumb has a child which is not BreadcrumbItem")})};return(0,t.jsx)("ul",{className:s,children:(0,t.jsx)(Be.Provider,{value:l,children:u()})})},Kn=Jn,Ce=S+"-breadcrmb-item",Ee=function(e){var n=e.index,a=e.disabled,r=e.children,o=k()(Ce,p()({},"".concat(Ce,"-disabled"),a)),c=(0,D.useContext)(Be),d=function(){a||c.onSelect&&c.onSelect(n)},l={color:c.length-1===n?c.activeColor:c.inactiveColor};return(0,t.jsxs)("li",{className:o,onClick:d,style:l,children:[(0,t.jsx)("span",{className:"".concat(Ce,"-link"),children:r}),(0,t.jsx)("span",{className:"".concat(Ce,"-separator"),children:c.length-1!==n&&c.separator})]})};Ee.displayName="TabBarItem";var Qn=Ee,ce=S+"-tree-select",Re=function(){var e=(0,D.useContext)(Pe),n=e.data,a=e.index,r=e.onChangeTree,o=e.activeColor,c=(0,D.useState)(a||0),d=Q()(c,2),l=d[0],s=d[1],u=function(f,h){f.disabled||(s(h),r&&r(f,h))},v=function(f,h){return k()("".concat(ce,"-sidebar-item"),p()(p()({},"".concat(ce,"-sidebar-item-active"),l===h),"".concat(ce,"-sidebar-item-disabled"),f.disabled))},m=function(f){return{backgroundColor:o&&f===l?o:""}},b=function(){return!n||!n.length?(console.warn("The data is not a Array or the length of the data is 0"),""):n.map(function(f,h){return(0,t.jsxs)("li",{onClick:u.bind(void 0,f,h),className:v(f,h),children:[(0,t.jsx)("span",{style:m(h),className:"".concat(ce,"-sidebar-item-line")}),f.label]},h)})};return(0,t.jsx)("ul",{className:"".concat(ce,"-sidebar"),children:b()})};Re.defaultProps={};var Yn=Re,xe=S+"-tree-select-content",Ae=function(e){var n=(0,D.useContext)(Pe),a=n.data,r=n.index,o=r===void 0?0:r,c=n.activeId,d=n.multiple,l=n.onChangeTreeItem,s=n.activeColor,u=n.inactiveColor,v=[];a&&a[o]&&a[o].children&&(v=a[o].children);var m=(0,D.useState)(c),b=Q()(m,2),C=b[0],f=b[1],h=function(y,$){if(!y.disabled){var N=y.value;if(C!=null&&C.includes(N)){var M=C.indexOf(N),B=Ne().cloneDeep(C);B.splice(M,1),f(B),l&&l(y,B)}else if(d){var F=Ne().cloneDeep(C);F==null||F.push(N),f(F),l&&l(y,F)}else f([N]),l&&l(y,N)}},P=function(y,$){var N=k()("".concat(xe,"-item"),p()(p()({},"".concat(xe,"-item-active"),C.includes(y.value)),"".concat(xe,"-item-disabled"),y.disabled));return N},A=function(y){return s||u?{color:C.includes(y)?s:u||""}:{}},E=function(){return v.map(function(y,$){var N=function(B){return C.includes(B.value)?(0,t.jsx)(O,{icon:"check"}):""};return(0,t.jsxs)("li",{className:P(y,$),style:A(y.value),onClick:h.bind(void 0,y,$),children:[(0,t.jsx)("span",{children:y.label}),(0,t.jsx)("span",{children:N(y)})]},$)})};return(0,t.jsx)("ul",{className:xe,children:E()})};Ae.displayName="TreeSelectItem";var qn=Ae,Pe=(0,D.createContext)({multiple:!1,data:[]}),_n=S+"-tree-select",Me=function(e){var n=e.data,a=e.onChangeTree,r=e.onChangeTreeItem,o=e.inactiveColor,c=e.activeColor,d=e.index,l=d===void 0?0:d,s=e.activeId,u=s===void 0?[]:s,v=e.multiple,m=e.height,b=m===void 0?"300px":m,C=(0,D.useState)(l||0),f=Q()(C,2),h=f[0],P=f[1],A=function($,N){r&&r($,N)},E=function($,N){P(N),a&&a($,N)},L={inactiveColor:o,activeColor:c,data:n,multiple:v,onChangeTreeItem:A,onChangeTree:E,index:h,activeId:Array.isArray(u)?u:[u]};return(0,t.jsx)("div",{className:_n,style:{height:b},children:(0,t.jsxs)(Pe.Provider,{value:L,children:[(0,t.jsx)(Yn,{}),(0,t.jsx)(qn,{})]})})};Me.defaultProps={};var ea=Me,na=["children","color","dot","max","content","size","fixed","style"],se=S+"-badge",aa=function(e){var n=e.children,a=e.color,r=e.dot,o=r===void 0?!1:r,c=e.max,d=c===void 0?99:c,l=e.content,s=e.size,u=e.fixed,v=e.style,m=_()(e,na),b=I()({backgroundColor:a},v);l&&(l=Number(l)?Number(l):l);var C=function(){return o?"":typeof l=="number"&&l>d?"".concat(d,"+"):l},f=k()("".concat(se,"-wrap")),h=k()(se,p()(p()(p()({},"".concat(se,"-dot-large"),o&&s==="lg"),"".concat(se,"-fixed"),typeof l=="number"||u||o),"".concat(se,"-dot"),o));return(0,t.jsxs)("div",{className:f,children:[n,(l||o)&&(0,t.jsx)("sup",I()(I()({className:h,style:I()({},b)},m),{},{children:C()}))]})},ta=aa;te.library.add(K.faCamera);var be="".concat(S,"-uploader"),ra=function(e){var n=(0,D.useRef)(null),a=e.multiple,r=a===void 0?!0:a,o=e.disabled,c=o===void 0?!1:o,d=e.customHeaer,l=e.previewSize,s=e.imageFit,u=s===void 0?"fill":s,v=e.maxCount,m=e.deletable,b=m===void 0?!0:m,C=e.name,f=e.customFileName,h=e.maxSize,P=e.accept,A=P===void 0?"image/*":P,E=e.action,L=e.onOversize,y=e.onChange,$=e.beforeUpload,N=e.onRemove,M=(0,D.useState)(e.fileList||[]),B=Q()(M,2),F=B[0],W=B[1],G=function(g,T){W(function(j){return j.map(function(z){return z.uid===g.uid?I()(I()({},z),T):z})})},V=function(g){g.forEach(function(T){R(T,g)})},R=function(g,T){var j,z={uid:Date.now()+"upload-file",file:g.file,status:"",message:"",content:g.content};if(W(function(X){return[].concat(Ie()(X),[z])}),!!g.file){var Z=new FormData;Z.append(f||((j=g.file)===null||j===void 0?void 0:j.name),g.file),Hn.Z.post(E,Z,{headers:I()({"Content-Type":"multipart/form-data"},d),onUploadProgress:function(ae){var J,Te=Math.round(ae.loaded*100/((J=ae.total)!==null&&J!==void 0?J:0))||0;G(z,{percent:Te,status:"uploading"})}}).then(function(X){y&&y(g.file,T,X),G(z,{status:"done"})}).catch(function(X){y&&y(g.file,T,X),G(z,{status:"failed",message:"\u4E0A\u4F20\u5931\u8D25"})})}},H=function(g,T){return(0,t.jsx)(Vn,{item:g,imageFit:u,index:T,previewSize:l,beforeDelete:g.beforeDelete,deletable:b,name:C,onDelete:function(){w(g,T)}},T)},w=function(g,T){var j=F.slice(0),z=j.splice(T,1);W(j),N&&N(z[0])},q=function(){return F.map(H)},de=function(g){return new Promise(function(T){var j=new FileReader;j.onload=function(z){T(z.target.result)},j.readAsDataURL(g)})},ye=function(g){if(ue(),h&&De(g,h))if((0,ke.isArray)(g)){var T=Ye(g,h),j=T.valid,z=T.invalid;g=j,L&&L(z)}else{L&&L(pe(g));return}if(g=pe(g),E){if(!g.length)return;V(g)}else W([].concat(Ie()(F),Ie()(g)))},ue=function(){n!=null&&n.current&&(n.current.value="")},la=function(g){if(Array.isArray(g)){if(v){var T=+v-F.length;g.length>T&&(g=g.slice(0,T))}Promise.all(g.map(function(j){return de(j)})).then(function(j){var z=g.map(function(Z,X){var ae={uid:Date.now()+"upload-file",file:Z,status:"",message:""};if(j[X]&&(ae.content=j[X]),$){var J=$(Z);if(!J)return!1;if(J&&J instanceof Promise)J.then(function(Te){return Te}).catch(function(){});else if(J)return ae}return ae});z=z.filter(function(Z){return Z}),z.length&&ye(z)})}else de(g).then(function(j){if(v){var z=+v-F.length;if(z<=0)return}var Z={uid:Date.now()+"upload-file",file:g,status:"",message:""};j&&(Z.content=j),ye(Z)})},oa=function(g){var T=g.target,j=T.files;if(!(c||!j||!j.length)){var z=j.length===1?[j[0]]:[].slice.call(j);la(z)}},ca=function(){var g=function(){return(0,t.jsx)("input",{ref:n,type:"file",accept:A,className:"".concat(be,"-input"),capture:!0,multiple:r,disabled:c,onChange:oa})},T=k()("".concat(be,"-button"),p()({},"".concat(be,"-button-disabled"),c));return(0,t.jsxs)("div",{className:T,children:[(0,t.jsx)(O,{icon:"camera"}),g()]})};return(0,t.jsxs)("div",{className:be,children:[q(),ca()]})},ia=ra}}]);
