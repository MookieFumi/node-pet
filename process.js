(function() {
    'use strict';
    process.title = 'MookieFumi';
    print();

    function print() {
        console.log('-----------------------');
        console.log('Folder ' + process.cwd());
        console.log('Exec path ' + process.execPath);
        //console.log('Identifier uid ' + process.getuid());
        console.log('Identifier pid ' + process.pid);
        console.log('Title ' + process.title);
        console.log('NodeJs version ' + process.version);
        console.log('Platform ' + process.platform);
        console.log('Architecture ' + process.arch);
        console.log('-----------------------');
        //console.log('Memory usage ' + process.memoryUsage());
        //console.log(process.env);
        //console.log('-----------------------');
    }

})();
