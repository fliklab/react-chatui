"use strict";(self.webpackChunkgatsby_starter_rocketdocs=self.webpackChunkgatsby_starter_rocketdocs||[]).push([[771],{6343:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(4276),l=n(8007),i=n(4160),o=n(5827),s=n(2330);var c=(0,s.Z)("section",{target:"e1jikabl1"})({name:"ns1hxi",styles:"display:flex;justify-content:space-between;align-items:center;padding:48px 0;width:100%;@media (max-width: 780px){flex-direction:column;}"}),u=(0,s.Z)("div",{target:"e1jikabl0"})("transition:all 200ms;",(function(e){return!e.isLeft&&"margin-left: auto;"})," a{display:flex;text-decoration:none;justify-content:center;align-items:center;width:100%;height:100%;svg{width:25px;height:25px;color:",(function(e){return e.theme.colors.text}),";",(function(e){return e.isLeft?"margin-right: 16px":"margin-left: 16px"}),";}p{letter-spacing:0.142em;text-transform:uppercase;font-size:12px;margin:0;color:",(function(e){return e.theme.colors.text}),";}h3{color:",(function(e){return e.theme.colors.text}),";border:none;margin:0;padding:0;font-size:16px;}}&:hover{opacity:0.8;a svg{opacity:0.8;}}@media (max-width: 780px){width:100%;",(function(e){return e.isLeft&&"margin-bottom: 16px"}),";a{justify-content:",(function(e){return e.isLeft?"flex-start":"flex-end"}),";}}"),m=n(4382);function p(e){var t=e.prev,n=e.next;return(0,m.tZ)(c,null,t&&(0,m.tZ)(u,{isLeft:!0},(0,m.tZ)(i.Link,{to:t.link},(0,m.tZ)(o.sG8,null),(0,m.tZ)("div",null,(0,m.tZ)("p",null,"Prev"),(0,m.tZ)("h3",null,t.label)))),n&&(0,m.tZ)(u,null,(0,m.tZ)(i.Link,{to:n.link},(0,m.tZ)("div",null,(0,m.tZ)("p",null,"Next"),(0,m.tZ)("h3",null,n.label)),(0,m.tZ)(o.AeI,null))))}p.defaultProps={prev:null,next:null};var g=n(3174);function d(e){var t=e.repositoryEditUrl,n=e.repositoryProvider,r=(0,g.u)();return t?(0,m.tZ)("a",{href:t,target:"_blank",rel:"noopener noreferrer",css:(0,m.iv)("display:flex;align-items:center;text-decoration:none;margin-top:48px;color:",r.colors.text,";opacity:0.8;font-size:14px;font-weight:normal;","")},(0,m.tZ)(o.zmo,{style:{marginRight:"5px"}}),"Edit this page on ",n):null}function h(e){var t=e.mdx,n=e.pageContext,i=e.children,o=n.prev,s=n.next,c=n.repositoryEditUrl,u=n.repositoryProvider,g=t.frontmatter,h=g.title,f=g.description,v=g.image,x=g.disableTableOfContents,y=t.headings,b=t.fields.slug;return(0,m.tZ)(r.Fragment,null,(0,m.tZ)(l.Z,{title:h,description:f,slug:b,image:v}),(0,m.tZ)(a.Z,{disableTableOfContents:x,title:h,headings:y},i,(0,m.tZ)(d,{repositoryEditUrl:c,repositoryProvider:u}),(0,m.tZ)(p,{prev:o,next:s})))}function f(e){var t=e.data.mdx,n=e.pageContext,r=e.children;return(0,m.tZ)(h,{mdx:t,pageContext:n},r)}d.defaultProps={repositoryEditUrl:null,repositoryProvider:null}},7922:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(3767);function l(e){var t=Object.assign({p:"p",code:"code",h2:"h2",a:"a",span:"span",pre:"pre"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"To use a Remark plugin, you need to set the plugin name on this theme's ",r.createElement(t.code,null,"gatsbyRemarkPlugins")," option."),"\n",r.createElement(t.h2,{id:"example-usage",style:{position:"relative"}},r.createElement(t.a,{href:"#example-usage","aria-label":"example usage permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Example usage"),"\n",r.createElement(t.p,null,"Given that we want to use ",r.createElement(t.a,{href:"https://graphviz.org/"},"Graphviz")," in our Markdown files, we need to install the Remark plugin and add it on to ",r.createElement(t.code,null,"gatsbyRemarkPlugins")," option on ",r.createElement(t.code,null,"gatsby.config.js"),"."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sh"},"# Using Yarn:\nyarn add gatsby-remark-graphviz\n# Using NPM:\nnpm i gatsby-remark-graphviz\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js",title:"gatsby-config.js"},"module.exports = {\n  siteMetadata: {\n    // ...\n  },\n  plugins: [\n    {\n      resolve: `@rocketseat/gatsby-theme-docs`,\n      options: {\n        // ...\n        gatsbyRemarkPlugins: [\n          {\n            `gatsby-remark-graphviz`,\n          }\n        ]\n      },\n    }\n  ]\n}\n")),"\n",r.createElement(t.h2,{id:"using-a-custom-remark-transformer-plugin",style:{position:"relative"}},r.createElement(t.a,{href:"#using-a-custom-remark-transformer-plugin","aria-label":"using a custom remark transformer plugin permalink",className:"anchor before"},r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Using a custom Remark Transformer plugin"),"\n",r.createElement(t.p,null,"If you use a local plugin, you must point to its location in the project through ",r.createElement(t.code,null,"require.resolve"),"."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-js",title:"gatsby-config.js"},"module.exports = {\n  siteMetadata: {\n    // ...\n  },\n  plugins: [\n    {\n      resolve: `@rocketseat/gatsby-theme-docs`,\n      options: {\n        // ...\n        gatsbyRemarkPlugins: [\n          {\n            `gatsby-remark-graphviz`,\n            resolve: require.resolve(`./plugins/gatsby-remark-purple-headers`)\n          }\n        ]\n      },\n    }\n  ]\n}\n")),"\n",r.createElement(t.p,null,"For more information on how to create a Remark Transformer plugin, please refer to the ",r.createElement(t.a,{href:"https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/"},"Creating a Remark Transformer Plugin")," document."))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(6343);function s(e){return r.createElement(o.Z,e,r.createElement(i,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-rocketseat-gatsby-theme-docs-core-src-templates-docs-query-js-content-file-path-src-docs-usage-remark-plugins-md-1ac85d251945188a7bfe.js.map