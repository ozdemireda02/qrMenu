import { renderButtons, renderMenuItems } from "./scripts/ui.js";

// html den gelenler
const menuList = document.querySelector("#menu-list");
const buttonsArea = document.getElementById("buttons");



// sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded",() => {
    renderButtons();
    fetchMenu()
});

// datayı global scope da tanımlama
let  data;

// menü verilerini json dosyasından çeker
async function fetchMenu(){
   const res = await fetch("./db.json");
   data = await res.json();
   renderMenuItems(data.menu,menuList);
}

// tıklanılan kategoriyi belirleme
buttonsArea.addEventListener('click', (e) => {
    if (e.target.id !== 'buttons') {
      renderButtons(e.target.innerText);
    //   seçili kategoriye erişme
      const selected = e.target.dataset.category ;
       if(selected === "all"){
        // filtreleme yapma apiden gelen verileri ekrana bas
        renderMenuItems(data.menu,menuList);
       }else{
        // seçili kategoriye göre filtreleme
        const filtred = data.menu.filter((i) => (i.category === selected));
        // filtrelenmiş veriyi ekrana bas
        renderMenuItems(filtred,menuList);
    }

    }
   
});




