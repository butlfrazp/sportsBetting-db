var MySportsFeeds = require("mysportsfeeds-node");
const {username, password} = require("./tokens.js");

var msf = new MySportsFeeds("1.2", true);

msf.authenticate(username, password);

module.exports = {msf};
