(function(){"use strict";var e={7226:function(e,n,t){var o=t(9242),a=t(4421),i=(t(4415),t(9029),t(3396)),l=t(7139);const r={id:"app"},s=(0,i._)("h1",null,"KAS OSS Viewer",-1),u={class:"custom-tree-node"},c={key:0},d=(0,i.Uk)(" Show "),f=(0,i.Uk)(" Download "),p={key:1},h={class:"code-style"},m=["innerHTML"];function w(e,n,t,o,a,w){const g=(0,i.up)("el-col"),v=(0,i.up)("el-row"),y=(0,i.up)("el-button"),b=(0,i.up)("el-tree"),k=(0,i.up)("el-dialog");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{span:24},{default:(0,i.w5)((()=>[s])),_:1})])),_:1}),(0,i.Wm)(v,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{span:24},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{load:w.loadNode,props:a.props,"node-key":"path",lazy:""},{default:(0,i.w5)((({node:e})=>[(0,i._)("span",u,[(0,i._)("span",null,(0,l.zw)(e.label),1),e.isLeaf?((0,i.wg)(),(0,i.iD)("span",c,[(0,i.Wm)(y,{type:"text",onClick:()=>w.show(e)},{default:(0,i.w5)((()=>[d])),_:2},1032,["onClick"]),(0,i.Wm)(y,{type:"text",onClick:()=>w.download(e)},{default:(0,i.w5)((()=>[f])),_:2},1032,["onClick"])])):((0,i.wg)(),(0,i.iD)("span",p,(0,l.zw)(e.info),1))])])),_:1},8,["load","props"])])),_:1})])),_:1}),(0,i.Wm)(k,{modelValue:a.dialogVisible,"onUpdate:modelValue":n[0]||(n[0]=e=>a.dialogVisible=e),title:a.dialogFileName,center:"",width:"90%"},{default:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i._)("span",{innerHTML:a.dialogCode},null,8,m)])])),_:1},8,["modelValue","title"])])}var g=t(640),v=t.n(g),y=t(5792);const b=new(v())({region:"oss-cn-hangzhou",accessKeyId:"LTAI5tCx79brCnGXxKGTsAst",accessKeySecret:"F0IVmA99YzX2x8LWkGrp8WBjVH9qsa",bucket:"canvas-imagenet",secure:!0});var k={name:"App",data(){return{dialogVisible:!1,dialogFileName:"filename",dialogCode:"code",props:{label:"name",isLeaf:"leaf"}}},methods:{async show(e){console.log(e.key),fetch(`https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/${e.key}`).then((e=>e.text())).then((n=>{console.log(n);let t=y.Z.highlightAuto(n);this.dialogFileName=e.data.name,this.dialogCode=`${t.value}`,this.dialogVisible=!0}))},async download(e){window.open(`https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/${e.key}`)},async loadNode(e,n){return n(await this.listDir(e))},async listDir(e){const n=e.key,t=await b.list({prefix:n,delimiter:"/","max-keys":1e3});let o=[];return t.prefixes&&t.prefixes.forEach((e=>{e!==n&&o.push({name:e,leaf:!1,path:e})})),t.objects&&t.objects.forEach((e=>{e.name!==n&&o.push({name:e.name.split("/").pop(),leaf:!0,path:e.name})})),e.info=`[${o.length} files]`,o}}},_=t(89);const x=(0,_.Z)(k,[["render",w]]);var O=x;const C=(0,o.ri)(O);C.use(a.Z),C.mount("#app")}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,a,i){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],i=e[c][2];for(var r=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(r=!1,i<l&&(l=i));if(r){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,a,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,i,l=o[0],r=o[1],s=o[2],u=0;if(l.some((function(n){return 0!==e[n]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(s)var c=s(t)}for(n&&n(o);u<l.length;u++)i=l[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkkas_frontend"]=self["webpackChunkkas_frontend"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7226)}));o=t.O(o)})();
//# sourceMappingURL=app.7768378e.js.map