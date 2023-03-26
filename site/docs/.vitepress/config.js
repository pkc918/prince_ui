export default {
    title: "Prince UI",
    titleTemplate: ":title - Prince UI",
    base: "/princeui/",
    description: "A Vue.js 3 UI Library",
    head: [
        // 防止 icon
        [
            "link",
            {
                rel: "icon",
                href: "https://i.328888.xyz/2023/03/26/iDpvTP.png",
                sizes: "20x20"
            }
        ]
        // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],
    themeConfig: {
        lastUpdatedText: "Updated Date",
        nav: [{ text: "文档", link: "/guild/introduce" }],
        sidebar: {
            "/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "介绍",
                            link: "/guild/introduce"
                        },
                        {
                            text: "安装",
                            link: "/guild/installed"
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart"
                        }
                    ]
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx"
                        }
                    ]
                }
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button",
                            link: "/components/button"
                        }
                    ]
                }
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/pkc918/prince_ui" }
        ]
    }
};
