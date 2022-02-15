const { lua } = require('./lua');

const vRP = {};

vRP.checkPlayerOnline = (id) => {
    if (id) {
        const check = lua(`vRP.getUserSource(${id}) ~= nil`)
        return check;
    }
}


module.exports = vRP;