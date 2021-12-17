

$('#currentDate').text(moment().format('dddd, MMM Do'));





// If the time has already passed, the row class is grey, if it it current time, the row is red, if the 
// time hasn't happened it is green.


//function colorRow() {
    //var currentHour = moment().hour();

    //$(".description").each(function(){
        //var blockHour = $(this).parent().attr("id");

            //if (blockHour < currentHour) {

                //console.log(blockHour);
                //console.log(currentHour);
                //blockHour.classList.add("past");

            //} else if (blockHour === currentHour) {

                //blockHour.classList.add("present");
         
            //} else {

                //blockHour.classList.add("future");

            //};
    //});
//};

//function colorRow();



// When the save button is pressed, the input from the text in that row gets stored into local storage.
// these are for putting items into local storage

var saveBtn = "";

saveBtn.addEventListener("click", );
    var saveBtn = $(this);

    if (saveBtn === true) {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        localStorage.setItem(time, text);
    };




// $("#8 .description").val(localStorage.getItem("8"));

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));



