var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
var Beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    Beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return Beatles;
}

function johnLennonFacts(facts){
  const LennonFacts = [];
  i = 0;
   while (i < facts.length) {
     LennonFacts.push(facts[i] + "!!!");
     i++;
   }
   return LennonFacts;
}
