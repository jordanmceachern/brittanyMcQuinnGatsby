(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=(n(154),n(153));t.default=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null),r.a.createElement("div",{id:"contactInfo"},r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("a",{href:"mailto:contact@brittanymcquinn.com",target:"_top"},"contact@brittanymcquinn.com")))))}},141:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(146)),i=a(n(147)),o=a(n(7)),l=a(n(53)),c=a(n(54)),s=a(n(4)),u=a(n(0)),d=n(17),f=n(142);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/brittanyMcQuinnGatsby/"+e)}var h={activeClassName:s.default.string,activeStyle:s.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,l=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(n);return u.default.createElement(d.Link,(0,i.default)({to:g,state:s,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:s,replace:h})),!0}},m))},t}(u.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var g=m;t.default=g;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(141),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(143),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},144:function(e,t,n){"use strict";var a=n(16),r=n(11),i=n(25),o=n(76),l=n(77),c=n(14),s=n(145),u=n(78);r(r.S+r.F*!n(79)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,d,f=i(e),p="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,v=0,y=u(f);if(g&&(m=a(m,h>2?arguments[2]:void 0,2)),null==y||p==Array&&l(y))for(n=new p(t=c(f.length));t>v;v++)s(n,v,g?m(f[v],v):f[v]);else for(d=y.call(f),n=new p;!(r=d.next()).done;v++)s(n,v,g?o(d,m,[r.value,v],!0):r.value);return n.length=v,n}})},145:function(e,t,n){"use strict";var a=n(24),r=n(51);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},146:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},147:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},149:function(e,t,n){var a=n(11),r=n(150)(!1);a(a.S,"Object",{values:function(e){return r(e)}})},150:function(e,t,n){var a=n(34),r=n(35),i=n(75).f;e.exports=function(e){return function(t){for(var n,o=r(t),l=a(o),c=l.length,s=0,u=[];c>s;)i.call(o,n=l[s++])&&u.push(e?[n,o[n]]:o[n]);return u}}},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){"use strict";n(73),n(74),n(144);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(142),c=(n(52),n(149),n(151),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={title:""},t.onClickHandler=function(e){e.target.id,"toggle-btn"===t.state.title?(t.setState({title:"toggle-btn active"}),void 0!==window&&window.localStorage.setItem("dark","toggle-btn active")):(t.setState({title:"toggle-btn"}),void 0!==window&&window.localStorage.setItem("dark","toggle-btn"));var n=document.querySelector("html");n.classList.toggle("light"),n.classList.toggle("dark")},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){if(void 0===window){var e="toggle-btn";this.setState({title:e})}else{var t=window.localStorage.getItem("dark");if(null===t)e="toggle-btn",this.setState({title:e});else e=Object.values(t).join(""),this.setState({title:e})}},n.render=function(){return o.a.createElement("div",{className:"darkMode mobile hideThis"},"dark mode",o.a.createElement("div",{className:this.state.title,id:"toggle-btn",onClick:this.onClickHandler},o.a.createElement("div",{className:"inner-circle",id:"inner-circle"})))},t}(i.Component)),s=(n(152),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).toggleHandler=function(){var e=document.getElementsByClassName("mobile");Array.from(e).forEach(function(e){return e.classList.toggle("hideThis")})},t}return r()(t,e),t.prototype.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"header"},o.a.createElement("div",{className:"heading"},o.a.createElement("div",{id:"hamburger",onClick:this.toggleHandler},o.a.createElement("hr",null),o.a.createElement("hr",null),o.a.createElement("hr",null)),o.a.createElement(l.Link,{id:"home",to:"/"},"brittany mcquinn")),o.a.createElement(l.Link,{id:"story",className:"heading mobile hideThis",to:"/story/",onClick:this.toggleHandler},"story"),o.a.createElement(l.Link,{id:"lyrics",className:"heading mobile hideThis",to:"/lyrics/",onClick:this.toggleHandler},"lyrics"),o.a.createElement(l.Link,{id:"shows",className:"heading mobile hideThis",to:"/shows/",onClick:this.toggleHandler},"shows"),o.a.createElement(l.Link,{id:"contact",className:"heading mobile hideThis",to:"/contact/",onClick:this.toggleHandler},"contact"),o.a.createElement(c,null)),o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:"https://www.facebook.com/BrittanyMcQuinn/?epa=SEARCH_BOX&jazoest=265100121975011957685684986995861021111128168708410148113117721019012172867710790103108121851101131144883110104815865100119116106118105525210273791225511648735711680867095805010410180571085179999974551101171091071101055112077119",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{id:"fb",src:"/facebook.png",alt:"link to facebook"}))),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:"https://www.instagram.com/brittanymcquinn/?hl=en",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/instagram.png",alt:"link to instagram"}))),o.a.createElement("div",{className:"links"},o.a.createElement("a",{href:"https://twitter.com/brittanymcquinn",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"/twitter.png",alt:"link to twitter"}))),o.a.createElement("div",{className:"links",id:"buyDiv"},o.a.createElement("a",{href:"https://fanlink.to/BrittanyMcQuinn",target:"_blank",rel:"noopener noreferrer",id:"buy"},o.a.createElement("p",null,"stream/ buy")))))},t}(i.Component));t.a=s},154:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-contact-js-53fd1460dac49a61fc9a.js.map