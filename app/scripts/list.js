/*global define */
define( ['task'], function ( Task ) {
    'use strict';
    var tasks = [];

    return {
        count: function() {
            return tasks.length;
        },
        add: function( text ) {
            var newTask = new Task( text );
            tasks.push( newTask );
        },
        delete: function( index ) {
            tasks.splice( index, 1 );
        },
        getList: function() {
            return tasks;
        }
    };
});
