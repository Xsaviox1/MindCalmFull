document.addEventListener("DOMContentLoaded", function() {
    // Define uma função para carregar imagens fora da tela
    function lazyLoadImages() {
        let lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.removeAttribute("data-src");
        });
    }

    // Verifica se o browser suporta requestIdleCallback
    if ("requestIdleCallback" in window) {
        // Chama lazyLoadImages quando o browser estiver ocioso
        requestIdleCallback(lazyLoadImages);
    } else {
        // Caso o browser não suporte requestIdleCallback, carrega as imagens imediatamente
        lazyLoadImages();
    }
});