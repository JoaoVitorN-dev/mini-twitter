# Mini Twitter Clone

![GitHub language count](https://img.shields.io/github/languages/count/JoaoVitorN-dev/mini-twitter)
![GitHub repo size](https://img.shields.io/github/repo-size/JoaoVitorN-dev/mini-twitter)
![GitHub last commit](https://img.shields.io/github/last-commit/JoaoVitorN-dev/mini-twitter)

`Mini-Twitter` é uma aplicação web front-end que simula algumas das funcionalidades principais do Twitter. O projeto foi construído com foco na interação do usuário, utilizando JavaScript puro para consumir uma API externa, permitindo que os usuários se cadastrem, façam login, criem postagens, visualizem seus perfis e muito mais.

### 🖼️ Prévia do Projeto

![Prévia do Projeto](./assets/video/demo.mp4)

-----

## 🚀 Funcionalidades

O projeto implementa as seguintes funcionalidades:

* **Autenticação de Usuários:**
    * Página de Cadastro para novos usuários.
    * Página de Login para usuários existentes.
    * Armazenamento de token de autenticação (`JWT`) no `localStorage` para manter a sessão do usuário ativa.
* **Feed de Posts (Home):**
    * Exibe todos os posts dos usuários da plataforma.
    * Permite a criação de novos posts (tweets).
    * Funcionalidade de "curtir" um post.
* **Perfil do Usuário:**
    * Página de perfil que exibe as informações do usuário logado.
    * Exibe todos os posts criados pelo próprio usuário.
    * Permite a edição das informações do perfil (nome de usuário e email).
* **Design Responsivo:**
    * Interface adaptável para diferentes tamanhos de tela, de desktops a dispositivos móveis.
* **Feedback Visual:**
    * Exibe um "spinner" de carregamento (`loading`) enquanto os dados da API estão sendo buscados.

-----

## 🛠️ Tecnologias Utilizadas

Este projeto é totalmente focado no front-end e foi construído com as seguintes tecnologias:

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Estilização completa, incluindo `Flexbox` e `Grid` para layout e design responsivo.
* **JavaScript (ES6+):** Linguagem principal para toda a lógica da aplicação, incluindo:
    * Consumo de API com `fetch`.
    * Manipulação dinâmica do DOM.
    * Programação Orientada a Objetos (com Classes como `Controller`, `Repository` e `View`).
* **API Externa:** O projeto consome uma API REST para todas as operações de back-end.
    * **URL Base da API:** `https://mini-twitter-api-vy9q.onrender.com/`

-----

## 🔧 Instalação e Execução

Como este é um projeto puramente front-end, você não precisa compilar nada ou instalar dependências complexas. Basta seguir os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/JoaoVitorN-dev/mini-twitter.git](https://github.com/JoaoVitorN-dev/mini-twitter.git)
    ```
2.  **Abra o diretório do projeto:**
    ```bash
    cd mini-twitter
    ```
3.  **Execute o projeto em um servidor local:**
    * A maneira mais fácil é usar uma extensão como o **Live Server** no Visual Studio Code.
    * Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".
    * Isso iniciará um servidor local e abrirá a aplicação no seu navegador. A página de login será o ponto de entrada.

> **Nota:** É importante executar os arquivos através de um servidor local (como o Live Server) em vez de abrir o `index.html` diretamente no navegador. Isso evita problemas de CORS (`Cross-Origin Resource Sharing`) ao fazer requisições para a API externa.

-----

## 🕹️ Como Usar

1.  Ao abrir a aplicação, você será direcionado para a página de **Login**.
2.  Se você não tiver uma conta, clique em `"Não tem uma conta? Inscreva-se"` para ir para a página de **Cadastro**.
3.  Após o login, você será redirecionado para a página principal (`sidebar.html`), que funciona como o feed.
4.  Nesta página, você pode **criar um novo tweet** ou **visualizar os posts** de outros usuários.
5.  Clique no ícone de **Perfil** na barra lateral para ver suas informações e os tweets que você já publicou.
6.  Na página de perfil, você pode clicar no botão **"Editar Perfil"** para atualizar seu nome e email.

-----

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.