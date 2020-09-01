//UI CONTROLLER
const UICtrl = (function () {
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
      UICtrl.evaluateAumannplatzDepartures();
    },
    evaluateAumannplatzDepartures: function (aumannplatzCountdowns = DataCtrl.getAppData().aumannplatzCountdowns, schottentorToWorkCountdowns = DataCtrl.getAppData().schottentorToWorkCountdowns) {
      let green = [];
      let yellow = [];
      let orange = [];
      let red = [];
      aumannplatzCountdowns.forEach((aumannplatzCountdown) => {
        let possibleSchottentorToWorkCountdowns = schottentorToWorkCountdowns.filter((item) => item > aumannplatzCountdown + 13);
        // console.log(possibleSchottentorToWorkCountdowns);
        //console.log(`${aumannplatzCountdown}:${aumannplatzCountdown+13} - next suitable at Sch: ${possibleSchottentorToWorkCountdowns[0]}, diff: ${possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown+13)}`);
        if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) <= 3) {
          green.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) <= 5) {
          yellow.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) <= 7) {
          orange.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) > 7) {
          red.push(aumannplatzCountdown);
        }
      });
      // console.log("green:" + green);
      // console.log("yellow:" + yellow);
      // console.log("orange:" + orange);
      // console.log("red:" + red);
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
    evaluateQuartierBelvedereDepartures: function (aumannplatzCountdowns = DataCtrl.getAppData().aumannplatzCountdowns, schottentorToWorkCountdowns = DataCtrl.getAppData().schottentorToWorkCountdowns) {
      let green = [];
      let yellow = [];
      let orange = [];
      let red = [];
      aumannplatzCountdowns.forEach((aumannplatzCountdown) => {
        let possibleSchottentorToWorkCountdowns = schottentorToWorkCountdowns.filter((item) => item > aumannplatzCountdown + 13);
        // console.log(possibleSchottentorToWorkCountdowns);
        //console.log(`${aumannplatzCountdown}:${aumannplatzCountdown+13} - next suitable at Sch: ${possibleSchottentorToWorkCountdowns[0]}, diff: ${possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown+13)}`);
        if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) <= 3) {
          green.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) <= 5) {
          yellow.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) <= 7) {
          orange.push(aumannplatzCountdown);
        } else if (possibleSchottentorToWorkCountdowns[0] - (aumannplatzCountdown + 13) > 7) {
          red.push(aumannplatzCountdown);
        }
      });
      // console.log("green:" + green);
      // console.log("yellow:" + yellow);
      // console.log("orange:" + orange);
      // console.log("red:" + red);
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

    }
  }
})();