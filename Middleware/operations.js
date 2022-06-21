const parameters = require('./parameters.json');
const Middleware = require('./middleware.js');

const squareParameters = Object.values(parameters[0]).map( x => x ** 2);
const cubeParameters = Object.values(parameters[1]).map( x => x ** 3);
const divisionParameters = Object.values(parameters[2]).map( x => x / 2);

const addiction = ( a, b ) => { return a + b }
const subtraction = ( a, b ) => { return a - b }
const multiplication = ( a, b ) => { return a * b }

const middleware = new Middleware();

middleware.use( console.log( `Sum of values ( ${ Object.values(parameters[0]) } ) is ${ addiction( parameters[0].a, parameters[0].b ) }`));
middleware.use( console.log( `Subtraction of values ( ${ Object.values(parameters[1]) } ) is ${ subtraction( parameters[1].a, parameters[1].b ) }`));
middleware.use( console.log( `Multiplication of values ( ${ Object.values(parameters[2]) } ) is ${ multiplication( parameters[2].a, parameters[2].b ) }`));

middleware.use( console.log( `Sum of square of values ( ${ squareParameters } ) is ${ addiction( squareParameters[0], squareParameters[1] ) }`));
middleware.use( console.log( `Subtraction of cube of values ( ${ cubeParameters } ) is ${ subtraction( cubeParameters[0], cubeParameters[1] ) }`));
middleware.use( console.log( `Multiplication of values divided for 2 ( ${ divisionParameters } ) is ${ multiplication( divisionParameters[0], divisionParameters[1] ) }`));

middleware.invokePipeline()