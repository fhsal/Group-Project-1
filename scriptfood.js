

  appKey = "599a2d7927259901607333dce7693505"

  //   https://api.edamam.com/search?q=indian&app_id=783735ac&
  //   app_key=599a2d7927259901607333dce7693505&from=0&to=3&calories=591-722&health=alcohol-free

    

    var foodURL;
    var foodLabel1;
    var foodLabel2;
    var foodLabel3;
    var labelText;
    var foodDiv;
    var ingredientLines;
    var mealImage;
    var foodResponse;
    var Option1Image;
    var Option2Image;
    var Option3Image;
    var Option1Name;
    var Option2Name;
    var Option3Name;
    var choiceURL;
    var choiceIndex;

    foodSearch = localStorage.foodSearch;
    cuisineChoice = localStorage.cuisineChoice;
    foodChoice = localStorage.foodChoice;
    healthChoice = localStorage.healthChoice;
    

  foodURL ="https://api.edamam.com/search?q=" + foodChoice + "&xapp_id=783735ac&app_key=$"+ appKey + "&cuisineType=" +cuisineChoice + "&mealType=dinner"+"&Health="+healthChoice;

$.ajax({
  url: foodURL,
  method: "GET"
})
      // We store all of the retrieved data inside of an object called "response"
.then(function(response) {
// Meal #1 response;
console.log(foodURL);
console.log(response.hits);
foodResponse = response;
Option1Name = response.hits[0].recipe.label;
Option2Name = response.hits[1].recipe.label;
Option3Name = response.hits[2].recipe.label;
Option1Image = "<img src ='"+ response.hits[0].recipe.image + "'</img>";
Option2Image = "<img src ='"+ response.hits[1].recipe.image + "'</img>";
Option3Image = "<img src ='"+ response.hits[2].recipe.image + "'</img>";

$('.option1title').append(Option1Name);
$('.option1title').append(Option1Image);
$('.option2title').append(Option2Name);
$('.option2title').append(Option2Image);
$('.option3title').append(Option3Name);
$('.option3title').append(Option3Image);



// $('#foodDiv').append("recipe:IMAGE " + response.hits[0].recipe.image);
// mealImage = "<img src ='"+ response.hits[0].recipe.image + "'</img>";
// $('#foodDiv').append(mealImage);
// $('#foodDiv').append("recipe:LABEL " + response.hits[0].recipe.label);
// $('#foodDiv').append("recipe:INGERD " + response.hits[0].recipe.ingredientLines);
//   var ingreds, i, x = "";
//   for (i = 0; i < ingredientLines.length; i++) {
//   x += ingredientLines[i] + "<br>";
//   }
//     document.getElementById("demo").innerHTML = x
          
// $('#foodDiv').append("recipe:HEALTH " + response.hits[0].recipe.healthLabels);
//   foodResponse = response;
//   var health, i, x = "";
//   for (i = 0; i < healthLabels.length; i++) {
//   x += healthLabels[i] + "<br>";
//   }
//   document.getElementById("demo").innerHTML = x

});

$(document).ready(function () {

  $("#saveoption1").on("click", function () {
      console.log("hello");
      localStorage.ingredientLines = foodResponse.hits[0].recipe.ingredientLines;
      localStorage.image = "<img src ='"+ foodResponse.hits[0].recipe.image + "'</img>"
      localStorage.label = foodResponse.hits[0].recipe.label;
  });

  $("#saveoption2").on("click", function () {
    console.log("hello");
    localStorage.ingredientLines = foodResponse.hits[1].recipe.ingredientLines;
    localStorage.image = "<img src ='"+ foodResponse.hits[1].recipe.image + "'</img>"
    localStorage.label = foodResponse.hits[1].recipe.label;
  });

  $("#saveoption3").on("click", function () {
    console.log("hello");
    localStorage.ingredientLines = foodResponse.hits[2].recipe.ingredientLines;
    localStorage.image = "<img src ='"+ foodResponse.hits[2].recipe.image + "'</img>"
    localStorage.label = foodResponse.hits[2].recipe.label;
  });

});


function renderMenu(){

foodLabel = localStorage.label;
recipeInfo = localStorage.ingredientLines;
recipeImage = localStorage.image;
wineTitle = localStorage.wineChoiceTitle;
wineURL = localStorage.wineURL;
wineImage = localStorage.wineChoiceImg;
wineDesc = localStorage.wineChoiceDesc;




  $('#dinnername').append(foodLabel);
  $('#imagefromrecipe').append(recipeImage);
  $('#recipeinfo').append(recipeInfo);
  $('#winename').append(wineTitle);
  $('#wineimage').append(wineURL);
  $('#wineinfo').append(wineDesc);


};


