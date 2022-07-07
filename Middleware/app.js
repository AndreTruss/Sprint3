const data = require('./parameters.json');
const Middleware = require('./middleware');
const { addiction, subtraction, multiplication } = require('./operations')

const app = new Middleware();

app.use( 
  console.log(`First middleware: ${addiction( data[0].a, data[0].b ) ** 2}`)
 );

app.use( 
  console.log(`Second middleware: ${subtraction( data[1].a, data[1].b ) ** 3}`)
 );

app.use( 
  console.log(`Third middleware: ${multiplication( data[2].a, data[2].b ) / 2}`)
);

app.invokePipeline()