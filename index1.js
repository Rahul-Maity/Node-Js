const mathLibrary = require('./lib/math');
const quoteLibrary = require('./lib/quotes/index');
const app={}
app.config = {
    betTime: 1000,
};
app.printQuote = function printQuote() {
    const allQuotes = quoteLibrary.allQuotes();
    const length = allQuotes.length;
    const getIndex = mathLibrary.getRandomNumber(1, length );
    const selectedQuote = allQuotes[getIndex - 1];
    console.log(selectedQuote);
}
app.infiniteLoop = function infiniteLoop() {
    setInterval(app.printQuote, app.config.betTime);
};
app.infiniteLoop();