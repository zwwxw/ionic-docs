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

We need to set up a gesture recognizer that engages when a user drags their finger up on the edge of the drawer (known as "panning"). Once the gesture has engaged, we then need to move the drawer up to track their finger as they drag. When they release their finger, we need to figure out whether the user meant to open it, or if we should close it because they didn't drag far enough. Also, depending on how forcefully they "throw" the drawer, we should expand or close it even if they didn't drag it very far so the UI feels fluid.

Once the user has stopped dragging, we need to nicely animate the drawer back into its rightful place. We will also adjust the position of an image in the background to provide a nice parallax effect based on the current drag position of the drawer.

That's pretty much it! With a little CSS and content throw in to make the drawer look nice, we've got a quality bottom drawer experience ready to ship.

##

