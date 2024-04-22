export class Node{
    constructor(data){
        this.previous=null
        this.data=data
        this.next=null
    }
}

export class DoublyLinkedList{
    constructor(){
        this.head=null
        this.length=0
    }

    add(data){
     let node=new Node(data);
     if(this.head===null){
         this.head=node
         this.length++
         return;
         }
     let temp=this.head
         while(temp.next!==null){
             temp=temp.next
         }
     temp.next=node
     node.previous=temp
     this.length++
    }

    display(){
        let temp=this.head
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next
        }
        console.log(" Length = "+this.length)
    }
    addFirst(data){
      let node=new Node(data)
       if(this.head===null){
           this.head=node
           this.length++
           return
       }
       node.next=this.head
       this.head.previous=node
       this.head=node
       this.length++
    }
 
    insert(index, element) {
        if (index < 0 || index > this.length) {
            throw new Error(`Index is out of bounds`);
        }
    
        let temp = this.head;
        let i = 0;
    
        while (temp !== null) {
            if (i === index) {
                let node = new Node(element);
    
                if (temp === this.head) {
                    node.next = temp;
                    temp.previous = node;
                    this.head = node;
                } else {
                    node.next = temp;
                    node.previous = temp.previous;
                    temp.previous.next = node;
                    temp.previous = node;
                }
    
                this.length++;
                return;
            }
    
            temp = temp.next;
            i++;
        }
    }
    
     
     delete(data) {
        if (this.head===null) {
            throw new Error(`List is empty`);
        }
    
        if (this.head.data === data) {
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
            return;
        }
    
        let current = this.head;
    
        while (current !== null) {
            if (current.data === data) {
                current.previous.next = current.next;
                if(current.next)
                current.next.previous = current.previous;
                this.length--;
                return;
            }
            current = current.next;
        }
    
        throw new Error(`Node with data ${data} not found`);
    }
    
     
 
     deleteFirst(){
      if(this.head===null){
        throw new Error(`List is empty`)
      }
      this.head=this.head.next
      this.head.previous=null
      this.length--
     }   
 
     deleteLast(){
        if(this.head===null){
            throw new Error(`List is empty`)
          }
        let temp=this.head
        while(temp.next!==null){
            temp=temp.next
        }
        temp.previous.next=null
        temp.previous=null
        this.length--
     }
 
     reverse() {
        let current = this.head;
        let temp = null;

        while (current !== null) {
            temp = current.previous;
            current.previous = current.next;
            current.next = temp;
            current = current.previous;
        }

        if (temp !== null) {
            this.head = temp.previous;
        }
        this.length++;
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

let mylist=new DoublyLinkedList()
mylist.add(10)
mylist.add(20)
mylist.add(30)
mylist.add(40)
mylist.add(50)
 
mylist.addFirst(5)
//mylist.delete(50)
//mylist.deleteFirst()
//mylist.deleteLast()
//mylist.reverse()
//mylist.insert(2,100)

mylist.display()
