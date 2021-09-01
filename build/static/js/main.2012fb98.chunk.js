(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,r){},24:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(17),i=r.n(a),s=(r(22),r(8)),o=r(3),d=r(47),j=r(0),l=function(e){var t=e.show,r=e.stock,n=e.onDelete;return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)(d.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(r)}}):Object(j.jsx)(j.Fragment,{})})},b=function(e){var t=e.stock,r=e.averageData,c=e.onDelete,a=1e9,i=r[0],s=-420.69,d=Object(n.useState)(!1),b=Object(o.a)(d,2),h=b[0],x=b[1];return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{className:"delete",onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:[" ",Object(j.jsx)(l,{show:h,stock:t,onDelete:c})," "]}),Object(j.jsx)("td",{children:t.ticker}),Object(j.jsx)("td",{children:t.companyName}),Object(j.jsx)("td",{children:t.sector}),t.currentPrice===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{children:t.currentPrice}),t.marketCap===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.marketCap>=i.marketCap?"above-average":"below-average",children:(t.marketCap/a).toFixed(2)}),t.enterpriseValue===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.enterpriseValue>=i.enterpriseValue?"above-average":"below-average",children:(t.enterpriseValue/a).toFixed(2)}),t.forwardPE===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.forwardPE<=i.forwardPE?"above-average":"below-average",children:t.forwardPE.toFixed(2)}),t.enterpriseToRev===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.enterpriseToRev>=i.enterpriseToRev?"above-average":"below-average",children:t.enterpriseToRev.toFixed(2)}),t.enterpriseToEbitda===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.enterpriseToEbitda>=i.enterpriseToEbitda?"above-average":"below-average",children:t.enterpriseToEbitda.toFixed(2)}),t.profitMargins===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.profitMargins>=i.profitMargins?"above-average":"below-average",children:t.profitMargins.toFixed(3)}),t.roe===s?Object(j.jsx)("td",{children:"N/A"}):Object(j.jsx)("td",{className:t.roe>=i.roe?"above-average":"below-average",children:t.roe.toFixed(2)})]},t.ticker)},h=(r(24),function(e){var t=e.stocks,r=e.averageData,n=e.onDelete;return Object(j.jsxs)("table",{id:"stockTable",style:{position:"sticky",left:"1%",width:"95%"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"delete"}),Object(j.jsx)("th",{children:"Ticker"}),Object(j.jsx)("th",{children:"Company"}),Object(j.jsx)("th",{children:"Sector"}),Object(j.jsx)("th",{children:"Current Price"}),Object(j.jsx)("th",{children:"Market Cap"}),Object(j.jsx)("th",{children:"Enterprise Value"}),Object(j.jsx)("th",{children:"Forward PE"}),Object(j.jsx)("th",{children:"Enterprise to Revenue"}),Object(j.jsx)("th",{children:"Enterprise to EBITDA"}),Object(j.jsx)("th",{children:"Profit Margins"}),Object(j.jsx)("th",{children:"ROE"})]},"headerRow")},"tableHeader"),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(b,{stock:e,averageData:r,onDelete:n})}))},"stocksData")]})}),x=r(4),u=r.n(x),O=function(e){var t=e.onAdd,r=Object(n.useState)(""),c=Object(o.a)(r,2),a=c[0],i=c[1];return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a?(a.length>4&&alert("Ticker must be less than 4 characters"),t(a.toUpperCase()),i("")):alert("Please use text")},style:{height:"auto",padding:"30px",display:"flex"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{}),Object(j.jsx)("input",{style:{fontSize:"large"},type:"text",placeholder:"Add Ticker",value:a,onChange:function(e){return i(e.target.value)}})]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{style:{fontSize:"large"},type:"submit",value:"Add"})})]})},p=function(e){var t=e.averageData,r=1e9;return Object(j.jsxs)("table",{style:{margin:"auto"},children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Market Cap"}),Object(j.jsx)("th",{children:"Enterprise Value"}),Object(j.jsx)("th",{children:"Forward PE"}),Object(j.jsx)("th",{children:"Enterprise to Revenue"}),Object(j.jsx)("th",{children:"Enterprise to EBITDA"}),Object(j.jsx)("th",{children:"Profit Margins"}),Object(j.jsx)("th",{children:"ROE"})]},"averageHeader")}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:(e.marketCap/r).toFixed(2)}),Object(j.jsx)("td",{children:(e.enterpriseValue/r).toFixed(2)}),Object(j.jsx)("td",{children:e.forwardPE.toFixed(2)}),Object(j.jsx)("td",{children:e.enterpriseToRev.toFixed(2)}),Object(j.jsx)("td",{children:e.enterpriseToEbitda.toFixed(2)}),Object(j.jsx)("td",{children:e.profitMargins.toFixed(2)}),Object(j.jsx)("td",{children:e.roe.toFixed(2)})]},"averageData")}))})]})},f=(r(43),function(){return Object(j.jsx)("div",{style:{width:"100%",height:"70px",backgroundColor:"rgba(147, 112, 219, 0.5)"},children:Object(j.jsx)("h1",{style:{margin:"auto",lineHeight:"70px",paddingLeft:"15px"},children:"BSIF Relative Valuation Tool"})})});r(44);u.a.defaults.xsrfCookieName="csrftoken",u.a.defaults.xsrfHeaderName="X-CSRFToken";var g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),i=Object(o.a)(a,2),d=i[0],l=i[1],b=-420.69,x=function(e){if(e.length>0){for(var t=0,r=0,n=0,c=0,a=0,i=0,s=0,o=0,d=0,j=0,h=0,x=0,u=0,O=0,p=0;p<e.length;p++){var f=e[p];f.forwardPE!==b&&(o+=f.forwardPE,t+=1),f.enterpriseValue!==b&&(d+=f.enterpriseValue,r+=1),f.enterpriseToRev!==b&&(j+=f.enterpriseToRev,n+=1),f.enterpriseToEbitda!==b&&(h+=f.enterpriseToEbitda,c+=1),f.marketCap!==b&&(x+=f.marketCap,a+=1),f.profitMargins!==b&&(u+=f.profitMargins,i+=1),f.roe!==b&&(O+=f.roe,s+=1)}l([{forwardPE:o/t,enterpriseValue:d/r,enterpriseToRev:j/n,enterpriseToEbitda:h/c,marketCap:x/a,profitMargins:u/i,roe:O/s}])}else l([])};Object(n.useEffect)((function(){u.a.get("stocks/").then((function(e){x(e.data.stocksData),c(e.data.stocksData)})).catch((function(e){return console.error("Error: $(error)")}))}),[]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsx)(O,{onAdd:function(e){!function(e,t){for(var r=0;r<t.length;r++)if(t[r].ticker===e)return!0;return!1}(e,r)?u.a.post("stocks/",{ticker:e}).then((function(e){x([].concat(Object(s.a)(r),[e.data])),c([].concat(Object(s.a)(r),[e.data]))})).catch((function(e){e.response&&console.log(e.response)})):alert("Stock already in list!")}}),r.length>0?Object(j.jsx)(h,{stocks:r,averageData:d,onDelete:function(e){var t=e.ticker;u.a.delete("stocks/delete-stock/"+t),c(r.filter((function(e){return e.ticker!==t}))),x(r.filter((function(e){return e.ticker!==t})))}}):Object(j.jsx)("div",{style:{position:"sticky",center:"0%"},children:"Add a stock to get started!"}),Object(j.jsx)("div",{style:{height:"30px"}}),d.length>0?Object(j.jsx)(p,{averageData:d}):Object(j.jsx)(j.Fragment,{})]})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,48)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[45,1,2]]]);
//# sourceMappingURL=main.2012fb98.chunk.js.map