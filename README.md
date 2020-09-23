# Group-Project-1

Project title:  Dinner with Developers,    Project description: Meal Planning 

Team:  Hannibal Lecter

Team Members: 
    - Frank Salvo
    - Juliette Elyse
    - Mike Kolek

https://fhsal.github.io/Group-Project-1/index.html

Summary: this is a dinner planning app which allows a user to search for recipies and wine parings based upon a choice of cuisine, food type, dietary restrictions and wine pariing based upon either cuisine or food type.   The flow is based upon the user being presented with a home page which allows input of the menu criteria.  Upon selecting submit the app calls Edamam api and displays three food choices, of which the user should save one.   After saving the food choice one can navigate to the wine paring page and choose the wine first suggested based upon cuisine or switch to food-type, as many times as desired until a good pairing comes up.   The desired wine pairing should then be saved, after which the user can navigate to the menu page where their combined food + wine meal choices are displayed. 

Functionally, the app is made up of several different components, functions and pages using the edamam and sponacular api's, fonts from Bebas and css from Bulma, they are:

(1) Upon loading the app via index.html the user is presented with three inputs and a submit button.  The first input is for cuisine, the second for type-of-food and the third is a pull-down choice for dietary restrictions.  Upon submit, a listener in wineScript.js captures and stores the user inputs and calls the page selectarecipe.html which fires the edamam api call using the selection critera. 

(2) After submit, the user is presented with the selectarecipe.html page which renders the images and descriptions for three of the meal options returned by the api.  The user can then save one of the choices and in doing so that is saved to local storage via listeners for those save buttons below each displayed choice.    At this point in time the user can either go back to the home page and make another search or move forward to the wine paring page. 

(3) When the user navigates to the wine pairing page (wine2.html) the api call to sponacular is fired using the saved cuisine choice from the home page, retrieving that value from local storage.  The user is presented with the wine title, description, image of either the label or bottle (FYI - some results don't have an image) in addition to paring, rating and price inforamation on the right.   The user can switch the pairing to type-of-food via the nav bar choice which appears on this page.  The user can cycle as many times as they wish through different wine parings via the purple highlighted items on the nav bar.  Once a good bottle is displayed the user can save that choice, which is put into local storage. 

(4) The combined food and wine choices are displayed on the menu.html page and when the user navigates there the meal and wine choices are retreived from local storage and displayed.  If another meal combination is desired then the user can navigate back to home to choose an entree or wine to do another paring until they find what they wish. 

Buon Appetit ! 

Comments are in the code as well. A screenshot is below:

![img](https://github.com/mkolek1015/Group-Project-1/blob/fhsalvo2/images/DinnerWithDevelopers-screenshot.jpg)

Future Developments: As we continue to update this site with more features, we plan to add functionality that allows the user to save and retrieve multiple sets of recipes and menus through use of local storage across different pages. This is currently ‘greyed-out’ on the navbar feature. 
Along with this, we had a vision of being able to give the user an option to pick the style of their menu to fit the theme of their event. We would also like to add more food choices such as lunch, soups, salads, and desserts. We could even go the route of making a pre-fix menu for a more formal event. 
Buon Appetit ! 


## User Story

```
AS a potential party host
I WANT to be able to decide on a menu for my party.
SO THAT I can plan a grocery trip to purchase necessary foods as well as cook said recipes, AND present a menu to my guests.

```

## Acceptance Criteria

```
GIVEN I need to find a main course for a party I'm hosting.
WHEN I search based about cuisine types, nutritional facts, etc.
THEN I am presented a wide variety of meal options numbering no more then 10.
WHEN I select a meal choice.
THEN I am presented with the ingredients break down (shopping list)
WHEN I select a meal choice 
THEN I am also paired with a drink selection.


