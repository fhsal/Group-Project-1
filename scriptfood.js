

  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

  appKey = "599a2d7927259901607333dce7693505"

  //   https://api.edamam.com/search?q=indian&app_id=783735ac&
  //   app_key=599a2d7927259901607333dce7693505&from=0&to=3&calories=591-722&health=alcohol-free

    foodURL ="https://api.edamam.com/search?q=" + foodChoice + "&app_id=783735ac&app_key="+ appKey;

    //&from=0&to=3&calories=591-722&health=alcohol-free

    var foodLabel1;
    var foodLabel2;
    var foodLabel3;
    var labelText;
    var foodDiv;
    var ingredientLines;
    var mealImage;
    var foodResponse;

$.ajax({
  url: foodURL,
  method: "GET"
})
      // We store all of the retrieved data inside of an object called "response"
.then(function(response) {
// Meal #1 response;
console.log(foodURL)
console.log(response.hits)
$('#foodDiv').append("recipe:IMAGE " + response.hits[0].recipe.image);
mealImage = "<img src ='"+ response.hits[0].recipe.image + "'</img>";
$('#foodDiv').append(mealImage);
$('#foodDiv').append("recipe:LABEL " + response.hits[0].recipe.label);
$('#foodDiv').append("recipe:INGERD " + response.hits[0].recipe.ingredientLines);
  var ingreds, i, x = "";
  for (i = 0; i < ingredientLines.length; i++) {
  x += ingredientLines[i] + "<br>";
  }
    document.getElementById("demo").innerHTML = x
          
$('#foodDiv').append("recipe:HEALTH " + response.hits[0].recipe.healthLabels);
  foodResponse = response;
  var health, i, x = "";
  for (i = 0; i < healthLabels.length; i++) {
  x += healthLabels[i] + "<br>";
  }
  document.getElementById("demo").innerHTML = x

});
      
$.ajax({
url: foodURL,
method: "GET"
})      
      
.then(function(response) {
//  Meal #2 response;
console.log(foodURL)
console.log(response.hits)
$('#foodDiv').append("recipe:IMAGE " + response.hits[1].recipe.image);
mealImage = "<img src ='"+ response.hits[1].recipe.image + "'</img>";
$('#foodDiv').append(mealImage);
$('#foodDiv').append("recipe:LABEL " + response.hits[1].recipe.label);
$('#foodDiv').append("recipe:INGERD " + response.hits[1].recipe.ingredientLines);
  var ingreds, i, x = "";
  for (i = 0; i < ingredientLines.length; i++) {
  x += ingredientLines[i] + "<br>";
  }
    document.getElementById("demo").innerHTML = x
          
$('#foodDiv').append("recipe:HEALTH " + response.hits[1].recipe.healthLabels);
foodResponse = response;
  var health, i, x = "";
  for (i = 0; i < healthLabels.length; i++) {
  x += healthLabels[i] + "<br>";
  }
    document.getElementById("demo").innerHTML = x

          
});  

$.ajax({
url: foodURL,
method: "GET"
})      
      
.then(function(response) {
//  Meal #2 response;
console.log(foodURL)
console.log(response.hits)
$('#foodDiv').append("recipe:IMAGE " + response.hits[2].recipe.image);
mealImage = "<img src ='"+ response.hits[2].recipe.image + "'</img>";
$('#foodDiv').append(mealImage);
$('#foodDiv').append("recipe:LABEL " + response.hits[2].recipe.label);
$('#foodDiv').append("recipe:INGERD " + response.hits[2].recipe.ingredientLines);
  var ingreds, i, x = "";
  for (i = 0; i < ingredientLines.length; i++) {
  x += ingredientLines[i] + "<br>";
  }
    document.getElementById("demo").innerHTML = x
          
$('#foodDiv').append("recipe:HEALTH " + response.hits[2].recipe.healthLabels);
foodResponse = response;
  var health, i, x = "";
  for (i = 0; i < healthLabels.length; i++) {
  x += healthLabels[i] + "<br>";
  }
    document.getElementById("demo").innerHTML = x

          
});