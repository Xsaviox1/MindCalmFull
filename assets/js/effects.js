document.addEventListener("DOMContentLoaded", function() {
    // Pega o nome da URL
    var url = new URL(window.location.href);
    // Pega o parâmetro 'nome' da URL
    var nomeUsuario = url.searchParams.get("nome");
    // Seleciona o elemento onde o nome do usuário será exibido
    var nomeUsuarioElement = document.getElementById("nomeUsuario");
    // Verifica se o nome do usuário não é nulo e atualiza o texto
    if (nomeUsuario) {
        nomeUsuarioElement.textContent = nomeUsuario;
    }
});

    // Aguarda o carregamento completo do DOM
    document.addEventListener("DOMContentLoaded", function() {
        // Seleciona o campo de entrada de nome
        var nomeInput = document.getElementById("nomeInput");
        // Seleciona o botão de continuar
        var continuarButton = document.getElementById("continuarButton");

        // Adiciona um evento de escuta para o evento "input"
        nomeInput.addEventListener("input", function() {
            // Seleciona o elemento que exibe o nome na tela home
            var nomeUsuario = document.getElementById("nomeUsuario");
            // Atualiza o texto do elemento com o valor do campo de entrada de nome
            nomeUsuario.textContent = nomeInput.value;
        });

        // Adiciona o nome do usuário como parâmetro na URL ao clicar no botão de continuar
        continuarButton.addEventListener("click", function() {
            var nome = nomeInput.value;
            continuarButton.href = "home.html?nome=" + encodeURIComponent(nome);
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Pega o nome da URL
        var url = new URL(window.location.href);
        // Pega o parâmetro 'nome' da URL
        var nomeUsuario = url.searchParams.get("nome");
        // Seleciona o elemento onde o nome do usuário será exibido
        var nomeUsuarioElement = document.getElementById("nomeUsuario");
        // Verifica se o nome do usuário não é nulo e atualiza o texto
        if (nomeUsuario) {
            nomeUsuarioElement.textContent = nomeUsuario;
        }
    });
    