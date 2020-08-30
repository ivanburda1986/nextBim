//APP CONTROLLER
const App = (function (DataCtrl, UICtrl) {

  return {
    init: function () {
      DataCtrl.getStopData(145, UICtrl.getSelectors().aumannplatzSchottentor);
      DataCtrl.getStopData(46, UICtrl.getSelectors().schottentorQuartierbelvedere);
    }
  }
})(DataCtrl, UICtrl);
App.init();