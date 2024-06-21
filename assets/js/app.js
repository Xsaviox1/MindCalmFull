const circleProgress = document.querySelector('.circle-progress');
const start = document.querySelector('.start');
const instructions = document.querySelector('.instructions');

let tempoMin = 0.5;

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const growCircle = async () => {
    tempoMin = (tempoMin * 60) / 10;
    start.classList.add('button-inactive');
    
    for (let i = 0; i < tempoMin; i++) {
        instructions.textContent = "Inspire";
        circleProgress.classList.add('circle-grow');
        await delay(5000);
        
        instructions.textContent = "Expire";
        circleProgress.classList.remove('circle-grow');
        await delay(5000);
        
        if (i === (tempoMin - 1)) {
            start.classList.remove('button-inactive');
            instructions.textContent = "Você está pronto para respirar?";
            start.textContent = "Começar";
        }
    }
}

start.addEventListener('click', () => {
    growCircle();
});
