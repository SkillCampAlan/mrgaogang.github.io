(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{291:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("a",{attrs:{href:"https://github.com/MrGaoGang/oview/blob/master/examples/components/chart/Pie.vue"}},[s("img",{attrs:{src:"https://img.shields.io/badge/oview-%E9%A5%BC%E7%8A%B6%E5%9B%BE%E6%A0%B7%E4%BE%8B%E6%BA%90%E7%A0%81-brightgreen.svg"}})]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:""}},[t._v("饼状图扫码预览")]),s("br"),t._v(" "),s("img",{staticStyle:{width:"160px",height:"160px"},attrs:{src:"/images/oview/qrcode.png"}})])]),t._v(" "),s("h2",{attrs:{id:"一、-饼状图基础构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、-饼状图基础构建","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、 饼状图基础构建")]),t._v(" "),s("blockquote",[s("p",[s("router-link",{attrs:{to:"/article/oview/Chart.html"}},[t._v("公用配置信息")])],1)]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("o-chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":data")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":legend")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("legend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("o-pie")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("name*percent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("o-pie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("o-chart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("p",[t._v("没错构建一个饼状图就是如此简单，"),s("strong",[t._v("必须提供的数据有:data和position")]),t._v("。\n如果您需要显示提示信息/图例那么就需要配置:tooltip和:legend。\ndata的数据结构为:"),s("code",[t._v('[{name:"item",percent:0.3},{name:"item2",percent:0.7}]')]),t._v(" "),s("a",{attrs:{href:"https://github.com/MrGaoGang/oview/blob/master/examples/components/chart/Pie.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("样例源码"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("说明:")]),t._v(" "),s("ul",[s("li",[t._v("坐标轴percent为必传项。")]),t._v(" "),s("li",[t._v("公用配置信息已在"),s("router-link",{attrs:{to:"/article/oview/Chart.html"}},[t._v("前文")]),t._v("提及，请查阅")],1)]),t._v(" "),s("h2",{attrs:{id:"二、饼状图额外配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、饼状图额外配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、饼状图额外配置")]),t._v(" "),s("h3",{attrs:{id:"coord-坐标系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coord-坐标系","aria-hidden":"true"}},[t._v("#")]),t._v(" coord (坐标系)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:Object")]),t._v(" "),s("li",[t._v("描述:坐标系")]),t._v(" "),s("li",[t._v("默认："),s("code",[t._v('{ coordType: "polar",options: {transposed: true // 坐标系翻转}}')])]),t._v(" "),s("li",[t._v("说明: 图例分为两个部分 数据字段名称，配置信息,")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("coordType：有两种类型，1：笛卡尔坐标系(rect)；2：极坐标系（polar）")]),t._v(" "),s("br"),t._v("options为配置信息，不同的坐标系配置不同。")])]),t._v(" "),s("ul",[s("li",[t._v("直角坐标系")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性名")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("start")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("坐标系的起始点，F2 图表的坐标系原点位于左下角。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("end")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("坐标系右上角的画布坐标。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("transposed")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否发生转置，true 表示发生了转置。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("isRect")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否是直角坐标系，直角坐标系下为 true。")])])])]),t._v(" "),s("ul",[s("li",[t._v("极坐标系")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("属性名")])]),t._v(" "),s("th",[s("strong",[t._v("类型")])]),t._v(" "),s("th",[s("strong",[t._v("解释")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("startAngle")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("极坐标的起始角度，弧度制。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("endAngle")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("极坐标的结束角度，弧度制。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("innerRadius")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("绘制环图时，设置内部空心半径，相对值，0 至 1 范围。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("radius")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("设置圆的半径，相对值，0 至 1 范围。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("isPolar")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("判断是否是极坐标，极坐标下为 true。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("transposed")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("是否发生转置，true 表示发生了转置。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("center")])]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("极坐标的圆心所在的画布坐标。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("circleRadius")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("极坐标的半径值。")])])])]),t._v(" "),s("h3",{attrs:{id:"pielabel-绘制饼图文本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pielabel-绘制饼图文本","aria-hidden":"true"}},[t._v("#")]),t._v(" pieLabel(绘制饼图文本)")]),t._v(" "),s("ul",[s("li",[t._v("是否必须:False")]),t._v(" "),s("li",[t._v("参数类型:Object")]),t._v(" "),s("li",[t._v("描述:PieLabel 是一个用于绘制饼图文本的插件。"),s("a",{attrs:{href:"https://www.yuque.com/antv/f2/pie-label",target:"_blank",rel:"noopener noreferrer"}},[t._v("详细文档"),s("OutboundLink")],1),t._v("\n示例:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        sidePadding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        activeShape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("label1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一个标签")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#343434"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fontWeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bold"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("label2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二个标签")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果不需要刻意删除label2")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("percent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#999"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//点击之后显示")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            ev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("guide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("guide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"50%"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<div style="text-align: center;width:150px;height: 50px;">\\n      <p style="font-size: 12px;color: #999;margin: 0" class="label1">\'')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'</p>\\n      <p style="font-size: 18px;color: #343434;margin: 0;font-weight: bold;" class="label2">\'')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("percent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%</p>\\n      </div>"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            ev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repaint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $('#title').text(data.type);")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $('#money').text(data.money);")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);