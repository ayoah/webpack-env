var program = require('commander');
module.exports = function() {
    program
        .version('1.0.0')
        .usage('[options]')
        .option('--envName [name]', '环境参数')
        .parse(process.argv);

    console.log(process.argv);

    if (typeof program.envName === 'undefined') {
        console.log('envName参数是必须的！');
        console.log('  -用法 --envName [dev|test|stg|prod]');
        process.exit(1)
    } else if (program.envName != 'dev'
        && program.envName != 'test'
        && program.envName != 'stg'
        && program.envName != 'prod') {
        console.log('envName参数输入不正确！');
        console.log('  -用法 --envName [dev|test|stg|prod]');
        process.exit(1)
    }
    return program.envName;

};