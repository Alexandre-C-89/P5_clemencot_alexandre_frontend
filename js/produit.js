const searchParams = window.location.search;
const searchParamsParsed = new URLSearchParams(searchParams);
let teddyId = searchParamsParsed.get("id");

// Fetch avec la méthode GET par défaut 

fetch('http://localhost:3000/api/teddies/' + teddyId) 
.then((response) => response.json())
.then((result) => { 
  createCard(result);
});

// *************************************

// ------------- Fonction qui permet l'affichage de l'oursons séléctionner par l'id --------------- //

function createCard (teddy) { // créer une fonction "createCard" qui a pour paramètre teddy
    let teddyHtml = ""; // Création d'une variable teddyHtml qui n'a pas de valeur
      teddyHtml += `
        <div id="" class="bg-light border-0 card justify-content-center mt-3 mx-3" style="width: 30rem;">
          <img class="card-img-top pt-3 px-3" src="${teddy.imageUrl}" alt="images nounours 1">
          <div class="border-0 card-body d-flex flex-row justify-content-between align-items-between text-primary"> 
            <h2 class="card-subtitle">${teddy.name}</h2>
            <p class="card-text font-weight-bold">${teddy.price / 100}€</p>
            <form>
                <label for="option_produit"></label>
                <select name="option_produit" id="option_produit">
                  <option value="${teddy.colors[1]}">${teddy.colors[1]}</option>
                  <option value="${teddy.colors[2]}">${teddy.colors[2]}</option>
                  <option value="${teddy.colors[3]}">${teddy.colors[3]}</option>
                  <option value="${teddy.colors[4]}">${teddy.colors[4]}</option>
                  <option value="${teddy.colors[5]}">${teddy.colors[5]}</option>
                </select>
            </form>
            <form>
                qty :
                <label for="option_produit"></label>
                <select name="option_produit" id="option_qty" multiple="multiple">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
          </div>
          <button class="btn btn-primary card-link m-3" id="btn" style="width: 7rem;">Ajouter au panier</button>
        </div>
      `
    containerHtml.innerHTML = teddyHtml; // injecte du code dans la variable containerHtml

    // for (let i = 0; i < teddy.colors.length; i++) {
    //   teddy.colors.length[i];
    // };
    
  
    let btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      let color = document.getElementById("option_produit").value;
      let qty = document.getElementById("option_qty").value;
      let panier = JSON.parse(localStorage.getItem("panier")); // Je récupère le panier dans le localeStorage et je le parse // let panier = JSON.parse(localStorage.getItem("panier")) || [];
      if(panier == null){
        panier = [];
      }
      let product = {
        _id : teddy._id,
        color : color,
        qty : qty,
        price: teddy.price
      };

      
      panier.push(product);
      localStorage.setItem("panier", JSON.stringify(panier));
    });
};

console.log(createCard);









