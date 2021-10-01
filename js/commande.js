const containerHtml = document.getElementById("containerHtml");
const panier = JSON.parse(localStorage.getItem("panier")) || []; // Récupérer le panier du localStorage et le parse OU si le panier est vide créer un tableau vide
const formulaireValues = 

fetch('http://localhost:3000/api/teddies/')
  .then((response) => response.json())
    .then((result) => {
      (result);
    });

panier.forEach(function(product){
  fetch('http://localhost:3000/api/teddies/' + product._id)
  .then((response) => response.json())
    .then((result) => {
      const div = document.createElement("div");
      div.id = product._id;
      div.classList.add("bg-light", "border-0", "card", "justify-content-center", "my-3", "mx-3", "flex-wrap", "flex-grow-0", "d-flex",);
      div.style.width = "40rem";
      div.innerHTML =  `
        <div class="card-body text-primary my-3 mx-3 px-3 py-3 d-flex flex-column align-items-center"> 
          <h2 class="card-subtitle my-2 mx-3 px-3">${div.id}</h2> 
          <p class="card-text font-weight-bold mb-0 my-2">${result.price / 100 * product.qty}€</p>
          <p class="card-text font-weight-bold my-2">Merci d'avoir passer commande sur notre site !<br> A très vite .</p>
        </div>
      `
      containerHtml.appendChild(div);
      console.log(product);
    })
});
