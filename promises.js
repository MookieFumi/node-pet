(function() {
    'use strict';

    var http = require('http'),
        Q = require('q'),
        utilities = require('./utilities'),
        results = [];

    getTabWeb()
        .then(webMookieWeb)
        .then(webPanicoWeb)
        .then(function(response) {
            utilities.addReponseToResults(results, response);
        })
        .fail(function(error) {
            console.log('Promise failed', error.code);
        })
        .finally(function() {
            console.log(results);
            process.exit();
        });

    function getTabWeb() {
        var deferred = Q.defer();

        http.get({
            hostname: 'tabconsultores.com'
        }, function(response) {
            deferred.resolve(response);
        }).on('error', function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function webMookieWeb(response) {
        utilities.addReponseToResults(results, response);
        var deferred = Q.defer();

        http.get({
            hostname: 'mookiefumi.com'
        }, function(response) {
            deferred.resolve(response);
        }).on('error', function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function webPanicoWeb(response) {
        utilities.addReponseToResults(results, response);
        var deferred = Q.defer();
        
        http.get({
            hostname: 'panicoenlaxbox.com'
        }, function(response) {
            deferred.resolve(response);
        }).on('error', function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

})();
