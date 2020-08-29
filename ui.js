//UI CONTROLLER
const UICtrl = (function () {
  const UISelectors = {
    aumannplatzSchottentor: document.querySelector("#aumannplatz-schottentor"),
  }

  return {
    getSelectors: function () {
      return UISelectors;
    },
    displayCountdowns: function (target, countdowns) {
      countdowns.forEach((countdown) => {
        const countdownDisplay = document.createElement("div");
        countdownDisplay.innerHTML = `<p>${countdown}</p>`;
        countdownDisplay.classList.add('countdownDisplay');
        target.appendChild(countdownDisplay);
      });
    }
  }
})();