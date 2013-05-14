/*global define, describe, it, expect, assert */
'use strict';
(function () {
    define( ['task', 'list'], function( Task, list ) {
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

        describe( 'List', function() {
            describe( 'Empty list', function() {
                it( 'lenght should be 0', function () {
                    expect( list.count() ).to.equal( 0 );
                });
            });
            describe( 'One item list', function() {
                it( 'lenght should be 1', function () {
                    list.add( 'Some text' );
                    expect( list.count() ).to.equal( 1 );
                });
            });
            describe( 'after one list item deleted', function() {
                it( 'lenght should be 0', function () {
                    list.delete( 0 );
                    expect( list.count() ).to.equal( 0 );
                });
            });
        });
    });
})();
