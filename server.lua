
vRP = nil

if GetResourceState('vrp') ~= 'missing' then
    local Proxy = module("vrp", "lib/Proxy")
    vRP = Proxy.getInterface("vRP")
else
    print('VRP NAO ENCONTRADA')
end

function runCode(code)
    return assert(load(code, nil,"t", _G))
end

AddEventHandler('toExecLua', function (exe, cb)
    local res = load_code("return " ..exe);

    cb(res())
    
end)

