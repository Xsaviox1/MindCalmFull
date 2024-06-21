function validateForm() {
    // Obter os valores dos campos de e-mail e senha
    var email = document.getElementById("email-tel").value;
    var password = document.getElementById("pass").value;

    // Verificar se os campos estão preenchidos
    if (email.trim() === "" || password.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário se os campos estiverem vazios
    }

    // Redireciona para a página home.html
    window.location.href = "home.html";
    return false;
}
function togglePassword(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

document.getElementById("continuarButton").addEventListener("click", function() {
    // Redireciona para a página home.html quando o botão for clicado
    window.location.href = "home.html";
});

function mostrarPopup() {
    alert("Registro salvo com sucesso! :)");
}


function saveName() {
    const nome = document.getElementById('nomeInput').value;
    if (nome) {
        localStorage.setItem('userName', nome);
        window.location.href = 'home.html';
    } else {
        alert('Por favor, insira seu nome.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('userNameDisplay').textContent = userName;
    }
});

