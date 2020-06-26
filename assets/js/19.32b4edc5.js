(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{257:function(e,v,_){"use strict";_.r(v);var t=_(0),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("在实际的开发中布局的层次很容易超过 10 层如果超过 15 层就要重视并准备重新做优化，20 层就必须要修改了，实在没办法的话，就需要将复杂的布局层级使用自绘控件来实现。")]),e._v(" "),_("h2",{attrs:{id:"一、减少层级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、减少层级","aria-hidden":"true"}},[e._v("#")]),e._v(" 一、减少层级")]),e._v(" "),_("p",[e._v("层级越少，测试和绘制的时间越短，通常减少层级的方法有")]),e._v(" "),_("ul",[_("li",[e._v("1、尽量使用 RelativeLayout 和 LinearLayout")]),e._v(" "),_("li",[e._v("2、在布局层级相同的情况下，使用 LinearLayout")]),e._v(" "),_("li",[e._v("3、使用 LinearLayout 有时候会让层级变得更多，所以应该使用 RelativeLayout，尽量使界面扁平化")])]),e._v(" "),_("p",[_("code",[e._v("RelativeLayout")]),e._v(" 存在性能低的问题，原因是 "),_("code",[e._v("RelativeLayout")]),e._v(" 会对子 "),_("code",[e._v("View")]),e._v(" 做两次测量，在 "),_("code",[e._v("RelativeLayout")]),e._v(" 中子 "),_("code",[e._v("View")]),e._v(" 的排列方式是基于彼此的依赖关系的。因为依赖关系可能和布局中 "),_("code",[e._v("View")]),e._v(" 的顺序不一样，在确定每一个子 "),_("code",[e._v("View")]),e._v(" 的位置时，需要先给所有的子 View 做一次排序，如果再 "),_("code",[e._v("RelativeLayout")]),e._v(" 中允许子 View 横向或者纵向相互依赖，就需要横向和纵向分别在进行一次测量。\n"),_("code",[e._v("LinearLayout")]),e._v(" 中有 "),_("code",[e._v("weight")]),e._v(" 属性，也需要做两次测量，因为没有更多的依赖关系，所以会比 "),_("code",[e._v("RelativeLayout")]),e._v(" 效率高。")]),e._v(" "),_("h2",{attrs:{id:"二、merge-的使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、merge-的使用","aria-hidden":"true"}},[e._v("#")]),e._v(" 二、Merge 的使用")]),e._v(" "),_("h3",{attrs:{id:"主要使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主要使用场景","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要使用场景")]),e._v(" "),_("p",[e._v("在使用 Merge 的场合主要有以下两处：")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("1、在自定义 "),_("code",[e._v("View")]),e._v(" 中使用，父元素尽量是 "),_("code",[e._v("FrameLayout")]),e._v(" 或者 "),_("code",[e._v("LinearLayout")])])]),e._v(" "),_("li",[_("p",[e._v("2、在 "),_("code",[e._v("Activity")]),e._v(" 中整体布局，根元素需要时 "),_("code",[e._v("FrameLayout。")])]),e._v(" "),_("pre",[_("code",[e._v("- 在 `Android` 布局的源码中，如果是 `Merge` 标签，那么直接将其中的子元素添加到 `Merge` 标签的 `Parent` 中，这样就不会引入额外的层级了。\n- 如果 `Merge` 代替的布局元素为 `LinearLayout`，在自定义布局代码中将 `LinearLayout` 属性添加到引用上，如垂直和水平布局，背景色等。\n")])])])]),e._v(" "),_("h3",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("Merge")]),e._v(" 只能用在布局 "),_("code",[e._v("XML")]),e._v(" 文件的根元素。")]),e._v(" "),_("li",[e._v("使用 "),_("code",[e._v("Merge")]),e._v(" 来加载一个布局时，必须指定一个 ViewGroup 作为其父元素，并且要设置加载的 "),_("code",[e._v("attchToRoot")]),e._v(" 参数为 true(也就是 "),_("code",[e._v("inflate(int,ViewGroup,boolean))")])]),e._v(" "),_("li",[e._v("不能再 Viewstub 中使用 Merge 标签，原因是 ViewStub 的 inflate 方法中根本没有 attachToRoot 的设置")])]),e._v(" "),_("blockquote",[_("p",[e._v("在 "),_("code",[e._v("Activity")]),e._v(" 的总布局中使用 "),_("code",[e._v("Merge")]),e._v("，但又想设置整体的属性（比如布局方式和颜色），可以不使用 "),_("code",[e._v("setContentView")]),e._v(" 方法加载 "),_("code",[e._v("Layout")]),e._v(",而使用（id/content）将 "),_("code",[e._v("FrameLayout")]),e._v(" 取出。在代码中手动加载布局，但是如果层级压力不大（小于 10 级），则没有必要，因为代码的维护性就很差了。")])]),e._v(" "),_("h2",{attrs:{id:"三、提高显示速度使用-viewstub"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、提高显示速度使用-viewstub","aria-hidden":"true"}},[e._v("#")]),e._v(" 三、提高显示速度使用 ViewStub")]),e._v(" "),_("p",[_("code",[e._v("ViewStub")]),e._v(" 是一个轻量级的 "),_("code",[e._v("View")]),e._v("，它是一个看不见的，并且不占用布局位置，占用资源非常小的视图对象，可以为 "),_("code",[e._v("ViewStub")]),e._v(" 指定一个布局，加载布局时，只有 "),_("code",[e._v("ViewStub")]),e._v(" 会被初始化，然后当 "),_("code",[e._v("ViewStub")]),e._v(" 被设置为可见的时候，或者是调用 "),_("code",[e._v("ViewStub,inflate()")]),e._v("时候，"),_("code",[e._v("ViewStub")]),e._v(" 所指向的布局就会加载和实例化，然后 Vi`ewStub 的布局属性就会传给他指向的布局，这样就可以使用 ViewStub 来设置是否显示某个布局。")]),e._v(" "),_("h3",{attrs:{id:"主要使用场景-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主要使用场景-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 主要使用场景")]),e._v(" "),_("ul",[_("li",[e._v("在程序运行期间，某个布局在加载后就不会有变化，除非销毁该界面重新加载。")]),e._v(" "),_("li",[e._v("想要控制显示与隐藏的是一个布局文件，而不是 View")])]),e._v(" "),_("h3",{attrs:{id:"注意事项-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("ViewStub")]),e._v(" 只能加载一次，之后的 "),_("code",[e._v("ViewStub")]),e._v(" 对象将会被置空，换句话说，某个被 "),_("code",[e._v("ViewStub")]),e._v(" 指定加载的布局被加载后，就不能再通过 ViewStub 来控制它了，所以它不适用于按需隐藏的情况(还是只有使用 "),_("code",[e._v("setVisiable")]),e._v(" 的方式)。")]),e._v(" "),_("li",[_("code",[e._v("ViewStub")]),e._v(" 只能用来加载一个布局文件，而不是一个具体的 View（除非将一个 View 放入一个布局文件中）。")]),e._v(" "),_("li",[_("code",[e._v("ViewStub")]),e._v(" 中不能再嵌套 "),_("code",[e._v("Merge")]),e._v(" 标签了。")])]),e._v(" "),_("h2",{attrs:{id:"四、布局复用使用-include-标签"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、布局复用使用-include-标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 四、布局复用使用 include 标签")]),e._v(" "),_("p",[e._v("使用 include 标签。")]),e._v(" "),_("h2",{attrs:{id:"五、布局优化总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、布局优化总结","aria-hidden":"true"}},[e._v("#")]),e._v(" 五、布局优化总结")]),e._v(" "),_("p",[e._v("影响布局效率的主要是以下几个点：")]),e._v(" "),_("ul",[_("li",[e._v("布局层级越少，加载越快")]),e._v(" "),_("li",[e._v("减少同一层级控件的数量，加载速度会变快")]),e._v(" "),_("li",[e._v("一个控件的属性越少，加载会越快")])]),e._v(" "),_("p",[e._v("总结：")]),e._v(" "),_("ul",[_("li",[e._v("尽量多使用 "),_("code",[e._v("RelativiLayout")]),e._v(" 和 "),_("code",[e._v("LinearLayout")]),e._v("，不要使用 "),_("code",[e._v("AbsoluteLayout")]),e._v(" 布局。")]),e._v(" "),_("li",[e._v("将可复用的组件抽取出来，并通过"),_("code",[e._v("<include/>")]),e._v("标签使用")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("<ViewStub/>")]),e._v("标签加载一个不变布局的的布局。")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("<merge/>")]),e._v("标签减少布局的嵌套层次")]),e._v(" "),_("li",[e._v("尽可能少用 "),_("code",[e._v("wrap_content")]),e._v(","),_("code",[e._v("wrap_content")]),e._v(" 会增加布局 "),_("code",[e._v("Measure")]),e._v(" 的计算成本，已知高为固定值得时候，不要使用 wrap_content")]),e._v(" "),_("li",[e._v("删除控件中无用的属性。")])])])}),[],!1,null,null,null);v.default=a.exports}}]);