/*global define */
define( [], function () {
    'use strict';

    function Task( text, done, archive ) {
        this.text = text;
        this.done = done || false;
        this.archived = archive || false;
    }

    Task.prototype = new Task();

    return Task;
});
