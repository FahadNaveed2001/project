(()=>{var e={};e.id=626,e.ids=[626],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},5150:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(482),a=s(9108),n=s(2563),l=s.n(n),o=s(8300),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);s.d(t,i);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,8148)),"C:\\Users\\Fahad MK\\Desktop\\nexttesting\\src\\app\\login\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,259)),"C:\\Users\\Fahad MK\\Desktop\\nexttesting\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Fahad MK\\Desktop\\nexttesting\\src\\app\\login\\page.jsx"],x="/login/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},824:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2583,23)),Promise.resolve().then(s.t.bind(s,6840,23)),Promise.resolve().then(s.t.bind(s,8771,23)),Promise.resolve().then(s.t.bind(s,3225,23)),Promise.resolve().then(s.t.bind(s,9295,23)),Promise.resolve().then(s.t.bind(s,3982,23))},1993:(e,t,s)=>{Promise.resolve().then(s.bind(s,9697)),Promise.resolve().then(s.bind(s,893)),Promise.resolve().then(s.bind(s,6301)),Promise.resolve().then(s.bind(s,9462)),Promise.resolve().then(s.bind(s,8978))},6545:(e,t,s)=>{Promise.resolve().then(s.bind(s,6973))},6973:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(5344),a=s(9462),n=s(8604),l=s(8428),o=s(3729),i=s(9697);function c(){let e=(0,l.useRouter)(),t=(0,o.useContext)(a.default),[s,c]=(0,o.useState)({email:"",password:""}),d=async r=>{if(r.preventDefault(),console.log(s),""===s.email.trim()||""===s.password.trim()){i.toast.warning("Fill All Fields !!");return}try{let r=await (0,n.x4)(s);console.log(r),i.toast.success("Login Successful !!"),t.setUser(r.user),e.push("/")}catch(e){console.log(e),i.toast.error(e.response.data.message)}};return r.jsx("main",{className:" min-h-[80vh] bg-[#0f0f0f] md:p-24 text-white",children:(0,r.jsxs)("div",{className:"relative py-3 sm:max-w-xl sm:mx-auto h-[50%]",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r shadow-2xl shadow-black from-[#000000] to-[#000000]  transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"}),r.jsx("div",{className:"relative px-4 py-10 bg-[#1D1D1D] shadow-2xl shadow-black sm:rounded-3xl sm:p-20",children:(0,r.jsxs)("div",{className:"max-w-md mx-auto",children:[r.jsx("div",{children:r.jsx("h1",{className:"text-2xl font-semibold text-white ",children:"Login"})}),r.jsx("div",{className:"divide-y divide-gray-200",children:r.jsx("div",{className:"py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7",children:(0,r.jsxs)("form",{action:"#!",onSubmit:d,children:[(0,r.jsxs)("div",{className:"relative mt-6",children:[r.jsx("input",{autoComplete:"off",id:"email",name:"email",type:"email",className:"peer placeholder-transparent  h-10 bg-transparent w-full border-b  border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-500",placeholder:"Email address",onChange:e=>{c({...s,email:e.target.value})},value:s.email}),r.jsx("label",{className:"absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm",children:"Email Address"})]}),(0,r.jsxs)("div",{className:"relative mt-6",children:[r.jsx("input",{autoComplete:"off",id:"password",name:"password",type:"password",className:"peer placeholder-transparent bg-transparent  h-10 w-full border-b border-gray-500 text-gray-100 focus:outline-none focus:border-cyan-500",placeholder:"Password",onChange:e=>{c({...s,password:e.target.value})},value:s.password}),r.jsx("label",{className:"absolute left-0 -top-3.5 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-cyan-700 peer-focus:text-sm",children:"Password"})]}),r.jsx("div",{className:"relative mt-6",children:r.jsx("button",{type:"submit",className:"bg-cyan-500 text-white rounded-md px-2 py-1",children:"Submit"})})]})})})]})})]})})}s(5996)},893:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var r=s(5344),a=s(155),n=s(1490),l=s(4783),o=s(3729),i=s(9462),c=s(8604),d=s(9697),x=s(6506),u=s(8428),p=s(9921);function m(){let e=(0,o.useContext)(i.default),t=(0,u.useRouter)();async function s(){try{let s=await (0,c.kS)();console.log(s),e.setUser(void 0),d.toast.success("Logged Out Successfully !!"),t.push("/login")}catch(e){console.log(e),d.toast.error("Error logging out !!")}}return console.log(e),(0,r.jsxs)("nav",{className:" bg-[#1d1d1d] text-white py-6 px-4 md:px-20 flex justify-between items-center",children:[r.jsx("div",{className:"",children:(0,r.jsxs)("a",{className:"cursor-pointer flex flex-row items-center gap-2",children:[r.jsx(a.D2x,{className:"text-3xl text-cyan-500"}),r.jsx("span",{className:" font-bold text-sm md:text-2xl",children:"MK Project Manager"})]})}),r.jsx("div",{children:r.jsx("ul",{className:"flex flex-row space-x-5",children:e.user&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("li",{className:"hover:text-cyan-400 transition-all",children:(0,r.jsxs)(x.default,{href:"/",className:"flex flex-row items-center gap-1",children:[r.jsx(n.iB,{}),r.jsx("span",{className:"",children:"Home"})]})}),r.jsx("li",{className:"hover:text-cyan-400 transition-all",children:(0,r.jsxs)(x.default,{href:"/add-project",className:"flex flex-row items-center gap-1",children:[r.jsx(a.WZt,{}),r.jsx("span",{className:"",children:"Add Project"})]})}),r.jsx("li",{className:"hover:text-cyan-400 transition-all",children:(0,r.jsxs)(x.default,{href:"/projects",className:"flex flex-row items-center gap-1",children:[r.jsx(l.eSk,{}),r.jsx("span",{className:"",children:"Projects"})]})})]})})}),r.jsx("div",{children:(0,r.jsxs)("ul",{className:"flex flex-row space-x-2",children:[e.user&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("li",{className:"  px-4 cursor-default rounded py-2 transition-all",children:r.jsx("a",{children:e.user.name})}),r.jsx("li",{className:"  cursor-pointer px-4 text-cyan-400 hover:text-white hover:bg-cyan-400 rounded-full py-2 transition-all",children:(0,r.jsxs)("button",{className:"flex items-center gap-2",onClick:s,children:[r.jsx(p.d7k,{}),"Logout"]})})]}),!e.user&&(0,r.jsxs)(r.Fragment,{children:[r.jsx("li",{className:" px-4 bg-[#111111] hover:bg-cyan-400 rounded py-2 transition-all",children:r.jsx(x.default,{href:"/login",children:"Login"})}),r.jsx("li",{className:" px-4 bg-[#0F0F0F] hover:bg-cyan-400 rounded py-2 transition-all",children:r.jsx(x.default,{href:"/signup",children:"Signup"})})]})]})})]})}},6301:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(5344);function a(){return r.jsx("footer",{className:" rounded-lg shadow  m-4",children:(0,r.jsxs)("div",{className:"w-full max-w-screen-xl mx-auto p-4 md:py-4",children:[r.jsx("hr",{className:"my-6 border-cyan-400 sm:mx-auto  lg:my-8"}),(0,r.jsxs)("span",{className:"block text-sm text-gray-200 sm:text-center dark:text-gray-400",children:["\xa9 2024 ",r.jsx("a",{href:"https://themksolution.com/",className:"hover:underline",children:"Mk Solution™"}),". All Rights Reserved."]})]})})}},9462:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(3729).createContext)({})},8978:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var r=s(5344),a=s(3729),n=s(9462);s(9697),s(5891),s(8604);let l=({children:e})=>{let[t,s]=(0,a.useState)(void 0);return(0,a.useEffect)(()=>{},[]),r.jsx(n.default.Provider,{value:{user:t,setUser:s},children:e})}},5891:(e,t,s)=>{"use strict";s.d(t,{M:()=>r});let r=s(3608).Z.create({baseURL:process.env.BASE_URL})},8604:(e,t,s)=>{"use strict";s.d(t,{aX:()=>a,ar:()=>l,kS:()=>o,x4:()=>n});var r=s(5891);let a=async e=>{try{return(await r.M.post("/api/users",e)).data}catch(e){throw Error("An error occurred during registration.")}};async function n(e){return await r.M.post("/api/login",e).then(e=>e.data)}async function l(){return await r.M.get("/api/current").then(e=>e.data)}async function o(){return await r.M.post("/api/logout").then(e=>e.data)}},259:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>P,metadata:()=>N});var r=s(5036),a=s(1457),n=s.n(a);s(5023);var l=s(6843);let o=(0,l.createProxy)(String.raw`C:\Users\Fahad MK\Desktop\nexttesting\src\components\CustomNavbar.jsx`),{__esModule:i,$$typeof:c}=o,d=o.default,x=(0,l.createProxy)(String.raw`C:\Users\Fahad MK\Desktop\nexttesting\src\components\Footer.jsx`),{__esModule:u,$$typeof:p}=x,m=x.default;var h=s(3222);s(7001);let g=(0,l.createProxy)(String.raw`C:\Users\Fahad MK\Desktop\nexttesting\src\context\userContext.js`),{__esModule:f,$$typeof:j}=g;g.default;let v=(0,l.createProxy)(String.raw`C:\Users\Fahad MK\Desktop\nexttesting\src\context\userProvider.js`),{__esModule:y,$$typeof:b}=v,w=v.default,N={title:"Mk Project Manager"};function P({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:n().className,children:(0,r.jsxs)(w,{children:[r.jsx(h.Ix,{}),r.jsx("div",{children:r.jsx(d,{})}),r.jsx("div",{children:e}),r.jsx("div",{children:r.jsx(m,{})})]})})})}},8148:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>i});var r=s(5036);let a=(0,s(6843).createProxy)(String.raw`C:\Users\Fahad MK\Desktop\nexttesting\src\app\login\LoginComponent.jsx`),{__esModule:n,$$typeof:l}=a,o=a.default,i={title:"Login : Project Manager"};function c(){return r.jsx("div",{children:r.jsx(o,{})})}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5996:()=>{},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,172,337],()=>s(5150));module.exports=r})();