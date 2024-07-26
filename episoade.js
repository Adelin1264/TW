document.addEventListener("DOMContentLoaded", function() {
    var episoadeParagrafe = document.querySelectorAll("main .sezon .episoade .episod");
    episoadeParagrafe.forEach(function(episod) {
        episod.style.backgroundColor = "rgba(255, 255, 255, 0.7)"; 
        episod.style.color = "#333";
        episod.style.padding = "10px";
        episod.style.margin = "5px 0";
    });

    var episoade = document.querySelectorAll(".episod");
    episoade.forEach(function(episod) {
        episod.style.width = "200px";
        episod.style.height = "50px";
        episod.style.display = "flex";
        episod.style.alignItems = "center";
        episod.style.justifyContent = "center";
        episod.style.border = "1px solid black";
    });

    var inputCautare = document.createElement("input");
    inputCautare.type = "text";
    inputCautare.placeholder = "Caută episoade...";
    inputCautare.style.padding = "10px";
    inputCautare.style.border = "1px solid #ccc";
    inputCautare.style.borderRadius = "5px";
    inputCautare.style.marginBottom = "10px";
    inputCautare.style.fontSize = "16px";
    inputCautare.style.width = "300px";
    inputCautare.addEventListener("input", function() {
        var textCautat = this.value.trim().toLowerCase();
        if (textCautat === "") {
            var sezoane = document.querySelectorAll(".sezon-tabel");
            sezoane.forEach(function(sezon) {
                sezon.checked = false;
            });
        } else {
            episoadeParagrafe.forEach(function(episod) {
                var textEpisod = episod.textContent.toLowerCase();
                if (textEpisod.includes(textCautat)) {
                    episod.style.display = "block";
                    var sezon = episod.closest(".sezon").querySelector(".sezon-tabel");
                    sezon.checked = true;
                } else {
                    episod.style.display = "none"; 
                }
            });
        }
    });

    var mainElement = document.querySelector("main");
    mainElement.insertBefore(inputCautare, mainElement.firstChild);
});
