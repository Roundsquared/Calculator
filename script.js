
let num1;
let operator;
let num2;
let dispVar='';




let add = ()=>{
    let result = num1+num2
    console.log(result)
}
let sub = ()=>{
    
    let result = num1-num2
    console.log(result)
}
let div = ()=>{
    
    while(num2==0){
        console.log('You can\'t divide by 0 fool!')
        num2=prompt('Pick another number')
    }

    let result = num1/num2
    console.log(result)
}
let mult = ()=>{

    let result = num1*num2
    console.log(result)
}
let operate = ()=>{
    num1=prompt('first number')
    operator=prompt('operator')
    num2=prompt('second number')
    num1 = +num1
    num2 = +num2

   if(operator==='+'){
    add()
   }
   else if(operator==='-'){
    sub()
   }
   else if(operator==='*'){
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
            text=element.innerHTML
        }
        let screen = document.querySelector('.text')
        screen.textContent=dispVar
        
        
    }
    element.addEventListener('click',test)
    
});

let operatorButton = document.querySelectorAll('.operator')
operatorButton.forEach((element) =>{
    let test2=function(){
        if(!num1){
        num1=dispVar
        num1=+num1
        console.log("I'm gonna try and store the first value, which is: "+num1)
        dispVar=''
        }
        else{
            num2=dispVar
            num2= +num2
            console.log(num2)
            dispVar=''
        }
    }
    element.addEventListener('click',test2)
})
