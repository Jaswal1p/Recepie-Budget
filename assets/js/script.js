let formEl = document.querySelector("#spend-form");
console.log(formEl);
let purchaseEl = document.querySelector("#purchase");
console.log(purchaseEl);
let emptyListFiller = document.querySelector(".purchase-item")

var purchaseList = JSON.parse(localStorage.getItem('purchaseHistory')) || []
console.log(purchaseList);

let gifEl = document.querySelector("#gif");

renderSearchHistory();



 if (localStorage.getItem("budget") === null) {
        var budget=[];

$("#submitBtn").click(function(){
    var budget=[];

    
   console.log("click")
   var myBudget = document.getElementById("setLimit").value;
   console.log(myBudget)

    budget.push(myBudget);
    localStorage.setItem("budget", budget);

    var budget = localStorage.getItem("budget");
    document.getElementById('setLimit').setAttribute("class", "hide");
    document.getElementById('submitBtn').setAttribute("class", "hide");
    document.getElementById('enterBudget').innerHTML="Your remaining budget is " + budget;
    console.log("your budget is " + budget);


 } )}

  else {
   var budget = localStorage.getItem("budget");
   document.getElementById('setLimit').setAttribute("class", "hide");
   document.getElementById('submitBtn').setAttribute("class", "hide");
   if (budget > 0){
    document.getElementById('enterBudget').innerHTML="Your remaining budget is $" + budget;
    console.log("your budget is " + budget);
   }
   else if (budget === 0) {
    document.getElementById("enterBudget").setAttribute("color", "red")

    document.getElementById("enterBudget").innerHTML = "Oh No! You have spent all your money. Please click 'Set New Budget' to create a new budget."
   }
    else {
        document.getElementById("enterBudget").setAttribute("color", "red")

    document.getElementById("enterBudget").innerHTML = "Oh No! You went over budget with your recent purchase. You are currently $" +Math.abs(budget) + " over budget. Please click 'Set New Budget' to create a new budget."

}

}





// Add purchase to spending list 
// document.getElementById("remaining").innerHTML = "Your remaining budget: $" + budget;



let createTaskHandler = function(event) {

    event.preventDefault();

    let purchaseInput = document.querySelector("input[name='purchase-name']").value;


    let purchaseTypeInput = document.querySelector("select[name='category']").value;

    let purchaseAmountInput = document.querySelector("input[name='price']").value;

    if(!purchaseInput || !purchaseAmountInput || !purchaseTypeInput) {
        //create element that says this message (no alerts allowed)
        alert("Please fill all fields");
        return false;
    }
    
    formEl.reset();
    emptyListFiller.setAttribute("class", "hide");

    var list = document.createElement("div");
    list.className=("purchase-item")

    let purchaseMadeEl = document.createElement("div");
    purchaseMadeEl.className = "purchase-info"; 

    let pricePaidEl = document.createElement("div");
    pricePaidEl.className = "purchase-info"

    let purchaseInfoEl = document.createElement("div");
    purchaseInfoEl.className = "purchase-info";

    
    purchaseMadeEl.innerHTML = "<h3 class='purchase-name'>" + 
    purchaseInput;
    console.log(purchaseMadeEl);
    list.appendChild(purchaseMadeEl);

    pricePaidEl.innerHTML="</h3><h3 class='price'>" + "<span>$ </span>" +
    purchaseAmountInput
    list.appendChild(pricePaidEl);


    purchaseInfoEl.innerHTML = "</h3><span class='category'>" + purchaseTypeInput + "</span>";
    list.appendChild(purchaseInfoEl);

    purchaseEl.appendChild(list) 

    purchaseList.push(purchaseInput);
    purchaseList.push(purchaseAmountInput);
    purchaseList.push(purchaseTypeInput);
    localStorage.setItem("purchaseHistory", JSON.stringify(purchaseList));


    console.log(purchaseAmountInput);
    console.log(budget);
    budget = budget - purchaseAmountInput;
    console.log(budget)
    localStorage.setItem("budget", budget);
    document.getElementById('enterBudget').textContent="Your remaining budget is " + budget;
    console.log(document.getElementById('enterBudget').textContent="Your remaining budget is " + budget);






      var gifApiKey = "DUICFz1fPH9Op5O6bWpBA8FFQcgH38PP";
      
      console.log(purchaseInput);

      
        var gifurl =
          "https://api.giphy.com/v1/gifs/search?q=" +
          purchaseInput +
          "&api_key=" +
          gifApiKey +
          "&limit=1";
        console.log(gifurl);
        // var category = fetch(gifurl).then(function (response) {
            fetch(gifurl).then(function (response) {
          return response
            .json()
            .then(function (data) {
              console.log(data);
              console.log(data.data[0].url);
                
                imageEl = document.createElement("img");
                imgUrl = data.data[0].images.fixed_height.url;
                imageEl.src = imgUrl;
                var spendEl = document.querySelector(".purchase-item");
                spendEl.appendChild(imageEl);
              
            })
            .catch(function (error) {
              console.log(error);
              var error = document.createElement("p");
              error.textContent = "Error";
              return;
            });
        });
      };



// var getPrice = function(product){

//     var priceurl="https://api.rainforestapi.com/request?api_key=C4E1344D574A413B843195ADB5740F41&type=search&amazon_domain=amazon.com&search_term=" + product;


