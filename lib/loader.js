const { modul } = require('../module');
const { fs } = modul;
const { color } = require('./color')

async function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

async function nocache(module, cb = () => { }) {
    console.log(color('Module', 'blue'), color(`'${module} 𝚂𝚌𝚛𝚒𝚙𝚝 𝙱𝚢 𝙼𝚃𝚂𝟺𝚈𝙾𝚄 𝙲𝙷𝙰𝙽𝙴𝙻'`, 'orange'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

module.exports = {
    uncache,
    nocache
}
