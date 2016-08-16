var puzzleSentence = function(sentence) {
  var letterArray = sentence.split("");
  for (var i = 0; i < letterArray.length; i +=1) {
    if (letterArray[i] === "a" || letterArray[i] === "e" || letterArray[i] === "i" || letterArray[i] === "o" || letterArray[i] === "u") {
      letterArray.splice(i, 1, "-");
      var puzzledSentence = letterArray.join("");
    }
  };
  return puzzledSentence;
};






$(document).ready(function(){
  $("#blanks form").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var outPut = puzzleSentence(userInput);
    $("#puzzled-sentence").empty().append(outPut);
    $("#title").hide();
    $("#puzzled-title").show();
    $("#blanks").hide();
  });
});

// var string = "Believe you can and you're halfway there. Theodore Roosevelt"
// for (var i = 0; i < string.length; i +=1) {
// console.log(string[i]);
// }
