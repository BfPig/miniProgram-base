'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
const copydir = require('copy-dir');
const util = require('./util');

module.exports = class extends Generator {
    prompting() { 
        this.log(yosay(`Welcome to the extraordinary ${chalk.red('generator-weapp-base')} generator!`));

        const prompts = [
            {
                type: 'input',
                name: 'projectName',
                message: 'Please input project name (weapp):',
                default: 'weapp'
            },
            {
                type: 'list',
                name: 'uiLibrary',
                message: 'Please choose UI library:',
                choices: ['weui', 'no need']
            }
        ];

        return this.prompt(prompts).then(props => {
            this.props = props;
        });
    }

    defaults() { 
        if (path.basename(this.destinationPath()) !== this.props.projectName) {
            this.log('It will create ' + this.props.projectName + ' later');

            // 创建文新件夹
            this.destinationRoot(this.destinationPath(this.props.projectName));
        }
    }

    writing() {
        const changeFiles = ['package.json']; // 记录被修改的文件
        const pkg = this.fs.readJSON(this.templatePath('package.json'), {});

        if (this.props.uiLibrary === 'weui') {
            util.copyTpl.apply(this, ['src/app_tpl.wxss', 'src/app.wxss', this.props]);
            copydir.sync(this.templatePath('src/style_tpl'), this.destinationPath('src/style'));
        }

        if (changeFiles.indexOf('app.wxss') === -1) {
            changeFiles.push('app.wxss');
        }

        // 拷贝指定目录到目标位置
        copydir.sync(this.templatePath(), this.destinationPath(), function (stat,
            filepath,
            filename) {
            const extendName = path.extname(filename);

            // _tpl结尾的为自定义模板，不需要拷贝到框架中
            if (filename && path.basename(filename, extendName).endsWith('_tpl')) {
                return false;
            }

            // 被改动的文件不需要重新被拷贝
            if (changeFiles.indexOf(filename) > -1) {
                return false;
            }

            return true;
        });

        // 修改包名
        pkg.name = this.props.projectName;

        // 修改package.json
        this.fs.writeJSON(this.destinationPath('package.json'), pkg);
    }

};
