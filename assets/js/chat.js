function generateWhatsAppLink() {
    // Obter os valores do nome e mensagem do formulário
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    // Formatar a mensagem para a URL do WhatsApp
    var whatsappMessage = encodeURIComponent("Nome: " + name + "\nMensagem: " + message);

    // Montar o link para o chat do WhatsApp
    var whatsappLink = "https://wa.me/+5581999504711/?text=" + whatsappMessage;

    // Abrir o link em uma nova janela ou aba
    window.open(whatsappLink);

    // Impedir o envio do formulário padrão
    return false;
}