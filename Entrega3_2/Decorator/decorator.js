const conversions = require( './currency_conversions.json' );

function converseInEur( product ) {
    const keys = Object.keys( conversions );
    let key = keys.find( el => el.slice(0, 3) == product.currency );
    //console.log( conversions.key, key, conversions.CAD_EUR, conversions[key] )
        
    let priceInEur = product.price * conversions[key];

    product.priceInEur = Math.round( priceInEur * 100 ) / 100;  // This line add a new key, priceInEur, to product object
    console.log( product );
}

module.exports = { converseInEur }