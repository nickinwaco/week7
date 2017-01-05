/*
=======================================================
    ** Week 7 - Project 1  **
*** Ajax and JSON with OMDB ***

This assignment is more open than the past assignments.
You are free to build a simple web page that interacts
with OMBD. It can simply display data within the HTML
page or buttons and text fields can be added to interact
with the data and update the page accordingly.

Have fun!
=======================================================
*/
$(document).ready(function() {

//1. OMDB call
$('#submitBtn').click(function() {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        if (xhr.status !== 200) {
            console.log("success")
            return;
        }
        var data = JSON.parse(xhr.responseText);
     console.log(data["title"]);
    });
    xhr.open('GET', 'http://www.omdbapi.com/?t=Frozen');
    xhr.send();
  //  console.log(data.title);
  //     console.log(xhr);
  //  console.log("test");
    });
});
