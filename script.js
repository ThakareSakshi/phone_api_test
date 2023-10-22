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
    <button class="show_detail_btn">show details</button>`

        phone_container.appendChild(card);

    });

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
    <button class="show_detail_btn">show details</button>`

        new_container.appendChild(card);

      

  

    });
    phone_container.innerHTML = new_container.innerHTML
    


}

let cards=document.querySelectorAll(".card")
cards.forEach((c)=>{
    console.log(c);
})





