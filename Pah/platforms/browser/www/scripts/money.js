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
    moneyCurrent = "0";
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

  ons.notification.toast("Nueva meta añadida!", {
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
    }
  }
  createAlertDialogToEditMoneyMoney();
}

function makeSumMoney(SendMoneyName) {
  let actualAmount = document.getElementById("editMoneyActualMoney")
    .textContent;
  let newAmount = document.getElementById("editOnlyMoneyMoney").value;

  let sumResult = +actualAmount + +newAmount;

  document.getElementById("editMoneyEndMoney").innerHTML = sumResult;
  sessionStorage.setItem("addNewMoney", sumResult);
}
