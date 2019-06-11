---
---

# Gestures in Ionic

Mobile apps must use gestures in order to provide a fluid UI experience. As phones move to even stronger gesture-based UI paradigms (think iPhone X), the expectations around gestures in mobile apps have gone up.

Luckily, Ionic comes with easy-to-use Gesture utilities so you can build apps that follow your users' every touch.

## Gesture Basics

Gestures work by listening for touch or pointer events, and then checking various start conditions (such as whether the user moved their finger more than 20 pixels). If the start conditions are met, a gesture is "started", and then a stream of position changes are emitted as the user moves their finger through the gesture. Finally, when the finger is released, the gesture will end.

As the user moves their finger, an object is sent containing the current coordinates of the touch, the delta or change in position since the gesture was started, and some additional information such as the velocity of the gesture (useful for "throwing" UI controls).

That object looks something like this:

```typescript
interface GestureDetail {
  startX: number;
  startY: number;
  startTimeStamp: number;
  currentX: number;
  currentY: number;
  velocityX: number;
  velocityY: number;
  deltaX: number;
  deltaY: number;
  timeStamp: number;
  event: UIEvent;
}
```

## Our first gesture

Let's build a simple gesture that lets the user drag an element from one end of the screen to the other, with the ability to "throw" the element all the way without dragging it pixel-by-pixel.

```typescript
function canStart(detail: GestureDetail) {
  return detail.deltaY > 20;
}

function onMove(detail: GestureDetail) {
  // set the transition animation's progress
  const delta = detail.deltaX;
  const stepValue = delta / win.innerWidth;
  onMoveHandler(stepValue);
}

function onEnd(detail: GestureDetail) {
  // the swipe back gesture has ended
  const delta = detail.deltaX;
  const width = win.innerWidth;
  if (detail.deltaY > 0 && detail.velocityY > 0.2) {
    // throw up
  }
  if (detail.deltaY < 0 && detail.velocityY < -0.2) {
    // throw down
  }
}

return createGesture({
  this.el,
  queue,
  gestureName: 'ourGesture',
  gesturePriority: 40,
  threshold: 0,
  canStart,
  onStart,
  onMove,
  onEnd
});
```

## Performant dragging

Talk about properties to animate (`translate3d`).

## Things to try

Talk about parallax and scaling images for a cool effect