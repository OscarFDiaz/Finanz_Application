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
                veces quieras. Puedes salir para ver los cambios y volver para seguir editandolos.
              </p>
              <p class="paraTutorial">
                Dado que la aplicación tiene muchos elementos habrá muchas opciones de personalización.
              </p>
              <p class="paraTutorial">
                Los colores estan separados por elementos, primero estarán los elementos esenciales y después estaran separados por pantallas, pantalla inicio, metas, etc.
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

  let pname = "--gradient-1";
  let color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0d2840");
    color = "#0d2840";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--gradient-2";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#113a5e")
    color = "#113a5e";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }
  
  pname = "--gradient-2"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#113a5e")
    color = "#113a5e";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--spiner-back-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--spiner-front-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--icon-home"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--icon-goals"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#dc2929")
    color = "#dc2929";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--icon-savings"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#235dff")
    color = "#235dff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--icon-expenses"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#1aff4c")
    color = "#1aff4c";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--icon-money"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#c0ff00")
    color = "#c0ff00";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--icon-config"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#acff0a")
    color = "#acff0a";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--menu-font-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--label-toolbar-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--back-button-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--menu-button-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--chevron-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--item-list-config"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--text-without-card"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--expense-title"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--expense-info"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--expense-detail"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--expense-detail-money"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--detail-goal-title-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--detail-goal-content-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--detail-money-goal"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6")
    color = "#0596a6";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--home-total-money"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--home-goal-label"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--para-home-options"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--home-options-labels"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--money-title"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--money-info"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--money-delete-button"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#DC143C")
    color = "#DC143C";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-main-title"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-info"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-title"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-daily"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-days-title"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-days-left"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-edit-label-range"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-edit-range-selected"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--saving-edit-selected-range"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--entry-amount-text"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--entry-amount-detail"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--switch-button-round"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--switch-back-off"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--switch-back-on"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6")
    color = "#0596a6";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--color-input"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--color-input-text"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--text-area-border-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--text-area-text-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-tile-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-container-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0d2840")
    color = "#0d2840";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-footer-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0e5259")
    color = "#0e5259";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-content-text-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-button-color-text"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-custom-label"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--alert-custom-label-money"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--toast-back-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--toast-message-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--progressbar-back-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0d2840")
    color = "#0d2840";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--progressbar-main-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--card-back-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#134068")
    color = "#134068";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--card-text-title-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce")
    color = "#9cd9ce";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--card-content-text-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6")
    color = "#0596a6";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--flat-button-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b")
    color = "#f5a11b";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--flat-button-color-text"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--flat-button-active-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#cc7e00")
    color = "#cc7e00";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--flat-button-light-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6")
    color = "#0596a6";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--flat-button-light-color-text"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff")
    color = "#ffffff";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }

  pname = "--flat-button-light-active-color"
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#05565f")
    color = "#0596a6";
  } else {
    document.getElementById(pname).value = color;
    updateColor(pname, color);
  }
}

/* CARGA LOS COLORES CUANDO SE SELECCIONA EL TEMA PERSONALIZADO*/
function initColors() {

  let pname = "--gradient-1";
  let color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0d2840");
    color = "#0d2840";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--gradient-2";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#113a5e");
    color = "#113a5e";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--spiner-back-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--spiner-front-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--icon-home";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--icon-goals";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#dc2929");
    color = "#dc2929";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--icon-savings";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#235dff");
    color = "#235dff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--icon-expenses";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#1aff4c");
    color = "#1aff4c";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--icon-money";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#c0ff00");
    color = "#c0ff00";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--icon-config";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#acff0a");
    color = "#acff0a";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--menu-font-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--label-toolbar-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--back-button-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--menu-button-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--chevron-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--item-list-config";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--text-without-card";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--expense-title";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--expense-info";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--expense-detail";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--expense-detail-money";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--detail-goal-title-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--detail-goal-content-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--detail-money-goal";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6");
    color = "#0596a6";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--home-total-money";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--home-goal-label";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--para-home-options";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--home-options-labels";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--money-title";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--money-info";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--money-delete-button";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#DC143C");
    color = "#DC143C";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-main-title";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-info";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-title";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-daily";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-days-title";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-days-left";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-edit-label-range";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-edit-range-selected";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--saving-edit-selected-range";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--entry-amount-text";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--entry-amount-detail";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--switch-button-round";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--switch-back-off";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--switch-back-on";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6");
    color = "#0596a6";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--color-input";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--color-input-text";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--text-area-border-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--text-area-text-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-tile-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-container-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0d2840");
    color = "#0d2840";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-footer-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0e5259");
    color = "#0e5259";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-content-text-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-button-color-text";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-custom-label";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--alert-custom-label-money";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--toast-back-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--toast-message-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--progressbar-back-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0d2840");
    color = "#0d2840";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--progressbar-main-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--card-back-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#134068");
    color = "#134068";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--card-text-title-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#9cd9ce");
    color = "#9cd9ce";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--card-content-text-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6");
    color = "#0596a6";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--flat-button-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#f5a11b");
    color = "#f5a11b";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--flat-button-color-text";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--flat-button-active-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#cc7e00");
    color = "#cc7e00";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--flat-button-light-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#0596a6");
    color = "#0596a6";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--flat-button-light-color-text";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#ffffff");
    color = "#ffffff";
  } else {
    
    updateColor(pname, color);
  }

  pname = "--flat-button-light-active-color";
  color = localStorage.getItem(pname);
  if(color == null){
    localStorage.setItem(pname, "#05565f");
    color = "#0596a6";
  } else {
    
    updateColor(pname, color);
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
