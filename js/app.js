// Module app est un objet JavaScript
const app = {
    //Méthode fléchée de l'objet app
    init: () => {
        //Log en console pour controle du bon chargement du module
        console.log('Module app chargé');

        //Initialisation des différents composants (modules)
        loadingGame.init();
        boardGeneration.init();
        game.init();
        utils.init();
        
        //Appel de la méthode pour afficher la parge d'accueil
        app.home();

        utils.getPokemonArray(6);
    },

    /* Méthode pour afficher la home et permettre de lancé la page de chargement du jeu */
    home: () => {
        //Ciblage de l'élément parent qui va recevoir l'affichage principale
        const displayer = document.querySelector('#displayer');
        //Ciblage du template relatif à l'affichage de l'accueil
        const homeTemplate = document.querySelector('.homeTpl');
        //Le tpl est cloné puis stocké dans une variable
        let home = homeTemplate.content.cloneNode(true);
        //Ajout du clone comme 1er enfant du displayer
        displayer.prepend(home);
        //Ciblage du bouton de lancement du jeu
        const launchButton = displayer.querySelector('.home__launcher-button');
        //Ajout d'un écouteur d'évènement click sur ce bouton
        launchButton.addEventListener('click', (event) => {
            //Lors du click:
            //1.Le displayer est nettoyé (vidé de tous ses éléments)
            utils.displayerCleaner();
            //2.la méthode pour lancer l'affichage du chargement du jeu est jouée
            //loadingGame.running(); //! commenté pour facilité le développement
            boardGeneration.displayGame();
        })
    },
}

// On ajoute un écouteur d'évènement pour pouvoir lancer l'application
// dès que le DOM sera chargé
document.addEventListener('DOMContentLoaded', app.init);