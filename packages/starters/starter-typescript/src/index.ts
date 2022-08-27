import { NAME } from './utils/environment.js';
import { hello } from './hello.js';
import { sleep } from './utils/sleep.js';

async function main() {
    while (true) {
        await sleep(1000);
        console.log(`${Date.now()} ${hello(NAME)}`);
    }
}

if (typeof require !== 'undefined' && require.main === module) {
    main();
}
