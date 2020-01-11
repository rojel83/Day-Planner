//Create variables for moment and date display.
var now = moment();

var currentDate = now.format("MM DD YYYY");

//Set date inside jumbotron class.
$("#currentDay").text("Today's Date: " + currentDate);

//make a function to execute the JS code.
$(document).ready(function() {
    hourArr = $('.hour').toArray()
        //create a for loop to retrieve and display task from local satorage.

    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).sibilings('texarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')))
    }

});

//adding a for loop to print the save buttons, rows and text boxes.

for (i = 0; i < 9; i++) {
    //add variables for the row boxes, the time blocks, text boxes and save buttons.

    var rowBlock = $('<div>').addClass('row')
    var timeBlock = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'))
    timeBlock.attr('data-time', moment('9:00 AM ', 'hh:mm A ').add(i, 'hours').format('hA'))
    var textBlock = $('<textarea>').addClass('col-md-9')
    var saveButton = $('<button>').addClass('saveBnt col-md-1').html(('<i class = "fas fa-save"></i>'))

    //Append content to the row and time block to then display the time block, text block and save button in the respective container.
    $('.container').append(rowBlock);
    $(rowBlock).append(timeBlock);
    $(timeBlock).after(textBlock);
    $(textBlock).after(saveButton);

};