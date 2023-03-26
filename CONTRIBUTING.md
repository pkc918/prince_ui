# Contribution Guide

请看这里! 非常感谢您对 Prince UI 的开发感兴趣，非常欢迎您的代码提交。为方便管理，在提交之前，请您花几分钟的时间阅读下列提交规范:

## Issue 规范

-   issue 仅用提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。
-   在提交 issue 之前，请先搜索相关内容是否已被提出。
-   请说明您使用的环境（Prince_UI 和 Vue 的版本号），并提供操作系统和浏览器信息。

## Pull Request 规范

-   请先 fork 一份到自己的项目下，不要直接在仓库下创建分支。
-   commit 信息要以 `type(scope):描述信息`的形式填写，例如 `fix(components):fix xxx bug`。

    -   type：fix，feat，docs，style，refactor，test，chore（ps：必须是其中的一个）
    -   scope：components，hooks，func，html，style，docs，var，config（ps：必须是其中一个）

        -   fix：表示修复了一个缺陷或错误。
        -   feat：表示添加了一个新的功能或特性等。
        -   docs：表示修改了文档或注释。
        -   style：表示修改了代码的格式或风格，例如修改了缩进或空格。
        -   refactor：表示重构了代码，即没有添加新功能或修复错误，但是对代码进行了结构上的改进。
        -   test：表示添加或修改了测试用例。
        -   chore：表示进行了一些日常维护工作，例如更新依赖或清理代码。
        -   components：组件相关（创建，删除）
        -   hooks：useXXX 这样的公用函数（创建，删除）
        -   func：组件内部某个函数（增删改，这里不包括 hooks）
        -   html：template 中有变化
        -   style：css 相关变化
        -   docs：文档变化
        -   var：只更改了变量
        -   config：配置类文件变化
