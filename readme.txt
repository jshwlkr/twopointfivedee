=== Twopointfivedee ===
Contributors:      Joshua Walker
Tags:              block, animation, image, parallax
Requires at least: 5.5.0
Tested up to:      5.8.1
Stable tag:        1.0.0
Requires PHP:      7.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A block for displaying an animated "2.5D" image effect.

== Description ==

This plugin provides a block that layers a series of .png files on top of each other and animates each individual layer to create a specific kind of parallax effect.
(Sometimes referred to as the "Ken Burns effect".) The block requires at least 2 images, both a back layer and a mid layer, but can accommodate 3. Images must all be the same size.

== Crafting Good Images ==

A succesful effect is more about the images and not so much about the technology.
You might compose your layers from scratch if you like, I'd recommend editing an existing image and creating multiple layers (as I did for the example).
The back layer likely will look best if you fill the voids left by the animated parts you cut out for the other layers, you might try extending the background
over these parts or just fill it with a flat color. The mid and front layers contain the animated parts and tend to look better if the subject of the front layer is smaller
than the subject of the mid layer. All layers should be the same size and should take advantage of tranparency where possible. (I'm using .png images specifically to support transparency.)
Be aware of how the animated subjects interact with the images edges, you may not want them very big or very close to the edge because the image edge will clip the animation.

== Screenshots ==

1. Example block usage
2. Example back layer
3. Example mid layer

== Support ==

This plugin is mostly an experiment, if there is enough of a response I may devote more resources to it.
However, at this time I offer no support for this plugin.


