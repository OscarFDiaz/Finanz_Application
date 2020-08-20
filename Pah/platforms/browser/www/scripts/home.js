/*var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
  labels: ["Saudi Arabia", "Russia", "Iraq", "United Arab Emirates", "Canada"],
  datasets: [
    {
      data: [133.3, 86.2, 52.2, 51.2, 50.2],
      backgroundColor: ["#FF6384", "#63FF84", "#84FF63", "#8463FF", "#6384FF"],
    },
  ],
};

var pieChart = new Chart(oilCanvas, {
  type: "pie",
  data: oilData,
});
*/

function makeChart() {
  var oilCanvas = document.getElementById("oilChart");

  var oilData = {
    labels: [
      "Saudi Arabia",
      "Russia",
      "Iraq",
      "United Arab Emirates",
      "Canada",
    ],
    datasets: [
      {
        data: [133.3, 86.2, 52.2, 51.2, 50.2],
        backgroundColor: [
          "#FF6384",
          "#63FF84",
          "#84FF63",
          "#8463FF",
          "#6384FF",
        ],
      },
    ],
  };

  var pieChart = new Chart(oilCanvas, {
    type: "doughnut",
    data: oilData,
  });
}

function changeTheme() {
  let actualThemeIndex = sessionStorage.getItem("themeIndex");

  if (actualThemeIndex == "0") {
    setTheme("theme-default");
  } else if (actualThemeIndex == "1") {
    setTheme("theme-dark");
  } else if (actualThemeIndex == "2") {
    setTheme("theme-light");
  } else if (actualThemeIndex == "3") {
    setTheme("theme-yuri");
  }
}

function getTheme(themeName) {
  let actualTheme = localStorage.getItem("userTheme");
  if (actualTheme == themeName || actualTheme === themeName) {
    return true;
  } else {
    return false;
  }
}

function setTheme(themeName) {
  if (getTheme(themeName)) {
    //EL TEMA SELECCIONADO YA ESTA PUESTO
    ons.notification.toast(
      "Actualmente tienes este tema puesto, esta chevere, verdad?",
      {
        title: "Aviso!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  } else {
    //Si no es el mismo tema lo cambio
    localStorage.setItem("userTheme", themeName);
    document.documentElement.className = themeName;
    ons.notification.toast(
      "Se cambio el tema correctamente, tienes buenos gustos!",
      {
        title: "Aviso!",
        timeout: 2000,
        animation: "ascend",
      }
    );
  }
}
