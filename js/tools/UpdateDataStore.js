var request, _key, _gameid;
function UpdateDataStore(key, username, user_token, operation, value,callback) {
    request({
        url: "/data-store/update/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token],
            ["key", key],
            ["value", value],
            ["operation", operation]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return UpdateDataStore;
};