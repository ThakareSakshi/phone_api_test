let input = document.querySelector("input");
let search_btn = document.querySelector(".search");

let phone_container = document.querySelector(".phones");
search_btn.addEventListener("click", () => {
    logPhones()

})

default_mobiles()

async function default_mobiles() {

    let response = await fetch("https://openapi.programming-hero.com/api/phones?search=Iphone");
    const phones = await response.json();
    console.log(phones);
    phones.data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `<img src="${element.image}" alt="">
    <h2>${element.phone_name}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur  vel</p>
    <button class="show_detail_btn" onClick=showDetails("${element.slug}")>show details</button>`

        phone_container.appendChild(card);

    });

}
async function showDetails(slug) {
    let details = await fetch("https://openapi.programming-hero.com/api/phone/" + slug);
    let detailsInfo = await details.json();
    console.log(detailsInfo)
}


async function logPhones() {
    let response = await fetch("https://openapi.programming-hero.com/api/phones?search=" + input.value);
    const phones = await response.json();
    let new_container = document.createElement("div");
    phones.data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        card.innerHTML = `<img src="${element.image}" alt="">
    <h2>${element.phone_name}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur  vel</p>
    <button class="show_detail_btn" onClick=showDetails("${element.slug}")>show details</button>`

        new_container.appendChild(card);





    });
    phone_container.innerHTML = new_container.innerHTML



}

async function showDetails(slug) {
    let details = await fetch("https://openapi.programming-hero.com/api/phone/" + slug);
    let detailsInfo = await details.json();
    addDetailsToContainer(detailsInfo.data);
}

function addDetailsToContainer(data) {
    console.log(data);
    let dialog = document.querySelector("dialog");
    let dialog_container=document.querySelector(".dialog_container")
    dialog.innerHTML = `<img src="${data.image}" alt="">
   <h2>${data.name}</h2>
   <p>Brand :${data.brand}<p>
   
   <p class="phone_name">Stoarage :${data.mainFeatures.storage} </p>
   <p>Display : ${data.mainFeatures.displaySize}</p>
   <p>Chipset : ${data.mainFeatures.chipSet}</p>
   <span>Memory : ${data.mainFeatures.memory}</span>
   <span>release date</span>
   <br>
     <button id="close">close</button>`

   dialog_container.style.display="block";
 let close_btn=document.querySelector("#close")
close_btn.addEventListener("click",()=>{
    console.log("closed")
    dialog_container.style.display="none";
})

}











