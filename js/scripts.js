$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let instrumentInput = $("input:radio[name=instrument]:checked").val();
    // console.log(instrumentInput)
    let sportInput = $("input:radio[name=sport]:checked").val();
    // console.log(sportInput)
    let seasonInput = $("input:radio[name=season]:checked").val();
    // console.log(seasonInput)
    let languageInput = $("input:radio[name=language]:checked").val();
    // console.log(languageInput)
    let fruitInput = $("input:radio[name=fruit]:checked").val();
    // console.log(fruitInput)
    if (instrumentInput + languageInput === true || sportInput === "basket" && seasonInput === "summer" && fruitInput === "avocado") {
      $("#cSharp").show()
    } else if (instrumentInput === "piano" && sportInput === "soccer" || seasonInput === "spring" && languageInput === "language3" && fruitInput === "apple") {
     $("#javascript").show()
    } else if (instrumentInput === "bass" && sportInput === "football" && seasonInput === "winter" && languageInput === "language2" && fruitInput === "apple") {
      $("#python").show()
    } else if (instrumentInput === "bass" && sportInput === "football" && seasonInput === "spring" && languageInput === "language2" && fruitInput === "apple") {
      $("#python").show()
    } else {
      alert("Oops, we missed something!")
    }
  })
})