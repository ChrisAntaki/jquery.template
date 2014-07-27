### Installation
```sh
bower install jquery.template
```


### What makes jquery.template different?
This library allows for templating without ever parsing your values as HTML. This avoids the threat of XSS, or other value based exploits.


### Usage
Passing values is easy. Just pass an object with named keys. Also, specify a CSS selector for the template as the first parameter. (Templates are cached after their first use.)
```js
var $el = $.template('#player', {
  team: 'green',
  image: 'images/green.jpg',
  name: 'Mr. Green'
});
```

Instead of the usualy delimiters and keynames, we'll approach these templates differently. We'll be using CSS classes to target values to attributes. Let's start with this example.
```
<script type="text/template" id="player">
  <div class="class-team">
    <img class="src-image">
    <p class="text-name"></p>
  </div>
</script>
```

We have the `<script type="text/template">` tag to start things off. This is a general best practice for templates. We add an `id` attribute to make it easier to search for.  

Next, we see a `<div>` with the class `class-team`. What is happening here? Well, `class-` is a directive. We add `team` after, to signify a connection with the `team` value we passed earlier. The result of this directive is a new class is added to the `<div>`, named `green`. If you're following this so far, awesome.  

We can also see the `<img>` & `<p>` tags, both with their own directives. As you might guess, `src-` is a directive allowing for updates to the `src` attribute. That leaves `text-`, which is a directive for updating the inner text of an element. Note: this is done in such a way where HTML inside of values is not parsed, since that leads to the classic security issues.


### What directives are supported?
So far:
- class- (adds a class)
- href- (updates href attribute)
- src- (updates src attribute)
- target- (updates target attribute)
- text- (updates inner text)

*Bonus*
- attribute- (updates `key` attribute to `value`)


### Why not more directives?
Please feel free to make PRs or issues!

