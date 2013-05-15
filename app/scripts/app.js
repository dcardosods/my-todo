/*global define */
define( ['jquery', 'tpl!templates/task', 'list'], function ( $, tplTask, list ) {
    'use strict';

    function renderList() {
        var tasks = list.getList();
        var rendered = tplTask({
            index: 0,
            value: ''
        });

        var i = 1;
        var lenght = tasks.length;
        for ( ; i < length; i++ ) {
            rendered += tplTask({
                index: i,
                value: list[i].text
            });
        }

        return rendered;
    }

    function init() {
        $('#list').append( renderList( list ) );
    }

    return {
        init: init
    };
});
