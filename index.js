let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    // линейная сложность
    const obj = {};
    const n = fileContent.split(/\s+/).slice(0, -1);
    n.forEach(e => {
        if (!(e in obj)) obj[e] = true
    })
    const ans = String(Object.keys(obj).length);
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});