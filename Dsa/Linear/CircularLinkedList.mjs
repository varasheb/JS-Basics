class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(data) {
        const newNode = new Node(data);
        if (this.head===null) {
            newNode.next = newNode; 
            this.head = newNode;
            this.length++;
            return;
        } 
            let lastNode = this.head
            while (lastNode.next !== this.head) {
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
            newNode.next = this.head; 
            this.length++;
    }
    
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let str = "";
        let current = this.head;
        do {
            str = str + current.data;
            current = current.next;
            if (current !== this.head) {
                str = str + " -> ";
            }
        } while (current !== this.head);
        console.log(str);
    }

    isEmpty() {
    return this.head===null
    }

    
    size() {
        return this.length
    }
    
    clear() {
        this.head = null;
        this.length = 0;  
    }
    delete(data) {
        if (!this.head) {
            return; // List is empty
        }
    
        let current = this.head;
        let prev = null;
    
        // Traverse the list to find the node to delete
        do {
            if (current.data === data) {
                if (prev) {
                    prev.next = current.next;
                } else {
                    // If deleting the head node
                    let lastNode = this.head;
                    while (lastNode.next !== this.head) {
                        lastNode = lastNode.next;
                    }
                    if (this.head === this.head.next) {
                        // If there's only one node in the list
                        this.head = null;
                    } else {
                        this.head = this.head.next; // Move head to the next node
                        lastNode.next = this.head; // Update the last node's next pointer
                    }
                }
                this.length--;
                return;
            }
            prev = current;
            current = current.next;
        } while (current !== this.head);
    
        console.log(`Node with data ${data} not found`);
    }
    
}


const circularList = new CircularLinkedList();
circularList.append(1);
circularList.append(2);
circularList.append(3);
circularList.append(4);
circularList.append(5);
circularList.append(6);

circularList.delete(5)

// circularList.clear();
// console.log(circularList.isEmpty())
// console.log(circularList.size())

circularList.display(); 
