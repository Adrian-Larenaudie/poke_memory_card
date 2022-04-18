const score = {
    init: () => {
        console.log('Module scoring chargé');
    },

    /* Propriété relative au score de la partie en cours */
    currentScore: 0,

    /* Propriété relative au score de la partie précédente */
    lastGameScore: 0,

    /* Propriété relative au meilleure score */
    bestScore: 0,

    /* Méthode qui permet de savoir quand la partie est terminée */
    isGameFinished: () => {
        let boolean = true;
        const allPokemonsImg = document.querySelectorAll('.hidden-img');
        allPokemonsImg.forEach((pokemonImg)=> {
            if(pokemonImg.dataset.matched === 'false') {
                return boolean = false;  
            }
        })
        return boolean;
    },

    // TODO LOCAL STORAGE DES SCORES: lastGameScore & bestScore
    /* Méthode pour gérer l'affichage de l'attribution des points à l'utilisateurs */
    pointAnimation: (boolean) => {
        //Ciblage de l'élément qui va subir les modifications
        const pointElement = document.querySelector('.gameTpl__point');
        //On commence par afficher l'élément
        pointElement.style.visibility = 'visible';
        //On lui retire l'animation de disparition
        pointElement.classList.remove('hiddenAnimation');
        //On lui ajoute l'animation d'apparition
        pointElement.classList.add('visibleAnimation');
        //Si l'utilisateur marque 2 points
        if(boolean) {
            //Ajout d'une classe
            pointElement.classList.add('success');
            //On enlève la clase opposée
            pointElement.classList.remove('fail');
            //Ajout de texte
            pointElement.textContent = 'Match +2 points!';
        //Si il perd 1 point
        } else {
            //Ajout d'une classe
            pointElement.classList.add('fail');
            //On enlève la clase opposée
            pointElement.classList.remove('success');
              //Ajout de texte
            pointElement.textContent = 'Dommage -1 point';
        }
        //Au bout de 1seconde
        setTimeout(() => {
            //Ajout de l'animation de disparition
            pointElement.classList.add('hiddenAnimation');
            //L'élément est maintenant masqué
            pointElement.style.visibility = 'hidden';
            //On enlève l'animation d'apparition
            pointElement.classList.remove('visibleAnimation');
        }, 1000);
    },

    /* Affiche le score actuel à l'utilisateur */
    displayCurrentScore: () => {
        const currentScore = document.querySelector('.game-page__current-score span');
        currentScore.textContent = score.currentScore;
    },

    /* Affiche le score de la dernière partie à l'utilisateur */
    displayLastGameScore: () => {
        const scoreElement = document.querySelector('.game-page__last-game-score span')
        scoreElement.textContent = score.lastGameScore;
    },

    /* Affiche le meilleure score à l'utilisateur */
    displayBestScore: () => {
        const scoreElement = document.querySelector('.game-page__best-score span')
        scoreElement.textContent = score.bestScore;
    },
}