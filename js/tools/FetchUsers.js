var request, _key, _gameid;
function FetchUsers(username, user_id, callback) {
    request({
        url: "/users/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["username", username],
            ["user_id", user_id]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return FetchUsers;
};