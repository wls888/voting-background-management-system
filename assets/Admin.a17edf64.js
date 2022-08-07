import"./el-tooltip.a3af5ee2.js";import{E as P,a as b}from"./el-switch.c3f0abad.js";import{d as L,E as M,M as U,a as W,b as $}from"./MyPagination.c59298a6.js";import{d as O,u as V,r as y,e as A,k as Y,l as q,o as H,c as I,m as s,n as c,q as r,s as F,x as Q,a as _,t as w,y as d}from"./index.41b9361d.js";import"./el-table-column.5d709dc1.js";import"./aria.75ec5909.js";import"./index.0da6d2ae.js";const R=[{type:"INPUT",label:"\u7528\u6237\u540D",labelWidth:"60px",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",field:"usernameLike"},{type:"DATE_PICKER",label:"\u521B\u5EFA\u65F6\u95F4",labelWidth:"80px",field:"createTimeLike",otherOptions:{rangeSeparator:"-",startPlaceholder:"\u5F00\u59CB\u65F6\u95F4",endPlaceholder:"\u7ED3\u675F\u65F6\u95F4",type:"daterange",unlinkPanels:!0}}],j=[{property:"id",slotName:"id",label:"\u7528\u6237\u7F16\u53F7",showOverflowTooltip:!0,width:"120"},{property:"name",slotName:"name",label:"\u7528\u6237\u540D",minWidth:"100"},{property:"username",slotName:"username",label:"\u8D26\u53F7",minWidth:"100"},{property:"email",slotName:"email",label:"\u90AE\u7BB1",minWidth:"120"},{property:"status",slotName:"status",label:"\u72B6\u6001",minWidth:"120"},{property:"createTime",slotName:"createTime",label:"\u521B\u5EFA\u65F6\u95F4",width:"134"},{property:"updateTime",slotName:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4",width:"134"},{property:"createUser",slotName:"createUser",label:"\u521B\u5EFA\u4EBA",showOverflowTooltip:!0,width:"120"},{property:"updateUser",slotName:"updateUser",label:"\u4FEE\u6539\u4EBA",showOverflowTooltip:!0,width:"120"},{slotName:"operation",label:"\u64CD\u4F5C",minWidth:"120"}];function B(p,t="YYYY-MM-DD HH:mm:ss"){return p==null?"":L(p).format(t)}const K={class:"admin"},z=d("\u65B0\u589E"),G=d("\u6279\u91CF\u5220\u9664"),J={class:"operation"},X=d("\u7F16\u8F91"),Z=d("\u5220\u9664"),re=O({__name:"Admin",setup(p){const{admin:t}=V(),h=y({});let g=y([]);const f=y([]),E=e=>{console.log(e.row)},C=e=>{b.confirm(`\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010${e}\u3011\u5417`,{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{const o=[];o.push(e),t.deleteAdmin(o)})},D=()=>{const e=[];if(!f.value.length){F("warning","\u60A8\u672A\u9009\u4E2D\u5220\u9664\u5143\u7D20");return}f.value.forEach(o=>{e.push(o.id)}),b.confirm(`\u60A8\u786E\u5B9A\u8981\u5220\u9664\u3010${e}\u3011\u5417`,{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{t.deleteAdmin(e)})},v=e=>{f.value=[...e]},k=async e=>{await t.getAdminTablePageData(e,{name:a.name,startTime:a.startTime,endTime:a.endTime})},x=e=>{const o=e.id,n=e.status;o&&n&&t.changeStatus(n,o)},l=A({usernameLike:"",createTimeLike:[]}),a=A({name:"",startTime:"",endTime:""}),N=()=>{l.usernameLike||l.createTimeLike.length===2?t.getAdminTablePageData(1,{name:a.name,startTime:a.startTime,endTime:a.endTime}):F("warning","\u672A\u6DFB\u52A0\u67E5\u8BE2\u6761\u4EF6")},S=()=>{l.usernameLike="",l.createTimeLike=[],Q(()=>{t.getAdminTablePageData(1,{name:a.name,startTime:a.startTime,endTime:a.endTime})})};return Y(async()=>{await t.getAdminTablePageData(1),g.value=t.pageConfig.records;const{current:e,total:o}=t.pageConfig;h.value={currentPage:e,total:o},t.$subscribe((n,T)=>{g.value=T.pageConfig.records;const{current:u,total:i}=t.pageConfig;h.value={currentPage:u,total:i}}),q(l,n=>{a.name=n.usernameLike,a.startTime=B(n.createTimeLike[0]),a.endTime=B(n.createTimeLike[1])},{deep:!0})}),(e,o)=>{const n=M,T=P;return H(),I("div",K,[s(c(U),{"bind-data":l,"search-config":c(R),onResetSearch:S,onQuerySearch:N},null,8,["bind-data","search-config"]),s(c(W),{records:c(g),"table-config":c(j),"is-select":!0,onSelectChange:v},{extraOperation:r(()=>[s(n,{type:"success"},{default:r(()=>[z]),_:1}),s(n,{type:"danger",onClick:D},{default:r(()=>[G]),_:1})]),status:r(({scope:u,item:i})=>[s(T,{modelValue:u.row[i.property],"onUpdate:modelValue":m=>u.row[i.property]=m,style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-value":"1","inactive-value":"0",onChange:m=>x(u.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),createTime:r(({scope:u,item:i})=>[_("span",null,w(u.row[i.property].split(" ")[0]),1)]),updateTime:r(({scope:u,item:i})=>[_("span",null,w(u.row[i.property].split(" ")[0]),1)]),operation:r(({scope:u,item:i})=>[_("div",J,[s(n,{onClick:m=>E(u)},{default:r(()=>[X]),_:2},1032,["onClick"]),s(n,{onClick:m=>C(u.row.id),type:"danger"},{default:r(()=>[Z]),_:2},1032,["onClick"])])]),_:1},8,["records","table-config"]),s(c($),{"pagination-config":h.value,onCurrentChange:k},null,8,["pagination-config"])])}}});export{re as default};
