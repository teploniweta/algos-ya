let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    console.log(fileContent);

    let toWrite = fileContent + '2218';

    fs.writeFile('output.txt', toWrite, function(error){
        if(error) throw error;
        console.log(toWrite);
    });
});