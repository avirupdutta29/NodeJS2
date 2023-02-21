var fs = require('fs');

fs.appendFile('calc.js', 'console.log("done")', function(data){
    console.log("Data Saved");
})