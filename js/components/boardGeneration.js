const boardGeneration = {
     /* Initialiasation du module */
     init: () => {
        //Log en console pour controle du bon chargement du module
        console.log('Module boardGeneration chargé');
    },

    /* Méthodep pour afficher le jeu */
    displayGame: () => {
        //Avant d'afficher la page du jeu, le contenu du displayer est vidé de toutes ses balises
        utils.displayerCleaner();
        //Injection du bon template
        //Ciblage de la balise que va recevoir l'affichage principale
        const displayer = document.querySelector('#displayer');
        //Ciblage du template relatif à l'affichage du jeu
        const loadingTemplate = document.querySelector('.gameTpl');
        //Le tpl est cloné puis stocké dans une variable
        let loading = loadingTemplate.content.cloneNode(true);
        //Ajout du clone comme 1er enfant du displayer
        displayer.prepend(loading);
        //Génération de la grille de jeu 12 pour le nombre de cases (cartes) souhaitées
        utils.loadCard(12);
        //Distribution des images aléatoirement
        boardGeneration.randomPokemonDisplaying();
        //Affichage des scores
        score.displayBestScore();
        score.displayLastGameScore();
        score.displayCurrentScore();
        //Activation des évènements sur les cartes du jeu
        game.activeClickOnCards();
    },

    /* Méthode d'ajout aléatoire des images de pokemon dans chaque case de la grille du jeu */
    randomPokemonDisplaying: () => {
        //Récupération d'un tableau de pokémon 
        const pokemons = utils.getPokemonArray(6);
        //Tableau des éléments seléctionnés une 1ere fois
        let arrayofFirstPickedUp = [];
        //Tableau des éléments seléctionnés une 2eme fois
        let arrayofSecondPickedUp = [];
        //Ciblage des balises <img> 
        const imgElements = document.querySelectorAll('.hidden-img');
        //Pour chaque balise <img>
        imgElements.forEach((element) => { 
            //Un entier aléatoire compris entre 0 et la longueur du tableau d'image est stocké dans une variable
            let randIndex = utils.getRandomInteger(0, pokemons.length);
            //Tant que cet entier est dans le tableau 'arrayofSecondPickedUp':
            while (arrayofSecondPickedUp.includes(randIndex)) {
                //Un nouvelle entier aléatoire dans le même intervale est récupéré pour écraser l'ancien 
                randIndex = utils.getRandomInteger(0, pokemons.length);
            }
            //Si on arrive ici c'est que l'entier aléatoire n'est pas déjà présent dans le tableau 'arrayofSecondPickedUp'
            //Alors on donne à la balise <img> courante une source récupérée grâce à la valeur de randIndex
            element.src = 'img/' + pokemons[randIndex] + '.png';
            //Si l'entier est déjà présent dans la tableau 'arrayofFirstPickedUp':
            if(arrayofFirstPickedUp.includes(randIndex)) {
                //On le stock dans le tableau 'arrayofSecondPickedUp'
                arrayofSecondPickedUp.push(randIndex);
            } else {
                //Sinon il est stocké dans 'arrayofFirstPickedUp'
                arrayofFirstPickedUp.push(randIndex)
            }      
        })
    },

}