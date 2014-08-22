### Installation
```sh
bower install jquery.template
```


### What makes jquery.template different?
`jquery.template` takes a different approach to inserting values into templates, lessening the risk of XSS exploits.


### Usage
Just pass a CSS selector for the template, and then an object with values. (Templates are cached after first use)
```js
var $el = $.template('#player', {
  team: 'green',
  image: 'images/green.jpg',
  name: 'Gillian Green'
});
```

Instead of the usualy delimiters and keynames, we'll approach these templates differently. We'll be using CSS classes as directives. Let's start with this example.
```
<script type="text/template" id="player">
  <div class="class-team">
    <img class="src-image">
    <p class="text-name"></p>
  </div>
</script>
```

We see a `<div>` with the class `class-team`. What is happening here? Well, `class-` is a directive. We add `team` after, to signify a connection with the `team` value we passed earlier. This directive will add a new class to the `<div>`, named `green`. If you're following this so far, great. The rest should be easy.

We can also see the `<img>` & `<p>` tags, both with their own directives. As you might guess, `src-` is a directive allowing for updates to the `src` attribute. That leaves `text-`, which is a directive for updating the inner text of an element. Note: this is done in such a way where HTML inside of values is not parsed, since that leads to the classic security issues.

After all this, what do we get? A jQuery wrapped HTML element, ready to be given a new home. Let's be quaint, and append it to the `<body>`.

```js
$('body').append($el);
```


### What directives are supported?
So far:
- class- (adds a class)
- href- (updates href attribute)
- src- (updates src attribute)
- target- (updates target attribute)
- text- (updates inner text)


### Why not more directives?
Please, feel free to ask for more. Just make a PR or issue in GitHub.

