let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    let ans = 0;
    const arr = fileContent.split(/\s+/)
        .filter((value) => value.trim() !== "")
        .map((value, index) => Number(value))
    arr.forEach((el, index) => {
        if (index !== 0 && index !== arr.length) if (el > arr[index-1] && el > arr[index+1])  ans += 1
    })
    fs.writeFile('output.txt', String(ans), function(error){
        if(error) throw error;
        console.log(ans);
    });
});