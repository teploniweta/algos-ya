let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const dict = {};
    const arr = fileContent.split(/\s+/).slice(0, -1);
    // один из тестов содержит символ переноса строки, что засчитывало его за уникальное слово
    // можно посмотреть, как корректно принимать данные и не усложнять все проверкой, решив через сет, но)))
    arr.forEach((el) => {
        if (el.trim() !== "") {
            if (!(el in dict)) {
                dict[el] = true;
            }
        }
    });
    const ans = String(Object.keys(dict).length);
    // через сет
    // const set = new Set(fileContent.split(/\s+/).slice(0, -1));
    // const ans = String(set.size);
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});