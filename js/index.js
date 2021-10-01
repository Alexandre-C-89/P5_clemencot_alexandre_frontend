let containerHtml = document.getElementById("containerHtml");
let clickDiv = document.querySelectorAll(".div__vign");

// Fetch avec la méthode GET par défaut

fetch("http://localhost:3000/api/teddies")
  .then((response) => {
    response
      .json()
      .then((result) => {
        createCard(result);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
});

// *************************************

function createCard(result) {
  // créer une fonction "createCard" qui a pour paramètre result
  let teddyHtml = ""; // Création d'une variable teddyHtml qui n'a pas de valeur
  result.forEach((teddy) => {
    // Créer une boucle "result" forEach avec pour paramètre teddy
    teddyHtml += `
      <div id="${teddy._id}" href="Produit.html" class="vign bg-light border-0 card d-flex justify-content-center mt-3 mx-3 align-self-center" style="width: 20rem;">
        <img class="vign__img card-img-top pt-3 px-3" src="${teddy.imageUrl}" alt="images nounours">
        <div class="border-0 card-body d-flex flex-row justify-content-between align-items-between text-primary"> 
          <h2 class="card-subtitle">${teddy.name}</h2>
          <p class="card-text font-weight-bold">${teddy.price / 100}€</p>
        </div>
        <a class="text-center" href="./Produit.html?id=${
          teddy._id
        }"><button class="btn btn-primary card-link m-3" style="width: 5srem;">Voir le produit</button></a>
      </div>
    `;
    // Création de la variable "teddyHtml" qui a pour valeur du code html mis entre ``
    console.log(teddy._id);
  });
  containerHtml.innerHTML = teddyHtml; // injecte du code dans la variable containerHtml
};

// // Récupère l'id du teddy sur lequel j'ai cliqué et l'enregistre dans le sessionstorage //
// function viewProduct(event) {
//   // Créer une fonction "viewProduct" qui a pour paramètre "event"
//   let id = event.currentTarget.id; // Créer une variable "id" et qui a pour valeur l'oursons sur lequel je clique
//   sessionStorage.setItem("teddyId", id); // Enregistre la clé "teddyId" avec l'id
// };