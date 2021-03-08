var fs = require('fs')

function read(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', function(err, array){
            if(err){
                reject(err)
            }
            array = JSON.parse(array)
            array = eval(array)
            resolve(array)
        })
    })
}

module.exports = read;