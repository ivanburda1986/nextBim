//DATA CONTROLLER
const DataCtrl = (function () {

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
    abstractStopDepartureCountdowns(placeData) {
      //console.log(placeData.data.monitors[0].lines[0].departures.departure[0].departureTime.countdown);
      let countdowns = [];
      placeData.data.monitors.forEach((monitor) => {
        monitor.lines.forEach((line) => {
          line.departures.departure.forEach((departure) => {
            countdowns.push(departure.departureTime.countdown);
          })
        })
      })
      console.log(countdowns);
    }
  }
})();


//Home --> Campus
//46: Schottentor>Absberggasse
//145: Aumannplatz>Schottentor

//https://api.allorigins.win/get?url=http://www.wienerlinien.at/ogd_realtime/monitor?stopId=147