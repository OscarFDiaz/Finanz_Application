function createAlertDialogToAddExpense() {
  var dialog = document.getElementById("alertToAddExpense");

  if (dialog) {
    dialog.show();
  } else {
    ons.notification.toast(
      "Ups! No se ha podido cargar la ventana para añadir!",
      {
        title: "Error!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  }
}

function hideAlertExpense() {
  let eName = document.getElementById("alertExpenseNote").value;
  let eMoney = document.getElementById("alertExpenseMoney").value;
  let eDate = document.getElementById("alertExpenseDate").value;

  if (eName == null || eName == "") {
    ons.notification.toast("Ingresa la nota del gasto!", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  } else if (eMoney == null || eMoney == "") {
    ons.notification.toast("Ingresa la cantidad del gasto!", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  } else if (eDate == null || eDate == "") {
    eDate = new Date().toJSON().slice(0, 10);
  }

  // Obtengo el nombre del item, pero es necesario modificar el contador
  let expenseObject = sessionStorage.getItem("sessionFindExpense");

  let expenseDetail = {
    expenseName: expenseObject,
    inName: eName,
    inAmount: eMoney,
    inDate: eDate,
  };

  /* Guardo los detalles del Expense*/
  if (localStorage.getItem("expenseDetailStorage") === null) {
    let expenseDetailArray = [];
    expenseDetailArray.unshift(expenseDetail);
    localStorage.setItem(
      "expenseDetailStorage",
      JSON.stringify(expenseDetailArray)
    );
  } else {
    let expenseDetailArray = JSON.parse(
      localStorage.getItem("expenseDetailStorage")
    );
    expenseDetailArray.unshift(expenseDetail);
    localStorage.setItem(
      "expenseDetailStorage",
      JSON.stringify(expenseDetailArray)
    );
  }

  ons.notification.toast("Nuevo gasto añadido!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });

  sessionStorage.clear();
  document.getElementById("alertExpenseNote").value = null;
  document.getElementById("alertExpenseMoney").value = null;
  document.getElementById("alertExpenseDate").value = null;
  document.getElementById("alertToAddExpense").hide();
}

function hideAlertExpenseNoChange() {
  ons.notification.toast("No se ha modificado nada :)", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
  sessionStorage.clear();
  document.getElementById("alertExpenseNote").value = null;
  document.getElementById("alertExpenseMoney").value = null;
  document.getElementById("alertExpenseDate").value = null;
  document.getElementById("alertToAddExpense").hide();
}
