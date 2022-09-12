// 'almas', 5, true, {}, []
// '', 0, false, null, undefined
// check truthy
let myVar = 5;
if(myVar){
    myVar = myVar * 100
}
else{
    myVar = 0
}

let myMoney = 50;
// you check negative or falsy anything
 if(!myMoney){

 }

 let money = 100
 let food;
 if(money > 100){
    food = 'Briyani'
 }
 else{
    food = 'cha-biscuit';
 }

//  ternary 
 let food1 = money > 100 ? 'briyani' : 'cha-biscuit'

 let food2 = (money > 100 && myVar > 100) ? 'coke' : 'pure water'

 // number to string conversion
const num1 = 52;
// console.log(num1);
const myStr = num1 + ''
 console.log(myStr)

 
// string to number
const input = '560';
const inputNum = +input
console.log(inputNum);


let isActive = true

const showUser = () => console.log("DIsplay User")
const hideUser = () => console.log("Hide User")

isActive ? showUser() : hideUser ()
// use && if the left side is true then right side will be executed

isActive && showUser()

// use || if the left side is false then right side will be executed
isActive || hideUser ()


// toggle boolean
isActive = !isActive;