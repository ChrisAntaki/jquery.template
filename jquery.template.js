/*!
* @license Copyright 2014 Chris Antaki. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/

;(function ($) {
    var templates = {};

    function jQueryDotTemplate (target, values) {
        if (!templates[target]) {
            templates[target] = $(target).html();
        }

        var html = templates[target];
        for (var i in values) {
            var pattern = new RegExp('\\$' + i, 'g');
            html = html.replace(pattern, values[i]);
        }

        var $html = $(html);
        for (var i in values) {
            $html.find('.attribute-' + i).attr(i, values[i]);
            $html.find('.class-' + i).addClass(values[i]);
            $html.find('.href-' + i).attr('href', values[i]);
            $html.find('.src-' + i).attr('src', values[i]);
            $html.find('.target-' + i).attr('target', values[i]);
            $html.find('.text-' + i).text(values[i]);
        }

        return $html;
    }

    $.template = jQueryDotTemplate;
})(jQuery);
