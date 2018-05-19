const {msf} = require('./config.js');

function getPlayoffSchedule() {
  const data = msf.getData('nba', '2017-playoff', 'full_game_schedule', 'json', {});
  return data;
}


module.exports = {getPlayoffSchedule}
