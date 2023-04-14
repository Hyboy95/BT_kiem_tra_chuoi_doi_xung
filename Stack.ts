export class Stack<G> {
   container: G[] = [];
   constructor() {
   }
   push(data: G) {
       this.container.push(data);
   }
   pop(): G | undefined {
       return this.container.pop();
   }
   size(): number {
       return this.container.length;
   }
}