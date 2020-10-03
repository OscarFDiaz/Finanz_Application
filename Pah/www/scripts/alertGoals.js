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
  
  let name = document.getElementById("editGoalName").value;
  let description = document.getElementById("editGoalDescription").value;
  let actualMoney = parseFloat(document.getElementById("editActualGoalMoney").value).toFixed(2);
  let goalMoney = document.getElementById("editGoalMoney").value;
  let goalDate = document.getElementById("editGoalDate").value;

  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  let indexGoal;

  let sName = localStorage.getItem("nameSaved");
  let testMoney = Math.sign(goalMoney);
  let testGMoney = Math.sign(actualMoney);

  if (testMoney == "-1" || testMoney === "-0") {
    ons.notification.toast("No es posible dejar una meta en numeros negativos, lo siento.", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  if (testGMoney == "-1" || testGMoney === "-0") {
    ons.notification.toast("No es posible dejar una meta en numeros negativos, lo siento.", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  if (goalDate === "") {
    goalDate = "SIN DATOS DE FECHA";
  }

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
      break;
    }
  }

  document.getElementById("my-alert-dialog").hide();
  ons.notification.toast("Meta modificada exitosamente!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  functionPopPage();
  getGoals();
}

function hideAlertNoChange() {
  ons.notification.toast("No se ha modificado la meta!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  localStorage.removeItem("nameSaved");
  sessionStorage.clear();
  document.getElementById("my-alert-dialog").hide();
}

/*********************************************************/
// ALERT DIALOG PARA EDITAR UNICAMENTE EL DINERO DE LA META

function makeSum() {
  let actualAmount = document.getElementById("editOnlyMoneyActualMoney").textContent;
  let newAmount = document.getElementById("editOnlyGoalMoney").value;

  let sumResult = parseFloat(parseFloat(actualAmount) + parseFloat(newAmount)).toFixed(2);

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
    document.getElementById("editOnlyGoalMoney").value = "";
    document.getElementById("editOnlyEndMoney").innerHTML = "";
    dialog.show();
  } else {
    ons.notification.toast(
      "Ups! No se ha podido cargar la ventana para modificar!",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  }
}

function hideAlertDialogMoney() {

  let element = document.getElementById("editOnlyGoalMoney").value;
  if(element === null || element === "" || element == ""){
    ons.notification.toast("Ingresa cuanto dinero deseas añadir, por favor!", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  let newMoney = sessionStorage.getItem("addNewMoney");
  let testMoney = Math.sign(newMoney);
  if(testMoney == "-1" || testMoney === "-0") {
    ons.notification.toast("No es posible dejar una meta en numeros negativos, lo siento.", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

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
      
      // Modifico los elementos para actualizar el dinero y % mostrado
      let calculatedPercent = getPercent(updateGoalObject.goalMoney, newMoney);
      document.getElementById(sName+"-pnumber").innerHTML = "";
      document.getElementById(sName+"-pnumber").innerHTML = calculatedPercent + "%";
      
      document.getElementById("pbarDetail").style.setProperty('--width', calculatedPercent);
      
      // Modifico los elementos para mostrar la cantidad de dinero actualizada
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
      // Checo como voy de dinero conforme a lo requerido en la meta.
      let testElement = Math.sign(element);
      if (testElement == "-1") {
        ons.notification.toast("Meta modificada exitosamente!, retrocedimos un poco, pero esta bien!", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      } else if (newMoney < updateGoalObject.goalMoney) {
        ons.notification.toast("Meta modificada exitosamente!, nos acercamos a la meta!", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      } else if (newMoney === updateGoalObject.goalMoney) {
        ons.notification.toast("Meta modificada exitosamente!, hemos llegado a la meta!", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      } else {
        ons.notification.toast("Meta modificada exitosamente!", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      }
      localStorage.removeItem("nameSaved");
      break;
    }
  }

  document.getElementById("editOnlyGoalMoney").value = null;
  document.getElementById("alertEditGoalMoney").hide();

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
