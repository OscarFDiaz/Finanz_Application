/*********************************************************/
// ALERT DIALOG PARA EDITAR UNA META COMPLETAMENTE
function createAlertDialogToEditGoal() {
  let retrievedGoal = sessionStorage.getItem("sessionFindGoal");
  let parseGoal = JSON.parse(retrievedGoal);

  //Guardo el nombre por si el usuario lo edita
  localStorage.setItem("nameSaved", parseGoal.name);

  document.getElementById("editGoalName").value = parseGoal.name;
  document.getElementById("editGoalDescription").value = parseGoal.description;
  document.getElementById("editGoalMoney").value = parseGoal.goalMoney;
  document.getElementById("editActualGoalMoney").value = parseGoal.actualMoney;
  document.getElementById("editGoalDate").value = parseGoal.date;

  var dialog = document.getElementById("my-alert-dialog");

  if (dialog) {
    dialog.show();
  } else {
    ons.notification.toast(
      "No se ha podido cargar la ventana para modificar!",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  }
}

function hideAlertDialog() {
  functionPopPage();
  let name = document.getElementById("editGoalName").value;
  let description = document.getElementById("editGoalDescription").value;
  let actualMoney = document.getElementById("editActualGoalMoney").value;
  let goalMoney = document.getElementById("editGoalMoney").value;
  let goalDate = document.getElementById("editGoalDate").value;

  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  let indexGoal;

  let sName = localStorage.getItem("nameSaved");

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].goalName == sName) {
      indexGoal = i; //Pongo la posición donde esta mi objeto que modificare
      //deleteGoalInsta(goals[i].goalName);

      let updateGoalObject = {
        goalName: name,
        goalDescription: description,
        goalActualMoney: actualMoney,
        goalMoney: goalMoney,
        goalDate: goalDate,
      };

      if (localStorage.getItem("goalStorage") === null) {
        let goalsArray = [];
        goalsArray.push(updateGoalObject);
        localStorage.setItem("goalStorage", JSON.stringify(goalsArray));
      } else {
        goals[indexGoal] = updateGoalObject;
        localStorage.setItem("goalStorage", JSON.stringify(goals));
      }
      localStorage.removeItem("nameSaved");
      sessionStorage.clear();
    }
  }

  document.getElementById("my-alert-dialog").hide();
  ons.notification.toast("Meta modificada exitosamente!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  getGoals();
}

function hideAlertNoChange() {
  ons.notification.toast("No se ha modificado la meta!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  sessionStorage.clear();
  document.getElementById("my-alert-dialog").hide();
}

/*********************************************************/
// ALERT DIALOG PARA EDITAR UNICAMENTE EL DINERO DE LA META

function makeSum() {
  let actualAmount = document.getElementById("editOnlyMoneyActualMoney")
    .textContent;
  let newAmount = document.getElementById("editOnlyGoalMoney").value;

  let sumResult = +actualAmount + +newAmount;

  document.getElementById("editOnlyEndMoney").innerHTML = sumResult;
  sessionStorage.setItem("addNewMoney", sumResult);
}
 
function createAlertDialogToEditGoalMoney() {
  let retrievedGoal = sessionStorage.getItem("sessionFindGoal");
  let parseGoal = JSON.parse(retrievedGoal);

  //Guardo el nombre por si el usuario lo edita
  localStorage.setItem("nameSaved", parseGoal.name);
  document.getElementById("editOnlyMoneyActualMoney").innerHTML =
    parseGoal.actualMoney;

  var dialog = document.getElementById("alertEditGoalMoney");

  if (dialog) {
    dialog.show();
  } else {
    ons.notification.toast(
      "No se ha podido cargar la ventana para modificar!",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  }
}

function hideAlertDialogMoney() {
  let newMoney = sessionStorage.getItem("addNewMoney");

  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  let indexGoal, updateGoalObject;

  let sName = localStorage.getItem("nameSaved");

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].goalName == sName) {
      indexGoal = i; //Pongo la posición donde esta mi objeto que modificare

      updateGoalObject = {
        goalName: sName,
        goalDescription: goals[i].goalDescription,
        goalActualMoney: newMoney,
        goalMoney: goals[i].goalMoney,
        goalDate: goals[i].goalDate,
      };

      document.getElementById("detailMoneyStatus").innerHTML = "";

      document.getElementById("detailMoneyStatus").innerHTML =
        "$ " + newMoney +
        " de $ " +
        updateGoalObject.goalMoney;

      if (localStorage.getItem("goalStorage") === null) {
        let goalsArray = [];
        goalsArray.push(updateGoalObject);
        localStorage.setItem("goalStorage", JSON.stringify(goalsArray));
      } else {
        goals[indexGoal] = updateGoalObject;
        localStorage.setItem("goalStorage", JSON.stringify(goals));
      }
      localStorage.removeItem("nameSaved");
    }
  }

  document.getElementById("alertEditGoalMoney").hide();

  ons.notification.toast("Meta modificada exitosamente!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });

  sessionStorage.clear();
  getGoals();
}

function hideAlertNoChangeMoney() {
  ons.notification.toast("No se ha modificado la meta!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  sessionStorage.clear();
  document.getElementById("alertEditGoalMoney").hide();
}
