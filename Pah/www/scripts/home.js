
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
    deleteProperty();
    setTheme("theme-default");
  } else if (actualThemeIndex == "1") {
    deleteProperty();
    setTheme("theme-dark");
  } else if (actualThemeIndex == "2") {
    deleteProperty();
    setTheme("theme-light");
  } else if (actualThemeIndex == "3") {
    deleteProperty();
    setTheme("theme-yuri");
  } else if (actualThemeIndex == "4") {
    deleteProperty();
    setTheme("theme-pink");
  } else if (actualThemeIndex == "5") {
    initColors();
    setTheme("theme-custom");
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

  let tutorial = localStorage.getItem("storageSwitchTutorial");
  if (tutorial == "null" || tutorial == null) {
    localStorage.setItem("storageSwitchTutorial", true);
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
    goalsView += `<p class="homeGoalLabel" style="text-align:center; margin-bottom:0px">Nada por aquí...</p>`;
    return goalsView;
  }

  if (goals.length == 0 || goals.length < 1) {
    goalsView += `<p class="homeGoalLabel" style="text-align:center; margin-bottom:0px">Nada por aquí...</p>`;
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

function deleteAllData() {
  ons.notification.confirm({
    message: "Estas seguro de borrar TODO?",
    title: "Aviso!",
    buttonLabels: ["Sí", "Cancelar"],
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: function (index) {
      if (0 === index) {
          localStorage.clear();
          sessionStorage.clear();

          const navigator = document.querySelector("#navigator");
          navigator.resetToPage("splitterUser.html");
      } else {
        ons.notification.toast(
          "De acuerdo, todo fluye como normalmente!",
          {
            title: "Aviso!",
            timeout: 1000,
            animation: "ascend",
          }
        );
      }
    },
  });
}