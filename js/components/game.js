const game = {
      /* Initialiasation du module */
      init: () => {
        //Log en console pour controle du bon chargement du module
        console.log('Module game chargé');
    },

    /* Méthode d'ajout d'écouteur d'évènements click sur les cartes */
    activeClickOnCards: () => {
        const cards = document.querySelectorAll('.game-page__hide-card');
        cards.forEach((card) => {
            card.addEventListener('click', (event) => {
                const pokemon = card.querySelector('.hidden-img');
                pokemon.style.visibility = 'visible';
            }) 
        })
    },
}