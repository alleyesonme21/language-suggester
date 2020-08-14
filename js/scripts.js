$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let inputUser = $("input:radio[name=instrument]:checked").val();
    console.log(inputUser)
    let sportInput = $("input:radio[name=sport]:checked").val();
    console.log(sportInput)
    let seasonInput = $("input:radio[name=season]:checked").val();
    console.log(seasonInput)
    let languageInput = $("input:radio[name=language]:checked").val();
    console.log(languageInput)
    let fruitInput = $("input:radio[name=fruit]:checked").val();
    console.log(fruitInput)
  })
})