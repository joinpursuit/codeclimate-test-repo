const bar = 7;
bar = 7.1;
bloop = 47;
let baz = 12;

let doBloop = (params) => {
console.log(bloop)
                 return 'hello'
}

function helloWorld(greeting) {
  let foo;
  let output = "";
  if(greeting) {
output = `Hello and ${greeting}`;
  }else{
  output = `Hello!`;
  }

  return output;
}

let myVar = { hello: 42 }

console.log(bar);
console.log(helloWorld());
console.log(helloWorld("YO yo yOO!!"));