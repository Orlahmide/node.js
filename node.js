const os = require("os")
const fs = require("fs")
const http = require("http")
const { v4: uuidv4 } = require('uuid');
const server = http.createServer((req, res) => {
    console.log("request has entered")
    console.log(req.url)
    // const htmlContent = `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //   <title>Simple HTML</title>
    // </head>
    // <body>
    //   <h1>Welcome to My Page</h1>
    //   <p>This is a simple HTML page.</p>
    // </body>
    // </html>
    // `

    if(req.url == '/'){
      fs.readFile("./views/index.html", "Utf8", (err,data)=>{
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data)
      })
     
    }
    else if (req.url == "/about"){
      fs.readFile("./views/about.html", "Utf8", (err,data)=>{
        if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data)
    })
    }
    
    else{
      fs.readFile("./views/404.html", "Utf8", (err,data)=>{
        if (err) throw err;
    
      res.writeHead(400, { 'Content-Type': 'text/html' });
            res.end(data)
            });
          }
      });
    
  ;

  
  server.listen(3000, "localhost", () => {
    console.log("server is listening")
  });

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


// function printFactor(number){
//     if(number < 1){
//         console.log("invalid value")
//     }
//     let factor = []
//     for(let i = 0; i <= number; i++){
        
//         if(number%i == 0){
//             factor.push(i)
//         }   
//     }
//     return factor
// }   

// console.log(printFactor(56))

// function sumFirstAndLastDigit(number){
//     let n = number.toString();
//     sum = 0
//     for(let i = 0; i<n.length; i++){

//         if(n.length==1){
//             return n[0] * 2
//         }
//         else if(n < 0){
//             return -1
//         }
//         sum = parseInt(n[0]) + parseInt(n[n.length-1]) 

//     }
//     return sum
    
// }

// console.log(sumFirstAndLastDigit(598))

// function evenDigit(number){

//     let arrN=number.toString()
//     let even = 0
//     for( let i = 0; i<arrN.length; i++ ){
//         if( arrN[i] % 2 == 0){
//             even = even + parseInt(arrN[i])
//         }
//     }
//     return even
// }

// console.log(evenDigit(1234567894856))

// function reverse(value){
//     let str = value.toString()
//     let t = ""
//     for( let i = str.length-1; i >= 0; i--){
//         t = t + str[i]
//     }
//     return t
// }

// let number = [1,2,3,4]
// console.log(os.platform())
// console.log(fs.Dir)
// module.exports = {
//     firstValue:number, secondValue: reverse
// }
// fs.writeFile('C:/Users/oluwatomilola.atura/Downloads/Node/internalfile.txt','hi guy, I am very happy to be doing this!',(err) => {
//     if (err) throw err;
//     console.log("success")
// } )
// fs.writeFile('C:/Users/oluwatomilola.atura/Downloads/Node/internalfile.txt','hi guy, I am very happy to be doing this!',(err) => {
//     if (err) throw err;
//     console.log("success")
// })

// console.log("hello")

// fs.readFile("C:/Users/oluwatomilola.atura/Downloads/Node/internalfile.txt", "Utf8", (err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// const folderName = 'test';

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//     console.log("created")
//   }
// } catch (err) {
//   console.error(err);
// }



// const fs = require('node:fs');
// const folderPath = 'text/tomi.txt';
// fs.readdirSync(folderPath);

// const dir = 'test';

// fs.rmdir(dir, err => {
//   if (err) {
//     throw err;
//   }

//   console.log(`${dir} is deleted!`);
// });

// try {
//     fs.rmdirSync(dir);
//         console.log("File removed successfully")
// } catch (error) {
//     console.log("unable to delete")
// }

// const content = 'trying somrthing else';

// fs.appendFile('file.log', content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done")
//   }
// });
// console.log(uuidv4())

