// const button = document.querySelector("button")! 
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// let friuit =['aa','bb',45]
// friuit.push(44)

// let b : number | string
// var c : number | string
// let a : (string | number)[] = []
// let ob : object
// let obj : {
//   name : string,
//   age : number,
//   adult : boolean
// }


let a : any[] = []
let b : any

let myFunc: Function

myFunc = (a: string, b: string, c?: string) =>{
  console.log(`Hello ${a} ${b} ${c}`)
}
