// Module app est un objet JavaScript
const app = {
    //Méthode fléchée de l'objet app
    init: () => {
        //Initialisation des différents composants (modules)
        loadingGame.init();
        game.init();
        utils.init();
        modal.init();
        score.init();
        boardGeneration.init();
        //Appel de la méthode pour afficher la parge d'accueil
        app.home(); 
    },

    /* Méthode pour afficher la home et permettre de lancé la page de chargement du jeu */
    home: () => {
        //Ciblage de l'élément parent qui va recevoir l'affichage principale
        const displayer = document.querySelector('#displayer');
        //On commence par nettoyer le conenu du displayer
        utils.displayerCleaner();
        //Ciblage du template relatif à l'affichage de l'accueil
        const homeTemplate = document.querySelector('.homeTpl');
        //Le tpl est cloné puis stocké dans une variable
        let home = homeTemplate.content.cloneNode(true);
        //Ajout du clone comme 1er enfant du displayer
        displayer.prepend(home);
        //Ajout des évènements click dur les options
        app.handleOptionMenu();
        //Ciblage du bouton de lancement du jeu
        const launchButton = displayer.querySelector('.home__launcher-button');
        //Ajout d'un écouteur d'évènement click sur ce bouton
        launchButton.addEventListener('click', (event) => {
            //Lors du click:
            //1.Le displayer est nettoyé (vidé de tous ses éléments)
            utils.displayerCleaner();
            //2.la méthode pour lancer l'affichage du chargement du jeu est jouée
            //loadingGame.running();
            //! ici pour skip le chargement
            boardGeneration.displayGame();
        })
    },

    /* Méthode handle pour gérer le click sur les options et actualiser le choix de l'utilisateur */
    handleOptionMenu: () => {
        const options = document.querySelectorAll('.option-menu__button');
        options.forEach((option) => {
            option.addEventListener('click', (event) => {
                app.unselectOtherOptions(options);
                option.style.backgroundColor = "#49b675";
                boardGeneration.cardsNumber = option.getAttribute('value');
                console.log(    boardGeneration.cardsNumber);
            })
            
        })
    },

    /* Méthode qui permet de remettre la couleur par défault des options du jeu */
    unselectOtherOptions: (options) => {
        options.forEach((option)=> {
            option.style.backgroundColor = 'rgb(65, 96, 210)';
        })
    },


}

// On ajoute un écouteur d'évènement pour pouvoir lancer l'application
// dès que le DOM sera chargé
document.addEventListener('DOMContentLoaded', app.init);