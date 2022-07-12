const Product = require('./product')
const { converseInEur } = require('./decorator')

const product1 = new Product( 'Computer', 1240, 'USD' )
const product2 = new Product( 'Camera', 61000, 'JPY' )
const product3 = new Product( 'T-shirt', 33, 'GBP' )

converseInEur( product1 )
converseInEur( product2 ) 
converseInEur( product3 )