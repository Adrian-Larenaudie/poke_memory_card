const utils = {
    /* Initialiasation du module */
    init: () => {
        //Log en console pour controle du bon chargement du module
        console.log('Module utils chargé');
    },

    /* Méthode pour retirer toutes les balises dans l'élément displayer */
    displayerCleaner: () => {
        //Ciblage de l'élément displayer
        const displayer = document.querySelector('#displayer');
        //Ciblage de tous les éléments du displayer
        const displayerElements = displayer.querySelectorAll('*');
        //Boucle sur le tableau des éléments du displayer
        displayerElements.forEach(element => {
            //Pour chaque tour de boucle la balise courante est retirée du DOM
            element.remove();
        });
    },

    /* Méthode pour injecter les balises (card) dans la grille de jeu */
    loadCard: (cardNumber) => {
        for (let index = 0; index < cardNumber; index++) {
            document.getElementById('boardGame').innerHTML+= `
            <div class="game-page__hide-card"><img class="hidden-img" src="img/" alt="pokémon aléatoire"></div>
            `;      
        }       
    },

    /* Méthode qui retourne un entier aléatoire dans l'interval passé en paramètre */
    getRandomInteger: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    },

    /* Méthode de récupération d'un tableau d'une longueur paramétrable à partir d'un tableau principal  */
    getPokemonArray(number) {
        const mainPokemonArray = []
        return randomArrayOfPokemon;
    },
}