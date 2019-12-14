var request, _key, _gameid;
function GetKeysDataStore(pattern, username, user_token, callback) {
    request({
        url: "/data-store/get-keys/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token],
            ["pattern", pattern]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return GetKeysDataStore;
};