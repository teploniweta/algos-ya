let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const rows = fileContent.split('\n').map(row => row.split(' ').map(Number));
    const set = new Set(rows[1]); //  O(n)
    const ans = rows[0]
        .filter(el => set.has(el)) //  O(m)
        .sort((a, b) => a - b) // O(m log m)
        .join(" ");
    // общая сложность  O(n) + O(m) + O(m log m) что в итоге можно упростить до O(m log m), т.к. m определяющий член
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});