vRP = nil

if GetResourceState('vrp') ~= 'missing' then
    local Proxy = module("vrp", "lib/Proxy")
    vRP = Proxy.getInterface("vRP")
else
    print('Não foi encontrado vRP ou es_extended em sua base')
end

local function load_code(code)
    return assert(load(code, nil,"t", _G))
end

AddEventHandler('sendtoexec-lua', function (exec, callback)
    local condition = load_code("return " .. exec);
    callback(condition())
end)

