(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{378:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("前端性能优化中有一个关键点就是："),a("strong",[t._v("减少打包体积")]),t._v("\n目前常用的按需打包组件的方式有如下几种:")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("手工"),a("code",[t._v("import")]),t._v("所有需要打包的组件")]),t._v("；目前大部分前端 ui 库都使用的这种方式，在入口文件处导出所有的组件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("使用 Lerna 将每个库单独打包，单独发布")]),t._v("："),a("code",[t._v("vue-next")]),t._v("等都使用此种方式，在宿主工程手动引入所需package")])])]),t._v(" "),a("p",[t._v("那么还有没有其他的方式，做到按需打包呢？"),a("strong",[t._v("答案是有的")])]),t._v(" "),a("h2",{attrs:{id:"一、-分析场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-分析场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、 分析场景")]),t._v(" "),a("p",[t._v("现有如下一个工程目录:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("├─App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├─assets\n│ └─logo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("png\n├─components\n│ └─HelloWorld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├─main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n├─packages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存放所有组件")]),t._v("\n│ ├─button\n│ │ ├─button"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设计态组件的vue")]),t._v("\n│ │ └─button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//运行时组件的vue")]),t._v("\n│ └─input\n│   ├─input"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n│   └─input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n├─require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用webpack的require.context自动读取packages目录下的组件")]),t._v("\n└─widget"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//运行态组件打包")]),t._v("\n\n")])])]),a("p",[t._v("我的工程目录下所有的组件都存放在"),a("code",[t._v("packages")]),t._v("目录下。每一个组件又分为:")]),t._v(" "),a("ul",[a("li",[t._v("设计态的组件的属性配置面板")]),t._v(" "),a("li",[t._v("运行态组件")])]),t._v(" "),a("p",[t._v("现在我的要求是：")]),t._v(" "),a("blockquote",[a("p",[t._v("使用"),a("code",[t._v("require.context")]),t._v("自动读取"),a("code",[t._v("packages")]),t._v("目录下的"),a("strong",[t._v("运行态组件")]),t._v("，并打包发布。"),a("strong",[t._v("不允许打包设计态组件")])])]),t._v(" "),a("h2",{attrs:{id:"二、解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、解决方案")]),t._v(" "),a("h3",{attrs:{id:"_1-手动使用-import-逐个引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-手动使用-import-逐个引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 手动使用 import 逐个引入")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// widget-render.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" button "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./packages/button.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" input "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./packages/input.vue"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])])]),a("p",[t._v("显然这不符合我的要求：使用 "),a("code",[t._v("require.context")]),t._v("自动读取")]),t._v(" "),a("h3",{attrs:{id:"_2-使用-lerna-管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-lerna-管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 使用 lerna 管理")]),t._v(" "),a("p",[t._v("使用 lerna 管理，此处不做详情赘述；lerna 管理会将 packages 目录下的组件单独发布成一个包。但是会让用户在用户侧手动"),a("code",[t._v("import")]),t._v("多个组件(当然您也可以说 自己创建一个 index.js 做全局引入)。但是这似乎也不太符合我们的要求。")]),t._v(" "),a("h3",{attrs:{id:"_2-使用-webpack-的-alias-externals-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-webpack-的-alias-externals-实现","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 使用 webpack 的 alias+externals 实现")]),t._v(" "),a("p",[t._v("首先我们先查看一下"),a("code",[t._v("widget-render.js")]),t._v("和"),a("code",[t._v("require.js")]),t._v("的内容:\n"),a("strong",[t._v("其主要工作就是使用 require.context 去加载所有的 vue 组件,并同步注册发布")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//require.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" endsWith "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lodash/endsWith"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 加载组件和组件的属性面板\n * @param {*} ignoreProps\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ignoreProps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" components "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    propComponents "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("requireAll")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" component "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("context")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./packages"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.vue$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ignoreProps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      propComponents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("endsWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" item\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propComponents "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" getAllWidgets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./require"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果你只需要打包组件的话，而忽略属性面板")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" widgets "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllWidgets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" widgets "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  widgets\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"（1）默认打包-lib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（1）默认打包-lib","aria-hidden":"true"}},[t._v("#")]),t._v(" （1）默认打包 lib")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service serve"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service lint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-cli-service build --mode lib --target lib src/widget-render.js -name render.js --dest dist-lib"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("运行")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" lib --report\n")])])]),a("p",[t._v("其打包的结果为：")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"/images/webpack/has-props.png"}},[a("img",{attrs:{src:"/images/webpack/has-props.png",alt:""}})])]),t._v(" "),a("p",[t._v("展示效果为:")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"/images/webpack/success-first.png"}},[a("img",{attrs:{src:"/images/webpack/success-first.png",alt:""}})])]),t._v(" "),a("p",[a("strong",[t._v("疑问？")])]),t._v(" "),a("blockquote",[a("p",[t._v("为什么，明明打包出来的组件没有"),a("code",[t._v("prop")]),t._v("，但是为何 report 文件中却存在"),a("code",[t._v("prop.vue")]),t._v("相关文件呢？")])]),t._v(" "),a("p",[a("strong",[t._v("答案")])]),t._v(" "),a("blockquote",[a("p",[t._v("因为 webpack 的"),a("code",[t._v("require.context")]),t._v("会自动去加载"),a("code",[t._v("packages")]),t._v("目录下的指定文件，由于上面写的匹配规则为.vue\\。所以也会加载 prop 结尾的文件。并打包到 lib 中。")])]),t._v(" "),a("h4",{attrs:{id:"_2-使用-alias-externals-打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用-alias-externals-打包","aria-hidden":"true"}},[t._v("#")]),t._v(" (2) 使用 alias+externals 打包")]),t._v(" "),a("p",[t._v("上面讲到使用默认的 require.context 会将匹配到的文件都统一打包的，那么肯定有朋友说，我把匹配规则写成匹配"),a("strong",[t._v("非 prop 结尾的文件")]),t._v("。不就可以了吗？ 欢迎尝试。")]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("blockquote",[a("p",[t._v("既然以 prop 结尾的文件被打包，那么我们是不是可以利用 webpack 自带的 externals 去排除掉呢？同时将所有以 prop 结尾的文件都设置别名。这样打包即可。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  productionSourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BUILD_TARGET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将所有匹配的文件都设置一个empty-widget的别名")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\.\\/).+(-prop.vue)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"empty-widget"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后利用externals的function模式，对匹配到的文件设置external")]),t._v("\n      config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("externals "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("externals "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\.\\/).+(-prop.vue)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"empty-widget"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其打包的结果为：不存在prop文件了")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"/images/webpack/no-prop.png"}},[a("img",{attrs:{src:"/images/webpack/no-prop.png",alt:""}})])]),t._v(" "),a("p",[t._v("展示效果为:")]),t._v(" "),a("p",[a("a",{attrs:{"data-fancybox":"",title:"",href:"/images/webpack/success-two.png"}},[a("img",{attrs:{src:"/images/webpack/success-two.png",alt:""}})])]),t._v(" "),a("p",[t._v("最后只需要在宿主工程引入一个"),a("code",[t._v("yarn add empty-widget")]),t._v("即可。"),a("code",[t._v("empty-widget")]),t._v("的体积 19B，可以忽略不计哦。")]),t._v(" "),a("p",[t._v("最后： "),a("strong",[t._v("其核心思想就是使用占位符的方式，将不需要的打包组件进行占位，从而减少打包体积")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/MrGaoGang/webpack-external-files",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码地址"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);