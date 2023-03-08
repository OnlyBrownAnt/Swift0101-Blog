const anchor = require('markdown-it-anchor');
import { tocPlugin } from '@mdit-vue/plugin-toc';

export default {
  lang: 'zh',
  title: 'Swift0101 Blog',
  description: '',
  base: '/',
  lastUpdated: true,
  ignoreDeadLinks: true, // TODO 打包和运行时忽略md文档报错: Found dead link 
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {},
    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2, 3, 4, 5] },
    config: (md) => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-anchor'))
      md.use(tocPlugin)
    }
  },
  themeConfig: {
    algolia: {
      appId: '113ROSTJD8',
      apiKey: '3681a52a632bb331ff4ce8c886209d70',
      indexName: 'brownant'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OnlyBrownAnt' }
    ],
    sidebar: {
      '/': [
        {
          text: '后端(Back-end)',
          collapsed: false,
          items: [
            { text: 'Java 多线程总结', link: '/Back-end/java/javaThreads'},
            { text: 'Java Socket', link: '/Back-end/java/JavaSocket'},
            { text: '数据库-基础概念介绍', link: '/Back-end/DB/dbBase'},
            { text: 'Java 注解(Annotation)', link: '/Back-end/java/JavaAnnotation'},
            { text: 'Java 反射(reflect)', link: '/Back-end/java/JavaReflect'},
            { text: 'More', link: '/Back-end/java/learnJava' },
          ]
        },
        {
          text: '前端(Front-end)',
          collapsed: false,
          items: [
            { text: 'vant-list 无限触发加载问题', link: '/Front-end/vue/vant/vant-list' },
            { text: 'More', link: '/Front-end/index' }
          ]
        },
        {
          text: '叮当猫的万能口袋',
          collapsed: false,
          items: [
            { text: '你比你想象中还需要Markdown', link: '/Extension-tools/markdown/markdown' },
            { text: 'SSH 实现免密登陆', link: '/Extension-tools/git/sshLoginWithoutPassword' },
            { text: 'Postman Mock服务的基本使用教程', link: '/Extension-tools/postman/postmanMock' },
            { text: 'Docker快速内网部署YApi Mock服务平台', link: '/Extension-tools/yapi/yapi-1' },
            { text: 'JMeter的安装和简单使用', link: '/Extension-tools/jmeter/jmeterGuide' },
            { text: 'More', link: '/Extension-tools/yapi/yapi-1' }
          ]
        }
      ],
      '/Front-end/': [
        {
          text: '前端(Front-end)',
          collapsed: false,
          items: [
            { text: 'vant-list 无限触发加载问题', link: '/Front-end/vue/vant/vant-list' }
          ]
        }
      ],
      '/Back-end/': [
        {
          text: '后端(Back-end)',
          collapsed: false,
          items: [
            { text: '学习JAVA', link: '/Back-end/java/learnJava'},
            { text: 'Java 多线程总结', link: '/Back-end/java/javaThreads'},
            { text: 'Java Socket', link: '/Back-end/java/JavaSocket'},
            { text: 'Java XML', link: '/Back-end/java/JavaXML'},
            { text: 'Java JSON', link: '/Back-end/java/JavaJSON'},
            { text: 'Java 枚举(Enum)', link: '/Back-end/java/JavaEnum'},
            { text: 'Java 注解(Annotation)', link: '/Back-end/java/JavaAnnotation'},
            { text: 'Java 反射(reflect)', link: '/Back-end/java/JavaReflect'},
            { text: 'JAVA 多线程 转账Demo', link: '/Back-end/java/javaThreadsTransferDemo'},
            { text: '数据库-基础概念介绍', link: '/Back-end/DB/dbBase'},
            { text: 'MySQL Transactions', link: '/Back-end/DB/MySqlTransactions'}
          ]
        }
      ],
      '/Extension-tools/': [
        {
          text: '叮当猫的万能口袋',
          collapsed: false,
          items: [
            { text: 'Docker快速内网部署YApi Mock服务平台', link: '/Extension-tools/yapi/yapi-1' },
            { text: 'Postman文档集', link: '/Extension-tools/postman/postmanMock' },
            { text: 'Postman Mock服务的基本使用教程', link: '/Extension-tools/postman/postmanMock' },
            { text: 'JMeter的安装和简单使用', link: '/Extension-tools/jmeter/jmeterGuide' },
            { text: '你比你想象中还需要Markdown', link: '/Extension-tools/markdown/markdown' },
            { text: '服务器的购买和基本使用教程', link: '/Extension-tools/others/orderServer' },
            { text: 'IPad Tips 图书APP(iBook)', link: '/Extension-tools/others/IPadTips' },
            { text: '你对甘特图最开始的印象是什么', link: '/Extension-tools/others/ganttChart' },
            { text: '这是你想要的呼吸灯效果吗', link: '/Extension-tools/others/ESP32BreathingLights' },
            { text: 'Git Operation timed out', link: '/Extension-tools/git/GitOperationTimedout' },
            { text: 'IDEA 注释模版设置', link: '/Extension-tools/idea/ideaTemplateSetting' },
            { text: 'SSH 实现免密登陆', link: '/Extension-tools/git/sshLoginWithoutPassword' },
            { text: '剪辑总结', link: '/Extension-tools/montage/firstMontage'},
            { text: 'FFmpeg', link: '/Extension-tools/FFmpeg'},
            { text: '推荐工具集', link: '/Extension-tools/recommendedTools'}
          ]
        }
      ]
    }
  }
}