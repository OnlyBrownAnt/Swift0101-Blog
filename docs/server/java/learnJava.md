# 学习JAVA
工于善其事，必先利其器。所以本次的任务是通过重新了解JAVA的起源和发展来学习JAVA语言的体系以及特点。同时也学习如何进行正确的配置环境以及了解基本开发工具的IDE的基本使用。

## JAVA起源与发展
JAVA语言的前身是Oak语言，Oak语言是sun公司的由著名技术鬼才Jame Gosling参与的项目组Green进行研发的。其语言设计的基本思想是不受任何特定的体系结构绑定，其表现特点即为可移植性。   

早期的Oak语言是为了硬件而存在的，主要特点就是可移植性，通过虚拟机生成中间代码的方式来实现。但是可惜的是早期的它并没有被成功推广。转机是1994年的SunWorld‘95大会，使用JAVA编写的HotJava浏览器吸引了足够的目光，JAVA语言的GUI和图形编程能力被发现了，它在应用开发上的潜力让开发者们疯狂。

不过后来可惜的是，人们逐渐发现JAVA其实并不是真正的善于进行应用开发。不过Sun公司还是在1998年的时候推出了一整套开发工具，就是经典的JAVA1.2标准版本（J2SE），同时为了多市场角度发展的考虑，还推出了JAVA1.2嵌入式版本（J2ME）以及JAVA1.2企业版（J2EE）。

虽然JAVA往多个方向在发展，但是就结果来看最后JAVA成为了服务端应用的首选平台。现在的JAVA已经十分成熟，生态足够完善。无论将要从事什么方向的技术开发，来了解JAVA的特点以及学习JAVA的思想都有助于我们以后更好的进行学习和工作。

## JAVA环境配置
前面提到可移植性是JAVA的一大特点，为了实现这个目标虚拟机JVM必不可少，所以我们需要配置JAVA运行环境JRE。同时为了更好的使用JAVA成熟的开发工具包，我们需要配置相关JAR包。所以为了方便开发，我们直接使用完整的开发工具包JDK，包含JAVA的基本开发工具包和运行环境JRE。

### JDK安装和配置
针对于不同的平台，可以直接下载不同的安装包。我个人是使用作为类Unix平台的MACOS平台，所以我直接使用JDK tar.gz压缩包。

#### 步骤一
解压tar.gz压缩包到合适路径
```
路径参考：/Library/Java/JavaVirtualMachines/[jdk]
```

#### 步骤二
配置环境变量：设置JAVA环境主路径JAVA_HOME，配置到环境文件.bash_profile，然后刷新环境配置。
```
// 将下面内容写入.bash_profile文件

#jdk11
export JAVA_HOME=/Library/Java/JavaVirtualMachines/[jdk]/Contents/Home
export PATH=$PATH:$JAVA_HOME

// 刷新环境配置：source ～/.bash_profile
```
附加：在MAC catalina版本以上时，环境文件使用.zshrc。所以需要将命令source ～/.bash_profile写入.zshrc文件来配置环境。

#### 步骤三
验证是否安装完成
```
java --version
```

## 开发工具使用
开发工具根据自己的平时工作需要使用的是IDEA，对于简单的调试与练习则使用VsCode。

## 总结
万事开头难，重温基本的知识是为了更好打牢基础。只有足够的了解才能换来足够的正视。