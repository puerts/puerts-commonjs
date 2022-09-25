# PuerTS CommonJS support

* add `require` support for JsEnv. Just like what `1.4.0-rc.0` do.
* 为JsEnv添加global.require，就像`1.4.0-rc.0`以前的版本一样。

>
* this `require` would call PuerTS's `Loader` to loadJS
* 该require会回调PuerTS的Loader进行JS加载。

>
* this repo would include the old D.ts for require style development
* 本仓库同时附带上`global.require`以及`csharp`和`puerts`模块的d.ts

## Installation | 安装方式
1. via [openupm](https://openupm.com) | 通过[openupm](https://openupm.cn/)
```
openupm add com.tencent.puerts.commonjs
```

2. via PackageMananger in Unity | 通过内置upm
  * use `add from git` in UnityPackageManager | 在Unity PackageManager处添加该git url：
```
https://github.com/puerts/puerts-commonjs.git?path=/upm
```
  * Or use `add from disk` and select upm directory after cloning this project | 或者clone下本项目后添加项目upm目录为package

3. install manually | 手动复制安装
