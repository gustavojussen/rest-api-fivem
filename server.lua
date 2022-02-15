function runCode(code)
    return assert(load(code, nil,"t", _G))
end

AddEventHandler('toExecLua', function (exe, cb)
    local res = load_code("return " ..exe);

    cb(res())
    
end)

