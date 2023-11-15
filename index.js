let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    let ans = '';
    const [k1, m, k2, p2, n2] = fileContent.split(/\s+/);
    const flatsOnFloor = Math.ceil(k2 / n2);
    const flatsOnEntrance = m * flatsOnFloor;
    const p1 = m == 1 ? 0 : Math.ceil(k1 / (p2*flatsOnEntrance));
    const n1 = flatsOnEntrance === Number(m) ? m : Math.ceil((k1-flatsOnEntrance) / flatsOnFloor);
    fs.writeFile('output.txt', ans = `${p1} ${n1}`, function(error){
        if(error) throw error;
        console.log(ans);
    });
});