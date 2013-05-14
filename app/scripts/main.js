require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/bootstrap/amd/src',
        underscore: '../components/underscore/underscore',
        text: 'vendor/text',
        tpl: 'vendor/tpl',
        templates: '../templates',
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },
    tpl: {
        extension: '.tpl'
    }
});

require( ['app'], function ( app ) {
    'use strict';

    app.init();
});

