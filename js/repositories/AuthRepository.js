class AuthRepository{
    constructor(){
         this.baseUrl='https://mini-twitter-api-vy9q.onrender.com/';
    }


    getAction(endpoint){
        return `${this.baseUrl}${endpoint}`
    }

    async login(email,password){
        const response = await fetch(this.getAction("api/auth/login"),{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        });
        return response.json();
    }

    async register(username,email,password){
        const response = await fetch(this.getAction("api/auth/register"),{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username,email,password})
        });
        return response.json();
    }
}