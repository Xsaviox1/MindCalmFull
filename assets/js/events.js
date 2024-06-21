var btn = document.getElementById('butt');
let mediaRecorder = null;
let i = 0;

function tremerBotao() {
    btn.classList.add('botao');
}

function pararBotao() {
    btn.classList.remove('botao');
}

function captarAudio() {
    if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
        !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
        alert('O navegador não suporta a gravação de áudio! ;(');
    }
    if (navigator.mediaDevices || navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then(stream => {
                // Ao iniciar
                tremerBotao();
                btn.classList.add('pulsar'); // Adiciona classe para pulsar o botão

                let chunk = [];

                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = data => {
                    chunk.push(data.data);
                }
                mediaRecorder.start();
                // Ao parar vai acontecer
                mediaRecorder.onstop = () => {
                    const blob = new Blob(chunk, {
                        type: 'audio/ogg; codecs=opus'
                    });
                    const reader = new window.FileReader();
                    reader.readAsDataURL(blob);
                    reader.onload = () => {
                        try {
                            const audio = document.createElement('audio');
                            audio.src = reader.result;
                            audio.controls = true;
                            audio.style.marginTop = "-10px"; // Ajuste da margem superio
                            audio.style.margin = "0 auto"; // Centralizar elemento horizontalmente
                            audio.style.display = "block"; // Garantir que o elemento ocupe toda a largura disponível
                            $('body').append(audio); // ao invés de append aqui o áudio será enviado para outro lugar
                        } catch (error) {
                            alert("Erro ao criar arquivo de áudio")
                        }
                    }

                    pararBotao();
                    btn.classList.remove('pulsar'); // Remove classe de pulsação do botão
                }
            })
    }
}

btn.addEventListener('click', () => {
    i++;
    if (i === 1) {
        captarAudio();
    } else {
        if (mediaRecorder) {
            try {
                mediaRecorder.stop();
                i = 0;
            } catch (error) {
                alert("Erro ao acionar botão de stop")
            }
        }
    }
});