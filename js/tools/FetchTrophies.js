var request, _key, _gameid;
function FetchTrophies(username, user_token, trophy_id, achieved, callback) {
    request({
        url: "/trophies/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token],
            ["trophy_id", trophy_id],
            ["achieved", achieved]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return FetchTrophies;
};