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
        //Le tableau principal de tous nos pokémons
        const mainPokemonArray = ['Abo', 'Arbok', 'Aspicot', 'Bulbizarre', 'Carabaffe', 'Carapuce', 'Chenipan', 'Chrysacier', 'Coconfort', 'Dardargnan', 'Dracaufeu', 'Florizarre', 'Herbizarre', 'Papilusion', 'Piafabec', 'Pikachu', 'Raichu', 'Rapasdepic', 'Railedadanrineau', 'Rattata', 'Rattatac', 'Reptincel', 'Roucool', 'Roucoups', 'Roucarnage', 'Salamèche', 'Tortank']
        //Tableau vide qui va recevoir 'number' pokémons aléatoires contenu dans le tableau principal
        let randomArrayOfPokemon = [];
        //On boucle autant de fois que 'number'
        for (let i = 0; i < number; i++) {
            //Récupération d'un index aléatoire dans un interval 0 et la taille du tableau principal - 1
            let randIndex = utils.getRandomInteger(0, mainPokemonArray.length-1);
            //Vérification de la validité de cette index sinon un autre index valide sera renvoyé et stocké dans rightIndex
            let rightIndex = utils.getRightIndex(mainPokemonArray, randomArrayOfPokemon, randIndex);
            //Insertion du pokemon dans la nouvelle liste à l'aide de la valeur de l'index dans rightIndex et du tableau principal
            randomArrayOfPokemon.push(mainPokemonArray[rightIndex])
        }
        //La méthode retourne un tableau de pokemon qui contient 'number' pokemons aléatoirement piochés dans le tableau principal
        return randomArrayOfPokemon;
    },

    /* Méthode pour retrouner un index qui n'a pas déjà été récupéré dans la liste du tableau principal */
    getRightIndex: (mainArray, randomArray, randIndex) => {
        //Tant que la tableau ne possède pas la valeur du tableau principal en position randIndex:
        while(randomArray.includes(mainArray[randIndex])) {
            //Un nouvel index est récupéré
            randIndex = utils.getRandomInteger(0, mainArray.length-1);
            //La méthode courante est rejouée
            utils.getRightIndex(mainArray, randomArray, randIndex);
        } 
        //On retourne un index qui n'a pas encore été utilisé 
        return randIndex;  
    }           
}