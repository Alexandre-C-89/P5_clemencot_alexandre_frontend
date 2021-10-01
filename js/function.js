const currentCmd = JSON.parse(sessionStorage.getItem("userrecap"));// créer  la constante currentCmd et on lui donne pour valeur le get(récupère) de la clé userrecap 
if(currentCmd){ // SI currentCmd existe
    sessionStorage.clear(); // ALORS on supprime les données du sessionStorage
    localStorage.clear(); // ALORS on supprime les données du localeStorage
};

function cartNotifs() { // Créer la fonction cartNotifs 
    const notif = document.querySelector(".notif"); // créer la constante notif et on lui donne pour valeur la classe "notif"
    let cartStore = JSON.parse(localStorage.getItem("cartStore")); // créer la constante notif et on lui donne pour valeur le getItem de la clé cartStore 
    let qt = 0; // créer la variable "qt" et on lui assigne une valeur de 0
    if(cartStore){ // SI cartStore existe 
        cartStore.forEach(ted => { // Alors on créer une boucle forEach "cartStore" 
            qt = qt + ted.qty; // ON assigne le qt + la quantity de teddy à la variable "qt"
        });
        notif.textContent = qt; // ON injecte la variable "qt" à l'intérieur de la variable "notif"
    }
};

cartNotifs(); // ON appel la fonction "cartNotifs" pour la jouer 