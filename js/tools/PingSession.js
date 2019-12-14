var request, _key, _gameid;
function PingSession(username, user_token, status, callback) {
    request({
        url: "/sessions/ping/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token],
            ["status", status]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return PingSession;
};