const fs = require('fs');

var files = fs.readdirSync('./assets/img');

if (files[0] === 'out.png') {
    console.log("true")
}