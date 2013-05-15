/*global define */
define( ['jquery', 'tpl!templates/task', 'list'], function ( $, tplTask, list ) {
    'use strict';

    $('form').on( 'submit', function( e ) {
        var taskText = $('#task-text').val();
        var insertedTaskIndex = list.add( taskText );

        $('#list').append( renderTask( list.getList()[ insertedTaskIndex ], insertedTaskIndex ) );
        $('#task-text').val('');

        e.preventDefault();
    });

    function renderTask( task, index ) {
        var rendered = tplTask({
            index: index,
            value: task.text
        });

        return rendered;
    }

    function renderList() {
        var tasks = list.getList();
        var rendered = '';

        var i = 1;
        var lenght = tasks.length;
        for ( ; i < length; i++ ) {
            rendered += renderTask( list[ i ], i );
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
