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
// NARUDZBA PAGE
window.addEventListener("load", loadAllItems);
function loadTorte(){
  items="";
  for (let i=0; i<torte.length; i++){
    items+=`<div class="ponuda-list-item" onclick="orderItem(${1}, ${i})">
              <div class="ponuda-list-img"><img class="full-scale-img" src="/torte/torta${i}.jpg" alt="Torta ${i}"></div>
              <div class="ponuda-list-name">${torte[i].naziv}</div>
              <div class="ponuda-list-price">${torte[i].cijena} KM</div>
            </div>`;
  }
  document.getElementById("items_listing").innerHTML+=items;
}
function loadKolace(){
  items="";
  for (let i=0; i<kolaci.length; i++){
    items+=`<div class="ponuda-list-item" onclick="orderItem(${2}, ${i})">
              <div class="ponuda-list-img"><img class="full-scale-img" src="/kolaci/kolaci${i}.jpg" alt="Kolac ${i}"></div>
              <div class="ponuda-list-name">${kolaci[i].naziv}</div>
              <div class="ponuda-list-price">${kolaci[i].cijena} KM</div>
            </div>`;
  }
  document.getElementById("items_listing").innerHTML+=items;
}
function loadPraline(){
  items="";
  for (let i=0; i<praline.length; i++){
    if (praline[i].cijena=="Na upit"){
      items+=`<div class="ponuda-list-item" onclick="orderItem(${3}, ${i})">
              <div class="ponuda-list-img"><img class="full-scale-img" src="/praline/praline${i}.jpg" alt="Praline ${i}"></div>
              <div class="ponuda-list-name">${praline[i].naziv}</div>
              <div class="ponuda-list-price">${praline[i].cijena}</div>
            </div>`;
    }
    else{
      items+=`<div class="ponuda-list-item" onclick="orderItem(${3}, ${i})">
              <div class="ponuda-list-img"><img class="full-scale-img" src="/praline/praline${i}.jpg" alt="Praline ${i}"></div>
              <div class="ponuda-list-name">${praline[i].naziv}</div>
              <div class="ponuda-list-price">${praline[i].cijena} KM</div>
            </div>`;
    } 
  }
  document.getElementById("items_listing").innerHTML+=items;
}
function loadSpecijalna(){
  items="";
  for (let i=0; i<specijalnaPonuda.length; i++){
    if (specijalnaPonuda[i].cijena=="Na upit"){
      items+=`<div class="ponuda-list-item" onclick="orderItem(${4}, ${i})">
              <div class="ponuda-list-img"><img class="full-scale-img" src="/specijalna_ponuda/specijalna${i}.jpg" alt="Specijalna ${i}"></div>
              <div class="ponuda-list-name">${specijalnaPonuda[i].naziv}</div>
              <div class="ponuda-list-price">${specijalnaPonuda[i].cijena}</div>
            </div>`;
    }
    else{
      items+=`<div class="ponuda-list-item" onclick="orderItem(${4}, ${i})">
              <div class="ponuda-list-img"><img class="full-scale-img" src="/specijalna_ponuda/specijalna${i}.jpg" alt="Specijalna ${i}"></div>
              <div class="ponuda-list-name">${specijalnaPonuda[i].naziv}</div>
              <div class="ponuda-list-price">${specijalnaPonuda[i].cijena} KM</div>
            </div>`;
    }
  }
  document.getElementById("items_listing").innerHTML+=items;
}
function loadAllItems(){
    loadTorte();
    loadKolace();
    loadPraline();
    loadSpecijalna();
}
function clearItems(){
    document.getElementById("items_listing").innerHTML="";
}
function selectSpecificCategory(){
    clearItems();
    let checkbox1=document.getElementById("c_1");
    if (checkbox1.checked==true){
        loadTorte();
    }
    let checkbox2=document.getElementById("c_2");
    if (checkbox2.checked==true){
        loadKolace();
    }
    let checkbox3=document.getElementById("c_3");
    if (checkbox3.checked==true){
        loadPraline();
    }
    let checkbox4=document.getElementById("c_4");
    if (checkbox4.checked==true){
        loadSpecijalna();
    }
    if (checkbox1.checked==false && checkbox2.checked==false && checkbox3.checked==false && checkbox4.checked==false){
        loadAllItems();
    }
}
// DVIJE GLOBALNE VARIJABLE POTREBNE ZA CART
var tempCategory;
var tempIndeks;
// ITEM ORDER WINDOW
function orderItem(noCategory, indeks){
    document.getElementById("choose_item_window").style.display = "block";
    orderItems = "";
    if (noCategory == 1) {
        orderItems = `<div id="item-order-box">
                  <div class="item_details_img"><img class="full-scale-img" src="/torte/torta${indeks}.jpg" alt="Item"></div>
                  <p class="item_details_name">${torte[indeks].naziv}</p>
                  <p class="item_details_price_tag">Cijena:</p>
                  <p class="item_details_price">${torte[indeks].cijena} KM</p>
                </div>`;
        document.getElementById("quantity-button-container").style.display = "flex";
        document.getElementById("narudzba-order-instructions").style.display = "none";
        document.getElementById("item_details").innerHTML = orderItems;
    }
    if (noCategory == 2) {
        orderItems = `<div id="item-order-box">
                  <div class="item_details_img"><img class="full-scale-img" src="/kolaci/kolaci${indeks}.jpg" alt="Item"></div>
                  <p class="item_details_name">${kolaci[indeks].naziv}</p>
                  <p class="item_details_price_tag">Cijena:</p>
                  <p class="item_details_price">${kolaci[indeks].cijena} KM</p>
                </div>`;
        document.getElementById("quantity-button-container").style.display = "flex";
        document.getElementById("narudzba-order-instructions").style.display = "none";
        document.getElementById("item_details").innerHTML = orderItems;
    }
    if (noCategory == 3) {
        orderItems = `<div id="item-order-box">
                  <div class="item_details_img"><img class="full-scale-img" src="/praline/praline${indeks}.jpg" alt="Item"></div>
                  <p class="item_details_name">${praline[indeks].naziv}</p>
                  <p class="item_details_price_tag">Cijena:</p>
                  <p class="item_details_price">${praline[indeks].cijena} KM</p>
                </div>`;
        if (praline[indeks].cijena === "Na upit") {
            document.getElementById("quantity-button-container").style.display = "none";
            document.getElementById("narudzba-order-instructions").style.display = "block";
        }
        else {
            document.getElementById("quantity-button-container").style.display = "flex";
            document.getElementById("narudzba-order-instructions").style.display = "none";
        }
        document.getElementById("item_details").innerHTML = orderItems;
    }
    if (noCategory == 4) {
        orderItems = `<div id="item-order-box">
                  <div class="item_details_img"><img class="full-scale-img" src="/specijalna_ponuda/specijalna${indeks}.jpg" alt="Item"></div>
                  <p class="item_details_name">${specijalnaPonuda[indeks].naziv}</p>
                  <p class="item_details_price_tag">Cijena:</p>
                  <p class="item_details_price">${specijalnaPonuda[indeks].cijena} KM</p>
                </div>`;
        if (specijalnaPonuda[indeks].cijena === "Na upit") {
            document.getElementById("quantity-button-container").style.display = "none";
            document.getElementById("narudzba-order-instructions").style.display = "block";
        }
        else {
            document.getElementById("quantity-button-container").style.display = "flex";
            document.getElementById("narudzba-order-instructions").style.display = "none";
        }
        document.getElementById("item_details").innerHTML = orderItems;
    }
    tempCategory = noCategory;
    tempIndeks = indeks;
}

