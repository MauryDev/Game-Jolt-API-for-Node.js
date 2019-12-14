var request, _key, _gameid;
function FetchDataStore(key, username, user_token, callback) {
    request({
        url: "/data-store/",
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
    return FetchDataStore;
};