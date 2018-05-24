var express = require('express');
const {
  getPlayoffSchedule
} = require('./../sportsfeed/nba.js');
const {
  getRegularSeason
} = require('./../sportsfeed/mlb.js');
const {
  findFutureGames
} = require('./../helper/date');
const PLAYOFF_SCHEDULE_2018 = require('../../results/full_game_schedule-nba-2018-playoff.json');
const MLB_REGULAR_SEASON_2018 = require('../../results/full_game_schedule-mlb-2018-2019-regular.json');


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
  const filteredGames = findFutureGames(data);
  res.send(filteredGames);
});

app.get('/mlb/regular/all', (req, res) => {
  getRegularSeason();
  const data = MLB_REGULAR_SEASON_2018.fullgameschedule.gameentry;
  res.send(data);
});

app.get('/mlb/regular/upcoming', (req, res) => {
  getRegularSeason();
  const data = MLB_REGULAR_SEASON_2018.fullgameschedule.gameentry;
  const filteredGames = findFutureGames(data);
  res.send(filteredGames);
})

app.use(function (req,res) {
    res.render('404', {url:req.url});
});



module.exports = {app};
