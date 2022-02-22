
$(document).ready(function() {

    $('.saveBtn').on('click', function() {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        localStorage.setItem(time, text);
    });


    function colorRow() {
        let currentHour = moment().hours();

        $(".time-block").each(function(){
            let hourBlock = parseInt($(this).attr("id"));
            
            if (hourBlock < currentHour) {
                $(this).addClass('past');
            } else if (hourBlock === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        })
    };
    
    colorRow();

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    $('#currentDate').text(moment().format('dddd, MMM Do'));

})