let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    // не прошло по времени, хотя время / память были  66ms	/ 6.21Mb
    // const arr = fileContent.split(/\s+/).slice(0, -1).map(Number).sort((a,b) => a-b);
    // const ans = arr[0] * arr[1] * arr.at(-1) > arr.at(-3) * arr.at(-2) * arr.at(-1)
    //     ? `${arr[0]} ${arr[1]} ${arr.at(-1)}` : `${arr.at(-3)} ${arr.at(-2)} ${arr.at(-1)}`
    // оценка сложности: split(/\s+/) - длина строки n => O(n)
    // slice(0, -1) - O(n)
    // map(Number) - O(n)
    // sort((a,b) => a-b) - зависит от браузера, но тут среда исполнения нода, поэтому используется merge sort (?) => O(n log n)
    // поэтому реализую императивно, за O(n), заведя переменные для мин/максов и 1 раз проиттерируюсь по массиву сравнивая
    const arr = fileContent.split(/\s+/).slice(0, -1).map(Number);
    let min1 = Infinity, min2 = Infinity;
    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
    for (let num of arr) {
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }

        if (num > max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }
    }
    const ans = min1 * min2 * max1 > max1 * max2 * max3
        ? `${min1} ${min2} ${max1}` : `${max3} ${max2} ${max1}`;
    fs.writeFile('output.txt', ans, function(error){
        if(error) throw error;
        console.log(ans);
    });
});