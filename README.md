jquery.template
===============

Simple jQuery templates - supports caching - multiple syntaxes


```html

<script type="text/template" id="player">
<div class="$team">
<img src="$image">
<p class="text-name">
</p>
</div>
</script>

```

```js
var $el = $.template('#player', {
  team: 'green',
  image: 'images/player1.jpg',
  name: 'Carrrrl'
});

$el.appendTo('body');
```
