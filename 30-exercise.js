// Exercise 30: Completing Sequences with take()

function fn(button) {
  const buttonClicks = Observable.fromEvent(button, "click");

  // Use take() to listen for only one button click
  // and unsubscribe.
  buttonClicks.take(1).forEach(function() {
    alert("Button was clicked once. Stopping Traversal.");
  });
}
