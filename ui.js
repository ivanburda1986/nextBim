//UI CONTROLLER
const UICtrl = (function () {
  const AppData = DataCtrl.getAppData();

  const UISelectors = {
    aumannplatzSchottentor: document.querySelector("#aumannplatz-schottentor"),
    schottentorQuartierbelvedere: document.querySelector("#schottentor-quartierbelvedere"),
    quartierbelvedereSchottentor: document.querySelector("#quartierbelvedere-schottentor"),
    schottentorAumanPlatz: document.querySelector("#schottentor-aumannplatz"),
    schottentorVinzenzgasse: document.querySelector("#schottentor-vinzenzgasse"),
  }

  return {
    getSelectors: function () {
      return UISelectors;
    },
    displayCountdowns: function (countdowns, countdownsContainer) {
      countdownsContainer.innerHTML = "";
      countdowns.forEach((countdown) => {
        const countdownDisplay = document.createElement("div");
        countdownDisplay.innerHTML = `<p>${countdown}</p>`;
        countdownDisplay.classList.add('countdownDisplay');
        countdownDisplay.setAttribute('countdownValue', countdown);
        countdownsContainer.appendChild(countdownDisplay);
      });

    },
    evaluateAumannplatzDepartures: function (aumannplatzCountdowns = DataCtrl.getAppData().aumannplatzCountdowns, schottentorToWorkCountdowns = DataCtrl.getAppData().schottentorToWorkCountdowns) {
      let green = [];
      let yellow = [];
      let orange = [];
      let red = [];
      aumannplatzCountdowns.forEach((aumannplatzCountdown) => {
        let possibleSchottentorToWorkCountdowns = schottentorToWorkCountdowns.filter((item) => item > aumannplatzCountdown + AppData.minutesAumannplatzToSchottentor);
        // console.log(possibleSchottentorToWorkCountdowns);
        //console.log(`${aumannplatzCountdown}:${aumannplatzCountdown+AppData.minutesAumannplatzToSchottentor} - next suitable at Sch: ${possibleSchottentorToWorkCountdowns[0]}, diff: ${possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown+AppData.minutesAumannplatzToSchottentor)}`);
        if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + AppData.minutesAumannplatzToSchottentor) <= 3) {
          green.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + AppData.minutesAumannplatzToSchottentor) <= 5) {
          yellow.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + AppData.minutesAumannplatzToSchottentor) <= 7) {
          orange.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + AppData.minutesAumannplatzToSchottentor) > 7) {
          red.push(aumannplatzCountdown);
        }
      });
      //Take all countdowns from Aumannplatz to Schottentor and assign them color class based on what color-array they are located in
      Array.from(UICtrl.getSelectors().aumannplatzSchottentor.getElementsByClassName('countdownDisplay')).forEach((countdown) => {
        if (green.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('green');
        }
        if (yellow.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('yellow');
        }
        if (orange.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('orange');
        }
        if (red.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('red');
        }
      })
    },
    evaluateQuartierBelvedereDepartures: function (quartierbelvedereCountdowns = DataCtrl.getAppData().quartierbelvedereCountdowns, schottentorToAumannplatzCountdowns = DataCtrl.getAppData().schottentorToAumannplatzCountdowns, schottentorToVinzenzgasseCountdowns = DataCtrl.getAppData().schottentorToVinzenzgasseCountdowns) {
      let green = [];
      let yellow = [];
      let orange = [];
      let red = [];
      let schottentorToHomeCountdowns = [...new Set(schottentorToAumannplatzCountdowns.concat(schottentorToVinzenzgasseCountdowns))].sort((a, b) => a - b);
      quartierbelvedereCountdowns.forEach((quartierbelvedereCountdown) => {
        let possibleSchottentorHomeCountdowns = schottentorToHomeCountdowns.filter((item) => item > quartierbelvedereCountdown + AppData.minutesQuartierbelvedereToSchottentor);
        if (possibleSchottentorHomeCountdowns[0] - (quartierbelvedereCountdown + AppData.minutesQuartierbelvedereToSchottentor) <= 3) {
          green.push(quartierbelvedereCountdown);
        } else if (possibleSchottentorHomeCountdowns[0] - (quartierbelvedereCountdown + AppData.minutesQuartierbelvedereToSchottentor) <= 5) {
          yellow.push(quartierbelvedereCountdown);
        } else if (possibleSchottentorHomeCountdowns[0] - (quartierbelvedereCountdown + AppData.minutesQuartierbelvedereToSchottentor) <= 7) {
          orange.push(quartierbelvedereCountdown);
        } else if (possibleSchottentorHomeCountdowns[0] - (quartierbelvedereCountdown + AppData.minutesQuartierbelvedereToSchottentor) > 7) {
          red.push(quartierbelvedereCountdown);
        }
      });
      //Take all countdowns from Quartier Belvedete to Schottentor and assign them color class based on what color-array they are located in
      Array.from(UICtrl.getSelectors().quartierbelvedereSchottentor.getElementsByClassName('countdownDisplay')).forEach((countdown) => {
        if (green.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('green');
        }
        if (yellow.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('yellow');
        }
        if (orange.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('orange');
        }
        if (red.includes(parseInt(countdown.getAttribute('countdownValue')))) {
          countdown.classList.add('red');
        }

      })

    }
  }
})();