const readArray = require('./readAsArray')

async function writeToJSON(file, ...data){
    let arr = [];

    if(fs.existsSync(file)){
        let users = await readArray(file)

        users.forEach(object => {
            arr.push(object)
        })
        arr.push(user)

        fs.writeFileSync(file, JSON.stringify(arr, null, 4))
    } else {
        arr.push(user)
        fs.writeFileSync(file, JSON.stringify(arr, null, 4))
    }
    return;
}

module.exports = writeToJSON;