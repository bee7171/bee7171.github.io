(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{524:function(t,s,a){"use strict";a.r(s);var n=a(4),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"方法一：递归分治"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一：递归分治"}},[t._v("#")]),t._v(" 方法一：递归分治")]),t._v(" "),a("h3",{attrs:{id:"解题思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解题思路"}},[t._v("#")]),t._v(" 解题思路")]),t._v(" "),a("p",[t._v("后序遍历的遍历顺序：左子树 | 右子树 | 根节点。而且又是一棵二叉搜索树。")]),t._v(" "),a("p",[t._v("那么根据数组来看，最后一个树肯定是根节点，然后在前面找到第一个大于根节点的树，根据后序遍历的特点，我们就可以把数组分为3个区间。")]),t._v(" "),a("p",[t._v("接着，通过递归，对所有子树进行判断是否符合二叉搜索树的定义。就可以解决本道题啦。")]),t._v(" "),a("h3",{attrs:{id:"算法分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法分析"}},[t._v("#")]),t._v(" 算法分析")]),t._v(" "),a("ul",[a("li",[t._v("**终止条件：**当"),a("code",[t._v("i >= j")]),t._v("时，递归终止。说明此子树节点数量小于等于1。无需判断了。")])]),t._v(" "),a("blockquote",[a("p",[t._v("为什么是i >= j呢？")]),t._v(" "),a("ul",[a("li",[t._v("因为比如当左子树为空的情况下，"),a("code",[t._v("i = m = j-1")]),t._v("。则递归"),a("code",[t._v("recur(i, m-1)")]),t._v("的时候，"),a("code",[t._v("i > j")]),t._v("。")])])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("递推工作：")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("划分左右子树")]),t._v("：数组为"),a("code",[t._v("[i, j]")]),t._v("区间的元素，根据后序遍历，寻找第一个大于根节点的元素，把它的索引记为"),a("code",[t._v("m")]),t._v("。则左子树区间为"),a("code",[t._v("[i, m-1]")]),t._v("，右子树区间为"),a("code",[t._v("[m, j-1]")]),t._v("。根节点索引为"),a("code",[t._v("j")]),t._v("。")]),t._v(" "),a("li",[a("strong",[t._v("判断是否为二叉搜索树")]),t._v("：\n"),a("ul",[a("li",[t._v("由于第一步划分左右子树的时候，左子树的正确性已经得到证明。所以不需要再判断了。")]),t._v(" "),a("li",[t._v("右子树的所有元素都要大于根节点。")])])])])]),t._v(" "),a("li",[t._v("**返回值：**所有子树都要判断正确才可以返回。一共3个逻辑，用与逻辑符连接。\n"),a("ul",[a("li",[a("code",[t._v("p == j")]),t._v("，判断此树是否正确。")]),t._v(" "),a("li",[a("code",[t._v("recur(i, m-1)")]),t._v("，判断此树的左子树是否正确。")]),t._v(" "),a("li",[a("code",[t._v("recur(m, j-1)")]),t._v("，判断此树的右子树是否正确。")])])])]),t._v(" "),a("h3",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Solution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("verifyPostorder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        reutrn "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//终止条件")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//找出索引m，划分区间")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//判断右子树是否正确")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            p"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可通过判断p=j来验证右子树是否正确。")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recur")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("postorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("h3",{attrs:{id:"复杂度分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂度分析"}},[t._v("#")]),t._v(" 复杂度分析")]),t._v(" "),a("ul",[a("li",[t._v("**时间复杂度O("),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("msup",[a("mi",[t._v("N")]),a("mn",[t._v("2")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N^2")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141079999999999em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])])])])]),t._v(")：**每次递归需要减去一个根节点。所以需要O(N)的时间。而在每轮递归中，如果二叉树退化为链表。又需要遍历所有节点，为O(N)。")]),t._v(" "),a("li",[a("strong",[t._v("空间复杂度O(N)")]),t._v("：最差情况下，递归需要的额外空间为O(N)。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);