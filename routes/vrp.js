const { lua } = require('./lua');

const vrp = {};

vrp.isOnline = (id) => {
    return lua(`vRP.getUserSource(${id}) ~= nil`);
}

module.exports = vrp;