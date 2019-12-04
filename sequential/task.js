const util = require('util');/* modulo de node */
const sleep = util.promisify(setTimeout);/* setTimeout  */

module.exports = {
    async taskOne() {
        try {
            // throw new Error("Some Problem");
            // await sleep(1000);
            return 'One Values';
        } catch (e) {
            console.log(e)
        }
    },
    async taskTwo() {
        try {
            // await sleep(1000);
            return 'two Value';
        } catch (e) {
            console.log(e)
        }
    }
}