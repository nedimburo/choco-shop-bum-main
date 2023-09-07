// SIDEBAR
let openNav = document.getElementById("open-nav");
openNav.addEventListener("click", () => {
    let widthOfSite = window.innerWidth;
    let sideNav = document.getElementById("sidenav_container");
    if (widthOfSite <= 320 && widthOfSite >= 260) {
        sideNav.style.width = "110px";
        sideNav.style.borderRight = "1px solid black";
    }
    else if (widthOfSite <= 424 && widthOfSite >= 321) {
        sideNav.style.width = "130px";
        sideNav.style.borderRight = "1px solid black";
    }
    else if (widthOfSite <= 768 && widthOfSite >= 425) {
        sideNav.style.width = "160px";
        sideNav.style.borderRight = "1px solid black";
    }
    else if (widthOfSite <= 1024 && widthOfSite >= 769) {
        sideNav.style.width = "180px";
        sideNav.style.borderRight = "1px solid black";
    }
    else if (widthOfSite >= 1025) {
        sideNav.style.width = "200px";
        sideNav.style.borderRight = "1px solid black";
    }
    else {
        sideNav.style.width = "80px";
    }
});

let closeNav = document.getElementById("close-nav");
closeNav.addEventListener("click", () => {
    let sideNav = document.getElementById("sidenav_container");
    sideNav.style.width = "0";
    sideNav.style.borderRight = "none";
});
  
// FETCH DATA
let ponuda;

fetch("js/data.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        ponuda = data;
    });

// LISTA PONUDE
function getPonudaList(indeks) {
    let ponudaListMainContainer = document.getElementById("ponuda_list_container");
    let items = "";
    if (indeks == 1) {
        for (let i = 0; i < ponuda.Torte.length; i++) {
            items += `<div class="ponuda-list-item">
                        <div class="ponuda-list-img"><img class="full-scale-img" src="torte/torta${i}.jpg" alt="Torta ${i}"></div>
                        <div class="ponuda-list-name">${ponuda.Torte[i].naziv}</div>
                        <div class="ponuda-list-price">${ponuda.Torte[i].cijena}</div>
                      </div>`;
        }
    }
    if (indeks == 2) {
        for (let i = 0; i < ponuda.Kolaci.length; i++) {
            items += `<div class="ponuda-list-item">
                        <div class="ponuda-list-img"><img class="full-scale-img" src="kolaci/kolaci${i}.jpg" alt="Kolac ${i}"></div>
                        <div class="ponuda-list-name">${ponuda.Kolaci[i].naziv}</div>
                        <div class="ponuda-list-price">${ponuda.Kolaci[i].cijena}</div>
                      </div>`;
        }
    }
    if (indeks == 3) {
        for (let i = 0; i < ponuda.Praline.length; i++){
            if (ponuda.Praline[i].cijena=="Na upit"){
                items+=`<div class="ponuda-list-item">
                        <div class="ponuda-list-img"><img class="full-scale-img" src="praline/praline${i}.jpg" alt="Praline ${i}"></div>
                        <div class="ponuda-list-name">${ponuda.Praline[i].naziv}</div>
                        <div class="ponuda-list-price">${ponuda.Praline[i].cijena}</div>
                      </div>`;
            }
            else{
                items+=`<div class="ponuda-list-item">
                        <div class="ponuda-list-img"><img class="full-scale-img" src="praline/praline${i}.jpg" alt="Praline ${i}"></div>
                        <div class="ponuda-list-name">${ponuda.Praline[i].naziv}</div>
                        <div class="ponuda-list-price">${ponuda.Praline[i].cijena} KM</div>
                      </div>`;
            } 
        }
    }
    if (indeks==4){
        for (let i=0; i<ponuda.SpecijalnaPonuda.length; i++){
            if (ponuda.SpecijalnaPonuda[i].cijena=="Na upit"){
                items+=`<div class="ponuda-list-item">
                            <div class="ponuda-list-img"><img class="full-scale-img" src="specijalna_ponuda/specijalna${i}.jpg" alt="Specijalna ${i}"></div>
                            <div class="ponuda-list-name">${ponuda.SpecijalnaPonuda[i].naziv}</div>
                            <div class="ponuda-list-price">${ponuda.SpecijalnaPonuda[i].cijena}</div>
                        </div>`;
            }
            else{
                items+=`<div class="ponuda-list-item">
                            <div class="ponuda-list-img"><img class="full-scale-img" src="specijalna_ponuda/specijalna${i}.jpg" alt="Specijalna ${i}"></div>
                            <div class="ponuda-list-name">${ponuda.SpecijalnaPonuda[i].naziv}</div>
                            <div class="ponuda-list-price">${ponuda.SpecijalnaPonuda[i].cijena} KM</div>
                        </div>`;
            }
        }
    }
    ponudaListMainContainer.innerHTML = items;
}

let ponudaDisplay1 = document.getElementById("ponuda_1");
ponudaDisplay1.addEventListener("click", () => {
    getPonudaList(1);
});
let ponudaDisplay2 = document.getElementById("ponuda_2");
ponudaDisplay2.addEventListener("click", () => {
    getPonudaList(2);
});
let ponudaDisplay3 = document.getElementById("ponuda_3");
ponudaDisplay3.addEventListener("click", () => {
    getPonudaList(3);
});
let ponudaDisplay4 = document.getElementById("ponuda_4");
ponudaDisplay4.addEventListener("click", () => {
    getPonudaList(4);
});

// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}
