(function(){"use strict";var e={9451:function(e,t,n){var a=n(9242),l=n(5),o=(n(4415),n(9029),n(3396)),i=n(7139);const r={id:"app",style:{width:"95%","text-align":"center",margin:"auto"}},s=(0,o._)("h1",null,"KAS OSS Viewer",-1),u=(0,o.Uk)(" Search "),c=(0,o.Uk)(" Show "),d=(0,o.Uk)(" Download "),p={class:"custom-tree-node"},f={key:0},h=(0,o.Uk)(" Show "),m=(0,o.Uk)(" Download "),w={key:1},g={class:"code-style"},y=["innerHTML"];function b(e,t,n,l,b,k){const v=(0,o.up)("el-input"),x=(0,o.up)("el-col"),_=(0,o.up)("el-button"),W=(0,o.up)("el-row"),C=(0,o.up)("el-table-column"),V=(0,o.up)("el-table"),O=(0,o.up)("el-tab-pane"),j=(0,o.up)("el-tree"),P=(0,o.up)("el-dialog"),S=(0,o.up)("el-tabs");return(0,o.wg)(),(0,o.iD)("div",r,[s,(0,o.Wm)(S,null,{default:(0,o.w5)((()=>[(0,o.Wm)(O,{label:"Search"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(x,{span:22},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{modelValue:b.searchPrefix,"onUpdate:modelValue":t[0]||(t[0]=e=>b.searchPrefix=e),placeholder:"Please input file prefix",clearable:"",onKeyup:(0,a.D2)(k.search,["enter"])},null,8,["modelValue","onKeyup"])])),_:1}),(0,o.Wm)(x,{span:2},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{type:"primary",onClick:k.search,style:{width:"90%"}},{default:(0,o.w5)((()=>[u])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(V,{data:b.searchResults,style:{width:"100%"}},{default:(0,o.w5)((()=>[(0,o.Wm)(C,{fixed:"",prop:"path",label:"Path","min-width":"80%"}),(0,o.Wm)(C,{fixed:"right",label:"Actions","min-width":"20%"},{default:(0,o.w5)((e=>[(0,o.Wm)(_,{type:"text",onClick:()=>k.show(e.row.path)},{default:(0,o.w5)((()=>[c])),_:2},1032,["onClick"]),(0,o.Wm)(_,{type:"text",onClick:()=>k.download(e.row.path)},{default:(0,o.w5)((()=>[d])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])),_:1})])),_:1}),(0,o.Wm)(O,{label:"Files"},{default:(0,o.w5)((()=>[(0,o.Wm)(j,{load:k.loadNode,props:b.props,"node-key":"path",lazy:""},{default:(0,o.w5)((({node:e})=>[(0,o._)("span",p,[(0,o._)("span",null,(0,i.zw)(e.label),1),e.isLeaf?((0,o.wg)(),(0,o.iD)("span",f,[(0,o.Wm)(_,{type:"text",onClick:()=>k.show(e.key)},{default:(0,o.w5)((()=>[h])),_:2},1032,["onClick"]),(0,o.Wm)(_,{type:"text",onClick:()=>k.download(e.key)},{default:(0,o.w5)((()=>[m])),_:2},1032,["onClick"])])):((0,o.wg)(),(0,o.iD)("span",w,(0,i.zw)(e.info),1))])])),_:1},8,["load","props"])])),_:1}),(0,o.Wm)(P,{modelValue:b.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>b.dialogVisible=e),title:b.dialogFileName,center:"",width:"90%"},{default:(0,o.w5)((()=>[(0,o._)("div",g,[(0,o._)("span",{innerHTML:b.dialogCode},null,8,y)])])),_:1},8,["modelValue","title"])])),_:1})])}var k=n(640),v=n.n(k),x=n(5792),_=n(7178);const W=new(v())({region:"oss-cn-hangzhou",accessKeyId:"LTAI5tCx79brCnGXxKGTsAst",accessKeySecret:"F0IVmA99YzX2x8LWkGrp8WBjVH9qsa",bucket:"canvas-imagenet",secure:!0});var C={name:"App",data(){return{dialogVisible:!1,dialogFileName:"filename",dialogCode:"code",props:{label:"name",isLeaf:"leaf"},searchPrefix:"",searchResults:[]}},methods:{async search(){0!==this.searchPrefix.length&&(this.searchResults=await this.listImpl(this.searchPrefix,"",!1,!0,!1),(0,_.z8)({message:"Search done.",grouping:!0,type:"success"}))},async show(e){fetch(`https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/${e}`).then((e=>e.text())).then((t=>{console.log(t);let n=x.Z.highlightAuto(t);this.dialogFileName=e,this.dialogCode=`${n.value}`,this.dialogVisible=!0}))},async download(e){window.open(`https://canvas-imagenet.oss-cn-hangzhou.aliyuncs.com/${e}`)},async loadNode(e,t){return t(await this.listDir(e))},async listImpl(e,t,n,a,l){const o=await W.list({prefix:e,delimiter:t,"max-keys":1e3});let i=[];return o.prefixes&&n&&o.prefixes.forEach((t=>{(t!==e||l)&&i.push({name:t,leaf:!1,path:t})})),o.objects&&a&&o.objects.forEach((e=>{i.push({name:e.name.split("/").pop(),leaf:!0,path:e.name})})),i},async listDir(e){const t=await this.listImpl(e.key,"/",!0,!0,!1);return e.info=`[${t.length} files]`,t}}},V=n(89);const O=(0,V.Z)(C,[["render",b]]);var j=O;const P=(0,a.ri)(j);P.use(l.Z),P.mount("#app")}},t={};function n(a){var l=t[a];if(void 0!==l)return l.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,l,o){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],l=e[c][1],o=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[a,l,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var l,o,i=a[0],r=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)n.o(r,l)&&(n.m[l]=r[l]);if(s)var c=s(n)}for(t&&t(a);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},a=self["webpackChunkkas_frontend"]=self["webpackChunkkas_frontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9451)}));a=n.O(a)})();
//# sourceMappingURL=app.0f10089e.js.map