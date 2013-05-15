/*global define, describe, it, expect */
/*jshint expr: true */
'use strict';
(function () {
    define( ['task', 'list'], function( Task, list ) {
        describe( 'Tasks', function() {
            var newTask = new Task('Some text');

            describe( 'New task', function() {
                it( 'should have existence of text property', function () {
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

        describe( 'The list', function() {
            describe( 'empty', function() {
                it( 'should have lenght equals 0', function () {
                    expect( list.count() ).to.equal( 0 );
                });
            });
            describe( 'with one item', function() {
                it( 'should have lenght equal 1', function () {
                    list.add( 'Some text' );
                    expect( list.count() ).to.equal( 1 );
                });
            });
            describe( 'with below task inserted', function () {
                it( 'should be return an one item list', function () {
                    expect( list.getList() ).to.deep.equal([{
                        'text': 'Some text',
                        'done': false,
                        'archived': false
                    }]);
                });
            });
            describe( 'after one list item deleted', function() {
                it( 'should have lenght equal 0', function () {
                    list.delete( 0 );
                    expect( list.count() ).to.equal( 0 );
                });
            });
        });
    });
})();
