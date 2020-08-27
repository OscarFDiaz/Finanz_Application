function setTutorial() {
  let container = document.getElementById("customThemeTutorialContainer");
  container.innerHTML = "";

  let tutorial = localStorage.getItem("storageSwitchTutorial");
  if (tutorial == true || tutorial == "true") {
    container.innerHTML += `
      <ons-card>
        <ons-list style="background: none;" id="expenseListOfExpensesContainer">
          <ons-list-item id="expandableListContainer" expandable style="margin-top: 0px;">
            <label class="iconExpenseLabel" style="margin-left: 50px;">
              VER TUTORIAL
            </label>
            <div class="expandable-content" id="expenseListOfExpenses" style="grid-template-columns: 1fr;">
              <p class="paraTutorial">
                Aquí podrás personalizar los colores de la aplicación, conforme los vayas cambiando se iran aplicando, puedes personalizar el tema cuantas
                veces quieras.
              </p>
              <p class="paraTutorial">
                Dado que la aplicación tiene muchos elementos habrá muchas opciones de personalización.
              </p>
              <p class="paraTutorial">
                La selección de colores será por
              </p>
            </div>
          </ons-list-item>
        </ons-list>
      </ons-card>`;
    return;
  }
}

/* CARGA LOS COLORES CUANDO SE INTENTA PERSONALIZAR EL TEMA*/
function setColors() {
  let color = localStorage.getItem("--gradient-1");
  if(color == null){
    localStorage.setItem("--gradient-1", "#0d2840")
  } else {
    document.getElementById("gradient-1").value = color;
    updateColor("--gradient-1", color);
  }
}

/* CARGA LOS COLORES CUANDO SE SELECCIONA EL TEMA PERSONALIZADO*/
function initColors() {
  let color = localStorage.getItem("--gradient-1");
  if(color == null){
    localStorage.setItem("--gradient-1", "#0d2840")
  } else {
    updateColor("--gradient-1", color);
  }
}

/* CARGA EL COLOR EN LA APLICACIÓN*/
function updateColor(name, value) {
  document.documentElement.style.setProperty(name, value);
}

/* MIENTRAS SE EDITA EL COLOR SE ACTUALIZA E IGUALMENTE SE GUARDA*/
function cssVar(name, value){

  //setColors();
  if(name[0]!='-') {
    name = '--'+name; //allow passing with or without --
  }

  if(value) {
    document.documentElement.style.setProperty(name, value);
  }
  localStorage.setItem(name, value);

  return getComputedStyle(document.documentElement).getPropertyValue(name);
}


/* BORRDA TODAS LAS PROPIEDADES PARA PERMITIR A LOS DEMAS TEMAS*/
function deleteProperty() {
  document.documentElement.style.removeProperty('--gradient-1');
  document.documentElement.style.removeProperty('--gradient-2');
  document.documentElement.style.removeProperty('--spiner-back-color');
  document.documentElement.style.removeProperty('--spiner-front-color');
  document.documentElement.style.removeProperty('--icon-home');
  document.documentElement.style.removeProperty('--icon-goals');
  document.documentElement.style.removeProperty('--icon-savings');
  document.documentElement.style.removeProperty('--icon-expenses');
  document.documentElement.style.removeProperty('--icon-money');
  document.documentElement.style.removeProperty('--icon-config');
  document.documentElement.style.removeProperty('--menu-icon-color');
  document.documentElement.style.removeProperty('--menu-font-color');
  document.documentElement.style.removeProperty('--toolbar-color');
  document.documentElement.style.removeProperty('--label-toolbar-color');
  document.documentElement.style.removeProperty('--back-button-color');
  document.documentElement.style.removeProperty('--menu-button-color');
  document.documentElement.style.removeProperty('--chevron-color');
  document.documentElement.style.removeProperty('--item-list-config');
  document.documentElement.style.removeProperty('--text-without-card');
  document.documentElement.style.removeProperty('--expense-title');
  document.documentElement.style.removeProperty('--expense-info');
  document.documentElement.style.removeProperty('--expense-detail');
  document.documentElement.style.removeProperty('--expense-detail-money');
  document.documentElement.style.removeProperty('--detail-goal-title-color');
  document.documentElement.style.removeProperty('--detail-goal-content-color');
  document.documentElement.style.removeProperty('--detail-money-goal');
  document.documentElement.style.removeProperty('--home-total-money');
  document.documentElement.style.removeProperty('--home-goal-label');
  document.documentElement.style.removeProperty('--para-home-options');
  document.documentElement.style.removeProperty('--home-options-labels');
  document.documentElement.style.removeProperty('--money-title');
  document.documentElement.style.removeProperty('--money-info');
  document.documentElement.style.removeProperty('--money-delete-button');
  document.documentElement.style.removeProperty('--saving-main-title');
  document.documentElement.style.removeProperty('--saving-info');
  document.documentElement.style.removeProperty('--saving-title');
  document.documentElement.style.removeProperty('--saving-daily');
  document.documentElement.style.removeProperty('--saving-days-title');
  document.documentElement.style.removeProperty('--saving-days-left');
  document.documentElement.style.removeProperty('--saving-edit-label-range');
  document.documentElement.style.removeProperty('--saving-edit-range-selected');
  document.documentElement.style.removeProperty('--saving-edit-selected-range');
  document.documentElement.style.removeProperty('--entry-amount-text');
  document.documentElement.style.removeProperty('--entry-amount-detail');
  document.documentElement.style.removeProperty('--switch-button-round');
  document.documentElement.style.removeProperty('--switch-back-off');
  document.documentElement.style.removeProperty('--switch-back-on');
  document.documentElement.style.removeProperty('--color-input');
  document.documentElement.style.removeProperty('--color-input-text');
  document.documentElement.style.removeProperty('--text-area-border-color');
  document.documentElement.style.removeProperty('--text-area-text-color');
  document.documentElement.style.removeProperty('--alert-tile-color');
  document.documentElement.style.removeProperty('--alert-container-color');
  document.documentElement.style.removeProperty('--alert-footer-color');
  document.documentElement.style.removeProperty('--alert-content-text-color');
  document.documentElement.style.removeProperty('--alert-button-color-text');
  document.documentElement.style.removeProperty('--alert-custom-label');
  document.documentElement.style.removeProperty('--alert-custom-label-money');
  document.documentElement.style.removeProperty('--toast-back-color');
  document.documentElement.style.removeProperty('--toast-message-color');
  document.documentElement.style.removeProperty('--progressbar-back-color');
  document.documentElement.style.removeProperty('--progressbar-main-color');
  document.documentElement.style.removeProperty('--card-back-color');
  document.documentElement.style.removeProperty('--card-text-title-color');
  document.documentElement.style.removeProperty('--card-content-text-color');
  document.documentElement.style.removeProperty('--flat-button-color');
  document.documentElement.style.removeProperty('--flat-button-color-text');
  document.documentElement.style.removeProperty('--flat-button-active-color');
  document.documentElement.style.removeProperty('--flat-button-light-color');
  document.documentElement.style.removeProperty('--flat-button-light-color-text');
  document.documentElement.style.removeProperty('--flat-button-light-active-color');

}
