import { showMessage } from './utils';

console.log('Hello from es5!');
setTimeout(() => {
    init('Hello from Typescript!');
});

function init(note: string): void {
    console.log(note);
    showMessage(note, '#whatever-app');
}