// Giphy API
// function giphy() {
// var gifApiKey = "DUICFz1fPH9Op5O6bWpBA8FFQcgH38PP";
// var purchaseInput = document.querySelector("input[name='purchase-name']").value;
// console.log(purchaseInput);
// var gif = categoryGif
// var getGif = function (gif) {
//   var gifurl = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=" + gifApiKey + "&limit=1";

//   var category = fetch(gifurl)
//   .then(function (response) { 
//     return response
//       .json()
//       .then(function (data) {
//         console.log(data);
//         console.log(data.data[0].url);

//         //drop down of options to select a gif. IF STATEMENT
//         //add gif to the recent spending with list OPTIONS TO SELECT GIFS
//       })
//       .catch(function (error) {
//         console.log(error);
//         var error = document.createElement("p");
//         error.textContent = "Error";
//         return;
//       });
//   });
// };
// getGif();
// }


formEl.addEventListener("submit", createTaskHandler); 




// Price-Checker 

var priceApiKey = "C4E1344D574A413B843195ADB5740F41"

var getPrice = function(product){
    // var priceApiKey = "C4E1344D574A413B843195ADB5740F41"
    var priceurl="https://api.rainforestapi.com/request?api_key=C4E1344D574A413B843195ADB5740F41&type=search&amazon_domain=amazon.com&search_term=" + product;

    fetch(priceurl)
    .then(function(response){
        return response.json()
        .then(function(data){
            console.log(data);
            getPrice();
                function getPrice (){
                    var priceCheck = document.querySelector("#amazonSearches");
                    priceCheck.innerHTML="";
                    for (i = 0; i< 5; i++) {
                        var cards = document.createElement("span");
                        cards.className = "cards";

                        // TODO: STYLE
                        productEl = document.createElement("span");
                        productEl.className = "cards";
                        var product = document.querySelector("#amazonSearches");
                        product = document.createElement("h4");
                        title = data.search_results[i].title;
                            var a = document.createElement("a");
                            var link = document.createTextNode(title);
                            a.appendChild(link);
                            a.setAttribute("target", "_blank");
                            a.href = data.search_results[i].link;
                            a.innerHTML = title;
                            productEl.appendChild(a);
                            cards.appendChild(productEl)


                        imageEl = document.createElement("span");
                        imageEl.className = "cards";
                        var image = document.createElement("img")
                        // TODO: STYLE IMAGE SIZE (much smaller) 
                        imageUrl = data.search_results[i].image;
                        image.src=imageUrl;
                        cards.appendChild(image);

                        priceEl = document.createElement("span");
                        priceEl.className = "cards";
                        var cost = document.querySelector("#amazonSearches");
                        cost = document.createElement("h4");
                        itemPrice = data.search_results[i].price.raw;
                        console.log(itemPrice);
                        cost.innerHTML = "Price: " + itemPrice;
                        // priceEl.appendChild(cost);
                        cards.appendChild(cost)
                   
                        priceCheck.appendChild(cards);
                    }
                }

        })
        .catch(function (error) {
            console.log(error)
            var error = document.createElement('p');
            error.textContent = "Error"
            search();
            return;
    
    })
}
    )}

$("#searchBtn").click(function(){

    var mySearch = document.getElementById("searchItem").value;
    var product= mySearch;
    console.log(product);


    var error = document.querySelector(".error");
    error.style.display="none";
    console.log("search click");
    var mySearch = document.getElementById("searchItem");
    console.log(mySearch.value)
    if (mySearch.value == "" ) {
        console.log("empty search");
        document.getElementById("searchItem").value="";
        error.textContent = "Please input an item.";
        return;   
    }
    else{
        getPrice(product);
    } 
})


function renderSearchHistory(){
    let purchaseEl = document.querySelector("#purchase");

    var list = document.createElement("div");
    list.className=("purchase-item");

    let purchaseMadeEl = document.createElement("div");
    purchaseMadeEl.className = "purchase-info"; 
   
    let pricePaidEl = document.createElement("div");
    pricePaidEl.className = "purchase-info"
   
    let purchaseInfoEl = document.createElement("div");
    purchaseInfoEl.className = "purchase-info";
   
    if (purchaseList.length<1){
        return
    }
    purchaseEl.innerHTML="";
    for (var i=0; i<purchaseList.length; i=i+3){

        var purchaseName = purchaseList[i]; 
        console.log(purchaseName);

        let purchaseMadeEl = document.createElement("div");
        purchaseMadeEl.className.createElement = ("div");

        purchaseMadeEl.innerHTML="</h3><h3 class='purchase-name'>" +
        purchaseName
        list.appendChild(purchaseMadeEl);


        var purchasePrice = purchaseList[i+1]; 
        console.log(purchasePrice);

        let pricePaidEl = document.createElement("div");
        pricePaidEl.className.createElement = ("div");

        pricePaidEl.innerHTML="</h3><h3 class='price'>" + "<span>$ </span>" +
        purchasePrice
        list.appendChild(pricePaidEl);

        var purchaseType = purchaseList[i+2]; 
        console.log(purchaseType);

        let purchaseInfoEl = document.createElement("div");
        purchaseInfoEl.className = "purchase-info";

        purchaseInfoEl.innerHTML = "</h3><span class='category'>" + purchaseType + "</span>";
        list.appendChild(purchaseInfoEl);

        purchaseEl.appendChild(list) 


    } 
 }
