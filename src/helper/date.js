var moment = require('moment');

function findFutureGames(data) {
  const now = Date.now();
  const filteredGames = data.filter(e => {
    const YMD = e.date.split("-");
    const HM = e.time.split(":");

    const minute = HM[1].slice(0, 2)
    const AMPM = HM[1].slice(2);

    const hour = AMPM == "PM" && parseInt(HM[0]) != 12 ? parseInt(HM[0]) + 12 : parseInt(HM[0]);

    const date = moment([parseInt(YMD[0]), parseInt(YMD[1]) - 1, parseInt(YMD[2]), hour, parseInt(minute), 0, 0]);
    if (date.toDate().getTime() > now) {
      return e;
    }
  });
  return filteredGames
}

module.exports = {findFutureGames};
