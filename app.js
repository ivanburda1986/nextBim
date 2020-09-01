//APP CONTROLLER
const App = (function (DataCtrl, UICtrl) {

  return {
    init: function () {
      DataCtrl.getStopData(145)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().aumannplatzSchottentor, ["40", "41"]);
        });
      DataCtrl.getStopData(46)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().schottentorQuartierbelvedere, ["D"]);
        });
      DataCtrl.getStopData(111)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().quartierbelvedereSchottentor, ["D"]);
        });
      DataCtrl.getStopData(1212)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().schottentorAumanPlatz, ["40", "41"]);
        });
      DataCtrl.getStopData(1212)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().schottentorVinzenzgasse, ["42"]);
        });
    }
  }
})(DataCtrl, UICtrl);
App.init();
//DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), countdownsContainer, relevantTrams);