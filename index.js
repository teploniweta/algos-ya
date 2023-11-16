let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const digits = fileContent.split(/\s+/)
        .filter((value) => value.trim() !== "")
        .map((value) => Number(value))
        .sort((a, b) => a - b);
    const [first, second] = digits;
    const [secondLast, last] = digits.slice(-2);

    const ans = first * second > secondLast * last ?
        String(first) + ' ' + String(second)
        : String(secondLast) + ' ' + String(last);
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});
