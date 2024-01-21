var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{R as s,g as a,r as i,h as l,i as c,j as u}from"./react.434ff2b9.js";import{c as f}from"./lodash.71f9f2ff.js";import{g as d,u as p}from"./graphql.8e66ecff.js";import{B as v,p as g,s as m}from"./index.f90eabce.js";function b(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=b(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function y(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=b(e))&&(n&&(n+=" "),n+=t);return n}const h=({className:e})=>s.createElement("svg",{className:y("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},s.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));const x=({visible:e})=>e?s.createElement("div",{className:"loading-box"},s.createElement(h,{key:"spin"})):null;x.defaultProps={visible:!0};var E=x;const j="https://github.com/lencx/z/discussions",w=({visible:e,issues:t,type:r})=>{const n={blog:["lencx/z",`${j}`],issues:[`lencx/z #${t}`,`${j}/${t}`]}[r];return e?s.createElement("div",{className:"error-box"},s.createElement("div",null,s.createElement("img",{className:"error-icon",src:"/assets/error.045b384f.svg",alt:"Error :("}),s.createElement("p",null,s.createElement("b",null,"温馨提示")),s.createElement("p",null,"因 GitHub API 请求次数限制，暂时无法访问，点击此处可以查看原链接"),s.createElement("p",null,s.createElement("a",{href:n[1]},n[0])))):null};w.defaultProps={visible:!0,type:"blog"};var T=w;var I=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},O="object"==typeof f&&f&&f.Object===Object&&f,S="object"==typeof self&&self&&self.Object===Object&&self,$=O||S||Function("return this")(),L=$,N=function(){return L.Date.now()},A=/\s/;var P=function(e){for(var t=e.length;t--&&A.test(e.charAt(t)););return t},M=/^\s+/;var k=function(e){return e?e.slice(0,P(e)+1).replace(M,""):e},_=$.Symbol,F=_,J=Object.prototype,Z=J.hasOwnProperty,C=J.toString,H=F?F.toStringTag:void 0;var z=function(e){var t=Z.call(e,H),r=e[H];try{e[H]=void 0;var n=!0}catch(s){}var o=C.call(e);return n&&(t?e[H]=r:delete e[H]),o},U=Object.prototype.toString;var q=z,G=function(e){return U.call(e)},W=_?_.toStringTag:void 0;var B=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":W&&W in Object(e)?q(e):G(e)},V=function(e){return null!=e&&"object"==typeof e};var D=k,R=I,K=function(e){return"symbol"==typeof e||V(e)&&"[object Symbol]"==B(e)},Q=/^[-+]0x[0-9a-f]+$/i,X=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,ee=parseInt;var te=I,re=N,ne=function(e){if("number"==typeof e)return e;if(K(e))return NaN;if(R(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=R(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=D(e);var r=X.test(e);return r||Y.test(e)?ee(e.slice(2),r?2:8):Q.test(e)?NaN:+e},oe=Math.max,se=Math.min;var ae=function(e,t,r){var n,o,s,a,i,l,c=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var r=n,s=o;return n=o=void 0,c=t,a=e.apply(s,r)}function v(e){return c=e,i=setTimeout(m,t),u?p(e):a}function g(e){var r=e-l;return void 0===l||r>=t||r<0||f&&e-c>=s}function m(){var e=re();if(g(e))return b(e);i=setTimeout(m,function(e){var r=t-(e-l);return f?se(r,s-(e-c)):r}(e))}function b(e){return i=void 0,d&&n?p(e):(n=o=void 0,a)}function y(){var e=re(),r=g(e);if(n=arguments,o=this,l=e,r){if(void 0===i)return v(l);if(f)return clearTimeout(i),i=setTimeout(m,t),p(l)}return void 0===i&&(i=setTimeout(m,t)),a}return t=ne(t)||0,te(r)&&(u=!!r.leading,s=(f="maxWait"in r)?oe(ne(r.maxWait)||0,t):s,d="trailing"in r?!!r.trailing:d),y.cancel=function(){void 0!==i&&clearTimeout(i),c=0,n=l=o=i=void 0},y.flush=function(){return void 0===i?a:b(re())},y};const ie=d`
  query FZJ_LIST($first: Int, $cursor: String) {
    repository(name: "z", owner: "lencx") {
      discussions(first: $first, after: $cursor) {
        totalCount
        pageInfo {
          # startCursor
          # hasPreviousPage
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            title
            number
            # bodyHTML
            createdAt
            updatedAt
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emojiHTML
            }
            labels(first: 100) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`,le=d`
  query FZJ_ITEM($number: Int!) {
    repository(name: "z", owner: "lencx") {
      discussion(number: $number) {
        id
        title
        bodyHTML
        createdAt
        updatedAt
        category {
          name
        }
        labels(first: 100) {
          edges {
            node {
              id
              name
            }
          }
        }
        reactions(first: 100) {
          totalCount
          edges {
            node {
              id
              content
            }
          }
        }
        comments(first: 100) {
          edges {
            node {
              id
              bodyHTML
              author {
                login
                avatarUrl
                url
              }
              replies(first: 100) {
                edges {
                  node {
                    id
                    author {
                      login
                      avatarUrl
                      url
                    }
                    bodyHTML
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`,ce=d`
  query FZJ_TAGS {
    repository(name: "z", owner: "lencx") {
      discussionCategories(first: 20) {
        edges {
          node {
            id
            name
            emojiHTML
          }
        }
      }
      labels(first: 100) {
        edges {
          node {
            id
            name
            color
          }
        }
      }
    }
  }
`,ue=a({key:"FZJ_LIST",default:{pageInfo:{},list:[]}}),fe=()=>{const[e,t]=i.exports.useState(null),r=l(ue),n=p(ie,{variables:{first:g,cursor:null}}),[o,s]=r,[a,{loading:c,data:u,error:f}]=n,d=i.exports.useCallback(ae((()=>{m((()=>{o.pageInfo.hasNextPage&&a({variables:{cursor:o.pageInfo.cursor}})}))}),500,{leading:!0}),[o.pageInfo]);return i.exports.useEffect((()=>{(async()=>{if(f){window.removeEventListener("scroll",d,!1);try{const e=await fetch(`${v}/discussions.json`).then((e=>e.json()));s({pageInfo:{},list:e})}catch(e){t(e)}}})()}),[f]),i.exports.useEffect((()=>(window.addEventListener("scroll",d,!1),()=>{window.removeEventListener("scroll",d,!1)})),[o.pageInfo]),i.exports.useEffect((()=>{!o.list.length&&a()}),[]),i.exports.useEffect((()=>{if(u){const{endCursor:e,hasNextPage:t}=u.repository.discussions.pageInfo;s({pageInfo:{cursor:e,hasNextPage:t},list:[...o.list,...u.repository.discussions.edges||[]]})}}),[u]),{data:o.list,loading:c,error:e}},de=a({key:"FZJ_ITEM",default:new Map}),pe=c({key:"FZJ_ITEM_VALUE",get:({get:e})=>e(de)}),ve=e=>{const[t,r]=l(de),[n,o]=i.exports.useState(!1),[s,a]=i.exports.useState(null),[c,f]=p(le,{variables:{number:parseInt(e)}}),d=u(pe);return i.exports.useEffect((()=>{d.has(e)||(o(!0),c())}),[]),i.exports.useEffect((()=>{(async()=>{var n,s;if(f.data)r(t.set(e,null==(s=null==(n=null==f?void 0:f.data)?void 0:n.repository)?void 0:s.discussion)),a(null),o(!1);else try{const n=await fetch(`${v}/issues/${e}.json`).then((e=>e.json()));r(t.set(e,n)),o(!1)}catch(i){a(i)}})()}),[f.data]),{data:t.get(e),loading:n,error:s}},ge=a({key:"FZJ_TAGS",default:{}}),me=c({key:"FZJ_TAGS_VALUE",get:({get:e})=>e(ge)}),be=()=>{const[e,s]=l(ge),a=u(me),[c,f]=p(ce),d=f,{data:v}=d,g=((e,o)=>{var s={};for(var a in e)r.call(e,a)&&o.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&t)for(var a of t(e))o.indexOf(a)<0&&n.call(e,a)&&(s[a]=e[a]);return s})(d,["data"]);return i.exports.useEffect((()=>{Object.keys(a).length?s(a):c()}),[]),i.exports.useEffect((()=>{v&&s(v)}),[v]),((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(t)for(var a of t(s))n.call(s,a)&&o(e,a,s[a]);return e})({data:e},g)};export{T as E,E as L,ve as a,be as b,y as c,fe as u};
