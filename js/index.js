var tools = {
    AddScoreGuest: require("./tools/AddScoreGuest.js"),
    AddScoreUser: require("./tools/AddScoreUser.js"),
    GetRank: require("./tools/GetRank.js"),
    GetTables: require("./tools/GetTables.js"),
    FetchScores: require("./tools/FetchScores.js"),
    GetFriends: require("./tools/GetFriends.js"),
    GetTime: require("./tools/GetTime.js"),
    AuthUser: require("./tools/AuthUser.js"),
    FetchUsers: require("./tools/FetchUsers.js"),
    OpenSession: require("./tools/OpenSession.js"),
    PingSession: require("./tools/PingSession.js"),
    AddAchieved: require("./tools/AddAchieved.js"),
    CheckSession: require("./tools/CheckSession.js"),
    CloseSession: require("./tools/CloseSession.js"),
    RemoveAchieved: require("./tools/RemoveAchieved.js"),
    FetchTrophies: require("./tools/FetchTrophies.js"),
    FetchDataStore: require("./tools/FetchDataStore.js"),
    FetchTrophies: require("./tools/FetchTrophies.js"),
    GetKeysDataStore: require("./tools/GetKeysDataStore.js"),
    RemoveDataStore: require("./tools/RemoveDataStore.js"),
    SetDataStore: require("./tools/SetDataStore.js"),
    UpdateDataStore: require("./tools/UpdateDataStore.js")
}

module.exports = function (key, game_id) {
    const info = {
        _request: require("./request_api/request_api.js"),
        key,
        game_id
    }
    return (function () {
        let tools_ = {}
        for (let i in tools) {
            tools_[i] = tools[i](info)
        }
        return tools_;
    })()
}