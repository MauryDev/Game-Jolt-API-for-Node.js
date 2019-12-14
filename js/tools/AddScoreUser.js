var request,_gameid,_key;
function AddScoreUser(score, sort, table_id, user,user_token, extra_data,callback) {
    request({
        url: "/scores/add/",
        _key,
        param: [
            ["score", score],
            ["sort", sort],
            ["table_id", table_id],
            ["user", user],
            ["user_token",user_token],
            ["extra_data", extra_data],
            ["game_id", _gameid]
        ]
    },callback);
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return AddScoreUser;
};