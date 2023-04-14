export class Queue<G> {
    container: G[] = [];
    constructor() {
    }
    enqueue(data: G) {
        this.container.push(data);
    }
    dequeue(): G | undefined {
        return  this.container.shift();
    }
    size(): number {
        return this.container.length;
    }
}