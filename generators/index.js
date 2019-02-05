const { reject } = require('ramda');
const { join } = require('path');
const { readdirSync } = require('fs');
const Generator = require('yeoman-generator');

const subGenerators = readdirSync(join(__dirname, './'));
const filterFiles = reject(file => file === 'index.js' || file === 'utils.js');

module.exports = class extends Generator {
    constructor(...args) {
        super(...args);
    }
    prompting() {
        return this.prompt([
            {
                type    : 'list',
                name    : 'helper',
                message : 'select utility',
                choices : filterFiles([...subGenerators, 'exit'])
            }
        ]).then(({ helper }) => {
            if (helper === 'exit') {
                return;
            }

            this.composeWith(require.resolve(`./${helper}`));
        });
    }
};
