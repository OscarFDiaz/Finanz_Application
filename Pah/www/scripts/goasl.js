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
  let goalActualMoney = "0";
  let goalDate = document.getElementById("newGoalDate").value;

  console.log(goalName + goalDescription + goalMoney + goalActualMoney + goalDate);

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
    localStorage.setItem(goalStorage, JSON.stringify(goalsArray));
  }

  getGoals();
}

function getGoals() {
  let goals = JSON.parse(localStorage.getItem("goalStorage"));
  let goalsView = document.getElementById("goalsContainer");

  goalsView.innerHTML = "";

  for (let i = 0; i < goals.lenght; i++) {
    let gName = goals[i].goalName;
    let gMoney = goals[i].goalMoney;
    let gAMoney = goals[I].goalActualMoney;
    let gDate = goals[i].goalDate;

    // cambiar pushTest()
    goalsView.innerHTML += 
    `<ons-card onclick="pushTest()">
        <div class="title" id="titleGoal">
          ${gName}
        </div>
        <div class="content">
          <label id="goalInfo">$ ${gAMoney} de $ ${gMoney} | ${gDate}</label>
          <div id="progressbar"> 
            <div></div> 
          </div> 
        </div>
      </ons-card>`;
  }
}
