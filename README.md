# MindCalm

##### Acesse o PWA do aplicativo online (Mobile) -> https://mindcalmapp.netlify.app

## Justificativa
A refinaria contratante, através de meticulosa análise, constatou que grande parte de seus funcionários apresentam sintomas relacionados a transtornos psicológicos, o que também afeta o seu desempenho dentro da empresa. A empresa busca então auxiliar seus funcionários no alcance de uma melhor saúde mental e, consequentemente, criar um ambiente mais confortável e acolhedor para estes

## Proposta
É um aplicativo destinado a promover o bem-estar emocional e mental dos usuários, oferecendo recursos para gerenciar o estresse, ansiedade e promover a saúde mental positiva, melhorando a produtividade.

## Como é feito
O aplicativo é feito inteiramente em React Native e usa o Atlas para cadastrar os usuários no formato de banco de dados MongoDB através do Axios.

## API
Usando a API do WhatsApp e Mapa, permite que o usuário encontre psicólogos próximos e contate um psicólogo para um atendimento de urgência.

## Momento PWA

Slide -> https://www.canva.com/design/DAGCsEyfxk8/rDFutO3OU78cB8IrTHKEaA/edit?utm_content=DAGCsEyfxk8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Link -> https://mindcalmapp.netlify.app

Pitch -> https://www.canva.com/design/DAGB7GQunP4/Gdeqimyxf5mNtFiBOioZNg/edit?utm_content=DAGB7GQunP4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

O aplicativo tem as sessões

### Home 
Ao entrar nesta tela é apresentado um modal que pergunta o humor e existe a opção de escolher o humor no momento.

### Mapa 
Com a API Leaflet, é gerado um mapa com os psicólogos mais próximos através de um arquivo JSON.

### Diário 
Nesta tela o usuário tem a opção de salvar o seu humor, inserir um texto e também existe a opção de salvar por áudio.

###  Chat
Com a API do WhatsApp o usuário consegue se comunicar com um psicólogo afiliado em caso de emergência.

### Perfil
Aqui o usuário consegue fazer alterações em seus dados e sair do aplicativo.

## Momento React Native

Slide/Pitch -> https://www.canva.com/design/DAGB7GQunP4/Gdeqimyxf5mNtFiBOioZNg/edit?utm_content=DAGB7GQunP4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

### Login
O aplicativo inicia na tela de login, que possui a rota /login que checa se o usuário existe no banco de dados, se existir ele passa para a próxima tela

### Cadastro
Aqui o usuário vai inserir suas informações de cadastro, possui a rota usuario/tela1 e é responsável por criar um novo usuário no banco de dados

### Home
Mostra vídeos de meditação guiada, além de Podcasts, artigos e vídeos relacionados ao controle de estresse e ansiedade.

### Mapa 
Mostra os psicólogos próximos ao usuário através da localização.

###  Chat
Com a API do WhatsApp o usuário consegue se comunicar com um psicólogo afiliado em caso de emergência.

## Equipe

#### José Sávio Gomes
#### Juliane Reis Maia
#### Maria Luiza
#### Lucas Rodrigues







