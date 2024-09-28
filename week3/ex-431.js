let langInput;
function helloWorld (langInput) {
    langInput = prompt("Please, enter a two letter language symbol, either 'en', 'es', 'no', 'de': ");
  if (langInput.length < 2 || langInput.length > 2 ) {
     alert("Hey, what are you doing? Enter only two letter text, e.g 'en'");
  } else {
      if (langInput === "es") {
          return "Hola mundo";
      } else if (langInput === "de") {
          return "Hallo Welt";
      } else if (langInput === "no") {
          return "Hei Verden";
      } else {
          return "Hello World";
      }
  }
}
console.log(helloWorld(langInput));