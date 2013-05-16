/*global define */
define( [], function () {
    'use strict';

    function Task( text, done, archived ) {
        this.text = text;
        this.done = done || false;
        this.archived = archived || false;
    }

    Task.prototype = new Task();

    return Task;
});
