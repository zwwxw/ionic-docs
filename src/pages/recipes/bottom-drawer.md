---
---

# Building a draggable Bottom Drawer

A very popular UI pattern in modern mobile apps is the Bottom Drawer. In this UI, a menu is partially hidden off-screen, with some key functionality visible. When the user engages with the menu or drags it up with their finger, the rest of the menu is exposed. The menu has some nice animations on open/close for a fluid experience with parallax effects for a background image. 

This is what we are going to build today:

<video width="374" height="810" controls autoplay>
  <source src="/docs/assets/video/recipes/drawer.mp4" type="video/mp4">
</video>

## Inspiration

This UI is modelled off of popular apps that use this UI pattern. However, keep in mind this is not a standard UI control, so there are variations in how it is implemented.

Here are some popular apps that use this UI concept:

## Planning it out

In order to build this component, we need to combine a few techniques: gesture handling, element sizing, and animations to open/close and clean up any active gestures.

