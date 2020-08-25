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

// GOALS GOALS GOALS GOALS GOALS GOALS
/*
  - Con esta función hago POP a la página y así regreso
  a la página anterior
*/
function functionPopPage() {
  const navigator = document.querySelector("#navigator");
  navigator.popPage();
}
