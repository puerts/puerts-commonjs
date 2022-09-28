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
  * clone https://github.com/puerts/puerts-commonjs.git
  * use `add from disk` and select the `upm` diectory

> `add from git` is not recommended because it cannot control package version.
> 不建议您使用`add from git`因为它无法进行版本控制。

3. install manually | 手动复制安装

## Handle D.TS | 处理D.ts
本仓库附带了dts，但你需要在您的`tsconfig.json`处手动加上该d.ts所在目录的位置
```
  typeRoots: [
    '本仓库upm/Typing目录'
  ]
```

当然，你也可以将该d.ts手动拷贝到你的项目里使用。