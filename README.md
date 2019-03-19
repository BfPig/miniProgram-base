# generator-miniProgram-base
[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-5.6.0-orange.svg)]()
[![npm](https://img.shields.io/badge/yeoman-2.0.5-brightgreen.svg)]()
> Weixin app scaffolding based on Yeoman.

## Navigation
[English](https://github.com/BfPig/miniProgram-base/blob/master/README.md)
[中文](https://github.com/BfPig/miniProgram-base/blob/master/README_CN.md)

## Installation

```bash
npm install -g yo
```

And then:

```bash
git clone git@github.com:BfPig/mini_program-base.git
```

Add the template of the repo to Yeoman's list through `npm link`.

```
cd weapp-base
npm link
```

Then generate your vue project in new folder:

```
yo
...
```

### How to start Vue project?

Goto the root directory, and run

```
npm install
```

Then run `husky:update` after `git init`

```
npm run husky:update
```

Developing Happy

```
npm run dev
```

## Configuration

### UI framework

1. [Tencent/weui](https://github.com/Tencent/weui)

