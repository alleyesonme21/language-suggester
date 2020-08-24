$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let instrumentInput = $("input:radio[name=instrument]:checked").val();
    let sportInput = $("input:radio[name=sport]:checked").val();
    let seasonInput = $("input:radio[name=season]:checked").val();
    let languageInput = $("input:radio[name=language]:checked").val();
    let fruitInput = $("input:radio[name=fruit]:checked").val();
      
    if (sportInput === "basket" && seasonInput === "summer") { 
      $("#cSharp").show()
      $("#python").hide()
      $("#javascript").hide();
    } else if (instrumentInput === "piano" && sportInput === "soccer" || seasonInput === "spring" && languageInput === "language3" && fruitInput === "mango") {
      $("#javascript").show()
      $("#python").hide()
      $("#cSharp").hide();
    } else {
      $("#python").show();
      $("#javascript").hide()
      $("#cSharp").hide();
    }
  })
})