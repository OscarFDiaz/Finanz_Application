function pushTest() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("detailGoal.html");
}

function pushTest2() {
    const navigator = document.querySelector("#navigator");
    navigator.pushPage("detailSaving.html");    
}

function pushTest3() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("newGoal.html");    
}

function pushTest4() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("newMoney.html");    
}

function pushTest5() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("newExpense.html");    
}

function pushTest6() {
  const navigator = document.querySelector("#navigator");
  navigator.pushPage("detailExpense.html");    
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
