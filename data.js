//DATA CONTROLLER
const DataCtrl = (function () {
  const minutesAumanPlatzToSchottentor = 13;

  return {
    //Get info about a stop
    getStopData: async function (stopNumber) {
      const response = await fetch(`mocks/${stopNumber}.json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      DataCtrl.abstractStopDepartureCountdowns((data)); //JSON.parse(data.contents)
    },
    //Get countdowns for relevant means of transport of the stop
    abstractStopDepartureCountdowns(placeData) {
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
      console.log(countdowns);
    }
  }
})();


//Home --> Campus
//46: Schottentor>Absberggasse
//145: Aumannplatz>Schottentor

//https://api.allorigins.win/get?url=http://www.wienerlinien.at/ogd_realtime/monitor?stopId=147