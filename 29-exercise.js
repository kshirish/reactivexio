// Exercise 29: Traversing an Event

function fn(button) {
  const buttonClicks = Observable.fromEvent(button, "click");

  // In the case of an Observable, forEach returns a subscription object.
  const subscription = buttonClicks.forEach(function(clickEvent) {
    console.log("Button was clicked. Stopping Traversal.");

    // Stop traversing the button clicks
    subscription.dispose();
  });
}
