let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const arr = fileContent.split(/\s+/).slice(0, -2).map(Number);
    const ans = {
        'CONSTANT': true,
        'WEAKLY ASCENDING': true,
        'WEAKLY DESCENDING': true,
        'ASCENDING': true,
        'DESCENDING': true,
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
        } else {
            wasEval = true;
        }
    }

    const setAttributes = (increasing, weakly) => {
        ans[`ASCENDING`] = increasing;
        ans[`WEAKLY ASCENDING`] =  increasing && weakly;
        ans[`DESCENDING`] = !increasing;
        ans[`WEAKLY DESCENDING`] = !increasing && weakly;
    };

    if (hasIncreasing) {
        setAttributes(true, wasEval);
    }

    if (hasDecreasing) {
        setAttributes(false, wasEval);
    }

    if (hasDecreasing && hasIncreasing) {
        Object.keys(ans).forEach(key => ans[key] = false);
    }

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