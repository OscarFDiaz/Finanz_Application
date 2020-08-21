/*var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
  labels: ["Saudi Arabia", "Russia", "Iraq", "United Arab Emirates", "Canada"],
  datasets: [
    {
      data: [133.3, 86.2, 52.2, 51.2, 50.2],
      backgroundColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
    },
  ],
};

var pieChart = new Chart(oilCanvas, {
  type: "pie",
  data: oilData,
});
*/

function makeChart() {
  var oilCanvas = document.getElementById("oilChart");

  var oilData = {
    labels: [
      "Saudi Arabia",
      "Russia",
      "Iraq",
      "United Arab Emirates",
      "Canada",
    ],
    datasets: [
      {
        data: [133.3, 86.2, 52.2, 51.2, 50.2],
        backgroundColor: [
          "#FF6384",
          "#63FF84",
          "#84FF63",
          "#8463FF",
          "#6384FF",
        ],
      },
    ],
  };

  var pieChart = new Chart(oilCanvas, {
    type: "doughnut",
    data: oilData,
  });
}

function changeTheme() {
  let actualThemeIndex = sessionStorage.getItem("themeIndex");

  if (actualThemeIndex == "0") {
    setTheme("theme-default");
  } else if (actualThemeIndex == "1") {
    setTheme("theme-dark");
  } else if (actualThemeIndex == "2") {
    setTheme("theme-light");
  } else if (actualThemeIndex == "3") {
    setTheme("theme-yuri");
  }
}

function getTheme(themeName) {
  let actualTheme = localStorage.getItem("userTheme");
  if (actualTheme == themeName || actualTheme === themeName) {
    return true;
  } else {
    return false;
  }
}

function setTheme(themeName) {
  if (getTheme(themeName)) {
    //EL TEMA SELECCIONADO YA ESTA PUESTO
    ons.notification.toast(
      "Actualmente tienes este tema puesto, esta chevere, verdad?",
      {
        title: "Aviso!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  } else {
    //Si no es el mismo tema lo cambio
    localStorage.setItem("userTheme", themeName);
    document.documentElement.className = themeName;
    ons.notification.toast(
      "Se cambio el tema correctamente, tienes buenos gustos!",
      {
        title: "Aviso!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  }
}

function getTotalMoney() {
  let arrayMoney = JSON.parse(localStorage.getItem("moneyStorage"));
  let amount = 0;
  for (let i = 0; i < arrayMoney.length; i++){
    amount += +arrayMoney[i].moneyCurrent;
  }
  return amount;
}

function getTotalSavings() {
  return 0;
}

function getTotalExpenses() {
  return true;
}

function getTotalGoals() {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));
  let goalsView = "";

  for (let i = 0; i < goals.length; i++) {
    let gName = goals[i].goalName;
    let gMoney = goals[i].goalMoney;
    let gAMoney = goals[i].goalActualMoney;

    let gPercent = getPercent(gMoney, gAMoney);

    goalsView += 
    `<label class="homeGoalLabel">${gName}</label>
    <div class="progressBarContainer">
      <div class="progressBarPercent" style="--width: ${gPercent};"></div>
    </div>`;
  }

  return goalsView;
}