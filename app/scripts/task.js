/*global define */
define( [], function () {
    'use strict';

    function Task( text ) {
        this.text = text;
        this.done = false;
        this.archived = false;
    }

    Task.prototype = new Task();

    return Task;
});
