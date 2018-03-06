//UI logic
$(document).ready(function() {
  $("form#save").submit(function(event){}
  event.preventDefault();
  function myFunction() {
      var records = document.getElementById("hidden");
      if (records.style.display === "none") {
          records.style.display = "block";
      } else {
          records.style.display = "none";
      }
  }

});
