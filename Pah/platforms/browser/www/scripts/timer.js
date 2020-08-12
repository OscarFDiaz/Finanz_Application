function startTime() {
  let themeSelected = localStorage.getItem("userTheme");

  if (themeSelected == null || themeSelected == "" || themeSelected === null) {
    localStorage.setItem("userTheme", "theme-default");
    document.documentElement.className = themeSelected;
  } else {
    document.documentElement.className = themeSelected;
  }

  setTimeout(function () {
    const navigator = document.querySelector("#navigator");
    navigator.resetToPage("splitterUser.html");
  }, 1000);
}

