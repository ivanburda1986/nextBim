//UI CONTROLLER
const UICtrl = (function () {
  const UISelectors = {
    aumannplatzSchottentor: document.querySelector("#aumannplatz-schottentor"),
    schottentorQuartierbelvedere: document.querySelector("#schottentor-quartierbelvedere"),
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
      if (countdownsContainer.id === 'aumannplatz-schottentor') {
        DataCtrl.getAppData().aumannplatzCountdowns = countdowns;
      };
      if (countdownsContainer.id === 'schottentor-quartierbelvedere') {
        DataCtrl.getAppData().schottentorCountdowns = countdowns;
      };
      UICtrl.evaluateAumannplatzDepartures()
    },
    evaluateAumannplatzDepartures: function (aumannplatzCountdowns = DataCtrl.getAppData().aumannplatzCountdowns, schottentorCountdowns = DataCtrl.getAppData().schottentorCountdowns) {
      let green = [];
      let yellow = [];
      let orange = [];
      let red = [];
      aumannplatzCountdowns.forEach((aumannplatzCountdown) => {
        let possibleSchottentorCountdowns = schottentorCountdowns.filter((item) => item > aumannplatzCountdown + 13);
        //console.log(`${aumannplatzCountdown}:${aumannplatzCountdown+13} - next suitable at Sch: ${possibleSchottentorCountdowns[0]}, diff: ${possibleSchottentorCountdowns[0] - (aumannplatzCountdown+13)}`);
        if (possibleSchottentorCountdowns[0] - (aumannplatzCountdown + 13) <= 3) {
          green.push(aumannplatzCountdown);
        } else if (possibleSchottentorCountdowns[0] - (aumannplatzCountdown + 13) <= 5) {
          yellow.push(aumannplatzCountdown);
        } else if (possibleSchottentorCountdowns[0] - (aumannplatzCountdown + 13) <= 7) {
          orange.push(aumannplatzCountdown);
        } else if (possibleSchottentorCountdowns[0] - (aumannplatzCountdown + 13) > 7) {
          red.push(aumannplatzCountdown);
        }
      });
      // console.log(aumannplatzCountdowns);
      // console.log(schottentorCountdowns);
      console.log(green);
      console.log(yellow);
      console.log(orange);
      console.log(red);
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