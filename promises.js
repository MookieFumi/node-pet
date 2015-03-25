(function() {
    'use strict';

    var http = require('http'),
        Q = require('q'),
        results = [];

    getTabWeb()
        .then(webMookieWeb)
        .then(webPanicoWeb)
        .then(function(res) {
            results.push({
                name: res.headers.server,
                statusCode: res.statusCode
            });
        })
        .finally(function() {
            console.log(results);
        })
        .fail(function(error) {
            console.log('Promise failed', error.code);
        });

    function getTabWeb() {
        var deferred = Q.defer();
        http.get({
            hostname: 'tabconsultores.com'
        }, function(res) {
            deferred.resolve(res);
        }).on('error', function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function webMookieWeb(res) {
        results.push({
            name: res.headers.server,
            statusCode: res.statusCode
        });

        var deferred = Q.defer();
        http.get({
            hostname: 'mookiefumi.com'
        }, function(res) {
            deferred.resolve(res);
        }).on('error', function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function webPanicoWeb(res) {
        results.push({
            name: res.headers.server,
            statusCode: res.statusCode
        });

        var deferred = Q.defer();
        http.get({
            hostname: 'panicoenlaxbox.com'
        }, function(res) {
            deferred.resolve(res);
        }).on('error', function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

})();
