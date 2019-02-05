const Generator = require('yeoman-generator');
const { join } = require('path');
const { readdirSync } = require('fs');
const configPkg = require('./extend.json');

module.exports = class Slides extends Generator {
    constructor(...args) {
        super(...args);
    }

    writing() {
        const files = readdirSync(join(__dirname, './templates'));

        files.forEach(file => {
            this.fs.copyTpl(
                this.templatePath(file),
                this.destinationPath(file),
                this.props
            );
        });
        this.fs.extendJSON(this.destinationPath('package.json'), configPkg);
    }

    install() {
        this.installDependencies({ bower : false });
    }
};
