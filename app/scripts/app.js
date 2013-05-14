/*global define */
define( ['jquery', 'tpl!templates/task'], function ( $, tplTask ) {
    'use strict';

    function init() {
        var rendered = tplTask({
            index: 0,
            value: ''
        });

        $('#list').append( rendered );
    }

    return {
        init: init
    };
});
