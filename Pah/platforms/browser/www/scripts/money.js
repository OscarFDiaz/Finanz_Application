function makeNewMoney() {
  let moneyName = document.getElementById("newMoneyName").value;
  let moneyCurrent = document.getElementById("newMoneyMoney").value;

  if (moneyName === "") {
    ons.notification.toast("Un momento, se necesita un buen nombre!", {
      title: "Error!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  if (moneyCurrent === "") {
    moneyCurrent = "0.00";
  } else {
    moneyCurrent = parseFloat(moneyCurrent).toFixed(2);
  }

  let testMoney = Math.sign(moneyCurrent);
  if (testMoney == "-1" || testMoney === "-0") {
    ons.notification.toast(
      "No puedo añadir una cartera con dinero negativo, supondre que la cartera esta vacia.",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
    moneyCurrent = "0.00";
  }

  let money = {
    moneyName,
    moneyCurrent,
  };

  if (localStorage.getItem("moneyStorage") === null) {
    let moneyArray = [];
    moneyArray.push(money);
    localStorage.setItem("moneyStorage", JSON.stringify(moneyArray));
  } else {
    let moneyArray = JSON.parse(localStorage.getItem("moneyStorage"));
    moneyArray.push(money);
    localStorage.setItem("moneyStorage", JSON.stringify(moneyArray));
  }

  ons.notification.toast("Nuevo dinero añadido!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });

  getMoneys();
  functionPopPage();
}

function getMoneys() {
  let moneys = JSON.parse(localStorage.getItem("moneyStorage"));
  let moneyView = document.getElementById("moneyContainer");

  moneyView.innerHTML = "";

  let moneyTutorial = 
  `<ons-card>
    <ons-list style="background: none;" id="expenseListOfExpensesContainer">
      <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
        <label class="iconExpenseLabel" style="margin-left: 50px;">
          VER TUTORIAL
        </label>
        <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
          <p class="paraTutorial">
            Aquí podrás añadir el dinero que tienes guardado en algún otro lugar, por ejemplo; una alcancía, tu cartera o alguna tarjeta de nómina. 
          </p>
          <p class="paraTutorial">
            Se te pedirá ingresar un nombre y la cantidad actual del dinero que guardas en esa alcancía, cartera, tarjeta, etc.
          </p>
          <p class="paraTutorial">
            Se podrá realizar cualquier modificación que sea necesaria e incluso eliminarlo, pero recuerda que no puedes dejar una alcancía en números negativos. 
          </p>
          <p class="paraTutorial">
           En la pantalla principal "DINERO TOTAL" es una suma de la cantidad de dinero que tienes en tus alcancías."
          </p>
          <p class="paraTutorial">
            Para crear una pulsa "AÑADIR NUEVO".
          </p>
        </div>
      </ons-list-item>
    </ons-list>
  </ons-card>`;

  if (moneys == null || moneys == "null") {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if (tutorial == true || tutorial == "true") {
      moneyView.innerHTML += `${moneyTutorial}`;
    }
    return;
  } else if (moneys.length == 0) {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if (tutorial == true || tutorial == "true") {
      moneyView.innerHTML += `${moneyTutorial}`;
    }
    return;
  }

  for (let i = 0; i < moneys.length; i++) {
    let mName = moneys[i].moneyName;
    let mMoney = moneys[i].moneyCurrent;

    moneyView.innerHTML += `<ons-card>
        <div class="title moneyTitle">
          ${mName}
        </div>
        <div class="content">
          <label class="moneyInfo" id="${mName}-money">$ ${mMoney}</label>
        </div>
        <ons-button class="moneyButtonAdd" style="margin-bottom: 16px;" onclick="addMoneyTo('${mName}')" > 
          SUMAR / RESTAR
        </ons-button>
        <ons-button class="moneyButtonDe" style="margin-bottom: 16px;" onclick="deleteMoney('${mName}')" >
          ELIMINAR
        </ons-button>
      </ons-card>`;
  }
}

function deleteMoney(sendMoneyName) {
  ons.notification.confirm({
    message: "Estas seguro de borrar ese dinero?",
    title: "Aviso!",
    buttonLabels: ["Sí", "Cancelar"],
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: function (index) {
      if (0 === index) {
        let moneys = JSON.parse(localStorage.getItem("moneyStorage"));

        for (let i = 0; i < moneys.length; i++) {
          if (moneys[i].moneyName == sendMoneyName) {
            moneys.splice(i, 1);
            break;
          }
        }
        localStorage.setItem("moneyStorage", JSON.stringify(moneys));

        getMoneys();

        ons.notification.toast("Se ha elimindado el dinero seleccionado!", {
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

function addMoneyTo(sendMoneyName) {
  let moneys = JSON.parse(localStorage.getItem("moneyStorage"));

  for (let i = 0; i < moneys.length; i++) {
    let mName = moneys[i].moneyName;

    if (mName == sendMoneyName) {
      let mMoney = moneys[i].moneyCurrent;

      let findMoneyObject = {
        moneyName: mName,
        moneyCurrent: mMoney,
      };

      if (sessionStorage.getItem("sessionFindMoney") === null) {
        sessionStorage.setItem(
          "sessionFindMoney",
          JSON.stringify(findMoneyObject)
        );
      } else {
        sessionStorage.removeItem("sessionFindMoney");
        sessionStorage.setItem(
          "sessionFindMoney",
          JSON.stringify(findMoneyObject)
        );
      }
      createAlertDialogToEditMoneyMoney();
      break;
    }
  }
}

function makeSumMoney() {
  let actualAmount = document.getElementById("editMoneyActualMoney").textContent;
  let newAmount = document.getElementById("editOnlyMoneyMoney").value;

  let sumResult = parseFloat(parseFloat(actualAmount) + parseFloat(newAmount)).toFixed(2);

  document.getElementById("editMoneyEndMoney").innerHTML = sumResult;
  sessionStorage.setItem("addNewMoney", sumResult);
}
