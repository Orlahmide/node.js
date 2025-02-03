// let numbers = [1, 2, 3, 4]

// function sum([a, b, c, d]) {

//     return a + b + c + d
// }

// console.log(sum(numbers));

// function arrMethod(numberss){
//     return numberss.reduce((a,b) => a+b , 0)
// }

// console.log(arrMethod(numbers))




// function odd(arr){
//     let number = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 1) {
//             number = number + arr[i]
//         }       
//     }
//     return number   
// 

// let arr = [1, 2, 3, 4, 5,6,9,7]
// console.log(odd(arr))

// let result = 0
// arr.forEach(element => {
   
//    result = result + element
   
// });
// console.log(result)



// function r(t) {
//     let sum = 0
//     for(let i = 0; i < t.length; i++){
//         if( t.le)
//        sum = sum + t[i]
//     }
//     return sum
  
// }
// let t = [2,5,6,7,8,9];
// console.log(r(t));

// arr = [1,2,3,4]
// for (i = 1; i<arr.length ; i++){

//     console.log(arr[i])
//     return 
// }


function printFactor(number){
    if(number < 1){
        console.log("invalid value")
    }
    let factor = []
    for(let i = 0; i <= number; i++){
        
        if(number%i == 0){
            factor.push(i)
        }   
    }
    return factor
}   

console.log(printFactor(8))

function sumFirstAndLastDigit(number){
    let n = number.toString();
    let firstDigit = parseInt(n[0]);
    if(n.length==1){
        return n[0] * 2
    }
    else if(n < 0){
        return -1
    }
    let lastDigit = parseInt(n[n.length-1])
    let sum = firstDigit + lastDigit;
    return sum
}

console.log(sumFirstAndLastDigit(252))

function evenDigit(number){

    let arrN=number.toString()
    let even = 0
    for( let i = 0; i<arrN.length; i++ ){
        if( arrN[i] % 2 == 0){
            even = even + parseInt(arrN[i])
        }
    }
    return even
}

console.log(evenDigit(123456789))

function reverse(value){
    let str = value.toString()
    let t = ""
    for( let i = str.length-1; i >= 0; i--){
        t = t + str[i]
    }
    return t
}
console.log(reverse("Aturaka Tomilola"))



