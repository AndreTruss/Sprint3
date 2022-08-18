const data = require('./parameters.json');
const Middleware = require('./middleware');
const Calculator = require('./operations');

const calculator = new Calculator(); 
console.log(`Sum (${data.a}, ${data.b}) is: ${calculator.sum( data )}`)
console.log(`Subtraction (${data.a}, ${data.b}) is: ${calculator.subtraction( data )}`)
console.log(`Multiplication (${data.a}, ${data.b}) is: ${calculator.multiplication( data )}\n`)

const app = new Middleware();

app.use(( data, next ) => {
  data.a **= 2;
  data.b **= 2;
  console.log(`Sum of Square (${data.a}, ${data.b}) is: ${calculator.sum( data )}`);
  next();    
})

app.use(( data, next ) => {
  data.a **= 3;
  data.b **= 3;
  console.log(`Subtraction of Cube (${data.a}, ${data.b}) is: ${calculator.subtraction( data )}`);
  next();
})

app.use(( data, next ) => {
  data.a /= 2;
  data.b /= 2;
  console.log(`Multiplication of Division by 2 (${data.a}, ${data.b}) is: ${calculator.multiplication( data )}\n`);
  
})

app.execute( data )