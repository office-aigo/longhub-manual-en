module.exports = {
  base: "/manual/", //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "LongHub | Manual",
      description: "Manual",
    },
    "/en/": {
      lang: "en-US",
      title: "LongHub | Manual",
      description: "LongHub | Manual",
    },
  },
  plugins: [
    "@vuepress/back-to-top",
    // "vuepress-plugin-auto-sidebar",
    // [
    //   "qrcode",
    //   {
    //     // "/" and "/zh/" correspond to the path set by locales
    //     labelText: {
    //       "/": "二维码",
    //       "/en/": "QRCode",
    //     },
    //     size: "large",
    //     channel: true,
    //   },
    // ],
  ],
  themeConfig: {
    sidebarDepth:2,
    locales: {
      "/": {
        // 多语言下拉菜单的标题
        selectText: "选择语言",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
          },
        },
        algolia: {},
        nav: [{ text: "指南", link: "/article/", ariaLabel: "指南" }],
        sidebar: {
          "/article/":[
            "导师",
            "宣传单、群二维码",
            "普通会员"
          ]
        },
      },
      "/en/":{
        selectText: "Languages",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [{ text: "Guide", link: "/en/article/", ariaLabel: "Guide" }],
        sidebar: {
          "/en/article/":[
            "Promember",
            "Flyer-Group-QR-Code",
            "Member"
          ]
        },
      }
    },
  },
};
