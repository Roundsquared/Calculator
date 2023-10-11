
let num1;
let operator;
let num2;




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
        console.log(text)
    }
    element.addEventListener('click',test)
    
});