class Product{
    constructor(nazivArtikla, cijenaArtikla, ukupnaKolicina) {
        this.itemName = nazivArtikla;
        this.itemPrice = cijenaArtikla;
        this.itemQuantity = ukupnaKolicina;
    }
}
// FOR SHOPPING CART
class ShoppingCart{
    constructor() {
        this.niz = [];
        this.brojItema = 0;
        this.ukupnaCijena = 0;
    }
}
let glavnaKorpa = new ShoppingCart();

function closeTargetedWindow(window) {
    document.getElementById(window).style.display = "none";
}

let orderItemsButtons = document.getElementById("item-order-button");
orderItemsButtons.addEventListener("click", orderingItems);
function orderingItems() {
    closeTargetedWindow("choose_item_window");
    let proslijedjenaKolicina = document.getElementById("kolicina").value;
    if (tempCategory == 1) {
        let artikal = new Product(torte[tempIndeks].naziv, torte[tempIndeks].cijena, proslijedjenaKolicina);
        glavnaKorpa.niz.push(artikal);
        glavnaKorpa.brojItema += 1;
        glavnaKorpa.ukupnaCijena += parseFloat(artikal.itemPrice) * parseFloat(artikal.itemQuantity);
    }
    if (tempCategory == 2) {
        let artikal = new Product(kolaci[tempIndeks].naziv, kolaci[tempIndeks].cijena, proslijedjenaKolicina);
        glavnaKorpa.niz.push(artikal);
        glavnaKorpa.brojItema += 1;
        glavnaKorpa.ukupnaCijena += parseFloat(artikal.itemPrice) * parseFloat(artikal.itemQuantity);
    }
    if (tempCategory == 3) {
        let artikal = new Product(praline[tempIndeks].naziv, praline[tempIndeks].cijena, proslijedjenaKolicina);
        glavnaKorpa.niz.push(artikal);
        glavnaKorpa.brojItema += 1;
        glavnaKorpa.ukupnaCijena += parseFloat(artikal.itemPrice) * parseFloat(artikal.itemQuantity);
    }
    if (tempCategory == 4) {
        let artikal = new Product(specijalnaPonuda[tempIndeks].naziv, specijalnaPonuda[tempIndeks].cijena, proslijedjenaKolicina);
        glavnaKorpa.niz.push(artikal);
        glavnaKorpa.brojItema += 1;
        glavnaKorpa.ukupnaCijena += parseFloat(artikal.itemPrice) * parseFloat(artikal.itemQuantity);
    }
}

