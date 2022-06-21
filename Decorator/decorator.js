const conversions = require( './currency_conversions.json' );

class Product {
    constructor( name, price, currency ) {
        this.name = name
        this.price = price
        this.currency = currency
    }
}

class ProductDecorate extends Product {
    constructor( name, price, currency ) {
        super( name, price, currency )
    }

    converseInEur() {
        const keys = Object.keys(conversions)
        let key = keys.find(el => el.slice(0, 3) == this.currency)
        console.log( conversions[key] )
        
        let priceInEur = this.price * conversions[key]
        console.log ( `${this.name} has a price of ${Math.round(priceInEur * 100) / 100} EUR`) 
    }
}

const product1 = new ProductDecorate( 'Computer', 1240, 'USD')
const product2 = new ProductDecorate( 'Camera', 61000, 'JPY')
const product3 = new ProductDecorate( 'T-shirt', 33, 'GBP')

product1.converseInEur()
product2.converseInEur() 
product3.converseInEur() 