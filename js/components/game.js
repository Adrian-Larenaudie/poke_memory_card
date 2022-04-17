const game = {
      /* Initialiasation du module */
      init: () => {
        //Log en console pour controle du bon chargement du module
        console.log('Module game chargé');
    },

    score: 0,

    /* Méthode d'ajout d'écouteur d'évènements click sur les cartes contenu dans la grille du jeu */
    activeClickOnCards: () => {
        //Ciblage de toutes les cartes contenu dans la grille
        const cards = document.querySelectorAll('.game-page__hide-card');
        //Pour chaque carte un écouteur d'évènement click est adossé
        cards.forEach((card) => {
            card.addEventListener('click', game.handleActiveClickOnCards)
        })
    },

    /* Handler sur le click des cards de la grille du jeu */
    handleActiveClickOnCards: (event) => {
        //Ciblage des cartes du jeu
        const cards = document.querySelectorAll('.game-page__hide-card');
        //Ciblage de la balise image sur la carte qui a été cliquée
        const pokemon = event.target.querySelector('.hidden-img');
        //Ajout d'un data set pour définir cette carte comme étant cliquée
        pokemon.dataset.clicked = 'true';
        //Avec cette méthode on stock le nombre de cartes qui ont été cliquées
        let numberOfClickedImg = game.checkNumberOfClickedImg();
        //Si le nombre de cartes cloquées est inférieur ou égal à 2
        if(numberOfClickedImg <= 2) {
            //On révèle la carte
            pokemon.style.visibility = 'visible';
        }
        //Si le nombre de cartes cliquées est egal à 2
        if(numberOfClickedImg == 2) {
            //On retire l'évènement clique sur toutes les cartes
            cards.forEach((card) => {
                card.removeEventListener('click', game.handleActiveClickOnCards)
            })
            //Au bout de 1 seconde
            setTimeout(() => {
                //On joue plusieurs méthodes:
                //Vérification si les deux cartes cliquées sont identiques
                game.checkMatch();
                //Toutes les cartes perdent leur status cliquée (le data set clicked repasse à false)
                game.putAllImgToDataClickedFalse();
                //Réactivatrion des évènements cliques sur toutes nos cartes
                game.activeClickOnCards();
                //Vérification si la partie est terminée
                if(scoring.isGameFinished()) {
                    //Si elle est terminée on passe le score dans la méthode d'affichage des résultats
                    modal.display(game.score);
                }
            }, 1000);      
        }     
    },

    /* Méthode de vérification du nombre de cartes cliquées */
    checkNumberOfClickedImg: () => {
        //Déclaration d'une variable pour compter le nombre de carte cliquées, valeur par défaut à 0
        let numberOfClickedImg = 0;
        //Ciblage des éléments <img>  
        const pokemonsImg = document.querySelectorAll('.hidden-img');
        //Pour chaque images:
        pokemonsImg.forEach((pokemonImg) => {
            //Si l'images possède un dataset clicked à true:
            if(pokemonImg.dataset.clicked === 'true') {
                //On incrémente le nombre d'image cliquées de 1
                numberOfClickedImg++;
            }
        })
        //La méthode retourne le nombre d'images cliquées
        return numberOfClickedImg;
    },

    /* Méthode pour varifier si les deux images cliquées sont identiques à l'aide de leur attribut src */
    checkMatch: () => {
        //Déclaration d'un tableau vide qui servira à stocker les deux éléments cliqués
        let clickedImg = [];
        //Ciblage de toutes mes images
        const pokemonsImg = document.querySelectorAll('.hidden-img');
        //Pour chaque images:
        pokemonsImg.forEach((pokemonImg) => {
            //Si l'images est cliquée
            if(pokemonImg.dataset.clicked === 'true') {
                //On l'ajoute dans le tableau
                clickedImg.push(pokemonImg);
                //On lui ajoute un dataset pour dire qu'il y a potentiellement un match 
                pokemonImg.dataset.match = 'true';
            }
        })
        //On compare les deux sources des deux images:
        //Si elles sont différentes il n'y a pas de match:
        if(clickedImg[0].src != clickedImg[1].src) {
            //On décrémente le score de 1 points
            game.score--;
             //On affiche un message à l'utilisateur
             scoring.pointAnimation(false);
            //On parcourt à nouveau toutes les balies images
            pokemonsImg.forEach((pokemonImg) => {
                //Si le data set matched qui correspond aux images ayant précédemment matchés avec d'autres est différent de true
                if (pokemonImg.dataset.matched != 'true') {
                    //On:
                    //Passe le match potentielle à false
                    pokemonImg.dataset.match = 'false';
                    //Cache l'image
                    pokemonImg.style.visibility = 'hidden';
                    //Passe le balise parente en visible
                    pokemonImg.closest('div').style.visibility = 'visible'; 
                }
            })
        //Sinon si les src sont identique il y a un match:
        } else if(clickedImg[0].src === clickedImg[1].src) {
            //On incrémente le score de 2 points
            game.score += 2 ;
            //On affiche un message à l'utilisateur
            scoring.pointAnimation(true);
            //On parcourt toutes les balises images
            pokemonsImg.forEach((pokemonImg) => {
                //Si lorsque l'on arrive sur une balise qui a l'attribut match à true
                if (pokemonImg.dataset.match === 'true') {
                    //On lui passe cet attribut à false
                    pokemonImg.dataset.match = 'false';
                    //Et on la concidère désormais comme une balise qui a matché avec une autre elle restera donc visible 
                    pokemonImg.dataset.matched = 'true';
                }
            })
        }
    },

    /* Méthode pour définir un data set clicked à false pour toutes les images */
    putAllImgToDataClickedFalse: () => {
        //On cibles toutes les balises image
        const pokemonsImg = document.querySelectorAll('.hidden-img');
        //Pour chaque images on passe le data set clicked à false
        pokemonsImg.forEach((pokemonImg) => {
            pokemonImg.dataset.clicked = 'false';     
        })        
    },
}