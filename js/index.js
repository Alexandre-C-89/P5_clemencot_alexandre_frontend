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
    <div class="card mx-3" style="width: 18rem;">
    <img src="${teddy.imageUrl}" class="card-img-top" alt="${teddy.name}">
      <div class="card-body d-flex flex-column align-items-center">
        <h5 class="card-title">${teddy.name}</h5>
        <p class="card-text font-weight-bold">${teddy.price / 100}€</p>
        <input class="btn btn-primary" id="clear" type="reset" value="Voir le produit"></input>
      </div>
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