module.exports = {
    copyTpl: function (from, to, content) {
        this.fs.copyTpl(this.templatePath(from), this.destinationPath(to), content);
    }
};
