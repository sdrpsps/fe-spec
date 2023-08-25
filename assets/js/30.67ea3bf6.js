(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{316:function(e,t,n){"use strict";n.r(t);var r=n(14),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"设计目的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计目的"}},[e._v("#")]),e._v(" ⭐️ 设计目的")]),e._v(" "),t("p",[e._v("随着前端技术的发展，前端项目正在变得越来越复杂。"),t("code",[e._v("JavaScript")]),e._v("\n作为一门弱类型解释性编程语言，其灵活多变的语法极大地提高了前端开发效率，但同时也存在一系列问题。在大型项目开发过程中，代码维护所占的时间比重往往大于新功能的开发。因此编写符合团队编码规范的代码是至关重要的。\n一致性的代码规范可以增强团队开发协作效率、提高代码质量、减少遗留系统维护的负担。但是每个人的代码编写喜好不同，代码风格也会迥然不同，若要一个团队内所有的成员都能发挥最大程度的价值，一个具有普适性的标准是必不可少的。")]),e._v(" "),t("p",[e._v("那么，如何制定前端团队的代码规范，如何在团队内进行最小成本的推广，就是一个合格的前端架构师面临的一大难题。很多团队的基础建设都只是简单地知晓其中一部分规范工具的使用，但却没有一套完整的工程化产出来助力研发同学实现规范落地。因此，如果我们能够产出一套完整化的前端编码规范工具，都会对不仅能够解决存量项目的编码异味，还能够保证后续所有项目的编码质量。")]),e._v(" "),t("h2",{attrs:{id:"为什要学习前端工程化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什要学习前端工程化"}},[e._v("#")]),e._v(" 💡 为什要学习前端工程化")]),e._v(" "),t("p",[e._v("通过本套课程，您可以学会：")]),e._v(" "),t("ol",[t("li",[e._v("学习如何通过 "),t("code",[e._v("monorepo")]),e._v(" 和 "),t("code",[e._v("pnpm")]),e._v(" 的多包管理方式开发一套多 "),t("code",[e._v("npm")]),e._v(" 包的管理方式，以及如何将发包流程植入 "),t("code",[e._v("CI")]),e._v("\n实现自动化发布，以及"),t("code",[e._v("CHANGLOG")]),e._v("的自动化更新部署；")]),e._v(" "),t("li",[e._v("学习现有前端前沿的研发流程下，我们可以通过哪些工具提升项目的编码规范，并提供配套工具的最佳实践，包括但不限于"),t("code",[e._v("eslint")]),e._v("、"),t("code",[e._v("stylelint")]),e._v("、"),t("code",[e._v("commitlint")]),e._v("、"),t("code",[e._v("markdownlint")]),e._v("、"),t("code",[e._v("husky")]),e._v("\n等，以及如何将单元测试植入配套工具的具体实现；")]),e._v(" "),t("li",[e._v("学习如何通过脚手架的方式，以交互式形式一键接入，实现对"),t("code",[e._v("JavaScript")]),e._v("、"),t("code",[e._v("Typescript")]),e._v("、"),t("code",[e._v("React")]),e._v("、"),t("code",[e._v("Vue")]),e._v("等不同类型的前端项目下的标准的语法限制；")]),e._v(" "),t("li",[e._v("学习如何对存量项目进行优化：对于存量代码不符合规范的问题，支持一键扫描和一键修复，一键式的修复存量问题，最小化存量代码的更新成本；")]),e._v(" "),t("li",[e._v("学习如何对新项目添加规范：支持一键接入新增项目，通过结合"),t("code",[e._v("gitpre-commit")]),e._v("\n钩子，对提交文件进行编码规范的扫描；同时通过"),t("code",[e._v("husky")]),e._v("的"),t("code",[e._v("commit-msg")]),e._v("钩子，对本次代码提交"),t("code",[e._v("message")]),e._v("的格式进行扫描。")])]),e._v(" "),t("h2",{attrs:{id:"配套工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配套工具"}},[e._v("#")]),e._v(" 🛋 配套工具")]),e._v(" "),t("p",[e._v("我们引入了多个业界流行的 "),t("code",[e._v("Linter")]),e._v(" 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("规约")]),e._v(" "),t("th",[e._v("Lint 工具")]),e._v(" "),t("th",[e._v("NPM包")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("JavaScript 编码规范 "),t("br"),e._v(" TypeScript 编码规范  "),t("br"),e._v(" Node 编码规范")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/encode-fe-eslint-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("encode-fe-eslint-config"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("CSS 编码规范")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://stylelint.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("stylelint"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/encode-fe-stylelint-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("encode-fe-stylelint-config"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("Git 规范")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("commitlint"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/encode-fe-commitlint-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("encode-fe-commitlint-config"),t("OutboundLink")],1)])]),e._v(" "),t("tr",[t("td",[e._v("文档规范")]),e._v(" "),t("td",[t("a",{attrs:{href:"https://github.com/DavidAnson/markdownlint",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdownlint"),t("OutboundLink")],1)]),e._v(" "),t("td",[t("a",{attrs:{href:"https://www.npmjs.com/package/encode-fe-markdownlint-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("encode-fe-markdownlint-config"),t("OutboundLink")],1)])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/encode-fe-spec-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("encode-fe-spec-cli"),t("OutboundLink")],1),e._v(" 收敛屏蔽了上述依赖和配置细节，提供简单的 "),t("code",[e._v("CLI")]),e._v("\n和 "),t("code",[e._v("Node.js API")]),e._v("，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。")]),e._v(" "),t("p",[e._v("您可以使用"),t("a",{attrs:{href:"https://www.npmjs.com/package/encode-fe-spec-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("encode-fe-spec-cli"),t("OutboundLink")],1),e._v(" 方便地为项目接入全部规范。")])])}),[],!1,null,null,null);t.default=o.exports}}]);