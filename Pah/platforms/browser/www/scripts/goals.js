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
    ons.notification.toast(
      "Un momento, no es posible añadir una meta en negativo, seria imposible de lograr.",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
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

  if (goals == null || goals == "null") {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if (tutorial == true || tutorial == "true") {
      goalsView.innerHTML += `
      <ons-card>
        <ons-list style="background: none;" id="expenseListOfExpensesContainer">
          <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
            <label class="iconExpenseLabel" style="margin-left: 50px;">
              VER TUTORIAL
            </label>
            <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
              <p class="paraTutorial">
                Aquí podrás añadir esas metas que deseas cumplir, deberás añadir un nombre a la meta, cuanto dinero necesitas para cumplir esa meta,
                y si gustas una fecha, en la cual te gustaría cumplir esa meta.
              </p>
              <p class="paraTutorial">
                Posteriormente podrás añadir el dinero que vayas recaudando para esa meta y podrás ver un porcentaje, el cual indicara que tan lejos, 
                o cerca te encuentras de la meta.
              </p>
              <p class="paraTutorial">
                Podrás editar esta información cuantas veces quieras, e incluso eliminar la meta si ya no la deseas ver.
              </p>
              <p class="paraTutorial">
                Para crear una nueva meta pulsa "AÑADIR NUEVA".
              </p>
            </div>
          </ons-list-item>
        </ons-list>
      </ons-card>`;
      return;
    }
    return;
  } else if (goals.length == 0) {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if (tutorial == true || tutorial == "true") {
      goalsView.innerHTML += `
      <ons-card>
        <ons-list style="background: none;" id="expenseListOfExpensesContainer">
          <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
            <label class="iconExpenseLabel" style="margin-left: 50px;">
              VER TUTORIAL
            </label>
            <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
              <p class="paraTutorial">
                Aquí podrás añadir esas metas que deseas cumplir, deberás añadir un nombre a la meta, cuanto dinero necesitas para cumplir esa meta,
                y si gustas una fecha, en la cual te gustaría cumplir esa meta.
              </p>
              <p class="paraTutorial">
                Posteriormente podrás añadir el dinero que vayas recaudando para esa meta y podrás ver un porcentaje, el cual indicara que tan lejos, 
                o cerca te encuentras de la meta.
              </p>
              <p class="paraTutorial">
                Podrás editar esta información cuantas veces quieras, e incluso eliminar la meta si ya no la deseas ver.
              </p>
              <p class="paraTutorial">
                Para crear una nueva meta pulsa "AÑADIR NUEVA".
              </p>
            </div>
          </ons-list-item>
        </ons-list>
      </ons-card>`;
      return;
    }
    return;
  }

  for (let i = 0; i < goals.length; i++) {
    let gName = goals[i].goalName;
    let gMoney = goals[i].goalMoney;
    let gAMoney = goals[i].goalActualMoney;
    let gDate = goals[i].goalDate;

    let gPercent = getPercent(gMoney, gAMoney);

    let today = new Date().toJSON().slice(0, 10);
    let days = dateDiff(today, gDate);

    if (gDate === "") {
      gDate = "SIN DATOS DE FECHA";
    } else {
      if (Math.sign(days) == 1 || Math.sign(days) == "1") {
        gDate = days + " DÍAS RESTANTES";
      } else if (Math.sign(days) == "-1" || Math.sign(days) == -1) {
        gDate = "VENCIÓ HACE " + Math.abs(days) + " DÍAS";
      } else if (Math.sign(days) == "0" || Math.sign(days) == 0) {
        gDate = "HOY ES EL ÚLTIMO DÍA";
      }
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
      break;
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
            break;
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
      break;
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
      createAlertDialogToEditGoal();
      break;
    }
  }
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
      createAlertDialogToEditGoalMoney();
      break;
    }
  }
}

function loadDetailGoal() {
  document.getElementById("titleDetailGoal").innerHTML = "";

  let retrievedGoal = sessionStorage.getItem("sessionFindGoal");
  let parseGoal = JSON.parse(retrievedGoal);

  let gName = parseGoal.name;
  let gDescription = parseGoal.description;
  let gAMoney = parseGoal.actualMoney;
  let gMoney = parseGoal.goalMoney;
  let gDate = parseGoal.date;

  let gPercent = getPercent(gMoney, gAMoney);

  let today = new Date().toJSON().slice(0, 10);
  let days = dateDiff(today, gDate);
  
  if (Math.sign(days) == 1 || Math.sign(days) == "1") {
    gDate = days + " DÍAS RESTANTES";
  } else if (Math.sign(days) == "-1" || Math.sign(days) == -1) {
    gDate = "VENCIÓ HACE " + Math.abs(days) + " DÍAS";
  } else if (Math.sign(days) == "0" || Math.sign(days) == 0) {
    gDate = "HOY ES EL ÚLTIMO DÍA";
  }

  document.getElementById("titleDetailGoal").innerHTML = gName;

  let goalsView = document.getElementById("goalDetailContainer");
  goalsView.innerHTML = "";

  goalsView.innerHTML += 
    `<ons-card>
      <div class="title detailTitle">
        ${gName}
      </div>
      <div class="content detailInfo">
        <p>
          ${gDescription}
        </p>
      </div>
    </ons-card>

    <ons-card>
      <div class="title percentDetailTitle" id="${gName}-pnumber">
        ${gPercent}%
      </div>

      <div class="progressBarContainer percentBar"> 
        <div class="progressBarPercent" style="--width:${gPercent}" id="pbarDetail"></div> 
      </div> 

      <div class="content">
        <label class="moneyDetailGoal" id="detailMoneyStatus">
          $ ${gAMoney} de $ ${gMoney}
        </label>
        <label class="moneyDetailGoal">
          ${gDate}
        </label>
        <ons-button class="flatButton" style="margin-top: 16px;" onclick="addMoneyGoal('${gName}')">
          AÑADIR DINERO
        </ons-button>
      </div>
    </ons-card>

    <ons-button class="flatButtonLight" style="margin-bottom: 16px;" onclick="editGoal('${gName}')">
      EDITAR META
    </ons-button>
    
    <ons-button class="flatButton" style="margin-top: 16px; margin-bottom: 16px" onclick="deleteGoal('${gName}')">
          ELIMINAR META
    </ons-button>`;
}
