
let num1;
let operator;
let num2;
let dispVar='';
let ans;
let result;



let add = ()=>{
    result = num1+num2
    console.log(result)
}
let sub = ()=>{
    
    result = num1-num2
    console.log(result)
}
let div = ()=>{
    
    while(num2==0){
        console.log('You can\'t divide by 0 fool!')
        num2=prompt('Pick another number')
    }

    result = num1/num2
    console.log(result)
}
let mult = ()=>{

    result = num1*num2
    console.log(result)
}
let operate = ()=>{
    console.log(operator)
   if(operator==='+'){
    add()
   }
   else if(operator==='-'){
    sub()
   }
   else if(operator==='x'){
    mult()
   }
   else if (operator==='/'){
    div()
   }
   else {
    console.log('invalid input')
   }
    


}

let button = document.querySelectorAll('button')
button.forEach((element) => {

    let test= function(){
        let text=element.innerHTML
        text= +text
        if(Number.isInteger(text)){
        dispVar+=text
        }
        else{
            
        }
        let current = document.querySelector('.current')
        current.textContent=dispVar
        
        
    }
    element.addEventListener('click',test)
    
});

let operatorButton = document.querySelectorAll('.operator')
operatorButton.forEach((element) =>{
    let test2=function(){

        let text=element.innerHTML
        let current = document.querySelector('.current')
        let history=document.querySelector('.history')

        if(!num1){
        num1=dispVar
        num1=+num1
        operator=text
        history.textContent=dispVar
        dispVar=''
        current.textContent=dispVar
        }
        else{
            if(!num2){
            num2=dispVar
            num2= +num2
            operator=text
            history.textContent+=(operator+" "+dispVar)
            dispVar=''
            current.textContent=dispVar
            operate()
            current.textContent=result
            num2=undefined
            }
            operator=text
            history.textContent= result+' '+operator
            num1=result
            
            
        }
    }
    element.addEventListener('click',test2)
})

let backspace = document.querySelector('.delete')


let clear = document.querySelector('.clear')
clear.addEventListener('click',()=>{
    num1=undefined
    num2=undefined
    let current = document.querySelector('.current')
    let history=document.querySelector('.history')
    current.textContent=''
    history.textContent=''
    dispVar=''
    result=undefined
})
let equals = document.querySelector('.equals')
equals.addEventListener('click',()=>{
    num2=dispVar
    num2= +num2
    let current = document.querySelector('.current')
    let history=document.querySelector('.history')
    if(!num2){
        num2=0
        add()
    }
    else if(!num1&&!num2){
        current.textContent='Pick some numbers, bub.'
    }
    else{
        operate()
        num2=undefined
        current.textContent=result
        history.textContent= result
    }
})