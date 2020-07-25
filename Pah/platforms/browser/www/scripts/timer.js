function startTime(){
    /*
    setTimeout(function () {
        if (localStorage.getItem("codigoStorage") != null && localStorage.getItem("nombreStorage") != null) {
            var myNavigator = document.getElementById('myNavigator');
            myNavigator
                .pushPage("pageResult.html")
                .then(function () {
                    getMarkers();
                    document.getElementById("lDatos").innerHTML = "" + localStorage.getItem("codigoStorage") + " | " + localStorage.getItem("nombreStorage");
                    document.getElementById("placasLabel").innerHTML =  "" + localStorage.getItem("placasStorage");
                });
        } else {
            var myNavigator = document.getElementById('myNavigator');
            myNavigator
                .pushPage("pageLogin.html")
                .then(function () {
                });
        }
    }, 3000);
    */
    setTimeout(function () {
        const navigator = document.querySelector("#navigator");
        navigator.resetToPage("splitterUser.html");
    }, 1500);
    
}