// Exercise 32: Creating a mouse drag event

function fn(sprite, spriteContainer) {
  const spriteMouseDowns = Observable.fromEvent(sprite, "mousedown");
  const spriteContainerMouseMoves = Observable.fromEvent(
    spriteContainer,
    "mousemove"
  );
  const spriteContainerMouseUps = Observable.fromEvent(
    spriteContainer,
    "mouseup"
  );

  // For every mouse down event, return the mouse move event
  // sequence until a mouse up event occurs.
  // For each mouse drag event, move the sprite to the absolute page position.

  spriteMouseDowns
    .concatMap(function(contactPoint) {
      // ...retrieve all the mouse move events on the sprite container...
      // ...until a mouse up event occurs.

      return spriteContainerMouseMoves.takeUntil(spriteContainerMouseUps);
    })
    .forEach(function(dragPoint) {
      sprite.style.left = dragPoint.pageX + "px";
      sprite.style.top = dragPoint.pageY + "px";
    });
}
