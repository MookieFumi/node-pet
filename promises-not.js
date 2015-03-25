(function() {
    'use strict';

    var http = require('http'),
        config = {
            hostname: 'mookiefumi.com'
        };

    console.log("Init slow operation");
    slowOperation();

    console.log("Init fast operation");
    fastOperation();

    function slowOperation() {
        http.get(config, function(res) {
            console.log("End slow operation " + res.statusCode);
        }).on('error', function(e) {
            console.log("Error slow operation: " + e.message);
        });
    }

    function fastOperation() {
        console.log("End fast operation");
    }

})();
