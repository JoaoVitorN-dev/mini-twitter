class AuthView {
    constructor(){
        this.appContainer = document.querySelector("#App");
    }

    showFormRegister() {
        return `
            <div class="twitterLogo"><img src="./assets/icons/logo.svg" alt=""></div>
            <h1>Registre sua conta</h1>
            <div class="loginField">
                <form class="login-form" id="register-form">
                    <input type="text" placeholder="Digite seu Nome" id="name">
                    <input type="email" placeholder="Digite seu Email" id="email">
                    <input type="password" placeholder="Digite sua Senha" id="password">
                    <button type="submit"">Registrar</button>
                </form>
            </div>
            <p>Já tem uma conta? <span id="enter">Entre</span></p>
        `
    }


     showFormLogin() {
        return `
            <div class="twitterLogo"><img src="./assets/icons/logo.svg" alt=""></div>
            <h1>Entre na sua conta</h1>
            <div class="loginField">
                <form class="login-form" id="login-form">
                    <input type="email" placeholder="Digite seu Email" id="email">
                    <input type="password" placeholder="Digite sua Senha" id="password">
                    <button type="submit"">Entrar</button>
                </form>
            </div>
            <p>Não tem uma conta? <span id="register">Registre-se</span></p>
        `
    }
}