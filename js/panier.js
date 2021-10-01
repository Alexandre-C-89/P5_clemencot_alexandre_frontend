// ------------ variables utilitaires ---------- //
const priceTotal = document.getElementById("priceTotal");
const panier = JSON.parse(localStorage.getItem("panier")) || []; // Récupérer le panier du localStorage et le parse OU si le panier est vide créer un tableau vide
let total = 0; // Créer une variable "Total" qui a pour valeur 0

// ****************************************

// Fetch avec la méthode GET par défaut 

fetch('http://localhost:3000/api/teddies')
.then((response) => response.json())
.then((result) => { 
  (result);
});

// *************************************

// Créer une boucle forEach pour affiche le teddy et ses otpions sélectionné sur la page accueil //
panier.forEach(function(product){
  fetch('http://localhost:3000/api/teddies/' + product._id)
  .then((response) => response.json())
    .then((result) => {
      const div = document.createElement("div");
      const clear = document.getElementById("clear");
      div.id = product._id;
      div.classList.add("bg-light", "border-0", "card", "justify-content-center", "mt-3", "mx-3");
      div.style.width = "25rem";
      div.innerHTML =  `
        <img class="card-img-top pt-3 px-3" style="height: 50%;" src="${result.imageUrl}" alt="${result.name}">
        <div class="border-0 card-body d-flex flex-column justify-content-around align-items-center text-primary"> 
          <h2 class="card-subtitle">${result.name}</h2>
          <p class="card-text mb-0">qty : ${product.qty}</p>
          <p class="card-text mb-0">color : ${product.color}</p>
          <p class="card-text font-weight-bold">${result.price / 100 * product.qty}€</p>
          <input class="btn btn-primary" id="clear" type="reset" value="Supprimer l'article"></input>
        </div>
      `
      containerHtml.appendChild(div);
    })

});

// ***********************************************
  
clear.addEventListener("click", (e) => {
  let id = e.currentTarget.id; // Créer une variable "id" et qui a pour valeur l'oursons sur lequel je clique
  sessionStorage.clear("teddyId", id);
})

// ------------ Prix Total de la commande ----------------------- //
panier.forEach(teddy => {
  total += teddy.qty * teddy.price;
});

priceTotal.textContent = `Prix Total : ` + total/100;

// ------------------------ Partie formulaire (RegExp, récupération données inputs etc...) ------------------------- //

const btnForm = document.getElementById("btnForm"); //  Selection btn du formulaire

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Récupération des valeurs du formulaire
  const formulaireValues = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
  }
  
  // Gestion validation formulaire //
  
  const RegExp1 = (value) => {
    return /^[A-Za-z]{3,15}$/.test(value);
  }
  
  // Contrôle du Prénom, Nom et ville
  const regExp2 = (value) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  };
  
  function controle1(){
    // Contrôle de la validité du prénom
    const firstName = formulaireValues.firstName;
    const lastName = formulaireValues.lastName;
    const city = formulaireValues.city;
    if(RegExp1(firstName, lastName, city)){
      return true;
    }else{
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      return false;
    }
  }
  
  function controle2(){
    // Contrôle de la validité du prénom
    const email = formulaireValues.email;
    if(regExp2(email)){
      return true;
    }else{
      alert("Chiffre et symbole ne sont pas autorisé \n Ne pas dépasser 20 caractères, minimum 3 caractères");
      return false;
    }
  };
  console.log(formulaireValues);
  if(controle1() && controle2()){
    // Mettre l'objet "formulaireValues" dans le localStorage
    localStorage.setItem("formulaireValues", JSON.stringify(formulaireValues)); 
  }else{
    alert("Veuillez bien rempli le formulaire");
  };
  
  // Mettre les values du formulaire et mettre les produits seléctionnés dans un objet à envoyer vers le serveur
  const aEnvoyer = {
    formulaireValues,
    panier
  };  
  
  fetch("http://localhost:3000/api/teddies/order", {
    method: "POST",
    headers:{"content-type": "application/json;charset=UTF-8"},
    body: JSON.stringify(formulaireValues)
  })
  .then(response => 
    localStorage.setItem(formulaireValues)
    )
  .catch(err => console.log(err));
  
  // redirection page confirmation de commande
  window.location.replace("http://127.0.0.1:5501/commande.html")
});