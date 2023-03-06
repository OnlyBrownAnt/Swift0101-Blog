# 服务器的购买和基本使用教程

## 说明

之前大学的时候买了一台阿里云的轻量应用服务器，计划是用于学习Linux和一些后端相关工具比如tomcat、nginx、redis。这一篇文章的目的是对之前的一些笔记进行的一个整理和备忘。

阿里云和腾讯云的优惠服务其实差别没那么大，我选择的是[阿里云优惠服务](https://developer.aliyun.com/plan/grow-up)。购买一个轻量应用服务器即可，简单的学习和应用完全足够。

购买轻量应用服务器之前请浏览一下[轻量应用服务器文档](https://help.aliyun.com/product/58607.html)，了解一下服务器的基本使用方式和注意事项。但是官方的的文档太过全面所以可能会造成使用上的困扰，就像美食太多会引发我的选择困难症一样。所以我会通过文档整理一个相对简单而通用的方式，来介绍服务器基本的使用。

额外提醒一句，需要进行深度学习方面的测试和学习相关任务的同学请不要购买这类服务器，最好的实现方式是购买主机或者租用带独显的服务器。

## 购买服务器

任意选择一个便宜的轻量应用服务器，然后在购买的时候注意系统的选择，选择系统镜像的方式安装系统，系统推荐系统选择推荐[CentOS](https://baike.baidu.com/item/CentOS/498948?fr=aladdin)。参考如下图
![截屏2021-10-15 上午11.52.21.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d21d490fe2b743e18b1ebea08b608ab2~tplv-k3u1fbpfcp-watermark.image?)

## 连接服务器-重置密码

重置密码是为了之后使用其他的方式连接和管理服务器，比如ssh连接服务器。

- 进入[轻量应用服务器管理控制台](https://swas.console.aliyun.com/)，在服务器列表中点击你的服务器，参考如下图。
![截屏2021-10-15 下午1.17.37.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecb74a7389b84d95b0dedeeccdaf2a22~tplv-k3u1fbpfcp-watermark.image?)

- 重置密码（请顺便备忘密码），参考如下图。
![截屏2021-10-15 下午1.12.09.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fa256db527d44f8b6aad0460e8822f8~tplv-k3u1fbpfcp-watermark.image?)

## 连接服务器-连接服务器

最简单的方式是直接使用管理控制台提供的连接工具连接服务器。

- 进入[轻量应用服务器管理控制台](https://swas.console.aliyun.com/)，在服务器列表中点击你的服务器简介上的电脑图标，以用户名称admin的身份登录到服务器，参考如下图。

![截屏2021-10-15 下午1.17.37.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/566057189e104bdea4763e52d1f08762~tplv-k3u1fbpfcp-watermark.image?)

- 连接成功，效果如下图。

![截屏2021-10-15 下午1.25.54.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e8fb0f00d0144ec9e256a9b7cac1267~tplv-k3u1fbpfcp-watermark.image?)

## 总结

这篇教程相对比较简单，只是介绍一种最为简单的一种服务器购买和使用的方式。但是在实际使用中还会有更多高效的使用方式和技巧，目的是为了配合开发工具的使用或者是为了提高自己的开发效率，后续会持续更新笔记。

## 附录
- [阿里云优惠服务](https://developer.aliyun.com/plan/grow-up)

- [轻量应用服务器文档](https://help.aliyun.com/product/58607.html)

- [CentOS](https://baike.baidu.com/item/CentOS/498948?fr=aladdin)

- [轻量应用服务器管理控制台](https://swas.console.aliyun.com/)