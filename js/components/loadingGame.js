const loadingGame = {
    /* Initialisation du module */
    init: () => {
        //Log en console pour controle du bon chargement du module
        console.log('Module loadingGame chargé');
    },

    /* Méthode pour afficher la page de chargement du jeu */
    running: () => {
        //Injection du bon template
        //Ciblage de l'élément parent qui va recevoir l'affichage principale
        const displayer = document.querySelector('#displayer');
        //Ciblage du template relatif à l'affichage de la page de chargement
        const loadingTemplate = document.querySelector('.loadingGame');
        //Le tpl est cloné puis stocké dans une variable
        let loading = loadingTemplate.content.cloneNode(true);
        //Ajout du clone comme 1er enfant du displayer
        displayer.prepend(loading);
        //La méthode pour animer la barre de chargement est jouée
        loadingGame.handleLoadingBar();
        //La méthode pour animer l'affichage du texte lors du chargement est jouée
        loadingGame.handleLoadingBubbleText();
    },

    /* Méthode pour simuler un chargement en animant une barre de remplissage */
    handleLoadingBar: () => {
        //Ciblage de la barre de chargement
        const loadingBar = document.querySelector('.loading__bar--load');
        //Appel de la méthode asynchrone pour jouer un timer itératif sur le remplissage de la barre
        loadingGame.loadingBarTimer(loadingBar).then( () => {
            //Une fois la méthode exécutée on affiche la grille de jeu
            boardGeneration.displayGame();
        }
        )
    },

    /* Méthode asynchrone simule le remplissage de la barre de chargement, deux paramètres: l'élément html a remplir et une variable de type number valeur par défaut 0 qui correspond à la largeur de notre élément */
    loadingBarTimer: async (loadingBar, width = 0) => {
        //Timer + fonction fléchée joué après 10 milliseconde 
        setTimeout(() => {
            //Mise à jour de la width de notre élément HTML
            loadingBar.style.width = width + '%';
            //Width est incrémenté de 0.1
            width += .1;
            //Si width est inférieur à 100 (%)
            if(width < 100){
                //La mathode courante est jouée à nouveau avec la nouvelle valeur de width passé en paramètre
                loadingGame.loadingBarTimer(loadingBar ,width)
            }
        }, 10);   
        //Retour de l'objet promise au bout de 12 secondes (cad: une fois que la barre est chargée)
        return await new Promise(
            (resolve) => {
                setTimeout(() => {
                    resolve('ok let\'s go');
                }, (12000));    
        })                   
    },

    /* Méthode pour afficher du texte défilant dans la bulle lors du chargement du jeu */
    handleLoadingBubbleText: () => {
        //Ciblage d l'élément qui va recevoir le texte
        const bubbleText = document.querySelector('.loading__text');
        //Les chaines de caractères qui seront affichées les unes après les autres dans la bulle
        const firstSentence = 'Salut, je suis Adrian, j\'ai développé ce petit jeu.';
        const secondSentence = 'Amuse toi et exerce ta mémoire avec le PokéMemoryGame';
        const thirdSentence = 'C\'est parti!';
        //Appel de la méthode pour lancer l'affichage des phrases: prend les chaines de caractères + l'élément de la bulle en paramètre
        loadingGame.textDisplayer(firstSentence, secondSentence, thirdSentence, bubbleText);
    },

    /* Méthode pour lancer l'affichage des phrase dans l'élément */
    textDisplayer: (stringOne, stringTwo, stringThree, element) => {
        /* Appel de la méthode asynchrone textDisplayerTimer */
        loadingGame.textDisplayerTimer(stringOne, element).then(() => {
            //Seulement après avoir finit son exécution:
            //1.L'élément est vidé de son texte
            element.textContent = '';
            //2.Le centrage est amélioré pour le prochain texte
            element.style.top = '25%';
            //3.Appel de la méthode pour afficher la seconde phrase
            loadingGame.textDisplayerTimer(stringTwo, element).then(() => {
                //Seulement après avoir finit son exécution:
                //1.L'élément est vidé de son texte
                element.textContent = '';
                //2.Appel de la méthode pour afficher la dernière phrase
                loadingGame.textDisplayerTimer(stringThree, element);        
            });
        })
    },

    /* Méthode asynchrone pour afficher une chaine de caractère lettre par lettre */
    textDisplayerTimer: async (string, element, i = 0) => {
        //Variable qui définit le temps en milliseconde de la fonction setTimout
        let time = 0;
        //Si le caractère de string en position i n'est pas un espace time passe à 70 
        if(string[i] != ' ') {
            time = 70;
        }
        //Timer qui s'exécute tant que i est inférieur à la longueur de string
        setTimeout(() => {
           //Ajout de la lettre dans l'élément (bulle)
            element.textContent += string[i];
            //Incrémentation de i
            i++;
            //Si i est inférieur à la longueur de string
            if (i < string.length) {
                //La méthode courante est jouée à nouveau
                loadingGame.textDisplayerTimer(string, element, i);
            }
        }, time);
        //retour de l'objet promise uniquement quand la fonction a finit d'affficher toutes les lettre + 1 seconde 
        return await new Promise(
            (resolve) => {
                setTimeout(() => {
                    resolve('ok let\'s go');
                }, (string.length*70+1000));      
        })           
    },

}