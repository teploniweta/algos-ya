let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [n1, m1, n2, m2] = fileContent.split(/\s+/).map(Number);
    const variant1 = (n1, m1, n2, m2) => {
        const tm = Math.max(n1, m1) + Math.max(n2, m2);
        const tn = Math.max(Math.min(n1, m1), Math.min(n2, m2));
        return [tn, tm, tn * tm, 1];
    };
    const variant2 = (n1, m1, n2, m2) => {
        const tm = Math.min(n1, m1) + Math.min(n2, m2);
        const tn = Math.max(Math.max(n1, m1), Math.max(n2, m2));
        return [tn, tm, tn * tm, 2];
    };
    const variant3 = (n1, m1, n2, m2) => {
        const tm = Math.max(n1, m1) + Math.min(n2, m2);
        const tn = Math.max(Math.min(n1, m1), Math.max(n2, m2));
        return [tn, tm, tn * tm, 3];
    };
    const variant4 = (n1, m1, n2, m2) => {
        const tm = Math.min(n1, m1) + Math.max(n2, m2);
        const tn = Math.max(Math.max(n1, m1), Math.min(n2, m2));
        return [tn, tm, tn * tm, 4];
    };
    const funcs = [variant1, variant2, variant3, variant4];
    const vars = funcs.map(func => func(n1, m1, n2, m2));
    vars.sort((a, b) => a[2] - b[2]);
    fs.writeFile('output.txt', vars[0].slice(0,2).join(' '), function(error){
            if(error) throw error;
        });
});