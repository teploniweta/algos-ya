let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const arr = fileContent.split(/\s+/).map(el => Number(el));
    // через редюс не проходит по времени - RE, придется императивно
    // const closestToZero = elements.reduce((prev, curr, index) => {
    //     const prevDiff = Math.abs(prev - requiredElement);
    //     const currDiff = Math.abs(curr - requiredElement);
    //
    //     return currDiff < prevDiff ? curr : prev;
    // });
    // полностью императивно не проходит даже на питоне, ограничение по условие 1 секунда
    // на жсе через редюс решение занимает 76мс, на питоне 36мс, перепишу на делегирование генератора для себя
    function* findClosestElement(arr) {
        const elements = arr.slice(1, arr[0] + 1);
        const requiredElement = arr.at(-2);

        let diff = 1001;
        let closest = null;

        for (let i = 0; i < elements.length; i++) {
            if (elements[i] === requiredElement) {
                yield String(requiredElement);
                continue;
            }

            const currentDiff = Math.abs(requiredElement - elements[i]);

            if (currentDiff < diff) {
                diff = currentDiff;
                closest = elements[i];
            }

            if (elements[i] === closest) continue;
        }

        yield* [String(closest)];
    }
    const generator = findClosestElement(arr);

    let ans = generator.next().value;
    fs.writeFile('output.txt', String(ans), function(error){
        if(error) throw error;
    });
});