const datas = require('./parameters.json')
const Middleware = require('./middleware')
const Calculator = require('./operations')

const calculator = new Calculator() 

const app = new Middleware( calculator )

function square( data, next ) {
  data.a = data.a ** 2
  data.b = data.b ** 2
  console.log(`Square result: ${JSON.stringify( data )}`)
      
}

function cube( data, next ) {
  data.a = data.a ** 3
  data.b = data.b ** 3
  console.log(`Cube result: ${JSON.stringify( data )}`)
  
}

function divide( data, next ) {
  data.a = data.a / 2
  data.b = data.b / 2
  console.log(`Divide result: ${JSON.stringify( data )}\n`)
  
}

app.use( square )
app.use( cube )
app.use( divide )

app.execute( datas )