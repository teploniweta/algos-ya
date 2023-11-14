let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const [tRoom, tCond, mode] = fileContent.split(/\s+/);
    const ans = {
        'heat': tRoom > tCond ? tRoom : tCond,
        'freeze': tCond < tRoom ? tCond : tRoom,
        'auto': tCond,
        'fan': tRoom
    }
    fs.writeFile('output.txt', ans[mode], function(error){
        if(error) throw error;
    });
});