// OPENING AND CLOSING CART
let cartButton = document.getElementById("order-cart");
cartButton.addEventListener("click", () => {
    document.getElementById("shopping_cart_window").style.display = "block";
    if (glavnaKorpa.brojItema == "0") {
        document.getElementById("cart-info-box").style.display = "block";
        document.getElementById("shopping_cart_container").style.height = "200px";
        document.getElementById("shopping_cart_container").style.minHeight = "200px";
    }
    else {
        document.getElementById("cart-info-box").style.display = "none";
        document.getElementById("shopping_cart_container").style.height = "500px";
        document.getElementById("shopping_cart_container").style.maxHeight = "500px";
        document.getElementById("list_price_button_container").style.display = "block";
        document.getElementById("order_price").innerHTML = "Ukupno: " + glavnaKorpa.ukupnaCijena + " KM";
        itemOnList = "";
        document.getElementById("article_list").innerHTML = "";
        for (let i = 0; i < glavnaKorpa.niz.length; i++) {
            itemOnList = `<div class="item-cart-listing">
                    <div>${glavnaKorpa.niz[i].itemName}</div>
                    <div>x${glavnaKorpa.niz[i].itemQuantity}</div>
                  </div>`;
            document.getElementById("article_list").innerHTML += itemOnList;
        }
    }
});

let closeWindow = document.getElementById("close-window");
closeWindow.addEventListener("click", () => {
    closeTargetedWindow("choose_item_window");
});

let closeCart = document.getElementById("close-cart");
closeCart.addEventListener("click", () => {
    closeTargetedWindow("shopping_cart_window");
});

let buyCart = document.getElementById("buy-cart");
buyCart.addEventListener("click", () => {
    closeTargetedWindow("shopping_cart_window");
});

let option1 = document.getElementById("c_1");
option1.addEventListener("click", () => {
    selectSpecificCategory();
});
let option2 = document.getElementById("c_2");
option2.addEventListener("click", () => {
    selectSpecificCategory();
});
let option3 = document.getElementById("c_3");
option3.addEventListener("click", () => {
    selectSpecificCategory();
});
let option4 = document.getElementById("c_4");
option4.addEventListener("click", () => {
    selectSpecificCategory();
});