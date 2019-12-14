var request, _key, _gameid;
function AddAchieved(username, user_token, trophy_id, callback) {
    request({
        url: "/trophies/add-achieved/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_token", user_token],
            ["trophy_id", trophy_id]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return AddAchieved;
};