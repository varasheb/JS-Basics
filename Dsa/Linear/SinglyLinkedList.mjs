export class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}

export class LinkedList{
    constructor(){
        this.head=null
        this.length=0;
    }

    add(data){
     let node=new Node(data);
     if(this.head===null){
         this.head=node
     }
     else{
         let temp=this.head
         while(temp.next!==null){
             temp=temp.next
         }
         temp.next=node
     }
     this.length++
    }

    addFirst(data){
       let node=new Node(data)
       if(this.head===null){
        this.head=node
        return
    }
       node.next=this.head
       this.head=node
    }

    insert(index, element) {
        if (index < 0 || index > this.length) {
            throw new Error(`Index is out of bounds`);
        }
        let node = new Node(element);
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let temp = this.head;
            let count = 0;
            while (count < index - 1) {
                temp = temp.next;
                count++;
            }
            node.next = temp.next;
            temp.next = node;
        }
        this.length++;
    }
    
    delete(data) {
        if (!this.head) {
            throw new Error("List is Empty")
        }
    
        if (this.head.data === data) {
            this.head = this.head.next; // Move head to the next node
            this.length--;
            return;
        }
    
        let current = this.head;
        let prev = null;
    
        while (current !== null) {
            if (current.data === data) {
                prev.next = current.next; // Remove the current node
                this.length--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }
    

    deleteFirst(){
        if(this.head===null){
            throw new Error(`List is empty`)
        }
        this.head=this.head.next
    }   

    deleteLast(){
        if(this.head===null){
            throw new Error(`List is empty`)
        }
        let  temp=this.head
        let  previous=null
        while(temp.next!==null){
            previous=temp
            temp=temp.next
        }
        previous.next=null
    }

    display(){
        let temp=this.head
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next
        }
    }

    reverse(){
        if (this.head === null || this.head.next === null) {
            return; 
        }

        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next; // Save the next node
            current.next = prev; // Reverse the pointer direction
            prev = current; // Move prev to the current node
            current = next; // Move current to the next node
        }

        this.head = prev; 
    }

    clear(){
     this.head=null
     this.length=0
    }

    size(){
     return this.length
    }

    isEmpty(){
      if(this.head===null){
        return true
      }
      return false
    }

    search(data){
     let temp=this.head
      while(temp!==null){
        if(temp.data===data){
            return temp
        }
        temp=temp.next
      }  
     return null
    }


}

let mylist=new LinkedList()
// mylist.add(10)
// mylist.add(20)
// mylist.add(30)
// mylist.add(40)
// mylist.add(50)

//mylist.display()
//console.log(mylist.size())

//mylist.clear()

//console.log(mylist.isEmpty())

//console.log(mylist.search(40))

//mylist.addFirst(5)
//mylist.delete(5)
//mylist.deleteLast()
//mylist.deleteFirst()

//mylist.reverse()
//mylist.insert(2,100)

mylist.display()

