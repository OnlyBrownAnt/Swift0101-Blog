export default {
  lang: 'zh',
  title: 'Swift0101 Blog',
  description: '',
  base: '/',
  lastUpdated: true,
  ignoreDeadLinks: true, // TODO 打包和运行时忽略md文档报错: Found dead link 
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/OnlyBrownAnt' }
    ],
    sidebar: {
      '/': [
        {
          text: '后端',
          collapsed: false,
          items: [
            { text: 'Java 多线程总结', link: '/server/java/javaThreads'},
            { text: 'Java Socket', link: '/server/java/JavaSocket'},
            { text: '数据库-基础概念介绍', link: '/server/DB/dbBase'},
            { text: 'Java 注解(Annotation)', link: '/server/java/JavaAnnotation'},
            { text: 'Java 反射(reflect)', link: '/server/java/JavaReflect'},
            { text: 'More', link: '/server/java/learnJava' },
          ]
        },
        {
          text: '前端',
          collapsed: false,
          items: [
            { text: 'More', link: '/web/index' }
          ]
        },
        {
          text: '叮当猫的万能口袋',
          collapsed: false,
          items: [
            { text: '你比你想象中还需要Markdown', link: '/tools/markdown/markdown' },
            { text: 'SSH 实现免密登陆', link: '/tools/git/sshLoginWithoutPassword' },
            { text: 'Postman Mock服务的基本使用教程', link: '/tools/postman/postmanMock' },
            { text: 'Docker快速内网部署YApi Mock服务平台', link: '/tools/yapi/yapi-1' },
            { text: 'JMeter的安装和简单使用', link: '/tools/jmeter/jmeterGuide' },
            { text: 'More', link: '/tools/yapi/yapi-1' }
          ]
        }
      ],
      '/web/': [
        {
          text: '前端',
          collapsed: false,
          items: []
        }
      ],
      '/server/': [
        {
          text: '后端',
          collapsed: false,
          items: [
            { text: '学习JAVA', link: '/server/java/learnJava'},
            { text: 'Java 多线程总结', link: '/server/java/javaThreads'},
            { text: 'Java Socket', link: '/server/java/JavaSocket'},
            { text: 'Java XML', link: '/server/java/JavaXML'},
            { text: 'Java JSON', link: '/server/java/JavaJSON'},
            { text: 'Java 枚举(Enum)', link: '/server/java/JavaEnum'},
            { text: 'Java 注解(Annotation)', link: '/server/java/JavaAnnotation'},
            { text: 'Java 反射(reflect)', link: '/server/java/JavaReflect'},
            { text: 'JAVA 多线程 转账Demo', link: '/server/java/javaThreadsTransferDemo'},
            { text: '数据库-基础概念介绍', link: '/server/DB/dbBase'},
            { text: 'MySQL Transactions', link: '/server/DB/MySqlTransactions'}
          ]
        }
      ],
      '/tools/': [
        {
          text: '叮当猫的万能口袋',
          collapsed: false,
          items: [
            { text: 'Docker快速内网部署YApi Mock服务平台', link: '/tools/yapi/yapi-1' },
            { text: 'Postman文档集', link: '/tools/postman/postmanMock' },
            { text: 'Postman Mock服务的基本使用教程', link: '/tools/postman/postmanMock' },
            { text: 'JMeter的安装和简单使用', link: '/tools/jmeter/jmeterGuide' },
            { text: '你比你想象中还需要Markdown', link: '/tools/markdown/markdown' },
            { text: '服务器的购买和基本使用教程', link: '/tools/others/orderServer' },
            { text: 'IPad Tips 图书APP(iBook)', link: '/tools/others/IPadTips' },
            { text: '你对甘特图最开始的印象是什么', link: '/tools/others/ganttChart' },
            { text: '这是你想要的呼吸灯效果吗', link: '/tools/others/ESP32BreathingLights' },
            { text: 'Git Operation timed out', link: '/tools/git/GitOperationTimedout' },
            { text: 'IDEA 注释模版设置', link: '/tools/idea/ideaTemplateSetting' },
            { text: 'SSH 实现免密登陆', link: '/tools/git/sshLoginWithoutPassword' }
          ]
        }
      ]
    }
  }
}