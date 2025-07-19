let imgMenu = document.getElementById("imgMenu");
let menu = document.getElementById("menu");
let divDepoimentos = document.getElementById("divDepoimentos");
let blocosDepoimentos = document.getElementsByClassName("depoimentos");
let depoimento1 = document.getElementById("depoimento1");
let depoimento2 = document.getElementById("depoimento2");
let depoimento3 = document.getElementById("depoimento3");
let depoimento4 = document.getElementById("depoimento4");
let imgSetaEsquerda = document.getElementById("imgSetaEsquerda");
let imgSetaDireita = document.getElementById("imgSetaDireita");
let linkCompra = document.getElementById("compra");
let divAviso = document.getElementById("aviso");

imgMenu.addEventListener("click", () => {
    if (menu.className == "close") {
        menu.style.position = "fixed";
        menu.style.top = "2px";
        menu.style.left = "50%";
        menu.style.transform = "translate(-50%, 50%)";
        menu.style.display = "flex";
        menu.style.flexFlow = "column nowrap";
        menu.style.textAlign = "center";
        menu.style.width = "50%";
        menu.className = "open";
    } else {
        menu.style.display = "none";
        menu.className = "close";
    }
});

imgSetaDireita.addEventListener("click", () => {
    if (depoimento1.style.display == "flex") {
        depoimento1.style.display = "none";
        depoimento2.style.display = "flex";
        depoimento3.style.display = "none";
        depoimento4.style.display = "none";
    } else if (depoimento2.style.display == "flex") {
        depoimento1.style.display = "none";
        depoimento2.style.display = "none";
        depoimento3.style.display = "flex";
        depoimento4.style.display = "none";
    } else if (depoimento3.style.display == "flex") {
        depoimento1.style.display = "none";
        depoimento2.style.display = "none";
        depoimento3.style.display = "none";
        depoimento4.style.display = "flex";
    } else {
        depoimento1.style.display = "flex";
        depoimento2.style.display = "none";
        depoimento3.style.display = "none";
        depoimento4.style.display = "none";
    }
});

imgSetaEsquerda.addEventListener("click", () => {
    if (depoimento1.style.display == "flex") {
        depoimento1.style.display = "none";
        depoimento2.style.display = "none";
        depoimento3.style.display = "none";
        depoimento4.style.display = "flex";
    } else if (depoimento2.style.display == "flex") {
        depoimento1.style.display = "flex";
        depoimento2.style.display = "none";
        depoimento3.style.display = "none";
        depoimento4.style.display = "none";
    } else if (depoimento3.style.display == "flex") {
        depoimento1.style.display = "none";
        depoimento2.style.display = "flex";
        depoimento3.style.display = "none";
        depoimento4.style.display = "none";
    } else {
        depoimento1.style.display = "none";
        depoimento2.style.display = "none";
        depoimento3.style.display = "flex";
        depoimento4.style.display = "none";
    }
});

linkCompra.addEventListener("click", () => {
    divAviso.innerHTML = "<p><strong>Este é apenas um projeto criado por Everton Rafael, então todo o curso apresentando no site é fictício</strong></p>";
});