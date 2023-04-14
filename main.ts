import {Stack} from "./Stack";
import {Queue} from "./Queue";

let string: string = 'able was I ere I saw elba';
let stack: Stack<string> = new Stack<string>();
let queue: Queue<string> = new Queue<string>();

function checkSymmetryString(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        queue.enqueue(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
    }
    return true;
}

console.log(checkSymmetryString(string));


