document.addEventListener("DOMContentLoaded", function() {
    var imaginiPersonaje = document.querySelectorAll(".personaj img");

    imaginiPersonaje.forEach(function(imagine) {
        imagine.addEventListener("mouseover", function() {
            imagine.style.transform = "scale(1.1)";
            imagine.style.transition = "transform 0.3s ease";
        });

        imagine.addEventListener("mouseout", function() {
            imagine.style.transform = "scale(1)";
            imagine.style.transition = "transform 0.3s ease";
        });
    });
});
