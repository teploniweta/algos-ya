let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const arr = fileContent.split(/\s+/).slice(0, -2).map(Number);
    const ans = {
        'CONSTANT': true,
        'ASCENDING': true,
        'WEAKLY ASCENDING': true,
        'DESCENDING': true,
        'WEAKLY DESCENDING': true,
        'RANDOM': true,
    };

    let hasIncreasing = false;
    let hasDecreasing = false;
    let wasEval = false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            ans['CONSTANT'] = ans['DESCENDING'] = ans['WEAKLY DESCENDING'] = false;
            hasIncreasing = true;
        } else if (arr[i] < arr[i - 1]) {
            ans['CONSTANT'] = ans['ASCENDING'] = ans['WEAKLY ASCENDING'] = false;
            hasDecreasing = true;
        }
        else {
            wasEval = true;
        }
    }

    if (hasIncreasing) {
        if (wasEval) {
            ans['WEAKLY ASCENDING'] = true;
            ans['ASCENDING'] = false;
        }
        else ans['ASCENDING'] = true;
    }
    if (hasDecreasing) {
        if (wasEval) {
            ans['WEAKLY DESCENDING'] = true
            ans['DESCENDING'] = false;
        }
        else ans['DESCENDING'] = true;
    }

    if (hasDecreasing && hasIncreasing)  ans['ASCENDING'] = ans['WEAKLY ASCENDING'] =
        ans['CONSTANT'] = ans['DESCENDING'] = ans['WEAKLY DESCENDING'] = false;

    let result = 'RANDOM';
    for (const type in ans) {
        if (ans[type]) {
            result = type;
            break;
        }
    }
    fs.writeFile('output.txt', result, function(error){
        if(error) throw error;
        console.log(result);
    });
});