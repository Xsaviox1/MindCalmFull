document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var moodButtons = document.querySelectorAll(".wrap-humor");

    // Mostra o modal quando a página é carregada
    modal.style.display = "block";

    // Adiciona um evento de clique a cada opção de humor no modal
    var moodOptions = document.querySelectorAll(".mood-option");
    moodOptions.forEach(function(option) {
        option.addEventListener("click", function() {
            var selectedMood = this.getAttribute("data-mood");
            updateMood(selectedMood); // Atualiza o humor na tela home
            modal.style.display = "none"; // Esconde o modal após seleção
        });
    });

    // Adiciona um evento de clique a cada botão de humor na tela home
    moodButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var selectedMood = this.getAttribute("data-mood");
            updateMood(selectedMood); // Atualiza o humor na tela home
        });
    });

    // Função para atualizar o humor na tela home
    function updateMood(mood) {
        moodButtons.forEach(function(button) {
            button.classList.remove("selected"); // Remove a classe "selected" de todos os botões de humor
        });

        var selectedButton = document.querySelector(".wrap-humor[data-mood='" + mood + "']");
        if (selectedButton) {
            selectedButton.classList.add("selected"); // Adiciona a classe "selected" ao botão de humor selecionado
        }
    }
});
