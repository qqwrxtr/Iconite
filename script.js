var diabet = {
    1: {
        diabet_img: "img/dehydration.png",
        diabet_nume: "Sete constanta"
    },
    2: {
        diabet_img: "img/dizziness.png",
        diabet_nume: "Oboseala cronica"
    },
    3: {
        diabet_img: "img/eye.png",
        diabet_nume: "Vedere neclara"
    },
    4: {
        diabet_img: "img/erectile-dysfunction.png",
        diabet_nume: "Probleme sexuale"
    },
    5: {
        diabet_img: "img/bleeding.png",
        diabet_nume: "Rani ce nu se vindeca"
    },
    6: {
        diabet_img: "img/numb.png",
        diabet_nume: "Amorteala a extremitatilor"
    },
    7: {
        diabet_img: "img/yeast-infection.png",
        diabet_nume: "Infectii vaginale"
    },
    8: {
        diabet_img: "img/frequent.png",
        diabet_nume: "Urinare frecventa"
    },
    9: {
        diabet_img: "img/hungry.png",
        diabet_nume: "Foame constanta"
    },
    10: {
        diabet_img: "img/diet.png",
        diabet_nume: "Pierdere in greutate"
    }
};
console.log(diabet);
console.log(typeof (diabet));

var diabet_afisare = "";
for (var diabet_key in diabet) {
    diabet_afisare +=
        `
        <div>
            <div class="diabet_info_img">
                <img src="${diabet[diabet_key].diabet_img}" alt="404">
            </div>
            <div class="diabet_info_name">
                <p>
                    ${diabet[diabet_key].diabet_nume}
                </p>
            </div>
        </div>

    `
}
document.getElementById("diabet").innerHTML = diabet_afisare;
