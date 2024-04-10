export class Array{
    constructor(){
        this.length=0
        this.arr={}
    }
    push(value){
        this.arr[this.length]=value
        this.length++
    }
    pop(){
        delete this.arr[this.length-1]
        this.length--
    }
    print(){
        console.log(this.arr)
    }
    slice(start, end){
        let sliedArray=[]
        for(let i=start;i<end;i++){
            sliedArray.push(this.arr[i])
        }
        return sliedArray
    }
    indexOf(element){
        
    }
}

let arr=new Array();
arr.push(10)
arr.push(20)
arr.pop()
arr.print()
arr.print()                                                                             


