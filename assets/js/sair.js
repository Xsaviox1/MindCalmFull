   // Função para mostrar o modal de confirmação ao clicar em "Sair"
   document.getElementById("sair").addEventListener("click", function() {
    document.getElementById("modal-sair").style.display = "block";
});

// Função para fechar o modal de confirmação ao clicar em "Cancelar" ou fora do modal
window.onclick = function(event) {
    var modal = document.getElementById('modal-sair');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Função para fechar o modal de confirmação ao clicar em "Cancelar"
document.getElementById("cancelar-sair").addEventListener("click", function() {
    document.getElementById("modal-sair").style.display = "none";
});

// Função para redirecionar para index.html ao confirmar a saída
document.getElementById("confirmar-sair").addEventListener("click", function() {
    window.location.href = "index.html";
});