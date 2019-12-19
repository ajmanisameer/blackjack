var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = [];
var shuffle = function () {

    for (i = 0; i < values.length; i++) {
        for (j = 0; j < suits.length; j++) {
            var weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == 'A')
                weight = 11;
            var card = { Value: values[i], Suit: suits[j], Weight: weight }
            deck.push(card);
        }

    }
    // console.log(deck)
};

shuffle();





function Player(name, chips) {
    this.name = name;
    this.chips = chips;
    
    points = 0;
}

Player.prototype.hand = function () {
    var inhand = new Array();

    for (i = 0; i < 2; i++) {
        var card = deck.pop();
        inhand.push(card)
    }
    console.log(inhand)
}

 const player = new Player('Sameer', '1000');

console.log(player.hand())



