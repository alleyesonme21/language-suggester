$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let instrumentInput = $("input:radio[name=instrument]:checked").val();
    let sportInput = $("input:radio[name=sport]:checked").val();
    let seasonInput = $("input:radio[name=season]:checked").val();
    let languageInput = $("input:radio[name=language]:checked").val();
    let fruitInput = $("input:radio[name=fruit]:checked").val();
  
    if (instrumentInput + languageInput === true || sportInput === "basket" && seasonInput === "summer" && fruitInput === "avocado") {
      $("#cSharp").show()
      $("#python").hide()
      $("#javascript").hide();
    } else if (instrumentInput === "piano" && sportInput === "soccer" || seasonInput === "spring" && languageInput === "language3" && fruitInput === "apple") {
      $("#javascript").show()
      $("#python").hide()
      $("#cSharp").hide();
    } else if (instrumentInput === "bass" && sportInput === "football" && seasonInput === "winter" && languageInput === "language2" && fruitInput === "apple") {
      $("#python").show()
      $("#cSharp").hide();
      $("#javascript").hide();
    } else if (instrumentInput === "bass" && sportInput === "football" && seasonInput === "spring" && languageInput === "language2" && fruitInput === "apple") {
      $("#python").show()
      $("#cSharp").hide();
      $("#javascript").hide();
    } else {
      alert("Oops, Try again!")
    }
  })
})