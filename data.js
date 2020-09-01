//DATA CONTROLLER
const DataCtrl = (function () {
  const appData = {
    minutesAumannplatzToSchottentor: 13,
    aumannplatzCountdowns: [],
    schottentorToWorkCountdowns: [],
    quartierbelvedereCountdowns: [],
    schottentorToAumannplatzCountdowns: [],
    schottentorToVinzenzgasseCountdowns: [],
  }

  return {
    //Returns app data
    getAppData: function () {
      return appData;
    },
    //Get info about a stop
    getStopData: async function (stopNumber, countdownsContainer, relevantTrams) {
      //const response = await fetch(`https://api.allorigins.win/get?url=http://www.wienerlinien.at/ogd_realtime/monitor?stopId=${stopNumber}`, {
      const response = await fetch(`mocks/${stopNumber}.json`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      DataCtrl.abstractStopDepartureCountdowns((data), countdownsContainer, relevantTrams);
      //DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), countdownsContainer, relevantTrams);
    },
    //Get countdowns for relevant means of transport of the stop
    abstractStopDepartureCountdowns: function (placeData, countdownsContainer, relevantTrams) {
      let departureSets = [];
      placeData.data.monitors.forEach((monitor) => {
        monitor.lines.forEach((line) => {
          if (relevantTrams.indexOf(line.name) != -1) {
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
      DataCtrl.storeCountdowns(countdowns, countdownsContainer);
    },
    storeCountdowns: function (countdowns, countdownsContainer) {
      if (countdownsContainer.id === 'aumannplatz-schottentor') {
        DataCtrl.getAppData().aumannplatzCountdowns = countdowns;
      };
      if (countdownsContainer.id === 'schottentor-quartierbelvedere') {
        DataCtrl.getAppData().schottentorToWorkCountdowns = countdowns;
      };
      if (countdownsContainer.id === 'quartierbelvedere-schottentor') {
        DataCtrl.getAppData().quartierbelvedereCountdowns = countdowns;
      };
      if (countdownsContainer.id === 'schottentor-aumannplatz') {
        DataCtrl.getAppData().schottentorToAumannplatzCountdowns = countdowns;
      };
      if (countdownsContainer.id === 'schottentor-vinzenzgasse') {
        DataCtrl.getAppData().schottentorToVinzenzgasseCountdowns = countdowns;
      };
    },
  }
})();


//Home --> Campus
//145: Aumannplatz>Schottentor
//46: Schottentor>Absberggasse
//111: Quartiert Belvedere - Nußdorf
//1212: Schottentor>Gersthof, Antonigasse, Grinzing

//https://api.allorigins.win/get?url=http://www.wienerlinien.at/ogd_realtime/monitor?stopId=147
//mocks/${stopNumber}.json