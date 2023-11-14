let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    let ans = '';
    const [a, b, c] = fileContent.split(/\s+/).map(el => Number(el));
    if (c < 0) {
        ans = "NO SOLUTION";
    } else if ((a + b) === c * c && (2 * a + b) === c * c) {
        ans = "MANY SOLUTIONS";
    } else {
        if (a !== 0 && (c * c - b) / a === Math.floor((c * c - b) / a)) {
            ans = String(Math.floor((c * c - b) / a));
        } else {
            ans = "NO SOLUTION";
        }
    }
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});