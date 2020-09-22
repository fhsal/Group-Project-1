

{/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>; */}
    //   <!-- <script src=wineScript></script> -->


// setting up listener to the submit (main page) and save wine (wine page) buttons

$(document).ready(function () {

    $("#submitMain").on("click", function () {
        console.log($('#input1').val());
        console.log($('#input2').val());
        console.log($('#input3').val());
        cuisineChoice = $('#input1').val();
        foodChoice = $('#input2').val();
        localStorage.cuisineChoice = cuisineChoice;
        localStorage.foodChoice = foodChoice;
        localStorage.foodSearch = cuisineChoice +"&"+ foodChoice;
        location.href = "./htmlfiles/selectarecipe.html";

    });

    $("#switchWine").on("click", function () {
        foodChoice = localStorage.foodChoice;
        console.log("Type of food: " + foodChoice);
        $('#wineinfo').text("");
        $('#winename').text("");
        $('.winedescription').text("");
        // $('.winedescription').text(wineChoiceDesc);
        $('.pairingtitle').text("");
        $('.winetitle').text("");
        $('.ratingTitle').text("");
        $('.pricetitle').text("");
        
        getWineParing (); 
        
    });

    $("#saveWine").on("click", function () {
        localStorage.wineURL = wineURL;
        localStorage.wineChoiceDesc = wineChoiceDesc;
        localStorage.wineChoiceTitle = wineChoiceTitle;
        localStorage.wineChoiceImg = wineChoiceImg;
    });

    
    // $("#executeSearch").on("click", function () {
    //     console.log($('#input1').val());
    //     console.log($('#input2').val());
    //     console.log($('#input3').val());


    //     // cityState = $('#searchCity').val();
    //     // queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    //     //             "q=" + cityState + "&units=imperial&appid=" + APIKey;
    //     // console.log(queryURL);
    //     // getCurrentWeather();
    //     // getForecast();
    //     // renderCities();

    // });
  });





   var wineAPIKey = "77ee9b5219954db79536f73ad6175916";
   var foodChoice = input1; // Cuisine input from mainhtml page 
   var winePair1;
   var winePair2;
   var winePair3;
   var pairingText;
   var foodResponse;
   var wineResponse;
   var rating;
   var price; 




   function getWineParing () {

    wineURL ="https://api.spoonacular.com/food/wine/pairing?food=" + foodChoice+ "&apiKey=" +wineAPIKey; 

        $.ajax({
        url: wineURL,
        method: "GET"
        })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {

            // Log the queryURL
            console.log(response);
            wineResponse = response; 
            winePair1 = response.pairedWines[0];
            winePair2 = response.pairedWines[1];
            winePair3 = response.pairedWines[2];
            pairingText = response.pairingText;
            wineChoiceTitle = wineResponse.productMatches[0].title;
            wineChoiceDesc = wineResponse.productMatches[0].description;
            wineChoiceImg = wineResponse.productMatches[0].imageUrl;
            wineURL = "<img src ='"+ wineChoiceImg + "'</img>";
            rating = Math.round((wineResponse.productMatches[0].averageRating)*100);  
            price = wineResponse.productMatches[0].price;  

            console.log(winePair1);
            console.log(winePair2);
            console.log(winePair3);
            console.log(pairingText);

            // var wineDiv = $("<div class='wine'>");

// Inserting the pairing recommendations into the page

            // $('#wineDiv').text(winePair1);
            $('#wineinfo').append(wineURL);
            $('#wineinfo').append('<br>');
            $('#wineinfo').append(wineChoiceDesc);
            $('#winename').append(wineChoiceTitle);
            $('.winedescription').text(pairingText);
            // $('.winedescription').text(wineChoiceDesc);
            $('.pairingtitle').append("To be paired with:     " + foodChoice);
            $('.winetitle').text(winePair1);
            $('.ratingTitle').append("Rating:     " + rating);
            $('.pricetitle').append("Price:     " + price);
            
      })
    };  

function saveWine() {
    localStorage.wineURL = wineURL;
    localStorage.wineChoiceDesc = wineChoiceDesc;
    localStorage.wineChoiceTitle = wineChoiceTitle;
    localStorage.wineChoiceImg = wineChoiceImg;
}






