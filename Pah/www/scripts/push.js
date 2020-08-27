function pushTest() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("detailGoal.html");
}

function pushTest2() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("detailSaving.html");
}

function pushToNewGoal() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("newGoal.html");
}

function pushToNewMoney() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("newMoney.html");
}

function pushToNewExpense() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("newExpense.html");
}

function pushTest6() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("detailExpense.html");
}

function pushToThemeSelector() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("themeSelector.html");
}

function pushToHomeOptions() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("homeOptions.html");
}

function pushToTutorialOptions() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("tutorialOptions.html");
}

function pushToDeleteOptions() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("deleteOptions.html");
}

function pushToEditTheme() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("customTheme.html");
}

function functionPopPage(timesS) {
  let time = timesS;
  if(time == null || time == "null" || time == ""){
    time = 1;
  }
  const navigator = document.querySelector("#navigator");
  navigator.popPage({times: time});
}
