const { taskOne, taskTwo } = require('./task')
async function main() {
    try {
        console.time('Measuring time')
        const results = await Promise.all([taskOne(), taskTwo()])

        console.timeEnd('Measuring time')

        console.log('taskOne es igual a ', results[0])
        console.log('taskTwo es igual a ', results[1])
    } catch (e) {
        console.log(e);
    }
}

main();