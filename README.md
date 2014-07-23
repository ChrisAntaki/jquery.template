### Installation
```sh
bower install jquery.template
```


### Usage
First, define a template. Ideally inside of a `<script>` tag, with the `type` attribute set to `"text/template"`.
```
<script type="text/template" id="player">
  <div class="$team">
    <img src="$image">
    <p class="text-name"></p>
  </div>
</script>
```

Second, pass `$.template` two arguments: a CSS target for your template, and an object with values.
```js
var $el = $.template('#player', {
  team: 'green',
  image: 'images/player1.jpg',
  name: 'Carrrrl'
});
```

Third, you now have a jQuery wrapped DOM element. Let's make it visible.
```js
$('body').append($el);
```
