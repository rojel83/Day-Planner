//Create variables for moment and date display.
var current = moment();
var currentDate = current.format("MM DD YYYY ");

//Set date inside jumbotron class.
$("#currentDay").text("Today's Date: " + currentDate);

//make a function to execute the JS code.
$(document).ready(function() {

    //create a for loop to retrieve and display task from local satorage.
    for (let i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).sibilings("texarea").text(localStorage.getItem($(hourArr[i]).attr(data - time)))
    }

});