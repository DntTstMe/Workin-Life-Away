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
     // Loop through the numbers from 9 to 17 and then retrieve the value from local storage
     for (let i = 9; i <= 17; i++) {
        $("#"+i+" .description").val(localStorage.getItem(i.toString()));
       }
    
      // Function to update the styling of time blocks based on the current hour
      function timeTracker(){
          var currentHour = dayjs().hour(); // Get the current hour using day.js
          
          // Toggle the classes based on the condition
          $('.time-block').each(function() {
              var idTime = parseInt($(this).attr("id"));
              $(this)
                .toggleClass("past", idTime < currentHour) // Add or remove the past class
                .toggleClass("present", idTime === currentHour) // Add or remove the present class
                .toggleClass("future", idTime > currentHour); // Add or remove the future class
          })
        }
        // Call the timeTracker function to initially style the time blocks
        timeTracker();
});