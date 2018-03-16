// Exercise 28: Subscribing to an event

function fn(button) {
  const handler = function(ev) {
    button.removeEventListener("click", handler);
    alert("Button was clicked. Unsubscribing from event.");
  };

  button.addEventListener("click", handler);
}
