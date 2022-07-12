const conversions = require( './currency_conversions.json' );

function converseInEur( product ) {
    const keys = Object.keys( conversions )
    let key = keys.find( el => el.slice(0, 3) == product.currency )
    //console.log( conversions[key] )
        
    let priceInEur = product.price * conversions[key]
    console.log ( `${ product.name } has a price of ${ Math.round( priceInEur * 100 ) / 100 } EUR`) 
}

module.exports = { converseInEur }