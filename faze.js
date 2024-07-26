document.addEventListener("DOMContentLoaded", function() {
    var titlu = document.getElementById("titlu_site");

    var opacity = 1;
    var fadingOut = true;

    setInterval(function() {
        if (fadingOut) {
            opacity -= 0.01;
            if (opacity <= 0) {
                opacity = 0;
                fadingOut = false;
            }
        } else {
            opacity += 0.01;
            if (opacity >= 1) {
                opacity = 1;
                fadingOut = true;
            }
        }

        titlu.style.opacity = opacity;
    }, 50); 
});
