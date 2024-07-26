document.addEventListener("DOMContentLoaded", function() {
    function toggleElement() {
        var existingDiv = document.querySelector("main .detalii");

        if (existingDiv) {
            existingDiv.remove();
            toggleButton.textContent = "Mai multe informatii...";
        } else {
            var newDiv = document.createElement("div");
            newDiv.classList.add("detalii");

            var paragraphs = [
                "Serialul a fost lăudat nu doar pentru scenariul său captivant și personajele sale complexe, dar și pentru excelența sa în realizarea tehnică și interpretările actorilor. Bryan Cranston, care joacă rolul principal al lui Walter White, a fost apreciat pentru modul în care a adus la viață transformarea morală și psihologică a personajului său. Cranston a câștigat patru premii Primetime Emmy pentru cel mai bun actor principal într-un serial dramatic pentru acest rol, un record impresionant care reflectă performanța sa remarcabilă.",
                "Aaron Paul, care îl interpretează pe Jesse Pinkman, a fost și el recunoscut pentru talentul său actoricesc, câștigând trei premii Primetime Emmy pentru cel mai bun actor secundar într-un serial dramatic. Relația complexă și adesea tensionată dintre Walter și Jesse este un punct central al serialului, oferind numeroase momente emoționante și conflicte intense.",
                "Serialul a fost filmat în Albuquerque, New Mexico, locația contribuind semnificativ la atmosfera și autenticitatea poveștii. Pe lângă peisajele distincte ale sud-vestului american, 'Breaking Bad' este cunoscut și pentru utilizarea sa creativă a culorilor, simbolismului și cinematografiei. Echipa de producție a folosit culorile pentru a reflecta stările emoționale ale personajelor și evoluția lor, o tehnică subtilă dar eficientă care a adăugat o dimensiune suplimentară vizuală serialului.",
                "Serialul a fost difuzat inițial pe AMC între 2008 și 2013, având un total de cinci sezoane și 62 de episoade. De-a lungul anilor, 'Breaking Bad' a câștigat numeroase premii și nominalizări, inclusiv un Glob de Aur pentru cel mai bun serial dramatic și un premiu Peabody. Serialul a fost aclamat de critici și a dezvoltat o bază de fani loială, fiind considerat unul dintre cele mai bune seriale TV din toate timpurile.",
                "Pe lângă succesele sale în premii și recunoaștere critică, 'Breaking Bad' a generat și un impact cultural semnificativ. Replici memorabile, precum 'I am the one who knocks' și 'Say my name', au devenit parte din lexicul popular. În plus, serialul a inspirat un spin-off de succes, 'Better Call Saul', care explorează originile avocatului Saul Goodman, interpretat de Bob Odenkirk, înainte de evenimentele din 'Breaking Bad'.",
                "'Breaking Bad' rămâne un exemplu excelent de cum televiziunea poate oferi narative complexe, personaje multidimensionale și producții de înaltă calitate, stabilind un nou standard pentru serialele dramatice."
            ];

            var newList = document.createElement("ul");

            for (var i = 0; i < paragraphs.length; i++) {
                var listItem = document.createElement("li");
                var paragraph = document.createElement("p");
                paragraph.textContent = paragraphs[i];
                listItem.appendChild(paragraph);
                newList.appendChild(listItem);
            }
            newDiv.appendChild(newList);
            document.querySelector("main").appendChild(newDiv);
            toggleButton.textContent = "Restrangere pagina";
        }
    }

    var toggleButton = document.createElement("button");
    toggleButton.textContent = "Mai multe informatii...";
    toggleButton.addEventListener("click", toggleElement);

    toggleButton.style.backgroundColor = "transparent";
    toggleButton.style.fontSize = "18px";
    toggleButton.style.color = "aqua";
    toggleButton.style.border = "none";
    toggleButton.style.cursor = "pointer";

    document.querySelector("main").appendChild(toggleButton);

    function culoareAleatoare() {
        var culori = ["red", "green", "blue", "yellow", "orange", "purple"];
        var culoareAleatoare = culori[Math.floor(Math.random() * culori.length)];
        return culoareAleatoare;
    }

    var imagini = document.querySelectorAll(".imagini1");

    imagini.forEach(function(imagine) {
        imagine.style.backgroundColor = culoareAleatoare();
    });

    var footer = document.querySelector("footer");

    var culoareFundal = getComputedStyle(imagini[0]).backgroundColor;

    footer.style.backgroundColor = culoareFundal;

    var dataCurenta = new Date();
    var dataFormata = dataCurenta.toLocaleDateString('ro-RO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    var dataElement = document.createElement("p");
    dataElement.textContent =  dataFormata;
    footer.appendChild(dataElement);

    paragraphs.sort(function(a, b) {
        return a.length - b.length;
    });

    var mesaj = "Codul a fost executat cu succes!";
    console.log(mesaj.toUpperCase());

});
