exports.lua = (code) => {
    return new Promise(resolve => {
        emit('toExecLua', code, resolve);
    });
}