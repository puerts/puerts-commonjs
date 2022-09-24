# PuerTS CommonJS支持

为JsEnv添加global.require，就像`1.4.0-rc.0`以前的版本一样。

该require会回调PuerTS的Loader进行JS加载。

本仓库同时附带上`global.require`以及`csharp`和`puerts`模块的d.ts

## 安装方式
1. 通过[openupm](https://openupm.com/)
```
openupm add com.tencent.puerts.commonjs
```

2. 通过内置upm
在Unity PackageManager处添加该git url：
```
https://github.com/puerts/puerts-commonjs.git?path=/upm
```
或者clone下本项目后添加项目upm目录为package

3. 手动复制安装