(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(147),c=n(7),l=n.n(c),o=(n(160),n(161)),s=n.n(o),d=n(162),u=n.n(d),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={loadFirst:!1},t}l()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t=new Image;t.src=u.a,t.onload=function(){e.setState({loadFirst:!0})}},n.render=function(){var e=this.state.loadFirst?u.a:s.a;return i.a.createElement("div",{className:"background",style:{background:"center / cover no-repeat url("+e+")"}})},t}(i.a.Component);t.default=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(r.a,null),i.a.createElement(m,null))}},142:function(e,t,n){var a;e.exports=(a=n(144))&&a.default||a},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return I}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return g});var a=n(0),i=n.n(a),r=n(4),c=n.n(r),l=n(141),o=n.n(l);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(142),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var u=n(32);n.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),g=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function I(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},144:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),i=n.n(a),r=n(4),c=n.n(r),l=n(52),o=n(2),s=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n(73),n(74),n(148);var a=n(7),i=n.n(a),r=n(0),c=n.n(r),l=n(143),o=(n(51),n(149),n(145),n(150)),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={title:""},t.onClickHandler=function(e){e.target.id,"toggle-btn"===t.state.title?(t.setState({title:"toggle-btn active"}),void 0!==window&&window.localStorage.setItem("dark","toggle-btn active")):(t.setState({title:"toggle-btn"}),void 0!==window&&window.localStorage.setItem("dark","toggle-btn"));var n=document.querySelector("html");n.classList.toggle("light"),n.classList.toggle("dark")},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(void 0===window){var e="toggle-btn";this.setState({title:e})}else{var t=window.localStorage.getItem("dark");if(t===o.isNullOrUndefined)e="toggle-btn",this.setState({title:e});else e=Object.values(t).join(""),this.setState({title:e})}},n.render=function(){return c.a.createElement("div",{className:"darkMode mobile hideThis"},"dark mode",c.a.createElement("div",{className:this.state.title,id:"toggle-btn",onClick:this.onClickHandler},c.a.createElement("div",{className:"inner-circle",id:"inner-circle"})))},t}(r.Component),d=(n(146),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).toggleHandler=function(){var e=document.getElementsByClassName("mobile");Array.from(e).forEach(function(e){return e.classList.toggle("hideThis")})},t}return i()(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"header"},c.a.createElement("div",{className:"heading"},c.a.createElement("div",{id:"hamburger",onClick:this.toggleHandler},c.a.createElement("hr",null),c.a.createElement("hr",null),c.a.createElement("hr",null)),c.a.createElement(l.Link,{id:"home",to:"/"},"brittany mcquinn")),c.a.createElement(l.Link,{id:"story",className:"heading mobile hideThis",to:"/story/",onClick:this.toggleHandler},"story"),c.a.createElement(l.Link,{id:"lyrics",className:"heading mobile hideThis",to:"/lyrics/",onClick:this.toggleHandler},"lyrics"),c.a.createElement(l.Link,{id:"shows",className:"heading mobile hideThis",to:"/shows/",onClick:this.toggleHandler},"shows"),c.a.createElement(l.Link,{id:"contact",className:"heading mobile hideThis",to:"/contact/",onClick:this.toggleHandler},"contact"),c.a.createElement(s,null)),c.a.createElement("div",{id:"footer"},c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"https://www.facebook.com/BrittanyMcQuinn/?epa=SEARCH_BOX&jazoest=265100121975011957685684986995861021111128168708410148113117721019012172867710790103108121851101131144883110104815865100119116106118105525210273791225511648735711680867095805010410180571085179999974551101171091071101055112077119",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{id:"fb",src:"/facebook.png",alt:"link to facebook"}))),c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"https://www.instagram.com/brittanymcquinn/?hl=en",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:"/instagram.png",alt:"link to instagram"}))),c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"https://twitter.com/brittanymcquinn",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:"/twitter.png",alt:"link to twitter"}))),c.a.createElement("div",{className:"links",id:"buyDiv"},c.a.createElement("a",{href:"https://fanlink.to/BrittanyMcQuinn",target:"_blank",rel:"noopener noreferrer",id:"buy"},c.a.createElement("p",null,"stream/ buy")))))},t}(r.Component));t.a=d},160:function(e,t,n){},161:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDQ4IDEzNjUiPjxmaWx0ZXIgaWQ9ImIiPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEyIiAvPjwvZmlsdGVyPjxwYXRoIGZpbGw9IiMyODI4MjgiIGQ9Ik0wIDBoMjA0OHYxMzYwSDB6Ii8+PGcgZmlsdGVyPSJ1cmwoI2IpIiB0cmFuc2Zvcm09Im1hdHJpeCg4IDAgMCA4IDQgNCkiIGZpbGwtb3BhY2l0eT0iLjUiPjxlbGxpcHNlIGZpbGw9IiM5YTlhOWEiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoNDMuMzI5NzQgMTEuMzc0OSAtOC43NzUyNyAzMy40MjcxIDEzMi42IDE0MS4yKSIvPjxlbGxpcHNlIGN4PSIxMTIiIGN5PSI0MiIgcng9IjM1IiByeT0iNjgiLz48ZWxsaXBzZSBmaWxsPSIjYjFiMWIxIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0icm90YXRlKDE2MC4xIDU1IDc2KSBzY2FsZSg4LjYwNjYgMzAuNTkzMzcpIi8+PGVsbGlwc2UgZmlsbD0iIzA5MDkwOSIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMTQuMjkxOCAyMC42Mzk5OCAtNzEuODkwNDIgLTQ5Ljc3OTI5IDIxNC4yIDE1NC42KSIvPjxlbGxpcHNlIGZpbGw9IiM0YTRhNGEiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoNzcuOSA3NS4yIDE2Mi42KSBzY2FsZSgyMy42NDI0OCA3NC42NDkzNSkiLz48ZWxsaXBzZSBmaWxsPSIjMDkwOTA5IiBjeD0iMTcwIiByeD0iMTg2IiByeT0iMjciLz48ZWxsaXBzZSBmaWxsPSIjMDQwNDA0IiBjeD0iMTA3IiBjeT0iODMiIHJ4PSI2MiIgcnk9IjI0Ii8+PGVsbGlwc2UgZmlsbD0iIzU0NTQ1NCIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCg0LjcxNjc0IDkuNTg1NjcgLTMzLjM0NDc2IDE2LjQwNzY2IDU5LjcgNTMuNSkiLz48L2c+PC9zdmc+"},162:function(e,t,n){e.exports=n.p+"static/brittany-143abc9838d2d6c71d4541e4e6d73ed1.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-d82d36b7622968509f18.js.map