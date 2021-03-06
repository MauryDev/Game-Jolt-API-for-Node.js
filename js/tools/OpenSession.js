var request, _key, _gameid;
function OpenSession(username, user_token, callback) {
    request({
        url: "/sessions/open/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return OpenSession;
};