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

    /*
     * Handle envent in disabled input
     * Reference from solution here http://stackoverflow.com/questions/3100319/event-on-a-disabled-input
     */
    $('div').on( 'dblclick', function( e ) {
        $( e.target )
            .hide()
            .prev('input[disabled]')
            .prop( 'disabled', false )
            .focus()
            .select();
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

        var i = 0;
        var length = tasks.length;
        for ( ; i < length; i++ ) {
            rendered += renderTask( tasks[ i ], i );
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
