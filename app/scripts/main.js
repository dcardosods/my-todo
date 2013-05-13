require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: '../components/bootstrap/amd/src'
    },
    shim: {
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
