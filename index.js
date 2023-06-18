const names = ["Ada", "Brendan", "Ali"];

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
}

writeCards(names);

function countDown(number) {
    let n = number;
    while (n >= 0) {
      console.log(n--);
    }
}

countDown(10)