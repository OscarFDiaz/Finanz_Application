function makeSaving() {
  /* OBETENER VARIABLES */
  let mainAmount = document.getElementById("savingMainAmount").value;
  let rangeDays = document.getElementById("rangeDays").value;
  let rangePercent = document.getElementById("rangePercent").value;

  if (mainAmount == null || mainAmount == "null" || mainAmount == "") {
    ons.notification.toast(
      "Un momento, tienes que ingresar una cantidad antes!",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
    return;
  }

  let storage = JSON.parse(localStorage.getItem("savingStorage"));

  if (storage) {
    ons.notification.confirm({
      message:
        "Ya existe un fondo, quieres borrar el actual e ingresar este nuevo?",
      title: "Aviso!",
      buttonLabels: ["Sí", "Cancelar"],
      animation: "default",
      primaryButtonIndex: 1,
      cancelable: true,
      callback: function (index) {
        if (0 === index) {
          rangeDays = returnDays(rangeDays);
          let equivalentAmount =
            (parseInt(rangePercent) * parseFloat(mainAmount)) / 100;
          let toExpend = (
            parseFloat(equivalentAmount) / parseInt(rangeDays)
          ).toFixed(2);
          let daysLeft = rangeDays;
          let moneyLeft = toExpend;

          let saving = {
            mainAmount,
            rangeDays,
            rangePercent,
            equivalentAmount,
            toExpend,
            daysLeft,
            moneyLeft,
          };

          localStorage.setItem("savingStorage", JSON.stringify(saving));
          updateLastSaving();
          functionPopPage();
          loadSaving();

          ons.notification.toast("Se ha actualizado el fondo!", {
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
  } else {
    rangeDays = returnDays(rangeDays);
    let equivalentAmount =
      (parseInt(rangePercent) * parseFloat(mainAmount)) / 100;
    let toExpend = (parseFloat(equivalentAmount) / parseInt(rangeDays)).toFixed(
      2
    );
    let daysLeft = rangeDays;
    let moneyLeft = toExpend;

    let saving = {
      mainAmount,
      rangeDays,
      rangePercent,
      equivalentAmount,
      toExpend,
      daysLeft,
      moneyLeft,
    };

    localStorage.setItem("savingStorage", JSON.stringify(saving));
    updateLastSaving();
    functionPopPage();
    loadSaving();

    ons.notification.toast("Se ha ingresado el fondo!", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
  }
}

function updateSavingPreview() {
  let mainAmount = document.getElementById("savingMainAmount").value;
  let rangeDays = document.getElementById("rangeDays").value;
  let rangePercent = document.getElementById("rangePercent").value;

  if (mainAmount == null || mainAmount == "null" || mainAmount == "") {
    mainAmount = 0;
  }

  // el range llega al 100 la función me regresa un numero entre 1 y 31
  rangeDays = returnDays(rangeDays);

  let equivalentAmount =
    (parseInt(rangePercent) * parseFloat(mainAmount)) / 100;

  /* Update del preview */
  document.getElementById("entryAmount").innerHTML = mainAmount;
  document.getElementById("entryDays").innerHTML = rangeDays;
  document.getElementById("entryPercent").innerHTML =
    rangePercent + "% | $ " + equivalentAmount;
  let toExpend = (parseFloat(equivalentAmount) / parseInt(rangeDays)).toFixed(
    2
  );
  document.getElementById("entryExpend").innerHTML = toExpend;

  /*Update de los range*/
  document.getElementById("rangeSelectDays").innerHTML = rangeDays;
  document.getElementById("rangeSelectPercent").innerHTML = rangePercent + "%";
}

function updateLastSaving() {
  let savingStorage = JSON.parse(localStorage.getItem("savingStorage"));
  let cSavingView = document.getElementById("actualSavingContainer");

  if (savingStorage == null || savingStorage == "null") {
    cSavingView.innerHTML = `<label class="cardHomeTitle" style="margin-top: 0px">NO HAY UN FONDO ACTIVO...</label>`;
    return;
  } else {
    cSavingView.innerHTML = `<label class="entryAmountText"
        >CANTIDAD INGRESADA: <span class="entryAmountDetail">$ </span>
        <span id="entryCurrentAmount" class="entryAmountDetail">0</span></label
        >

        <label class="entryAmountText"
        >DÍAS:
        <span id="entryCurrentDays" class="entryAmountDetail"></span></label
        >

        <label class="entryAmountText"
        >PORCENTAJE:
        <span id="entryCurrentPercent" class="entryAmountDetail"></span
        ></label
        >

        <label class="entryAmountText"
        >PARA GASTAR: <span class="entryAmountDetail">$ </span>
        <span id="entryCurrentExpend" class="entryAmountDetail">0</span
        ></label
        >`;
  }

  let sInnerAmount = savingStorage.mainAmount;
  let sDaysSelected = savingStorage.rangeDays;
  let sPercent = savingStorage.rangePercent;
  let sTakedAmount = savingStorage.equivalentAmount;
  let sMoneyDay = savingStorage.toExpend;
  let sDaysLeft = savingStorage.daysLeft;
  let sMoneyDayLeft = savingStorage.moneyLeft;

  document.getElementById("entryCurrentAmount").innerHTML = sInnerAmount;
  document.getElementById("entryCurrentDays").innerHTML = sDaysSelected;
  document.getElementById("entryCurrentPercent").innerHTML =
    sPercent + "% | $ " + sTakedAmount;
  document.getElementById("entryCurrentExpend").innerHTML = sMoneyDay;
}

function loadSaving() {
  let sView = document.getElementById("savingMainContainer");
  let savingStorage = JSON.parse(localStorage.getItem("savingStorage"));

  sView.innerHTML = "";

  if (savingStorage == null || savingStorage == "null") {
    let tutorial = localStorage.getItem("storageSwitchTutorial");
    if (tutorial == true || tutorial == "true") {
      sView.innerHTML += `
      <ons-card>
        <ons-list style="background: none;" id="expenseListOfExpensesContainer">
          <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
            <label class="iconExpenseLabel" style="margin-left: 50px;">
              VER TUTORIAL
            </label>
            <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
              <p class="paraTutorial">
                TEXTO AQUI
              </p>
            </div>
          </ons-list-item>
        </ons-list>
      </ons-card>`;
    }
    return;
  }

  let sInnerAmount = savingStorage.mainAmount;
  let sDaysSelected = savingStorage.rangeDays;
  let sPercent = savingStorage.rangePercent;
  let sTakedAmount = savingStorage.equivalentAmount;
  let sMoneyDay = savingStorage.toExpend;
  let sDaysLeft = savingStorage.daysLeft;
  let sMoneyDayLeft = savingStorage.moneyLeft;

  sView.innerHTML = `<ons-card>
        <div class="title mainTitle">
            FONDO
        </div>
        <div class="content">
            <label id="savingsInfo" class="savingInfo">$${sTakedAmount} / $${sMoneyDay}</label>
        </div>
    </ons-card>

    <ons-card>
        <div class="title savingTitle">
            DISPONIBLE
        </div>
        <div class="content">
            <label id="savingsDailyInfo" class="savingDaily">$${sMoneyDayLeft}</label>
            <ons-button class="flatButton" onclick="editMoneySaving()">AÑADIR / QUITAR</ons-button>
        </div>
    </ons-card>

    <ons-card>
        <div class="title daysTitle">
            DÍAS RESTANTES | <span id="savingsDays" class="leftDays">${sDaysLeft}</span>
        </div>
        <div class="content">
            <ons-button class="flatButtonLight" onclick="endSavingDay()">TERMINAR DÍA</ons-button>
        </div>
    </ons-card>`;
}

function loadDetailSaving() {
  updateSavingPreview();
  updateLastSaving();
}

function returnDays(days) {
  let dd = parseInt(days);
  if (dd < 4) {
    return 1;
  } else if (dd > 3 && dd < 7) {
    return 2;
  } else if (dd > 6 && dd < 10) {
    return 3;
  } else if (dd > 9 && dd < 13) {
    return 4;
  } else if (dd > 12 && dd < 16) {
    return 5;
  } else if (dd > 15 && dd < 19) {
    return 6;
  } else if (dd > 18 && dd < 22) {
    return 7;
  } else if (dd > 21 && dd < 25) {
    return 8;
  } else if (dd > 24 && dd < 28) {
    return 9;
  } else if (dd > 27 && dd < 31) {
    return 10;
  } else if (dd > 30 && dd < 34) {
    return 11;
  } else if (dd > 33 && dd < 37) {
    return 12;
  } else if (dd > 36 && dd < 40) {
    return 13;
  } else if (dd > 39 && dd < 43) {
    return 14;
  } else if (dd > 42 && dd < 48) {
    return 15; ////
  } else if (dd > 47 && dd < 51) {
    return 16;
  } else if (dd > 50 && dd < 54) {
    return 17;
  } else if (dd > 53 && dd < 57) {
    return 18;
  } else if (dd > 56 && dd < 60) {
    return 19;
  } else if (dd > 59 && dd < 63) {
    return 20;
  } else if (dd > 62 && dd < 66) {
    return 21;
  } else if (dd > 65 && dd < 69) {
    return 22;
  } else if (dd > 68 && dd < 72) {
    return 23;
  } else if (dd > 71 && dd < 75) {
    return 24;
  } else if (dd > 74 && dd < 78) {
    return 25;
  } else if (dd > 77 && dd < 81) {
    return 26;
  } else if (dd > 80 && dd < 84) {
    return 27;
  } else if (dd > 83 && dd < 87) {
    return 28;
  } else if (dd > 86 && dd < 90) {
    return 29;
  } else if (dd > 89 && dd < 95) {
    return 30; ///
  } else if (dd > 94 && dd < 101) {
    return 31; ///
  }
}

function endSavingDay() {
  /*
    - Preguntar si desea terminar el día
      - Si responde que sí 
        - Verificar si quedó dinero restante
          - Si quedo dinero restante:
                    Quedo: $60
              Añadir al día siguiente
              { - Conseguir dinero para gastar y añadir al que se mostrara }
              Añadir a DINERO
              { - Cargar "DINERO" para seleccionar cual cargar }
              // SELECCIONAR UNA SÍ O SÍ
          - Sino Terminar día y hacer los cambios necesarios
      - Sino no hacer nada
  */
  ons.notification.confirm({
    message: "Estas seguro de terminar el día?",
    title: "Aviso!",
    buttonLabels: ["Sí", "Cancelar"],
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: function (index) {
      if (0 === index) {
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

/* ABRE EL ALERT PARA EDITAR EL SAVING*/
function editMoneySaving() {
  var dialog = document.getElementById("alertEditSavingMoney");
  let storage = JSON.parse(localStorage.getItem("savingStorage"));

  document.getElementById("alertAddSaving").innerHTML = storage.moneyLeft;
  document.getElementById("alertInputSaving").value = "";
  document.getElementById("alertAddSavingEnd").innerHTML = "";

  if (dialog) {
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

function makeSavingOperation() {
  let actualMoney = document.getElementById("alertAddSaving").textContent;
  let inputMoney = document.getElementById("alertInputSaving").value;
  let endMoney = document.getElementById("alertAddSavingEnd");

  let testAmoney = Math.sign(parseFloat(actualMoney));
  let result;

  // Si el dinero actual es negativo
  if (testAmoney == "-1" || testAmoney === "-0") {
    result = parseFloat(actualMoney) - parseFloat(inputMoney);
    endMoney.innerHTML = result;
  } else {
    result = parseFloat(actualMoney) + parseFloat(inputMoney);
    endMoney.innerHTML = result;
  }
}

function closeAlertSavingNoChange() {
  var dialog = document.getElementById("alertEditSavingMoney");

  ons.notification.toast("No se modifica nada!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });

  sessionStorage.clear();
  document.getElementById("alertEditSavingMoney").hide();
}

function closeAlertSaving() {
  let element = document.getElementById("alertInputSaving").value;

  if (element === null || element === "" || element == "") {
    ons.notification.toast(
      "Ingresa cuanto dinero deseas añadir/quitar, por favor!",
      {
        title: "Aviso!",
        timeout: 2000,
        animation: "ascend",
      }
    );
    return;
  }

  let actualMoney = parseFloat(
    document.getElementById("alertAddSaving").textContent
  );
  let endMoney = parseFloat(
    document.getElementById("alertAddSavingEnd").textContent
  );

  let testMoney = Math.sign(endMoney);
  if (testMoney == "-1" || testMoney === "-0") {
    ons.notification.toast("No puedes dejar tu fondo negativo, lo siento...", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  /* Se hizo una resta */
  if (actualMoney > endMoney) {
    let storage = JSON.parse(localStorage.getItem("savingStorage"));
    storage.moneyLeft = endMoney;
    localStorage.setItem("savingStorage", JSON.stringify(storage));
    document.getElementById("alertEditSavingMoney").hide();

    /* Preguntar si deseo añadir eso como gasto */
    ons.notification.confirm({
      message: "Has reducido el dinero disponible. Quieres añadir un gasto?",
      title: "Aviso!",
      buttonLabels: ["Sí", "No"],
      animation: "default",
      primaryButtonIndex: 1,
      cancelable: true,
      callback: function (index) {
        if (0 === index) {
          /* ABRIR VENTANA PARA AÑADIR UN GASTO A ALGUNA CATEGORÍA DE GASTO */
          var dialog = document.getElementById("alertToAddExpenseSaving");

          document.getElementById("alertExpenseNoteSaving").value = "";
          document.getElementById("alertExpenseMoneySaving").value = Math.abs(
            element
          );
          document.getElementById("alertExpenseDateSaving").value = "";

          if (dialog) {
            dialog.show();
            //TODO: CARGAR CATEGORÍAS DISPONIBLES Y CARGAR DONDE SE PUEDE RESTAR EL DINERO
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
          loadSaving();
        } else {
          ons.notification.toast(
            "De acuerdo, sólo se ha reducido el dinero disponible!",
            {
              title: "Aviso!",
              timeout: 1000,
              animation: "ascend",
            }
          );
          loadSaving();
        }
      },
    });
  } else if (actualMoney < endMoney) {
    // Se hizo una suma
    let storage = JSON.parse(localStorage.getItem("savingStorage"));
    storage.moneyLeft = endMoney;
    localStorage.setItem("savingStorage", JSON.stringify(storage));

    ons.notification.toast("Se ha aumentado el dinero disponible!", {
      title: "Aviso!",
      timeout: 1000,
      animation: "ascend",
    });

    document.getElementById("alertEditSavingMoney").hide();
    loadSaving();
  }
}

function hideAlertAddExpenseSaving() {
  // TODO: Añadir el gasto a donde corresponde
}

function hideAlertAddExpenseSavingNoChange() {
  ons.notification.toast("De acuerdo, no se añadira ningún gasto!", {
    title: "Aviso!",
    timeout: 1000,
    animation: "ascend",
  });

  document.getElementById("alertToAddExpenseSaving").hide();
}
