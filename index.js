let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [a, b, n, m] = fileContent.split(/\s+/).map((el) => Number(el));
    let ans = '';
    const min1 = (a + 1) * (n - 1) + 1;
    const max1 = (a + 1) * (n - 1) + 1 + 2 * a;
    const min2 = (b + 1) * (m - 1) + 1;
    const max2 = (b + 1) * (m - 1) + 1 + 2 * b;
    const minAns = Math.max(min1, min2);
    const maxAns = Math.min(max1, max2);
    if (maxAns < minAns) ans = '-1'
    else ans = `${minAns} ${maxAns}`
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});