---
---

# Animations in Ionic

Great apps use smart use of animations to provide a fluid and engaging experience. Luckily, building animations into your Ionic app is easy, and there are a few ways to do it.

The simplest approach is to use basic CSS transitions and animations. As long as you keep a few key things in mind, you'll be able to build animations easily.

The second approach is to use animation utilities built right into Ionic. These utilities make it easier to perform more complex animations in a performant manner, and are the same utilities Ionic uses for its transitions and gesture-based animations.

## A primer on web animations

Before we get into any of that, we need to lay some ground rules for animation performance.

First and foremost, we should only animate a select few properties on elements. These properties are `transform` and `opacity`. These are the only properties the browser can animate cheaply out of the box, meaning animating anything other than these properties is a surefire route to jank city if you aren't careful!

Layout properties like `width` or `margin` require the browser to re-compute layout for all children, which can be very expensive and will surely cause your framerate to drop. While there are ways to reduce the cost of such an operation, generally these animations are unnecessary except in very specific cases. Paint properties like `background-position` require the browser to repaint your component and potentially other ones, with a similar drop in performance. Sometimes you don't have a choice and need to animate one of these properties. If that's the case, you'll surely want to try to limit the impact of your property changes with judicious use of [CSS Contain](https://developer.mozilla.org/en-US/docs/Web/CSS/contain). You can learn more about the cost of CSS property changes in animations in this [html5rocks tutorial](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/).

Luckily, these limitations aren't that limiting in practice. A `transform` animation can modify position, scale, and rotation. Animating `opacity` makes for wonderful fade effects. It turns out that this combination of properties can result in nearly every animation effect you could have gotten with other properties, as long as you're creative about your CSS layout.

## GPU Acceleration

While animating `transform` and `opacity` is cheap, turns out that there's one more thing we need to keep in mind: whether the GPU will render our elements during our animation or not.

