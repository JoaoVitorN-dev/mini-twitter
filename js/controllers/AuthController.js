class AuthController {
    constructor() {
        this.repository = new AuthRepository();
        this.view = new AuthView();
        this.showLoginPage();
    }

    showLoginPage() {
        this.view.appContainer.innerHTML = this.view.showFormLogin();
        document.querySelector("#login-form").addEventListener("submit", event => this.handleLogin(event));
        document.querySelector("#register").addEventListener("click",  () => this.showRegisterPage());
    }

    showRegisterPage() {
        this.view.appContainer.innerHTML = this.view.showFormRegister();
        document.querySelector("#register-form").addEventListener("submit", event => this.handleRegister(event));
        document.querySelector("#enter").addEventListener("click", () => this.showLoginPage());
    }

    async handleLogin(event) {
        event.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        try {
            const result = await this.repository.login(email, password);
            if (result.token) {
                alert(result.message);
                localStorage.setItem('authToken', result.token);
                window.location.href = '/sidebar.html';
            } else {
                alert("Erro ao realizar Login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    async handleRegister(event){
        event.preventDefault();
        const username = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        try{
            const result = await this.repository.register(username,email,password);
            if(result.message){
                alert(result.message);
                this.showLoginPage();
            }else{
                alert("Erro ao registrar user")
            }
        }catch(error){
            console.log("Erro ao registrar: ",error)
        }
    }
}