/*global define, describe, it, expect, assert */
'use strict';
(function () {
    define( ['task'], function( Task ) {
        describe( 'Tasks', function() {
            var newTask = new Task('Some text');

            describe( 'New task', function() {
                it( 'text should exist', function () {
                    expect( newTask.text ).to.exist;
                });
                it( 'should to not be done', function() {
                    expect( newTask.done ).to.not.be.ok;
                });
                it( 'should to not be archived', function() {
                    expect( newTask.archived ).to.not.be.ok;
                });
            });
        });
    });
})();
