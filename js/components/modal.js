const modal = {
    init: () => {
        console.log('Module modal chargé');
    },

    display: (score) => {
        const scoreElement = document.querySelector('.game-page__last-game-score')
        scoreElement.textContent += score;
    },
}