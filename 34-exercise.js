// Exercise 34: HTTP requests

function fn($) {
  $.getJSON("http://api-global.netflix.com/queue", {
    success: function(json) {
      alert("Data has arrived.");
    },
    error: function(ex) {
      alert("There was an error.");
    }
  });
}
