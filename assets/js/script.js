// When button is clicked, balance is displayed
$("#submit-button").on("click", function(event) {
    console.log("click");
    var budgetInput = $("#setLimit").val();
    console.log(budgetInput);
    event.preventDefault();

    $(".purchase-item").val("");
    $("#remaining").text("Remaining Balance of : $" + budgetInput);
});

// When button is clicked, purchase name, amount, category, date is displayed in recent spending
$("#save-purchase").on("click", function(event) {
    console.log("click");
    event.preventDefault();
    var purchaseInput = $(".text-input").val();
    console.log(purchaseInput);
})













// let formEl = document.querySelector("#spend-form");
// console.log(formEl);
// let purchaseEl = document.querySelector("#purchase");
// console.log(purchaseEl);
// var apiKey = "AIzaSyBsxqmtTs7-gPZXL68yoiN01dtF9hL5vfI"

// var intro = document.querySelector(".enterBudget");
// var calendar = "https://www.googleapis.com/calendar/v3&appid=" + apiKey;


//If budget exists, do not generate a new budget.
// if (localStorage.getItem("budget") === null) {
//     var budget=[];
// document.querySelector(".application").style.display="none"

// $("#submitBtn").click(function(){
//     console.log("click");
//     var myBudget = document.getElementById("setLimit").value;
//     console.log(myBudget)
//     if (isNaN(myBudget)) {
//         document.getElementById("setLimit").value="";
//         window.alert("Please enter a numeric value.");
//         return;
//       }
//       else {
//         console.log(myBudget);
//         budget.push(myBudget);
//         JSON.stringify("myBudget");
//         localStorage.setItem("budget", budget);
//         intro.setAttribute("class", "hide");
//         document.querySelector(".application").style.display="block";
//     }
// })
// }
// else {
//     intro.style.display="none";
//     var budget = localStorage.getItem("budget");
// }

// Add purchase to spending list 
// document.getElementById("remaining").innerHTML = "Your remaining budget: $" + budget;

// let createTaskHandler = function(event) {

//     event.preventDefault();

//     let purchaseInput = document.querySelector("input[name='purchase-name']").value;
//     let purchaseTypeInput = document.querySelector("select[name='category']").value;

//     let purchaseMadeEl = document.createElement("li");
//     purchaseMadeEl.className = "purchase-item";

//     let purchaseInfoEl = document.createAttribute("div");
//     purchaseInfoEl.className = "purchase-info";

//     purchaseMadeEl.innerHTML = "<h3 class='purchase-name'>" + purchaseInput + "</h3><span class='category'>" + purchaseTypeInput + "</span>";

//     purchaseEl.appendChild(purchaseMadeEl);
//     console.log(purchaseEl);
// }
    
// formEl.addEventListener("submit", createTaskHandler); 



// Giphy API

// var gifApiKey = "DUICFz1fPH9Op5O6bWpBA8FFQcgH38PP";
// var gifurl = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + gifApiKey + "&limit=20";
// var q = "happy";
// var getGif= function(){
//     fetch(gifurl)
//     .then(function (response) {
//         return response.json()
//         .then(function(data){
//             console.log(data);
            
//         })
//     })
// }
// getGif();


// {/* ADD TO INDEX FOR DATE LONG W CAL<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script> */}


// console.log(calendar);
// fetch(calendar)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data);
//     })

//calendar 
// var cal = function(){
//     console.log("function called");
// };
// cal();