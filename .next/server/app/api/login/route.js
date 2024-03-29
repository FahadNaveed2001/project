"use strict";(()=>{var e={};e.id=740,e.ids=[740],e.modules={2663:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},2781:e=>{e.exports=require("stream")},3837:e=>{e.exports=require("util")},5043:(e,o,t)=>{t.r(o),t.d(o,{headerHooks:()=>S,originalPathname:()=>v,patchFetch:()=>f,requestAsyncStorage:()=>h,routeModule:()=>m,serverHooks:()=>x,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>q});var r={};t.r(r),t.d(r,{POST:()=>g});var n=t(5419),s=t(9108),i=t(9678),a=t(8582),u=t(8984),l=t(6521),c=t.n(l),p=t(6082),d=t.n(p);async function g(e){console.log("login Api");let{email:o,password:t}=await e.json();try{let e=await a.n.findOne({email:o});if(null==e)throw Error("No User Found!");if(!c().compareSync(t,e.password))throw Error("User Not Found");let r=d().sign({_id:e._id,name:e.name},process.env.JWT_TOKEN),n=u.NextResponse.json({message:"Login Done",success:!0,user:e});return n.cookies.set("MKauthtoken",r,{expiresIn:"1d",httpOnly:!0}),console.log(e),console.log(r),n}catch(e){return console.log(e),u.NextResponse.json({message:"Password not matched",success:!1},{status:500})}}(0,t(6482).Q)();let m=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"C:\\Users\\Fahad MK\\Desktop\\nexttesting\\src\\app\\api\\login\\route.js",nextConfigOutput:"",userland:r}),{requestAsyncStorage:h,staticGenerationAsyncStorage:w,serverHooks:x,headerHooks:S,staticGenerationBailout:q}=m,v="/api/login/route";function f(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:w})}},6482:(e,o,t)=>{t.d(o,{Q:()=>s});var r=t(2663),n=t.n(r);t(8582);let s=async()=>{try{let{connection:e}=await n().connect(process.env.MONGO_DB_URL,{dbName:"work_manager",useNewUrlParser:!0,useUnifiedTopology:!0,serverSelectionTimeoutMS:1e4,socketTimeoutMS:45e3,connectTimeoutMS:3e4});console.log("Database Connected"),console.log("Connected with Host",e.host)}catch(e){console.log("Failed to connect Database"),console.log(e)}}},8582:(e,o,t)=>{t.d(o,{n:()=>i});var r=t(2663),n=t.n(r);let s=new r.Schema({name:String,email:{type:String,unique:!0,required:[!0,"Email is required!"]},password:{type:String,required:[!0,"Password is required!"]},about:String,profileURL:String}),i=n().connection.models.users||n().model("users",s)}};var o=require("../../../webpack-runtime.js");o.C(e);var t=e=>o(o.s=e),r=o.X(0,[638,791,82,521],()=>t(5043));module.exports=r})();