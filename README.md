# scrollbar-css-var ~ Scrollbar width as a CSS variable

A tiny piece of JavaScript that gives the `<body>` element a CSS variable `--scrollbar-width`, which holds the width in px of the scrollbar in the current window. If there is no scrollbar, for whatever reason, that variable is 0px.


## Features
* Very small! ~300 bytes when minified and gzipped.
* Written in vanilla JS (ES6), with no dependencies.
* The width variable updates if the browser window resizes and causes a scrollbar to appear or disappear.
* Works in all browsers that support CSS variables (i.e. everything but Internet Explorer).
* Works well alongside [Container Units](https://www.smashingmagazine.com/2019/03/robust-layouts-container-units-css/).
* Uses the `IntersectionObserver` API, with an easy polyfill for [unsupported browsers](#polyfill-for-intersection-observer).


## Install
Download [`scrollbar-width.min.js`](https://github.com/burntcustard/scrollbar-css-var/raw/master/scrollbar-width.min.js), add it to your project folder, and include the script in your html file, for example:
```html
<script src="assets/js/scrollbar-width.min.js> </script>
```


### Polyfill for Intersection Observer
The `IntersectionObserver` API still [doesn't have amazing browser support](https://caniuse.com/#feat=intersectionobserver). To ensure scrollbar-css-var works for all browsers, add the following [polyfill.io](https://polyfill.io/) script to your html file, before including `scrollbar-width.min.js`.
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver-polyfill"> </script>
```


## Contributing
[Terser](https://github.com/terser-js/terser) is used to minify the JS, with the following (subject to change) flags:
```
$ terser scrollbar-width.js -o scrollbar-width.min.js -m -c ecma=6,unsafe_arrows=true
```

[gzip-size](https://github.com/sindresorhus/gzip-size-cli) is used to check the (probable) size of the gzipped JS:
```
$ gzip-size scrollbar-width.min.js
```
