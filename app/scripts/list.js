/*global define */
define( ['task'], function ( Task ) {
    'use strict';
    var tasks = [];

    function count() {
        return tasks.length;
    }

    return {
        count: count,
        add: function( text ) {
            var newTask = new Task( text );
            tasks.push( newTask );
            return count() - 1;
        },
        delete: function( index ) {
            tasks.splice( index, 1 );
        },
        getList: function() {
            return tasks;
        }
    };
});
