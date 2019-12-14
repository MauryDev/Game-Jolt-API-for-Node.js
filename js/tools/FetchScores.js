var request,_key,_gameid;
function FetchScores(limit, table_id, username, user_token, guest, better_than, worse_than, callback) {
    request({
        url: "/scores/",
        _key: _key,
        param: [
            ["game_id", _gameid],
            ["limit", limit],
            ["table_id", table_id],
            ["username", username],
            ["user_token", user_token],
            ["guest", guest],
            ["better_than", better_than],
            ["worse_than", worse_than]
        ]
    }, callback)
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return FetchScores;
};