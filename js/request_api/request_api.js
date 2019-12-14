var request = require("request");
var hex_md5 = require("./md5.js");
function request_api(data, callback) {
    var gamejolt_api_url = "https://api.gamejolt.com/api/game/v1_2";
    gamejolt_api_url = gamejolt_api_url + data.url + "?" + param(data.param);
    gamejolt_api_url += signature(gamejolt_api_url, data._key);
    request.get(gamejolt_api_url,{
        json: true
    } ,function (err, res, body) {
        if (typeof callback === "function") callback(body.response);
    })
}
function param(arr) {
    return arr.filter(function (val) {
        return val[1] || val[1] === 0 ? true : false;
    }).map((val) => {
        val = val.map((val) => encodeURIComponent(val));
        return val.join("=")
    }).join("&");
}
function signature(url, key) {
    return "&signature=" + hex_md5(url + key);
}
module.exports = request_api;