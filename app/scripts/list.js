/*global define */
define( ['task', 'underscore'], function ( Task, _ ) {
    'use strict';
    var tasks = [];

    function count() {
        return {
            all: tasks.length,
            done: _.filter( tasks, function( task ) {
                return task.done && !task.archived;
            }).length,
            archived: _.filter( tasks, function( task ) {
                return task.archived;
            }).length
        };
    }

    function store( namespace, data ) {
        if ( arguments.length > 1 ) {
            localStorage.setItem( namespace, JSON.stringify( data ) );
            return count().all - 1;
        }
        else {
            var stored = localStorage.getItem( namespace );
            tasks = ( stored && JSON.parse( stored ) ) || [];
            return tasks;
        }
    }

    return {
        count: count,
        add: function( text ) {
            var newTask = new Task( text );
            tasks.push( newTask );
            return store( 'todo', tasks);
        },
        delete: function( index ) {
            if ( index || index === 0 ) {
                tasks.splice( index, 1 );
            }
            else {
                tasks = [];
            }
            store( 'todo', tasks);
        },
        update: function( index, text, done, archive ) {
            var updatedTask = new Task( text, done, archive );
            tasks.splice( index, 1, updatedTask);
            store( 'todo', tasks );
        },
        archive: function() {
            tasks = _.map( tasks, function( task ) {
                if ( task.done ) {
                    task.archived = true;
                }
                return task;
            });
            store( 'todo', tasks);
        },
        unarchive: function() {
            tasks = _.map( tasks, function( task ) {
                task.archived = false;
                return task;
            });
            store( 'todo', tasks);
        },
        getList: function() {
            return store('todo');
        }
    };
});
