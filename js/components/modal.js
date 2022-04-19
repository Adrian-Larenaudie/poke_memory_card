const modal = {
    init: () => {
        console.log('Module modal chargé');
        modal.initEventOnModal();
    },

    displayModal: () => {
        const modalBox = document.querySelector('.modal');
        modalBox.style.display = 'block';
        if(score.currentScore > 0) {
            modalBox.querySelector('.modal__title').textContent = 'Bravo';
            modalBox.querySelector('.modal__score').textContent = 'Tu as terminé avec ' + score.currentScore + ' pts!';
        } else if(score.currentScore = 0) {
            modalBox.querySelector('.modal__title').textContent = 'Pas mal mais tu peux faire mieux';
            modalBox.querySelector('.modal__score').textContent = 'Tu as terminé avec ' + score.currentScore + ' pts!';
        } else if(score.currentScore > 0) {
            modalBox.querySelector('.modal__title').textContent = 'Dommage, retente ta chance';
            modalBox.querySelector('.modal__score').textContent = 'Tu as terminé avec ' + score.currentScore + ' pts!';
        } 
    },

    initEventOnModal: () => {
        const modalButtons = document.querySelectorAll('.modal__buttons div');
        modalButtons.forEach((button) => {
            button.addEventListener('click', modal.handleDisplayModal);
        })
    },

    handleDisplayModal: (event) => {
        const modalBox = document.querySelector('.modal');
        const button = event.target
        console.log(event.target);
        if(button.textContent === 'Rejouer') {
            boardGeneration.displayGame();
        } else if(button.textContent === 'Accueil') {
            app.home();                 
        }
        modalBox.style.display = 'none';
        if(score.currentScore > score.bestScore) {
            document.querySelector('.game-page__best-score span').textContent = score.currentScore;
            score.bestScore = score.currentScore;
        }
        score.lastGameScore = score.currentScore;
        document.querySelector('.game-page__last-game-score span').textContent = score.currentScore;
        document.querySelector('.game-page__current-score span').textContent = 0;
        score.currentScore = 0;
        console.log(score.currentScore);
        console.log(score.lastGameScore);
        console.log(score.bestScore);
    },
}