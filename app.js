//APP CONTROLLER
const App = (function (DataCtrl, UICtrl) {

  return {
    init: function () {
      DataCtrl.getStopData(145, UICtrl.getSelectors().aumannplatzSchottentor, ["40", "41"]);
      DataCtrl.getStopData(46, UICtrl.getSelectors().schottentorQuartierbelvedere, ["D"]);
      DataCtrl.getStopData(111, UICtrl.getSelectors().quartierbelvedereSchottentor, ["D"]);
      DataCtrl.getStopData(1212, UICtrl.getSelectors().schottentorAumanPlatz, ["40", "41"]);
      DataCtrl.getStopData(1212, UICtrl.getSelectors().schottentorVinzenzgasse, ["42"]);
    }
  }
})(DataCtrl, UICtrl);
App.init();