

var getProverb = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://eda-te-reo.herokuapp.com/api/proverbs", false);
  xhr.send();

var proverb = xhr.response;
var proverbParsed = JSON.parse(proverb);
var maori = proverbParsed.source;
var english = proverbParsed.translation;
document.getElementById("maori").innerHTML = maori.toString();
document.getElementById("english").innerHTML = english.toString();
}


$("#get-proverb-button").on("click", function() {
  getProverb();
});
