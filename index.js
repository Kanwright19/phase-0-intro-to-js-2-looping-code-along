// // Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }

  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);

const cards = (["Happy", "Waterboy", "Adam"]);
    [
        "Thank you, Happy, for the wonderful surprise gift!",
        "Thank you, Waterboy, for the wonderful surprise gift!",
        "Thank you, Adam, for the wonderful surprise gift",
    ];

function writeCards(cards) {
  let messages = []
  for (let i = 0; i < cards.length; i++) {
    console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
  }
  return messages;
}


function countDown(start) {
    while (start >= 0 ) {
       console.log(start --);
    }
};

countDown(10);

