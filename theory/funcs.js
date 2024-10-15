// function Declaration

// greet('Ivan')

// function greet(name){
//     console.log('Hello - ', name)
// }

// function Expression

// const greet2 = function(name){
//     console.log('2 Hello - ', name)
// }

// greet2('Ivan')

// console.log(typeof greet)

// console.dir(greet)

//вызывает функционал
// по истечению времени
// setTimeout(function(){
//     greet('Ivan')
// }, 3000)


// let counter = 0
// const interval = setInterval(function(){
//     if(counter === 900){
//         clearInterval(interval)
//     }
//     else{
//         console.log(++counter)
//     }
// }, 1000)


// Arrow functions

// function greet(name){
//     console.log('Hello - ', name)
// }

// const arrow = (name) => {
//     console.log('Hello - ', name)
// }

// const arrow2 = (name) => console.log('Hello - ', name)

// arrow('Ivan')
// arrow2('Ivan2')

// function pow(num, exp){
//     return Math.pow(num, exp)
// }

// const pow2 = (num, exp) => Math.pow(num, exp)

// console.log(pow(2, 8))
// console.log(pow2(2, 10))

// ---------- Default Parameters
// const sum = (a = 40,b = a / 2) => a + b
// console.log(sum()) 

// function sumAll(...numbers){
    // let res = 0
    // for(let num of numbers){
    //     res += num
    // }
    // return res

//     return numbers.reduce((acc, cur) => (acc += cur), 0)
// }

// console.log(sumAll(1,2,3,4,5,6,7,8,9))


// Clousers - замыкание

// function createPerson(name){
//     return function(lastName){
//         console.log(name + ' ' + lastName)
//     }
// }

// const addLastName = createPerson('Ivan')
// addLastName('Smirnov')
// addLastName('999')