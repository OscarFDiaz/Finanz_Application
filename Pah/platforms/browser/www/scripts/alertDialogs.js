function createAlertDialogToEditGoal() {
  let retrievedGoal = sessionStorage.getItem("sessionFindGoal");
  let parseGoal = JSON.parse(retrievedGoal);

  //Guardo el nombre por si el usuario lo edita
  localStorage.setItem("nameSaved", parseGoal.name);

  document.getElementById("editGoalName").value = parseGoal.name;
  document.getElementById("editGoalDescription").value = parseGoal.description;
  document.getElementById("editGoalMoney").value = parseGoal.actualMoney;
  document.getElementById("editActualGoalMoney").value = parseGoal.goalMoney;
  document.getElementById("editGoalDate").value = parseGoal.date;

  var dialog = document.getElementById("my-alert-dialog");

  if (dialog) {
    dialog.show();
  } else {
    ons.notification.toast(
      "No se ha podido cargar la ventana para modificar!",
      {
        title: "Aviso!",
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
  let actualMoney = document.getElementById("editGoalMoney").value;
  let goalMoney = document.getElementById("editActualGoalMoney").value;
  let goalDate = document.getElementById("editGoalDate").value;

  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  let sName = localStorage.getItem("nameSaved");

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].goalName == sName) {
      deleteGoalInsta(goals[i].goalName);

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
        let goalsArray = JSON.parse(localStorage.getItem("goalStorage"));
        goalsArray.push(updateGoalObject);
        localStorage.setItem("goalStorage", JSON.stringify(goalsArray));
      }

      localStorage.removeItem("nameSaved");
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
  document.getElementById("my-alert-dialog").hide();
}
