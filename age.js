(function() {
    'use strict';

    //argv[0]. node path
    //argv[1]. script path
    //console.log('argv ' + process.argv);

    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    var person = {
        name: '',
        age: 0
    };

    function ask(question, format, callback) {
        var stdin = process.stdin,
            stdout = process.stdout;

        stdin.resume();
        stdout.write(question + ": ");

        stdin.once('data', function(data) {
            data = data.toString().trim();

            if (format.test(data)) {
                callback(data);
            } else {
                stdout.write("It should match: " + format + "\n");
                ask(question, format, callback);
            }
        });
    }

    ask("Name", /.+/, function(name) {
        ask("Age", /^\d+$/, function(age) {
            person.name = name;
            person.age = age;
            
            console.log(person);
            process.exit();
        });
    });
})();
