(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var a=n("q1tI"),i=n.n(a),r=n("vOnD"),l=r.b.div.withConfig({displayName:"Grids__HomePageGrid",componentId:"sc-1j70bu0-0"})(["display:grid;gap:20px;grid-template-columns:repeat(2,minmax(auto,1fr));"]),s=r.b.div.withConfig({displayName:"Grids__ItemsGrid",componentId:"sc-1j70bu0-1"})(["display:grid;gap:2rem;grid-template-columns:1fr 1fr;"]),c=r.b.div.withConfig({displayName:"Grids__ItemStyles",componentId:"sc-1j70bu0-2"})(["text-align:center;position:relative;img{height:auto;font-size:0;}p{top:0;transform:rotate(-2deg) translateY(-10px);position:absolute;width:100%;left:0;margin:0;font-size:2rem;font-size:clamp(12px,5vw,20px);}.mark{display:inline;}@keyframes shine{from{background-position:200%;}to{background-position:-40px;}}img.loading{--shine:white;--background:var(--grey);background-image:linear-gradient( 90deg,var(--background) 0px,var(--shine) 40px,var(--background) 80px );background-size:500px;animation:shine 1s infinite linear;}"]);function o(e){var t=e.count;return i.a.createElement(s,null,Array.from({length:t},(function(e,t){return i.a.createElement(c,{key:"loader-"+t},i.a.createElement("p",null,i.a.createElement("span",{className:"mark"},"Loading...")),i.a.createElement("img",{src:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII=",className:"loading",alt:"",width:"500",height:"400"}))})))}function m(e){var t=e.items;return i.a.createElement(s,null,t.map((function(e){return i.a.createElement(c,{key:e.name},i.a.createElement("p",null,i.a.createElement("span",{className:"mark"},e.name)),i.a.createElement("img",{width:"500",height:"400",src:e.image.asset.url+"?w=500&h=400&fit=crop",alt:e.name,style:{background:"url("+e.image.asset.metadata.lqip+")",backgroundSize:"cover"}}))})))}var u="\n  name\n  _id\n  image {\n    asset {\n      url\n      metadata {\n        lqip\n      }\n    }\n  }\n";function d(e){var t=e.slicemasters;return i.a.createElement("div",null,i.a.createElement("h2",{className:"center"},i.a.createElement("span",{className:"mark tilt"},"Slicemasters On")),i.a.createElement("p",null,"Standing by, ready to slice you up!"),!t&&i.a.createElement(o,{count:4}),t&&!(null==t?void 0:t.length)&&i.a.createElement("p",null,"No one is working"),(null==t?void 0:t.length)&&i.a.createElement(m,{items:t}))}function p(e){var t=e.hotSlices;return i.a.createElement("div",null,i.a.createElement("h2",{className:"center"},i.a.createElement("span",{className:"mark tilt"},"Hotslices")),i.a.createElement("p",null,"Come on by, buy the slice"),!t&&i.a.createElement(o,{count:4}),t&&!(null==t?void 0:t.length)&&i.a.createElement("p",null,"Nothing in the case"),(null==t?void 0:t.length)&&i.a.createElement(m,{items:t}))}function g(){var e=function(){var e=Object(a.useState)(),t=e[0],n=e[1],i=Object(a.useState)(),r=i[0],l=i[1];return Object(a.useEffect)((function(){fetch("https://wui69z6t.api.sanity.io/v1/graphql/production/default",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'\n          query {\n            StoreSettings(id: "downtown") {\n              name\n              slicemaster {\n                '+u+"\n              }\n              hotSlices {\n                "+u+"\n              }\n            }\n          }\n        "})}).then((function(e){return e.json()})).then((function(e){n(e.data.StoreSettings.hotSlices),l(e.data.StoreSettings.slicemaster)})).catch((function(e){console.log("SHOOOT"),console.log(e)}))}),[]),{hotSlices:t,slicemasters:r}}(),t=e.slicemasters,n=e.hotSlices;return i.a.createElement("div",{className:"center"},i.a.createElement("h1",null,"The Best Pizza Downtown!"),i.a.createElement("p",null,"Open 11am to 11pm Every Single Day"),i.a.createElement(l,null,i.a.createElement(d,{slicemasters:t}),i.a.createElement(p,{hotSlices:n})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bd8499271ebae38e9e6a.js.map