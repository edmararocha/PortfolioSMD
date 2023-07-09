
const corujaElement = document.querySelector('#botaotrilhas');
const frames = document.querySelectorAll('.frame');
const animationDuration = 300; // Duração total da animação em milissegundos
const frameDuration = animationDuration / frames.length;
let currentFrame = 0;
let animationTimeout;

function showFrame(frameIndex) {
    frames.forEach((frame, index) => {
        frame.classList.toggle('visible', index === frameIndex);
    });
}

function playAnimation() {
    showFrame(currentFrame);
    currentFrame++;
    if (currentFrame < frames.length) {
        animationTimeout = setTimeout(playAnimation, frameDuration);
    }
}

showFrame(currentFrame);

corujaElement.addEventListener('mouseover', () => {
    currentFrame = 0;
    clearTimeout(animationTimeout);
    playAnimation();
});

corujaElement.addEventListener('mouseout', () => {
    clearTimeout(animationTimeout);
    currentFrame = 0;
    showFrame(currentFrame);
});

const elementoCachorro = document.querySelector('#botaoprojetos');
const quadros = document.querySelectorAll('.frame-cachorro');
const duracaoAnimacao = 300; // Duração total da animação em milissegundos
const duracaoQuadro = duracaoAnimacao / quadros.length;
let quadroAtual = 0;
let timeoutAnimacao;

function exibirQuadro(indiceQuadro) {
    quadros.forEach((quadro, indice) => {
        quadro.classList.toggle('visible', indice === indiceQuadro);
    });
}
exibirQuadro(quadroAtual);
function reproduzirAnimacao() {
    exibirQuadro(quadroAtual);
    quadroAtual++;
    if (quadroAtual < quadros.length) {
        timeoutAnimacao = setTimeout(reproduzirAnimacao, duracaoQuadro);
    }
}

elementoCachorro.addEventListener('mouseover', () => {
    quadroAtual = 0;
    clearTimeout(timeoutAnimacao);
    reproduzirAnimacao();
});

elementoCachorro.addEventListener('mouseout', () => {
    clearTimeout(timeoutAnimacao);
    quadroAtual = 0;
    exibirQuadro(quadroAtual);
});

let sapoElement = document.querySelector('#botaoegressos')
let frame_sapos = document.querySelectorAll('.frame-sapo')
let frogDuration = 300; // Duração total da animação em milissegundos
let picDuration = frogDuration / frame_sapos.length;
let frameAtual = 0;
let sapoTimeout;

function showFrog(frogIndex) {
    frame_sapos.forEach((frog, indexFrog) => {
        frog.classList.toggle('visible', indexFrog === frogIndex);
    });
}

function playFrog() {
    showFrog(frameAtual);
    frameAtual++;
    if (frameAtual < frames.length) {
        sapoTimeout = setTimeout(playFrog, frameDuration);
    }
}

showFrog(frameAtual);

sapoElement.addEventListener('mouseover', () => {
    frameAtual = 0;
    clearTimeout(sapoTimeout);
    playFrog();
});

sapoElement.addEventListener('mouseout', () => {
    clearTimeout(sapoTimeout);
    frameAtual = 0;
    showFrog(frameAtual);
});