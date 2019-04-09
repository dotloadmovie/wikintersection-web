const fs = require('fs');

fs.readFile('build/index.html', 'utf8', function (err, data) {
    let arr = ['{{define "index"}}', data, '{{end}}'];

    fs.writeFile('build/index.html', arr.join('\n'), function() {
        console.log('output done')
    });
});