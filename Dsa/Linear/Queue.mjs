export class Queue {
    constructor() {
        this.items = {};
        this.front = 0; 
        this.rear = 0; 
    }

    
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const removedItem = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return removedItem;
    }

    
    peek() {
        if (this.isEmpty()) {
            return new Error("Queue is empty");
        }
        return this.items[this.front];
    }

    
    isEmpty() {
        return this.front === this.rear;
    }

    
    size() {
        return this.rear - this.front;
    }

    
    print() {
       console.log(this.items);
    }

    clone() {
        const clonedQueue = new Queue();
        for (let i = this.front; i < this.rear; i++) {
            clonedQueue.enqueue(this.items[i]);
        }
        return clonedQueue;
    }
    

    clear() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log(queue.peek()); 
console.log(queue.dequeue());

queue.print()

console.log(queue.isEmpty());

console.log(queue.size());

console.log(queue.clone());
