

  appKey = "599a2d7927259901607333dce7693505"

 
// defining variables used for the recipe selection page
  
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
    var recipe1URL;
    var recipe2URL;
    var recipe3URL;
    var v;

// retrieving values stored by home page listeners for use on this page  

    foodSearch = localStorage.foodSearch;
    cuisineChoice = localStorage.cuisineChoice;
    foodChoice = localStorage.foodChoice;
    healthChoice = localStorage.healthChoice;
   
    
// ajax call to call the edamam api to retrieve recipies based upon input parameters from home page 

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
console.log('-----response--->',response);

// randomizing the displayed recipe choices from the 10 returned by the api

v = Math.floor(Math.random() * 6);

foodResponse = response;
Option1Name = response.hits[0+v].recipe.label;
Option2Name = response.hits[1+v].recipe.label;
Option3Name = response.hits[2+v].recipe.label;
Option1Image = "<img src ='"+ response.hits[0+v].recipe.image + "'</img>";
Option2Image = "<img src ='"+ response.hits[1+v].recipe.image + "'</img>";
Option3Image = "<img src ='"+ response.hits[2+v].recipe.image + "'</img>";
recipe1URL = "<a href='" + foodResponse.hits[0+v].recipe.shareAs + "'>Recipe link</a>";
recipe2URL = "<a href='" + foodResponse.hits[1+v].recipe.shareAs + "'>Recipe link</a>";
recipe3URL = "<a href='" + foodResponse.hits[2+v].recipe.shareAs + "'>Recipe link</a>";

// appending returned choices to recipe Options page 

$('.option1title').append(Option1Name);
$('.option1title').append(Option1Image);
$('.option2title').append(Option2Name);
$('.option2title').append(Option2Image);
$('.option3title').append(Option3Name);
$('.option3title').append(Option3Image);



});


// listeners for save buttons under each recipe choice


$(document).ready(function () {

  $("#saveoption1").on("click", function () {
      console.log("hello");
      localStorage.ingredientLines = foodResponse.hits[0+v].recipe.ingredientLines;
      localStorage.image = "<img src ='"+ foodResponse.hits[0+v].recipe.image + "'</img>"
      localStorage.label = foodResponse.hits[0+v].recipe.label;
  });

  $("#saveoption2").on("click", function () {
    console.log("hello");
    localStorage.ingredientLines = foodResponse.hits[1+v].recipe.ingredientLines;
    localStorage.image = "<img src ='"+ foodResponse.hits[1+v].recipe.image + "'</img>"
    localStorage.label = foodResponse.hits[1+v].recipe.label;
  });

  $("#saveoption3").on("click", function () {
    console.log("hello");
    localStorage.ingredientLines = foodResponse.hits[2+v].recipe.ingredientLines;
    localStorage.image = "<img src ='"+ foodResponse.hits[2+v].recipe.image + "'</img>"
    localStorage.label = foodResponse.hits[2+v].recipe.label;
  });

});



// function to render menue on the menu page

function renderMenu(){

foodLabel = localStorage.label;
var recipeInfo = localStorage.getItem('ingredientLines');
recipeImage = localStorage.image;
wineTitle = localStorage.wineChoiceTitle;
wineURL = localStorage.wineURL;
wineImage = localStorage.wineChoiceImg;
wineDesc = localStorage.wineChoiceDesc;

var recipeInfoArray = recipeInfo.split(',')

console.log('recipeInfo--->', recipeInfoArray)


  $('#dinnername').append(foodLabel);
  $('#imagefromrecipe').append(recipeImage);

  recipeInfoArray.forEach(currentValue => {
    $('#recipeinfo').append(`<li class='recipe-info-list-item' >${currentValue}</li>`)
  })
  //$('#recipeinfo').append(recipeInfo);
  $('#winename').append(wineTitle);
  $('#wineimage').append(wineURL);
  $('#wineinfo').append(wineDesc);


};


