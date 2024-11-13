let a=100;
// console.log(a);
setTimeout(() =>{

console.log(a);

setTimeout(() => {
  console.log(b+"Ntr2 second time but from inner setTimout");
   }, 5000);

},10000)


console.log("durga");
console.log("bhavani");


let b="NTR"

setTimeout(() =>{
console.log(b+ " NTr1 is 5sec seTImeout");
},6000)