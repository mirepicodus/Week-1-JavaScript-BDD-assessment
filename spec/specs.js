describe("pigLatin", function() {
  it('words starting with vowel should add AY to the end', function() {
    pigLatin('apple').should.equal('appleay');
  });
  it('words starting with one consonant should move consonant to end and add ay', function() {
    pigLatin('rails').should.equal('ailsray');
  });
  it('words starting with multiple consonant should move starting consonant to the end and add ay', function() {
    pigLatin('phone').should.equal('onephay');
  });
  it('words starting with qu move u with the q to end and add ay', function() {
    pigLatin('quick').should.equal('ickquay');
  });
  it('word with qu at 2nd position move all letter up to u to end and add ay ', function() {
    pigLatin('squirrel').should.equal('irrelsquay');
  });
  it('word contains a y as a vowel treat like a vowel', function(){
    pigLatin('psychology').should.equal('ychologypsay');
  });
  it('when the starts with y should be treated as consonant', function() {
    pigLatin('yell').should.equal('ellyay');
  });
  it('verify y in third position boundary is correct', function(){
    pigLatin('day').should.equal('ayday');
  });
  it('translate pig Latin over multiple words', function(){
    pigLatin('I pig latin day').should.equal('Iay igpay atinlay ayday');
  });
});
