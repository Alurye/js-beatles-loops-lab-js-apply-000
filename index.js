const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
const Beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    Beatles.push[musicians[i].toString() + " plays " + instruments[i].toString];
  }
  return Beatles;
}
