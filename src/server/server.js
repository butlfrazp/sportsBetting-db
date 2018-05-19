var express = require('express');
const {
  getPlayoffSchedule
} = require('./../sportsfeed/nba.js');
const PLAYOFF_SCHEDULE_2018 = require('../../results/full_game_schedule-nba-2018-playoff.json');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/nba/playoffs/all', (req, res) => {
  const data = getPlayoffSchedule();
  res.send(PLAYOFF_SCHEDULE_2018.fullgameschedule.gameentry);
});

app.get('/nba/playoffs/upcoming', (req, res) => {
  const currentDate = Date.now()
  getPlayoffSchedule();
  const data = PLAYOFF_SCHEDULE_2018.fullgameschedule.gameentry;
  const currentGames = data.filter(val => {
    const gameDate = new Date(val.date);
    if(gameDate.getTime() > currentDate) {
      return val;
    }
  });
  res.send(currentGames);
})


module.exports = {app};
