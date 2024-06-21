var map;
var violetIcon;
var userLatitude; // Variável global para armazenar a latitude do usuário
var userLongitude; // Variável global para armazenar a longitude do usuário

violetIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function success(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    userLatitude = position.coords.latitude; // Atribuir a latitude para a variável global
    userLongitude = position.coords.longitude; // Atribuir a longitude para a variável global

    // Armazenar a latitude e longitude em localStorage
    localStorage.setItem('userLatitude', userLatitude);
    localStorage.setItem('userLongitude', userLongitude);

    if (map === undefined) {
        map = L.map('map').setView([userLatitude, userLongitude], 14);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    } else {
        map.setView([userLatitude, userLongitude], 14);
    }

    // Adicionar marcador da posição do usuário
    L.marker([userLatitude, userLongitude], {
        icon: violetIcon
    }).addTo(map)
    .bindPopup("Você está aqui!")
    .openPopup();

    // Carregar e exibir marcadores dos psicólogos do arquivo JSON
    fetch('/assets/js/psicologos.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(function(psicologo) {
                const nome = psicologo.nome;
                const tel = psicologo.tel;
                const distancia = psicologo.distancia;
                const imagem = psicologo.imagem;

                const psicologoIcon = L.icon({
                    iconUrl: imagem,
                    iconSize: [50, 50],
                    shadowSize: [50, 64],
                    iconAnchor: [22, 94],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                });

                L.marker([psicologo.latitude, psicologo.longitude], {
                    icon: psicologoIcon
                }).addTo(map)
                    .bindPopup(`<div class="cardMap"><img class="imgPsicologo" src="${imagem}" alt="Imagem do psicólogo"><br>
                <h3 class="nomePsicologo">${nome}</h3> <h3 class="telPsi">${tel}</h3>
                <p><strong>Distância:</strong><br> ${distancia}</p></div>`);
            });
        })
        .catch(error => console.error('Erro ao carregar as localizações:', error)); //mensagem de erro
}

function error(error) {
    console.log(error);
}

var watchID = navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});
