const fs = require('fs');
const quotes = {};
quotes.allQuotes = function allQuotes() {
    const filecontents = fs.readFileSync(`${__dirname}/quote.txt`,'utf-8');
    const arrayOfQuotes = filecontents.split(/\r?\n/);
    return arrayOfQuotes;

}
module.exports = quotes;
