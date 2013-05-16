/*global define */
define([
    'jquery',
    'tpl!templates/task',
    'tpl!templates/count',
    'list'
], function ( $, tplTask, tplCount, list ) {

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

        renderCount();

        e.preventDefault();
    });

    $( document ).on( 'change', '.task-status', function() {
        var $this = $(this);
        var taskIndex = parseInt( $this.attr('data-index'), 10 );
        var taskText = $( '#task-text-' + taskIndex ).val();
        list.update( taskIndex, taskText, $this.is(':checked') );

        renderCount();
    });

    $( document ).on( 'click', '.task-delete', function( e ) {
        var taskIndex = parseInt( $(this).attr('data-index'), 10 );

        if ( $.isNumeric( taskIndex ) ) {
            list.delete( taskIndex );
            $( '#task-' + taskIndex ).remove();
        }
        else {
            list.delete();
            $('.task').remove();
        }

        renderCount();

        e.preventDefault();
    });

    /*
     * Handle event in disabled input
     * Reference from solution here http://stackoverflow.com/questions/3100319/event-on-a-disabled-input
     */
    $( document ).on( 'dblclick', '.dblclick', function( e ) {
        $(this)
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

    function renderCount() {
        $('#task-count').html( tplCount( list.count() ) ) ;
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
        renderCount();
    }

    return {
        init: init
    };
});
