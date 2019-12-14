var request,_gameid,_key;
function AddScoreGuest(score, sort, table_id, guest, extra_data,callback) {
    request({
        url: "/scores/add/",
        _key,
        param: [
            ["score", score],
            ["sort", sort],
            ["table_id", table_id],
            ["guest", guest],
            ["extra_data", extra_data],
            ["game_id", _gameid]
        ]
    },callback);
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return AddScoreGuest;
};