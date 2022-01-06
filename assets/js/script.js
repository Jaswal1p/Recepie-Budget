let formEl = document.querySelector("#spend-form");
console.log(formEl);
let purchaseEl = document.querySelector("#purchase");
console.log(purchaseEl);


let createTaskHandler = function(event) {

    event.preventDefault();

    let purchaseInput = document.querySelector("input[name='purchase-name']").value;
    let purchaseTypeInput = document.querySelector("select[name='category']").value;

    let purchaseMadeEl = document.createElement("li");
    purchaseMadeEl.className = "purchase-item";

    let purchaseInfoEl = document.createAttribute("div");
    purchaseInfoEl.className = "purchase-info";

    purchaseMadeEl.innerHTML = "<h3 class='purchase-name'>" + purchaseInput + "</h3><span class='category'>" + purchaseTypeInput + "</span>";

    purchaseEl.appendChild(purchaseMadeEl);
    console.log(purchaseEl);
}
    

formEl.addEventListener("submit", createTaskHandler); 