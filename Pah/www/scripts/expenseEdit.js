function editExpense(sendName) {
  sessionStorage.setItem("expenseNameEdit", sendName);

  const navigator = document.querySelector("#navigator");
  navigator.pushPage("editExpense.html");
}

function hideAlertExpenseEditNoChange() {
  document.getElementById("newExpenseNameEdit").value = null;
  document.getElementById("newExpenseColorEdit").value = "#ffffff";

  sessionStorage.clear();
  functionPopPage();
  ons.notification.toast("De acuerdo, todo normal!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });
}

function hideAlertExpenseEdit() {
  let oldName = sessionStorage.getItem("expenseNameEdit");
  let newName = document.getElementById("newExpenseNameEdit").value;
  let newColor = document.getElementById("newExpenseColorEdit").value;
  let newIcon = sessionStorage.getItem("expenseIconName");

  if (newName == null || newName == "null" || newName == "") {
    ons.notification.toast("Debes añadir un nuevo nombre al gasto!", {
      title: "Aviso!",
      timeout: 2000,
      animation: "ascend",
    });
    return;
  }

  let expenseStorage = JSON.parse(localStorage.getItem("expenseStorage"));
  let index, expense;

  for(let i = 0; i < expenseStorage.length; i++) {
    if (expenseStorage[i].expenseName == oldName) {
      index = i;

      expense = {
        expenseName: newName,
        totalExpense: expenseStorage[i].totalExpense,
        mainDate: expenseStorage[i].mainDate,
        iconName: newIcon,
        expenseColor: newColor
      };

      expenseStorage[index] = expense;
    }
  }

  if (localStorage.getItem("expenseStorage") === null) {
    let expenseArray = [];
    expenseArray.push(expense);
    localStorage.setItem("expenseStorage", JSON.stringify(expenseArray));
  } else {
    localStorage.setItem("expenseStorage", JSON.stringify(expenseStorage));
  }

  ons.notification.toast("Gasto modificado exitosamente!", {
    title: "Aviso!",
    timeout: 2000,
    animation: "ascend",
  });

  functionPopPage(2);
  sessionStorage.clear()
}

function loadIconsEdit(){
    let iconsView = document.getElementById("expenseIconListOfIconsEdit");
    iconsView.innerHTML = "";
  
    let iconColor = document.getElementById("newExpenseColorEdit").value;
  
    iconsView.innerHTML = `<i class="expenseIconList ion-md-airplane" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-airplane', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-alarm" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-alarm', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-flame" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-flame', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-aperture" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-aperture', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-baseball" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-baseball', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-basket" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-basket', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-basketball" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-basketball', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-beaker" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-beaker', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-beer" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-beer', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-bicycle" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-bicycle', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-boat" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-boat', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-body" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-body', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-book" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-book', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-brush" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-brush', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-build" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-build', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-bus" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-bus', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-cafe" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-cafe', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-car" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-car', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-cart" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-cart', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-cash" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-cash', '${iconColor}')"></i>
      <i class="expenseIconList ion-ios-paper" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-ios-paper', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-construct" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-construct', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-desktop" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-desktop', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-eye" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-eye', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-film" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-film', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-fitness" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-fitness', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-flask" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-flask', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-football" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-football', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-gift" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-gift', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-glasses" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-glasses', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-happy" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-happy', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-headset" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-headset', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-heart" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-heart', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-home" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-home', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-pricetags" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-pricetags', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-images" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-images', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-jet" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-jet', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-laptop" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-laptop', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-man" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-man', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-map" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-map', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-medkit" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-medkit', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-microphone" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-microphone', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-bookmarks" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-bookmarks', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-compass" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-compass', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-pin" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-pin', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-pizza" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-pizza', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-print" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-print', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-rose" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-rose', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-school" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-school', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-shirt" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-shirt', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-subway" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-subway', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-umbrella" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-umbrella', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-wallet" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-wallet', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-woman" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-woman', '${iconColor}')"></i>
      <i class="expenseIconList ion-md-wine" style="--expenseIconColor: ${iconColor}" onclick="selectIconEdit('ion-md-wine', '${iconColor}')"></i>`;
}

function selectIconEdit(iconName, iconColor) {

  sessionStorage.setItem("expenseIconName", iconName);
  // Oculto los iconos, ya tengo uno seleccionado
  document.getElementById("expandableListContainerEdit").hideExpansion();

  // Añado el icono seleccionado
  let iconElement = document.getElementById("expensePrevIconEdit");
  iconElement.className = '';
  iconElement.classList.add("expenseIcon");
  iconElement.classList.add(iconName);
  // Añado el color
  iconElement.style.cssText = `--expenseIconColorPrev: ${iconColor}`;
}

function changeTitlePreviewEdit() {
  let newTitle = document.getElementById("newExpenseNameEdit").value;
  let oldTitle = document.getElementById("expensePrevTitleEdit");

  if (newTitle == "" || newTitle == null) {
    oldTitle.innerHTML = `NOMBRE <i class="expenseIcon ion-md-laptop"></i>`;
  } else {
    oldTitle.innerHTML = "";
    oldTitle.innerHTML = newTitle;
  }
}