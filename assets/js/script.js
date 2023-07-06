// Get the current date using day.js
$(document).ready(function(){
    var today = dayjs();

    // Display the current date and time in the #todaysDate element
    $("#todaysDate").text(dayjs().format("dddd, MMMM D, YYYY h:mm:ss A")); 

     // Handle the click event on the save buttons
    $(".saveBtn").on("click", function(){
        var diaryText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, diaryText);// Store the value in local storage using the id as the key
    }); 