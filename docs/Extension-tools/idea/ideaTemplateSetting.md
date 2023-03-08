[[toc]]

# IDEA 注释模版设置

## 简介
简单介绍如何在IDEA设置快速自动生成文件注释模版以及手动生成方法注释模版，这里主要是针对于JAVA语言的设置。但是其他语言的支持操作也是类似的。

生成方法注释模版教程中使用到的脚本来源于网络，结合自己的需求稍加了改动，仅供参考。

## 文件头注释模版
1. 找到对应类型文件的文件头注释模版文件
> 图片中寻找的是Class类型文件对应的文件头注释模版文件是File Header.java

![截屏2021-12-31 下午2.42.10.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/caab2cd0f32a42daa11b15102008ed88~tplv-k3u1fbpfcp-watermark.image?)

2. 修改注释模版文件内容
> 在步骤1中找到的文件File Header.java中修改模版内容即可。模版内容参考附录`File Header.java`
![截屏2021-12-31 下午2.43.58.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3c01d3d4f774b77b5170ad811942bc3~tplv-k3u1fbpfcp-watermark.image?)
## 文件头注释模版效果
![Dec-31-2021 15-43-07.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3662c583b8af4b0c931af9076d8426e9~tplv-k3u1fbpfcp-watermark.image?)

## 方法注释模版
1. 在Live Templates模块新建模版组，然后新建模版。接着初步设置模版内容，模版内容参考附录`模版一`，以及设置模版的快捷使用方式。
![截屏2021-12-31 下午2.47.10.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff3647ebcc2740bd9f18467daf0c67f1~tplv-k3u1fbpfcp-watermark.image?)

2. 设置模版中的参数来源，有三个参数，date的参数在Expression中设置，而param和return使用到了groovy脚本，所以需要在defauat value中设置。
> 2022-01-07: 修改date一栏的Expression为date("yyyy-MM-dd")会比较好一点。
![截屏2021-12-31 下午2.56.19.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3e7fac5856474d85a0bc59f0082114c2~tplv-k3u1fbpfcp-watermark.image?)

3. 设置模版的作用范围，默认全部即可。
![截屏2021-12-31 下午3.02.48.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/377255c078144abe81659218d547ca9a~tplv-k3u1fbpfcp-watermark.image?)
## 方法注释模版效果
![Dec-31-2021 15-45-05.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/549f2d3d663f493cb2c3b2c59dd396e0~tplv-k3u1fbpfcp-watermark.image?)

## 附录
### 模版一
```java
**
 * @Description
 * @date $date$
 $params$
 $return$
 **/
```

### 脚本一
获取param
```groovy
版本一(遗弃):
groovyScript("if(\"${_1}\".length() == 2) {return '';} else {def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();for(i = 0; i < params.size(); i++) {if(i==0){result+='* @param ' + params[i]}else{result+='\\n' + ' * @param ' + params[i]}}; return result;}", methodParameters()); 

版本二: 没有参数的情况下也会新增"* @param "
groovyScript("if(\"${_1}\".length() == 2) {return '* @param ';} else {def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();for(i = 0; i < params.size(); i++) {if(i==0){result+='* @param ' + params[i]}else{result+='\\n' + ' * @param ' + params[i]}}; return result;}", methodParameters()); 
```
### 脚本二
获取return
```groovy
groovyScript("def returnType = \"${_1}\"; def result = '* @return ' + returnType; return result;", methodReturnType()); 
```
### File Header.java
```java
/**
 * @Description 
 * @author authorName
 * @version 1.0.0
 * @date ${YEAR}-${MONTH}-${DAY} ${HOUR}:${MINUTE}:00
 */
```
