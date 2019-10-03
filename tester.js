setInterval(() => {
    for (let i = 0; i < document.getElementsByClassName("_40qZj PTP5j").length; i++) {
        var _40qZj_PTP5j = document.getElementsByClassName("_40qZj PTP5j")[i];
        
        if (_40qZj_PTP5j.innerHTML == "In game session") {
            document.getElementsByClassName("_40qZj PTP5j")[i].innerHTML = "No jogo, entrar ?";
        }
    }
},1000);
