//DATA CONTROLLER
const DataCtrl = (function () {
  const appData = {
    minutesAumannplatzToSchottentor: 13,
    aumannplatzCountdowns: [],
    schottentorCountdowns: [],
  }

  return {
    //Returns app data
    getAppData: function () {
      return appData;
    },
    //Get info about a stop
    getStopData: async function (stopNumber, countdownsContainer) {
      const response = await fetch(`mocks/${stopNumber}.json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      DataCtrl.abstractStopDepartureCountdowns((data), countdownsContainer); //JSON.parse(data.contents)
    },
    //Get countdowns for relevant means of transport of the stop
    abstractStopDepartureCountdowns: function (placeData, countdownsContainer) {
      let departureSets = [];
      placeData.data.monitors.forEach((monitor) => {
        monitor.lines.forEach((line) => {
          if (line.name === "D" || line.name === "40" || line.name === "41") {
            departureSets.push(line.departures.departure);
          }
        });
      });
      let countdowns = [];
      departureSets.forEach((set) => {
        set.forEach((item) => {
          countdowns.push(item.departureTime.countdown);
        })
      })
      countdowns.sort((a, b) => a - b);
      countdowns = countdowns.filter((item) => {
        if (item <= 60) {
          return item
        }
      });
      //console.log(countdowns);
      UICtrl.displayCountdowns(countdowns, countdownsContainer);
    }
  }
})();


//Home --> Campus
//46: Schottentor>Absberggasse
//145: Aumannplatz>Schottentor

//https://api.allorigins.win/get?url=http://www.wienerlinien.at/ogd_realtime/monitor?stopId=147
//mocks/${stopNumber}.json