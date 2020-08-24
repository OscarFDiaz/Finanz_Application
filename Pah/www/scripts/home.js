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
  
  var config = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };

  loadChartData(config);
}

function loadChartData(expenseData) {

  let expenses = JSON.parse(localStorage.getItem("expenseStorage"));
  if (expenseData.datasets.length > 0) {

    if(expenses == null || expenses == "") {
      expenseData.labels.push("NO HAY GASTOS PARA MOSTRAR");
      expenseData.datasets[0].data.push("100");
      expenseData.datasets[0].backgroundColor.push(getComputedStyle(document.documentElement).getPropertyValue('--home-total-money'));
    } else {
      for(let i = 0; i < expenses.length; i++) {
        let eName = expenses[i].expenseName;
        let eColor = expenses[i].expenseColor;
        let eExpense = expenses[i].totalExpense;

        expenseData.labels.push(eName);
        expenseData.datasets[0].data.push(eExpense);
        expenseData.datasets[0].backgroundColor.push(eColor);
      }
    }
  }

  let expenseCanvas = document.getElementById("oilChart");
  Chart.defaults.global.defaultFontColor = getComputedStyle(document.documentElement).getPropertyValue('--card-text-title-color');
  Chart.defaults.global.defaultFontSize = 16;

  Chart.defaults.global.tooltips.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--toolbar-color');
  Chart.defaults.global.tooltips.titleFontSize = 20;

  Chart.defaults.global.elements.arc.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--card-back-color');
  Chart.defaults.global.elements.arc.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--card-back-color');
  Chart.defaults.global.elements.arc.borderWidth = 1;
  let pieChart = new Chart(expenseCanvas, {
    type: "doughnut",
    data: expenseData,
  });

  pieChart.update();
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

function checkOptions() {
  let totalMoney = localStorage.getItem("storageSwitchTotalMoney");
  if (totalMoney == "null" || totalMoney == null) {
    localStorage.setItem("storageSwitchTotalMoney", true);
  }

  let expenses = localStorage.getItem("storageSwitchExpenses");
  if (expenses == "null" || expenses == null) {
    localStorage.setItem("storageSwitchExpenses", true);
  }

  let savings = localStorage.getItem("storageSwitchSavings");
  if (savings == "null" || savings == null) {
    localStorage.setItem("storageSwitchSavings", true);
  }

  let goals = localStorage.getItem("storageSwitchGoals");
  if (goals == "null" || goals == null) {
    localStorage.setItem("storageSwitchGoals", true);
  }

  loadOptions();
}

function loadOptions() {
  
  let userHomeView = document.getElementById("homeOptionsContainer");
  userHomeView.innerHTML = "";

  let totalMoney = localStorage.getItem("storageSwitchTotalMoney");
  if (totalMoney == true || totalMoney == "true") {
    userHomeView.innerHTML += `<label class="cardHomeTitle">DINERO TOTAL</label>
    <ons-card onclick="fn.load('money.html')">
      <div class="title totalMoneyTitle" id="totalMoneyMoney">
      </div>
    </ons-card>`;
  }

  let expenses = localStorage.getItem("storageSwitchExpenses");
  if (expenses == true || expenses == "true") {
    userHomeView.innerHTML += `<label class="cardHomeTitle">GASTOS</label>
    <ons-card onclick="fn.load('expenses.html')" style="padding-top: 16px;">
      <div class="content">
        <canvas id="oilChart" width="400" height="400"></canvas>
      </div>
    </ons-card>`;
  }

  let savings = localStorage.getItem("storageSwitchSavings");
  if (savings == true || savings == "true") {
    userHomeView.innerHTML += `<label class="cardHomeTitle">FONDO AHORRADO</label>
    <ons-card onclick="fn.load('savings.html')">
      <div class="title totalMoneyTitle" id="totalSavingsAmount">
      </div>
    </ons-card>`;
  }

  let goals = localStorage.getItem("storageSwitchGoals");
  if (goals == true || goals == "true") {
    userHomeView.innerHTML += `<label class="cardHomeTitle">METAS</label>
    <ons-card onclick="fn.load('goals.html')">
      <div class="content" id="homeGoalsContainer"> 

      </div>
    </ons-card>`;
  }

  if (totalMoney == "false" && expenses == "false" && savings == "false" && goals == "false") {
    userHomeView.innerHTML = "";
    userHomeView.innerHTML += `<label class="cardHomeTitle">NADA POR AQUÍ...</label>`;
  }

  if (totalMoney == "true") {
    let amount = getTotalMoney();
    document.getElementById("totalMoneyMoney").innerHTML = "$ " + amount;
  }

  if (expenses == "true") {
    makeChart();
    //getTotalExpenses();
  }

  if (savings == "true") {
    let amount = getTotalSavings();
    document.getElementById("totalSavingsAmount").innerHTML = "$ " + amount;
  }

  if (goals == "true") {
    let goals = getTotalGoals();
    document.getElementById("homeGoalsContainer").innerHTML = goals;
  }
}

function getTotalMoney() {
  let arrayMoney = JSON.parse(localStorage.getItem("moneyStorage"));
  let amount = 0;
  if (arrayMoney == null || arrayMoney == "") {
    return amount;
  }
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

  if (goals == null || goals == "null") {
    goalsView += `<label class="homeGoalLabel" style="text-align:center; margin-bottom:0px">Nada por aquí...</label>`;
    return goalsView;
  }

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