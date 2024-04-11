export class Array{
    constructor(){
        this.length=0
        this.arr={}
    }
    
    push(value){
        this.arr[this.length]=value
        this.length++
        return this.length
    }
    pop(){
        const lastElement=this.arr[this.length-1]
        delete this.arr[this.length-1]
        this.length--
        return lastElement
    }
    print(){
        console.log(this.arr)
    }
    slice(start, end){
        let slicedArray=[]
        let index=0;
        for(let i=start;i<end;i++){
            slicedArray[index]=this.arr[i]
            index++
        }
        return slicedArray
    }
    indexOf(element){
        for(let i in this.arr){
            if(this.arr[i]===element)
            return i
        }
        return -1
    }
    lastIndexOf(element){
      for(let i=this.length-1;i>=0;i--){
        if(this.arr[i]===element)
        return i
      }
      return -1
    }
    splice(startIndex,removeNo,...addElement){
    for (let i = startIndex; i < startIndex + removeNo; i++) {
        delete this.arr[i];
        this.length--;
    }
    for(let i in this.arr){
        if(i>=startIndex){
            addElement[addElement.length]=this.arr[i]
        }
    }
    for (let i = 0; i < addElement.length; i++) {
        this.arr[startIndex + i] = addElement[i];
        this.length++;
    }

    }
    join(space=","){
        let str=""
     for(let i=0;i<this.length;i++){
        let ele=this.arr[i]
        if(this.arr[this.length-1]===ele){
            str=str+ele
        }else{
            str=str+ele+space
        }
     }
     return str
    }
    fill(value){
        for(let i in this.arr){
            this.arr[i]=value
        }
    }
    concat(...value){
        let newArray=new Array();
       for(let i in this.arr){
        newArray.push(this.arr[i])
       }
       for(let i in value){
        newArray.push(value[i])
       }
       return newArray
    }
    includes(element) {
        for (let i = 0; i < this.length; i++) {
            if (this.arr[i] === element) return true;
        }
        return false;
    }
    shift() {
        if (this.length === 0) return undefined;
        const firstElement = this.arr[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        delete this.arr[this.length - 1];
        this.length--;
        return firstElement;
    }

    unshift(...elements) {
        const newLength = this.length + elements.length;
        for (let i = newLength - 1; i >= elements.length; i--) {
            this.arr[i] = this.arr[i - elements.length];
        }
        // add the elements
        for (let i = 0; i < elements.length; i++) {
            this.arr[i] = elements[i];
        }
        this.length = newLength;
        return this.length;
    }

}

let arr=new Array();
arr.push(10)
arr.push(20)
arr.push(40)
arr.push(50)
arr.push(60)
arr.push(70)
arr.push(80)

arr.print()

// console.log(arr.pop())
// arr.print()

// console.log(arr.slice(1,3))

// console.log(arr.indexOf(20))

// console.log(arr.lastIndexOf(20))

// arr.splice(1,2,2,3,4)
// arr.print()

console.log(arr.join())

arr.fill(1)
arr.print()

console.log(arr.includes(20))

arr.unshift(2,3,4)
arr.print()

arr.shift()
arr.print()

console.log(arr.concat(2,3,4))

