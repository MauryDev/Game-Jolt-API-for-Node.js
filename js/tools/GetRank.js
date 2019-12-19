var request,_key,_gameid;
function GetRank(sort, table_id, callback) {
    request({
        url: "/scores/get-rank/",
        _key: _key,
        param: [["game_id", _gameid], ["sort", sort], ["table_id", table_id]]
    }, callback);
}
module.exports = (that) => {
    request = that._request;
    _gameid = that.game_id;
    _key = that.key
    return GetRank;
};