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
        const mainPokemonArray = ['Abo', 'Arbok', 'Aspicot', 'Bulbizarre', 'Carabaffe', 'Carapuce', 'Chenipan', 'Chrysacier', 'Coconfort', 'Dardargnan', 'Dracaufeu', 'Florizarre', 'Herbizarre', 'Papilusion', 'Piafabec', 'Pikachu', 'Raichu', 'Rapasdepic', 'Railedadanrineau', 'Rattata', 'Rattatac', 'Reptincel', 'Roucool', 'Roucoups', 'Roucarnage', 'Salamèche', 'Tortank']
        let randomArrayOfPokemon = [];
        for (let i = 0; i < number; i++) {
            let randIndex = utils.getRandomInteger(0, mainPokemonArray.length-1);
            let rightIndex = utils.getRightIndex(mainPokemonArray, randomArrayOfPokemon, randIndex);
            randomArrayOfPokemon.push(mainPokemonArray[rightIndex])
        }
        return randomArrayOfPokemon;
    },

    getRightIndex: (mainArray, randomArray, randIndex) => {
        while(randomArray.includes(mainArray[randIndex])) {
            randIndex = utils.getRandomInteger(0, mainArray.length-1);
            utils.getRightIndex(mainArray, randomArray, randIndex);
        } 
        return randIndex;  
    }           
}