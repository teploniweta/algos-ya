let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [a, b, c] = fileContent.split(/\s+/);
    const ans = (Number(a) + Number(b) > Number(c))
        && (Number(a) + Number(c) > Number(b))
        && (Number(b) + Number(c) > Number(a));
    fs.writeFile('output.txt', ans ? 'YES' : 'NO', function(error){
        if(error) throw error;
    });
});