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

/*

function cssVar(name,value){
    if(name[0]!='-') name = '--'+name //allow passing with or without --
    if(value) document.documentElement.style.setProperty(name, value)
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}


//get a css var:
cssVar('bgcolor') //returns #F60

//set a css var:
cssVar('bgcolor','red') //returns red

*/
