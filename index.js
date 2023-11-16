let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const a = fileContent.split(/\s+/);
    const isIncreasing = (arr) => {
        return arr.reduce((acc, current, index, array) => {
            if (index > 0) {
                if (current <= array[index - 1] && index !== array.length - 1) {
                    acc = false;
                    return acc;
                }
            }
            return acc;
        }, true);
    };
    fs.writeFile('output.txt', isIncreasing(a) ? 'YES' : 'NO', function(error){
        if(error) throw error;
    });
});