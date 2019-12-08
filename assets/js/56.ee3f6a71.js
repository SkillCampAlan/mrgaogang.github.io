(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{261:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"环境依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境依赖","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境依赖")]),t._v(" "),e("ul",[e("li",[t._v("一、设置npm镜像为淘宝镜像")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" registry https://registry.npm.taobao.org\n")])])]),e("ul",[e("li",[t._v("二、 安装Node.js到本地，然后执行以下命令")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" yo grunt-cli generator-mendix -g\n")])])]),e("p",[t._v("三、执行jshint进行grunt语法检查插件")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" grunt-contrib-jshint --save-dev\n")])])]),e("p",[t._v("四、在任意地方建一个目录，并进入此文件夹，执行")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Yo mendix\n//注意在安装的时候要记得选择Grunt方式不要选择Gulp；接下来的选择AppStoreWidgetBiolerplate,from Github的方式\n//\n")])])]),e("p",[t._v("执行完之后会在目录中创建一个Gruntfile.js文件；打开JS文件，将里面的mpks->files->dest->TEST_WIDGETS_FOLDER替换成自己的mendix 工程目录的widgets目录即可。\n然后在当前组件目录(有Gruntfile.js的目录)执行")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("grunt "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v("\n\n//该命令会自动的监听组件工程文件的修改，会自动打包到mendix工程目录下\n")])])]),e("h3",{attrs:{id:"mendix组件开发打包工具gulp和grunt的比较："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mendix组件开发打包工具gulp和grunt的比较：","aria-hidden":"true"}},[t._v("#")]),t._v(" Mendix组件开发打包工具gulp和grunt的比较：")]),t._v(" "),e("p",[t._v("gulp优点：")]),t._v(" "),e("ul",[e("li",[t._v("不需要设置项目目录，在test目录下即可测试。")]),t._v(" "),e("li",[t._v("若只更新了组件的js代码，可直接在浏览器强制刷新界面，不需要重启mendix工程。")]),t._v(" "),e("li",[t._v("编译速度更快。")])]),t._v(" "),e("p",[t._v("grunt优缺点：")]),t._v(" "),e("ul",[e("li",[t._v("虽说可直接打包到项目工程目录widgets下，但是尽可能不要直接在业务工程下测试组件（因为项目大之后启动会慢）；")]),t._v(" "),e("li",[t._v("每次测试都需要重启Mendix工程。")])]),t._v(" "),e("p",[t._v("一、下载并安装Node.js")]),t._v(" "),e("blockquote",[e("p",[t._v("下载地址：https://nodejs.org/en/")])]),t._v(" "),e("p",[t._v("二、设置npm镜像")]),t._v(" "),e("blockquote",[e("p",[t._v("npm config set registry https://registry.npm.taobao.org")])]),t._v(" "),e("p",[t._v("三、运行yo命令")]),t._v(" "),e("blockquote",[e("p",[t._v("运行 npm install -g yo generator-mendix命令\n检查yo是否安装成功:yo --version")])]),t._v(" "),e("p",[t._v("四、安装gulp")]),t._v(" "),e("blockquote",[e("p",[t._v("npm install -g gulp-cli")])]),t._v(" "),e("p",[t._v("五、请在空目录下运行 yo mendix")]),t._v(" "),e("pre",[e("code",[t._v("并设置组件的名称，选择Gulp编译，并创建一个AppStoreWidgetBoilerplate。\n")])]),t._v(" "),e("p",[t._v("六、如何使用Gulp测试组件")]),t._v(" "),e("pre",[e("code",[t._v("1、使用VsCode编辑器打开组件根目录\n2、在VSCode中新建终端并运行 gulp命令，每次保存，gulp会自动将组件打包\n    并在dist目录下生成.mpk文件；\n    mpk文件是组件最终的文件，如果您已经开发完成组件，\n    可以将.mpk文件复制到项目工程目录下的widgets目录下，\n    并在mendix客户端中按F4刷新项目目录。\n3、如果想测试组件的功能，可以将项目根目录下的mpr文件拷贝到组件test目录下，\n    并且删除Test.mpr文件，如果项目中使用到了其他组件，请一并拷贝到test/widgets目录下。\n")])])])}),[],!1,null,null,null);s.default=a.exports}}]);