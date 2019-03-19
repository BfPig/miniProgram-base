# generator-miniProgram-base
[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-5.6.0-orange.svg)]()
[![npm](https://img.shields.io/badge/yeoman-2.0.5-brightgreen.svg)]()
> Weixin app scaffolding based on Yeoman.

## 导航
[English](https://github.com/BfPig/miniProgram-base/blob/master/README.md)
[中文](https://github.com/BfPig/miniProgram-base/blob/master/README_CN.md)


## Installati安装on

```bash
npm install -g yo
```

然后:

```bash
git clone git@github.com:BfPig/mini_program-base.git
```

通过`npm link`将其添加到yeoman里

```
cd mini_program-base
npm link
```

在新的文件夹生成项目结构:

```
yo
...
```

### 如何运行你的项目结构?

进入到对应的项目目录根目录中，然后运行：

```
npm install
```

在`git init`之后运行`husky:update`

```
npm run husky:update
```

开始快乐的玩耍吧~

```
npm run dev
```

## Configuration

### UI框架

1. [Tencent/weui](https://github.com/Tencent/weui)

