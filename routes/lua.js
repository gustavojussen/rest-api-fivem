exports.lua = (lua_code) => {
    return new Promise(resolve => {
        console.log(lua_code)
        emit('sendtoexec-lua', lua_code, resolve);
    });
}