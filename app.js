//APP CONTROLLER
const App = (function (DataCtrl, UICtrl) {
  //EVENT LISTENERS
  const loadEventListeners = function () {
    UICtrl.getSelectors().toWorkRoutes.addEventListener('click', (e) => {
      App.loadToWorkCountdowns();
    });
    UICtrl.getSelectors().backHomeRoutes.addEventListener('click', (e) => {
      App.loadToHomeCountdowns();
    });
  };


  return {
    init: function () {
      App.loadToWorkCountdowns();
      App.loadToHomeCountdowns();
      DataCtrl.swapToWorkToHomeBoxes();
      loadEventListeners();

    },
    loadToWorkCountdowns: function () {
      DataCtrl.getStopData(145)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().aumannplatzSchottentor, ["40", "41"]);
          //DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), UICtrl.getSelectors().aumannplatzSchottentor, ["40", "41"]);
        });
      DataCtrl.getStopData(46)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().schottentorQuartierbelvedere, ["D"]);
          //DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), UICtrl.getSelectors().schottentorQuartierbelvedere, ["D"]);
        });
    },
    loadToHomeCountdowns: function () {
      DataCtrl.getStopData(111)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().quartierbelvedereSchottentor, ["D"]);
          //DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), UICtrl.getSelectors().quartierbelvedereSchottentor, ["D"]);
        });
      DataCtrl.getStopData(1212)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().schottentorAumanPlatz, ["40", "41"]);
          //DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), UICtrl.getSelectors().schottentorAumanPlatz, ["40", "41"]);
        });
      DataCtrl.getStopData(1212)
        .then((data) => {
          DataCtrl.abstractStopDepartureCountdowns((data), UICtrl.getSelectors().schottentorVinzenzgasse, ["42"]);
          //DataCtrl.abstractStopDepartureCountdowns(JSON.parse(data.contents), UICtrl.getSelectors().schottentorVinzenzgasse, ["42"]);
        });
    }
  }
})(DataCtrl, UICtrl);
App.init();