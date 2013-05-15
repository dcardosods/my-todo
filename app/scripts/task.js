/*global define */
define( [], function () {
    'use strict';

    function Task( text, done ) {
        this.text = text;
        this.done = done || false;
        this.archived = false;
    }

    Task.prototype = new Task();

    return Task;
});
