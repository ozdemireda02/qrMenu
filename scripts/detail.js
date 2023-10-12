const params = new URLSearchParams(location.search);

// js class ını sağladığı get methodu ile parametreye erişme
const paramId = params.get('id');

document.addEventListener("DOMContentLoaded", async() => {
//    api dan ürünü alma
    const res = await fetch("../db.json");
   const data = await res.json();

//    url deki id ye denk gelen ürünü bulma
const product = data.menu.find((i) => i.id === Number(paramId));

   renderPage(product)
})

// arayüzü göndereceğimiz div
const outlet = document.querySelector("#outlet")

// bütün arayüzü ekrana basar
function renderPage(product){
    outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5">
    <a href="/"><img src="./images/home.png" style="width: 40px;" ></a>
    <div>
    <div>anasayfa / ${
        product.category
      } / ${product.title.toLowerCase()}</div>
    </div>
    </div>
</div>
<h1 class="text-center my-3 shadow rounded p-2">${product.title}</h1>
<img src="${product.img}" class="rounded object-fit-cover shadow-lg" style="max-height: 400px;">
<div>
    <h3 class="mt-4" >Ürünün Kategorisi : <span class="text-success">${product.category}</span></h3>
    <h3 class="my-2" >Ürünün Fiyatı : <span class="text-success">${(product.price * 27).toFixed(2)}₺</span></h3>
</div>
<p class="lead fs-3">${product.desc}</p>
    `
   
}

