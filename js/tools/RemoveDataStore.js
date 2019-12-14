var request, _key, _gameid;
function RemoveDataStore(key, username, user_token, callback) {
    request({
        url: "/data-store/remove/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token],
            ["key", key]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return RemoveDataStore;
};