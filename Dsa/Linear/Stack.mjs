export class MyStack {
    constructor() {
        this.data = {};
        this.top = 0;
    }

    
    push(element) {
        this.data[this.top] = element;
        this.top++;
    }

    
    pop() {
        if (this.isEmpty()) {
          return new Error("UnderFlow");
        }
        this.top--;
        const poppedElement = this.data[this.top];
        delete this.data[this.top];
        return poppedElement;
    }
    
    peek() {
        if (this.isEmpty()) {
            return new Error("Stack is empty");
        }
        return this.data[this.top - 1];
    }

    
    isEmpty() {
        return this.top === 0;
    }

    
    size() {
        return this.top;
    }


    clone() {
        const clonedStack = new MyStack();
        for (let i = 0; i < this.top; i++) {
            clonedStack.push(this.data[i]);
        }
        return clonedStack;
    }
    
    print() {
        console.log(this.data);
    }
    
    clear() {
        this.data = {};
        this.top = 0;
    }

}


const stack = new MyStack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.pop());
stack.print()

console.log(stack.peek());

stack.print()

console.log(stack.isEmpty());

console.log(stack.size());

console.log(stack.clone());


