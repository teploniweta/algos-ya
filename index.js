let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [a, b, c, d, e] = fileContent.split(/\s+/).map(Number);
    const arr1 = [a, b, c].sort((a,b) => a-b);
    const arr2 = [d, e].sort((a,b) => a-b);
    const ans = arr1[0] <= arr2[0] && arr1[0] <= arr2[0] ? "YES" : "NO";
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});