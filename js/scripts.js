function pigLatin(phrase) {
  var vowelFirst = /\b[aeiou]/ig;
  var consonantFirst = /\b[^aeiou ]+/ig;
  var quCase= /\b[a-z]{0,1}qu/ig;
  var yCase = /\b[^aeiou ]{1,2}y/ig;
  var toFirstY = /\b[^y]+/ig;
  var result = [];
  var words = phrase.split(" ");

  words.forEach(function(word) {
    if(word.match(quCase)) {
      result.push(word.replace(quCase, '') + word.match(quCase) + 'ay');
    } else if(word.match(yCase)) {
      result.push(word.replace(toFirstY, '') + word.match(toFirstY) + 'ay');
    } else if(word.match(vowelFirst)) {
      result.push(word + 'ay');
    } else if(word.match(consonantFirst)) {
      result.push(word.replace(consonantFirst, '') + word.match(consonantFirst) + 'ay');
    }
  })

  return result.join(" ");
}


$(document).ready(function() {
  $('form').submit(function(event) {
    var phraseToTranslate = $("input#phrase-to-translate").val();

    $(".result").text(pigLatin(phraseToTranslate));
    $('#piggy').show();

    event.preventDefault();
  });
});