Unfortunately, using `transform: translateX()` or `transform: scale()` is not enough to trigger GPU rendering (or "compositing" as it's called). For smaller animations on smaller elements, this is totally fine and even preferred as compositing has overhead in terms of memory consumption which could cause our app to slow down if we use it too much.

However, for larger elements or really important animations, it's paramount the GPU puts our element in a compositing layer so we can achieve 60fps animations.

To force the browser to put our element into a compositing layer that the GPU will render for us, we can do two things: make sure our translate has a `Z` coordinate, or use the `will-change: transform` property on an element.

For example, here are three CSS declarations that will cause our element to be composited.

```css
#my-element {
  transform: translate3d(0,0,0);
  transform: translateZ(0); /* equivalent to the first */
  will-change: transform;
}
```

Similarly, modifying `myElement.style.transform` with the proper `translate3d/Z` will also force compositing.

One last reminder: when animating scale or rotate, if you want to force compositing, you need to mix the proper translate line with the other transform:

```css
#my-element {
  transform: translate3d(0,0,0) scale(1.2);
}
```

GPU compositing in the browser is surprisingly complicated. This wonderful [post on GPU Compositing](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) goes into every possible detail and is well worth the read.

## Basic CSS Animations

With that in mind, let's look at some practical animations you can add to your Ionic app for some really nice effects.

### Fade Elements In

A really simple and awesome effect is to fade in elements when they appear on screen. Doing this requires a simple CSS animation and creates a class called `fade-in` you can add to any element you want to fade in:

```css
.fade-in {
    opacity: 1;
    animation-name: fadeIn;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: .5s;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
```

Take a look at [a simple demo](https://codepen.io/ionic/pen/Progjd) for an example this animation in action.

### Slide elements off screen

A common effect in a mobile app is to slide something into our out of the screen based on user interaction.

To do this, just animate the `y` coordinate of the `transform`:

```css
.slide-out {
  opacity: 1;
  animation-name: slideOut;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 1500ms;
  animation-fill-mode: forwards; /* keeps the animation state fixed at the end */
  will-change: transform; /* good habit even if it's redundant */
}

@keyframes slideOut {
  0% { transform: translate3d(0, 0, 0); }
  /* Adjust the percent here as you see fit. Further away and the element will slide out more quickly */
  100% { transform: translate3d(0, 500%, 0);
}
```

You can (and should!) even add some cool effects like staggering the animation, making it rise a bit before sliding out, or rotating it slightly as it leaves the screen. Take a look at [a little demo](https://codepen.io/ionic/pen/qzBGJL) that shows these effects in action!

## JavaScript Animations

CSS Animations are simple, which is one reason they are so popular. However, for interactive use cases or for certain situations, animating in JavaScript or partial JS/CSS is preferred.

Animating in JS requires a different set of techniques in order to ensure fluid 60fps animations, but the basic technique includes a looping animation function that updates a transform or opacity on an element, with values changing slightly every time the loop is called.

Here's an example that slowly moves a box off the screen:

```typescript
const animate = (lastTime) => {
  requestAnimationFrame(animate);
  
  box.el.style.transform = `translate3d(0,${box.y}px,0))`;
  
  box.y += 1.5;
}

requestAnimationFrame(animate);
```

This animation will run as closely synced to the display refresh rate as possible (in most cases, 60fps or 120fps).

Notice we use `requestAnimationFrame` instead of `setTimeout` or `setInterval`. When performing JS animations, _never_ use `setTimeout` or `setInterval`. They are not synced with the display and may run in a very unpredictable fashion. They also can't be optimized when the browser is not in focus to save battery life.

The tricky thing about JS animations is making them do interesting things. Unfortunately, we don't have access to all of the nice easing and animation curves that CSS does (caveat: see the section on the Web Animations API below). However, there are some big advantages, too. Unlike CSS animations, with JS animations we can animate on much more complex curves, such as Spring animations that bounce, or physics-based animations that use rigid body collisions for interesting effects.

## 3rd Party JS Animation Library

Now that you have a basic understanding of how animations work in JS, you can better evaluate a more sophisticated third party animation library.

If you want to perform a lot of JS animations or utilize spring animations, you'll want to use a third party animation library like [popmotion](https://popmotion.io/), [anime.js](https://animejs.com/), [dynamics.js](http://dynamicsjs.com), or [lottie](https://airbnb.io/lottie/#/) which renders After Effects animations.

Here's an example of a [Spring animation UI in Ionic with popmotion](https://stackblitz.com/edit/ionic-c57c37).

## Web Animations API

It's worth mentioning the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API), which provides a JS API on top of the core CSS Animation engine in the browser. With this API comes support for pausing/playing animations, stepping through them, and programatic access to the primitives available for CSS animations.

For example, instead of doing our slide out animation above in CSS, we could do it in js:

```typescript
const box = document.querySelector('.box');

box.animate(
  [
    { transform: 'translate3d(0, 0, 0)' },
    { transform: 'translate3d(0, 0, 0)', offset: 0.2 },
    { transform: 'translate3d(0, -5%, 0)', offset: 0.4 },
    { transform: 'translate3d(0, 500%, 0) rotate(20deg)', offset: 1 }
  ], {
    duration: 1500,
    iterations: Infinity,
    easing: 'ease-in-out',
    fill: 'forwards'
  }
);
```

While this looks nice in theory, we find that the Web Animations API is a bit limited, and in our experience the same animation in CSS can behave differently in the Web Animation API depending on the browser.

Web Animations supports the exact same features in CSS animations (so no springs or physics), but with the ability to pause/play and step through animations. It won't allow you to do anything you couldn't do with CSS animations beyond programatic play/pause/etc.

In general, we recommend using a third party JS animation library if you wish to do anything beyond basic animations, and for basic animations just using CSS is likely going to be easier. The bar for good mobile animations has gone up dramatically and a library with support for spring animations and beyond is going to help you stay competitive.

## Gesture-driven Animations

If we combine all of these techniques, then we can build UI experiences that respond to user touch and gestures, all while providing smooth and fluid animations throughout. 

Building gesture-powered animations requires tracking the user's touch, and then doing something visually pleasing when the user finishes their gesture (such as "throwing" an element on swipe).

To learn more, continue on to the Gesture part of the guide where we break down how to build these types of experiences in Ionic, combined with the animation knowledge we've just gained.