let fs = require('fs');
fs.readFile('input.txt', 'utf8', function(error, fileContent){
    if(error) throw error;
    const phoneNumbers = fileContent.split(/\s+/);
    let ans = '';
    const cleanNumber = string => {
        const charactersToRemove = ['-', '(', ')'];
        const cleanedByCharacters =  charactersToRemove
            .reduce((str, char) => str.split(char).join(''), string);
        return cleanedByCharacters.length === 7 ? '495' + cleanedByCharacters :
            cleanedByCharacters.startsWith("+7") ? cleanedByCharacters.substring(2) :
            cleanedByCharacters.substring(1);
    }
    phoneNumbers.slice(0, -2).forEach(el => {
        cleanNumber(el) === cleanNumber(phoneNumbers.at(-2)) ? ans +='YES \n' : ans +='NO \n';
    })
    fs.writeFile('output.txt', ans.substring(-1), function(error){
        if(error) throw error;
        console.log(ans);
    });
});