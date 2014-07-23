jquery.template
===============

Simple jQuery templates - supports caching - multiple syntaxes


Step 1 - Define a template.
```
<script type="text/template" id="player">
  <div class="$team">
    <img src="$image">
    <p class="text-name"></p>
  </div>
</script>
```

Step 2 - Pass some values.
```js
var $el = $.template('#player', {
  team: 'green',
  image: 'images/player1.jpg',
  name: 'Carrrrl'
});

$el.appendTo('body');
```

Step 3 - Enjoy
