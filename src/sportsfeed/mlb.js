const {msf} = require('./config.js');

function getRegularSeason() {
  const  data = msf.getData( 'mlb', '2018-2019-regular', 'full_game_schedule', 'json', {});
  return data;
}

module.exports = {
  getRegularSeason
}
