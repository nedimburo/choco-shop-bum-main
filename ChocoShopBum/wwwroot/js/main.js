// SIDEBAR
function openNav() {
  let widthOfSite=window.innerWidth;
  if (widthOfSite<=320 && widthOfSite>=260){
    document.getElementById("sidenav_container").style.width = "110px";
    document.getElementById("sidenav_container").style.borderRight = "1px solid black";
  }
  else if (widthOfSite<=424 && widthOfSite>=321){
    document.getElementById("sidenav_container").style.width = "130px";
    document.getElementById("sidenav_container").style.borderRight = "1px solid black";
  }
  else if (widthOfSite<=768 && widthOfSite>=425){
    document.getElementById("sidenav_container").style.width = "160px";
    document.getElementById("sidenav_container").style.borderRight = "1px solid black";
  }
  else if (widthOfSite<=1024 && widthOfSite>=769){
    document.getElementById("sidenav_container").style.width = "180px";
    document.getElementById("sidenav_container").style.borderRight = "1px solid black";
  }
  else if (widthOfSite>=1025){
    document.getElementById("sidenav_container").style.width = "200px";
    document.getElementById("sidenav_container").style.borderRight = "1px solid black";
  }
  else{
    document.getElementById("sidenav_container").style.width = "80px";
  }
}
  
function closeNav() {
  document.getElementById("sidenav_container").style.width = "0";
  document.getElementById("sidenav_container").style.borderRight = "none";
}

// KOLACI
let kolaci=[
  {
    "naziv": "Tiramisu",
    "cijena": "3"
  },
  {
    "naziv": "Krempita",
    "cijena": "2.5"
  },
  {
    "naziv": "Plazma",
    "cijena": "2.5"
  },
  {
    "naziv": "Minjon",
    "cijena": "2"
  },
  {
    "naziv": "Čokoladna kocka",
    "cijena": "3"
  },
  {
    "naziv": "Voćna kocka",
    "cijena": "3"
  },
  {
    "naziv": "Banana kolač",
    "cijena": "2.5"
  },
  {
    "naziv": "Trileće",
    "cijena": "2"
  },
  {
    "naziv": "Medeni kolač",
    "cijena": "3"
  }
]
// TORTE
let torte=[
  {
    "naziv": "Noir torta",
    "cijena": "3.5"
  },
  {
    "naziv": "Borovnica torta",
    "cijena": "3"
  },
  {
    "naziv": "Cheesecake",
    "cijena": "3"
  },
  {
    "naziv": "Orange torta",
    "cijena": "3"
  },
  {
    "naziv": "Snikers torta",
    "cijena": "3.5"
  },
  {
    "naziv": "Oreo torta",
    "cijena": "3"
  },
  {
    "naziv": "Raffaello torta",
    "cijena": "3.5"
  },
  {
    "naziv": "Havana",
    "cijena": "3.5"
  },
  {
    "naziv": "Nugat",
    "cijena": "3"
  },
  {
    "naziv": "Saher",
    "cijena": "3"
  }
]
// PRALINE
let praline=[
  {
    "naziv": "Čokoladne praline",
    "cijena": "3"
  },
  {
    "naziv": "Vanilija praline",
    "cijena": "3"
  },
  {
    "naziv": "Izrada po želji",
    "cijena": "Na upit"
  },
]
// SPECIJALNA PONUDA 
let specijalnaPonuda=[
  {
    "naziv": "Američke krofne",
    "cijena": "2"
  },
  {
    "naziv": "Kuglice",
    "cijena": "2.5"
  },
  {
    "naziv": "Mafini",
    "cijena": "2"
  },
  {
    "naziv": "Svadbene torte",
    "cijena": "Na upit"
  },
  {
    "naziv": "Svadbena torta 1",
    "cijena": "25"
  },
  {
    "naziv": "Svadbena torta 2",
    "cijena": "28.5"
  },
  {
    "naziv": "Svadbena torta 3",
    "cijena": "32.5"
  }
]
// LISTA PONUDE
function getPonudaList(indeks){
  items="";
  if (indeks==1){
    for (let i=0; i<kolaci.length; i++){
      items+=`<div class="ponuda-list-item">
                <div class="ponuda-list-img"><img class="ponuda-list-picture" src="kolaci/kolaci${i}.jpg" alt="Kolac ${i}"></div>
                <div class="ponuda-list-name">${kolaci[i].naziv}</div>
                <div class="ponuda-list-price">${kolaci[i].cijena} KM</div>
              </div>`;
    }
  }
  if (indeks==2){
    for (let i=0; i<torte.length; i++){
      items+=`<div class="ponuda-list-item">
                <div class="ponuda-list-img"><img class="ponuda-list-picture" src="torte/torta${i}.jpg" alt="Torta ${i}"></div>
                <div class="ponuda-list-name">${torte[i].naziv}</div>
                <div class="ponuda-list-price">${torte[i].cijena} KM</div>
              </div>`;
    }
  }
  if (indeks==3){
    for (let i=0; i<praline.length; i++){
      if (praline[i].cijena=="Na upit"){
        items+=`<div class="ponuda-list-item">
                <div class="ponuda-list-img"><img class="ponuda-list-picture" src="praline/praline${i}.jpg" alt="Praline ${i}"></div>
                <div class="ponuda-list-name">${praline[i].naziv}</div>
                <div class="ponuda-list-price">${praline[i].cijena}</div>
              </div>`;
      }
      else{
        items+=`<div class="ponuda-list-item">
                <div class="ponuda-list-img"><img class="ponuda-list-picture" src="praline/praline${i}.jpg" alt="Praline ${i}"></div>
                <div class="ponuda-list-name">${praline[i].naziv}</div>
                <div class="ponuda-list-price">${praline[i].cijena} KM</div>
              </div>`;
      } 
    }
  }
  if (indeks==4){
    for (let i=0; i<specijalnaPonuda.length; i++){
      if (specijalnaPonuda[i].cijena=="Na upit"){
        items+=`<div class="ponuda-list-item">
                <div class="ponuda-list-img"><img class="ponuda-list-picture" src="specijalna_ponuda/specijalna${i}.jpg" alt="Specijalna ${i}"></div>
                <div class="ponuda-list-name">${specijalnaPonuda[i].naziv}</div>
                <div class="ponuda-list-price">${specijalnaPonuda[i].cijena}</div>
              </div>`;
      }
      else{
        items+=`<div class="ponuda-list-item">
                <div class="ponuda-list-img"><img class="ponuda-list-picture" src="specijalna_ponuda/specijalna${i}.jpg" alt="Specijalna ${i}"></div>
                <div class="ponuda-list-name">${specijalnaPonuda[i].naziv}</div>
                <div class="ponuda-list-price">${specijalnaPonuda[i].cijena} KM</div>
              </div>`;
      }
    }
  }

  document.getElementById("ponuda_list_container").innerHTML=items;
}

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
