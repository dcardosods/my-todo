/*global define */
define( ['jquery', 'tpl!templates/task', 'list'], function ( $, tplTask, list ) {
    'use strict';

    $('form').on( 'submit', function( e ) {
        var $newTaskInput = $('#task-text');
        var taskText = '';
        var taskIndex;
        var $editingTaskInput;
        var taskStatus;

        if ( $newTaskInput.is(':enabled') ) {
            taskText = $.trim( $newTaskInput.val() );
            taskIndex = list.add( taskText );

            $('#list').append( renderTask( list.getList()[ taskIndex ], taskIndex ) );
            $newTaskInput.val('');
        }
        else {
            $editingTaskInput = $('input:text:enabled');
            taskText = $.trim( $editingTaskInput.val() );

            if ( taskText ) {
                taskIndex = parseInt( $editingTaskInput.attr('data-index'), 10 );
                taskStatus = $( '#task-status-' + taskIndex ).is(':checked');
                list.update( taskIndex, taskText, taskStatus );

                $editingTaskInput
                    .blur()
                    .prop( 'disabled', true )
                    .next('.dblclick')
                    .show();

                $newTaskInput.prop( 'disabled', false );
            }
        }

        e.preventDefault();
    });

    /*
     * Handle event in disabled input
     * Reference from solution here http://stackoverflow.com/questions/3100319/event-on-a-disabled-input
     */
    $('div').on( 'dblclick', function( e ) {
        $( e.target )
            .hide()
            .prev('input[disabled]')
            .prop( 'disabled', false )
            .focus()
            .select();

        $('#task-text').prop( 'disabled', true );
    });

    function renderTask( task, index ) {
        var rendered = tplTask({
            index: index,
            value: task.text,
            status: task.done
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
