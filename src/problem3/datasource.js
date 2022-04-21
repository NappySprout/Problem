// your code here:
//import fetch from 'node-fetch';
//change to mjs to use import if running from node
class Datasource {
    static endpoint = "https://static.ngnrs.io/test/prices"
    constructor() {
        //empty constructor
    }
    async getPrices() { 
        /**
         * @returns promise with list of prices where each price has the attribute
         * buy: int in cents, 
         * sell: int in cents, 
         * id: int, 
         * pair: tradepair String of length 6, 
         * timestamp: time stamp string
         * with 2 additional methods
         * double mid(): mid of buy and sell in dollars
         * String quote(): String of length 3 of the quote currency only
         */
        let result = await (await fetch(Datasource.endpoint)).json();
        result = result.data.prices
        return result.map(price => {
            return {
                ...price,
                mid : () => (price.buy + price.sell)/200,
                quote:() => price.pair.substring(3)
            }
        })
    }

}

let ds = new Datasource()

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });