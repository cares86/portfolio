var letters = $("P");
var letterColor = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

for (var i = 0; i < letters.length; i++) {
letters[i].onmouseover = function() {
    this.style.color = letterColor[letters.index(this)];
  }

letters[i].onmouseout = function() {
this.style.color = "black"; };
}
