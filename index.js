const names = [names]

function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }
  
  const messages = writeCards(names);
  
  console.log(messages)

function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)
    }
    return countDown
}
