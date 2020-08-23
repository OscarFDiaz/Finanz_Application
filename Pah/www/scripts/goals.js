/* 
  - Obtengo los datos de la nueva meta que se introdujo
  - Reviso si el objeto existe, sino lo pusheo a la lista de objetos
  - Actualizo los objetos del HTML
  - Mando update al usuario
  - Lo regreso a la pantalla
*/
function makeNewGoal() {
  let goalName = document.getElementById("newGoalName").value;
  let goalDescription = document.getElementById("newGoalDescription").value;
  let goalMoney = document.getElementById("newGoalMoney").value;
  let goalActualMoney = 0;
  let goalDate = document.getElementById("newGoalDate").value;

  //Compruebo que no hay campos vacios, en su defecto los lleno
  if (goalDescription === "") {
    goalDescription =
      "No existe una descripción para esta asombrosa meta. Puedes añadir una en el botón 'EDITAR META'";
  }

  if (goalDate === "") {
    goalDate = "SIN DATOS DE FECHA";
  }

  if (goalName === "") {
    ons.notification.toast("Un momento, una meta necesita un buen nombre!", {
      title: "Error!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  if (goalMoney === "") {
    ons.notification.toast("Un momento, cuanto dinero necesita tu meta?!", {
      title: "Error!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  let goalTest = Math.sign(goalMoney);
  if (goalTest == "-1" || goalTest == "-0") {
    ons.notification.toast("Un momento, no es posible añadir una meta en negativo, seria imposible de lograr.", {
      title: "Error!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  let goal = {
    goalName,
    goalDescription,
    goalMoney,
    goalActualMoney,
    goalDate,
  };

  if (localStorage.getItem("goalStorage") === null) {
    let goalsArray = [];
    goalsArray.push(goal);
    localStorage.setItem("goalStorage", JSON.stringify(goalsArray));
  } else {
    let goalsArray = JSON.parse(localStorage.getItem("goalStorage"));
    goalsArray.push(goal);
    localStorage.setItem("goalStorage", JSON.stringify(goalsArray));
  }

  ons.notification.toast("Nueva meta añadida!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  getGoals();
  functionPopPage();
}

/*
  - Consigo el local Storage y con un FOR lo voy cargando
*/
function getPercent(goalMoney, actualMoney) {
  return Math.round((actualMoney * 100) / goalMoney);
}

function getGoals() {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));
  let goalsView = document.getElementById("goalsContainer");

  goalsView.innerHTML = "";

  for (let i = 0; i < goals.length; i++) {
    let gName = goals[i].goalName;
    let gMoney = goals[i].goalMoney;
    let gAMoney = goals[i].goalActualMoney;
    let gDate = goals[i].goalDate;

    let gPercent = getPercent(gMoney, gAMoney);

    if (gDate === "") {
      gDate = "SIN DATOS DE FECHA";
    }

    // cambiar pushTest()
    goalsView.innerHTML += `<ons-card onclick="findGoal('${gName}')">
        <div class="title" id="titleGoal">
          ${gName}
        </div>
        <div class="content">
          <label id="goalInfo">$ ${gAMoney} de $ ${gMoney} | ${gDate}</label>
          <div class="progressBarContainer"> 
            <div class="progressBarPercent" style="--width: ${gPercent}" id="${gName}-pbar"></div> 
          </div> 
        </div>
      </ons-card>`;
  }
}

function findGoal(sendGoalName) {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  for (let i = 0; i < goals.length; i++) {
    let gName = goals[i].goalName;

    if (gName == sendGoalName) {
      let gDescription = goals[i].goalDescription;
      let gAMoney = goals[i].goalActualMoney;
      let gMoney = goals[i].goalMoney;
      let gDate = goals[i].goalDate;

      let findGoalObject = {
        name: gName,
        description: gDescription,
        actualMoney: gAMoney,
        goalMoney: gMoney,
        date: gDate,
      };

      if (sessionStorage.getItem("sessionFindGoal") === null) {
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findGoalObject)
        );
      } else {
        sessionStorage.removeItem("sessionFindGoal");
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findGoalObject)
        );
      }

      const navigator = document.querySelector("#navigator");
      navigator.pushPage("detailGoal.html");
    }
  }
}

function deleteGoal(sendGoalName) {
  ons.notification.confirm({
    message: "Estas seguro de borrar la meta?",
    title: "Aviso!",
    buttonLabels: ["Sí", "Cancelar"],
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: function (index) {
      if (0 === index) {
        let goals = JSON.parse(localStorage.getItem("goalStorage"));

        for (let i = 0; i < goals.length; i++) {
          if (goals[i].goalName == sendGoalName) {
            goals.splice(i, 1);
          }
        }
        localStorage.setItem("goalStorage", JSON.stringify(goals));

        getGoals();
        functionPopPage();

        ons.notification.toast("Se ha elimindado la meta seleccionada!", {
          title: "Aviso!",
          timeout: 2000,
          animation: "ascend",
        });
      } else {
        ons.notification.toast("De acuerdo, todo fluye como normalmente!", {
          title: "Aviso!",
          timeout: 1000,
          animation: "ascend",
        });
      }
    },
  });
}

function deleteGoalInsta(sendGoalName) {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  for (let i = 0; i < goals.length; i++) {
    if (goals[i].goalName == sendGoalName) {
      goals.splice(i, 1);
    }
  }
  localStorage.setItem("goalStorage", JSON.stringify(goals));
}

function editGoal(sendGoalName) {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  for (let i = 0; i < goals.length; i++) {
    let gName = goals[i].goalName;

    if (gName == sendGoalName) {
      let gDescription = goals[i].goalDescription;
      let gAMoney = goals[i].goalActualMoney;
      let gMoney = goals[i].goalMoney;
      let gDate = goals[i].goalDate;

      let findGoalObject = {
        name: gName,
        description: gDescription,
        actualMoney: gAMoney,
        goalMoney: gMoney,
        date: gDate,
      };

      if (sessionStorage.getItem("sessionFindGoal") === null) {
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findGoalObject)
        );
      } else {
        sessionStorage.removeItem("sessionFindGoal");
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findGoalObject)
        );
      }
    }
  }
  createAlertDialogToEditGoal();
}

function addMoneyGoal(sendGoalName) {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));

  for (let i = 0; i < goals.length; i++) {
    let gName = goals[i].goalName;

    if (gName == sendGoalName) {
      let gDescription = goals[i].goalDescription;
      let gAMoney = goals[i].goalActualMoney;
      let gMoney = goals[i].goalMoney;
      let gDate = goals[i].goalDate;

      let findGoalObject = {
        name: gName,
        description: gDescription,
        actualMoney: gAMoney,
        goalMoney: gMoney,
        date: gDate,
      };

      if (sessionStorage.getItem("sessionFindGoal") === null) {
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findGoalObject)
        );
      } else {
        sessionStorage.removeItem("sessionFindGoal");
        sessionStorage.setItem(
          "sessionFindGoal",
          JSON.stringify(findGoalObject)
        );
      }
    }
  }
  createAlertDialogToEditGoalMoney();
}
