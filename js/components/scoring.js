const scoring = {
    init: () => {
        console.log('Module scoring chargé');
    },

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

    pointAnimation: (boolean) => {
        const pointElement = document.querySelector('.gameTpl__point');
        pointElement.style.visibility = 'visible';
        if(boolean) {
            pointElement.classList.add('success');
            pointElement.classList.remove('fail');
            pointElement.textContent = 'Match +2 points!';
        } else {
            pointElement.classList.add('fail');
            pointElement.classList.remove('success');
            pointElement.textContent = 'Dommage -2 point';
        }
        setTimeout(() => {
            pointElement.style.visibility = 'hidden';
        }, 900);
    
    },

}