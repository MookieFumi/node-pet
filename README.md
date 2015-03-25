## Notas/ apuntes NodeJs #

> **age.js** Entrada/ salida con process.stdin/ process.stdout

    ask("Name", /.+/, function(name) {
        ask("Age", /^\d+$/, function(age) {
            person.name = name;
            person.age = age;

            console.log(person);
            process.exit();
        });
    });

> **process.js** Información de process de NodeJs
 
    console.log('Folder ' + process.cwd());
    console.log('Exec path ' + process.execPath);
    console.log('Identifier pid ' + process.pid);
    console.log('Title ' + process.title);
    console.log('NodeJs version ' + process.version);
    console.log('Platform ' + process.platform);
    console.log('Architecture ' + process.arch);
    
> **promises-not.js** Funciones no asíncronas

    Init slow operation
    Init fast operation
    End fast operation
    End slow operation 200

> **promises.js** Funciones asíncronas con el [modulo q](https://github.com/kriskowal/q)

	var deferred = Q.defer();

	http.get({
		hostname: 'tabconsultores.com'
	}, function(res) {
		deferred.resolve(res);
	}).on('error', function(error) {
		deferred.reject(error);
	});
	
	return deferred.promise;

> **utilities.js** Modularización/ módulos propios utilizada en *promises.js*

	var utilities = (function() {
	    'use strict';
	
	    return {
	        addReponseToResults: function(results, response) {
	            results.push({
	                url: response.req._headers.host,
	                //name: response.headers.server,
	                statusCode: response.statusCode
	            });
	        }
	    }
	
	})();
	
	module.exports = utilities;

