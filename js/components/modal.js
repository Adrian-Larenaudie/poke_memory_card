const modal = {
    init: () => {
        console.log('Module modal chargé');
    },

    displayModal: () => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
        if(score.currentScore > 0) {
            modal.querySelector('.modal__title').textContent = 'Bravo';
            modal.querySelector('.modal__score').textContent = 'Tu as terminé avec ' + score.currentScore + ' pts!';
        } else if(score.currentScore = 0) {
            modal.querySelector('.modal__title').textContent = 'Pas mal mais tu peux faire mieux';
            modal.querySelector('.modal__score').textContent = 'Tu as terminé avec ' + score.currentScore + ' pts!';
        } else if(score.currentScore > 0) {
            modal.querySelector('.modal__title').textContent = 'Dommage, retente ta chance';
            modal.querySelector('.modal__score').textContent = 'Tu as terminé avec ' + score.currentScore + ' pts!';
        }
        const modalButtons = document.querySelectorAll('.modal__buttons div');
        modalButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                if(button.textContent === 'Rejouer') {
                    boardGeneration.displayGame();
                } else if(button.textContent === 'Accueil') {
                    app.home();                 
                }
                modal.style.display = 'none';
                if(score.currentScore > score.bestScore) {
                    document.querySelector('.game-page__best-score span').textContent = score.currentScore;
                }
                document.querySelector('.game-page__last-game-score span').textContent = score.currentScore;
                document.querySelector('.game-page__current-score span').textContent = 0;
                score.currentScore = 0;
               
            })
        }) 
    },
}