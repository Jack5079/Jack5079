+++
title = "Tips for optimizing animated 88x31 buttons"
description = "Try not to make 20 kb GIFs challenge failed instantly"
date = 2024-11-24
image = ["./authen-comparsion.png", "authen-delooped.gif: 8.3 KB; authen.gif: 29.9 KB."]
+++

This guide is written for [GIMP](https://gimp.org), but I imagine other software has things like this as well.

## Combine, not replace

Go use [Filter > Animation > Optimize (for GIF)](https://docs.gimp.org/en/plug-in-optimize.html).

This let me [save 15.2 KB](https://github.com/Jack5079/Jack5079/commit/c83911f8455ad96dedf25aa8b159764c6cf57d2a) on [aei's](https://aei.sh) 88x31.

## Merge identical frames

I don't think I have an example for this but I swear it helped one time.

## Remove artifacts

Go through each frame of the GIF and remove pixels that appear not to change.

This let me [save 7.71 KB](https://github.com/Jack5079/Jack5079/commits/8c49614853be80ddf56283ed3ffbf22f84dd589c/src/components/Buttons/toastyfen.gif) on [toastyfen's](https://toasty.zone) 88x31.

## Index it

In GIMP, it's [Image > Mode > Indexed](https://docs.gimp.org/en/gimp-image-convert-indexed.html).

This let me [save 6.95 KB](https://github.com/Jack5079/Jack5079/commit/5c5d51683c61548c96fbb33c2caac485c593ad72) on [N64 Sherbet Land's](https://gba.ioi-xd.net) 88x31.

## Remove loops

It's a GIF. It loops infinitely. You don't need to hardcode loops. If you want a finite amount of loops, [GIMP allows you to set that](https://docs.gimp.org/en/gimp-images-out.html#file-gif-save) as well.

This [wasted 21.6 KB](https://github.com/Jack5079/Jack5079/commit/5610bf2eaedb88bc80dffaaaf21ce5e2a5931771) on [authen's](https://authenyo.xyz) 88x31.

## Inline them

This sounds counterintuitive, but if you have a lot of 88x31s on your page, it might be worth it to [inline](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data) the small ones. If you need a rule of thumb, [Vite defaults to 4096 bytes](https://vite.dev/config/build-options.html#build-assetsinlinelimit).

The overhead of Base64 is made up with [solid compression](https://en.wikipedia.org/wiki/Solid_compression), reduced latency, and also avoiding the ~1 KB of overhead HTTP requests have.

This saved 24 KB on [split's](https://split.pet) website when compressed.

## Don't hotlink

To follow any of these, you need to be the one hosting the image. Also, third-party requests mean a DNS lookup, adding even more latency.

## Note: Alternative formats

In theory using WebP, AVIF, or JPEG XL would save space, but in my experience it does the opposite for smaller images. Try and see if it works for you.

---

I hope this guide will make your website a little faster. Good luck!
