class ProfileView {
    constructor(dataPosts, dataProfile) {
        this.dataPosts = dataPosts;
        this.dataProfile = dataProfile;
    }

    renderProfile() {

        return `
        <header id="header-profile">
            <h2 class="name-profile">${this.dataProfile.username}</h2>
            <p>Tweets</p>
        </header>
        <div class="profile-content">
            <div class="image-profile-background">
                <div class="img-profile-content">
                    <img src="./assets/images/photoProfile.png" alt="">
                </div>
            </div>
            <div class="names-edit">
                <div class="names-profile">
                    <h1>${this.dataProfile.username}</h1>
                    <p>@${this.dataProfile.username}</p>
                </div>
                <div class="btn-edit">
                    <button id="edit">Edit profile</button>
                </div>
            </div>

            <div class="position-profile">
                <p>Developer</p>
            </div>
            <div class="more-informations">

            </div>
            <div class="social-peoples">

            </div>
        </div>
        <nav id="profile-tabs">
            <ul>
                <li class="active">Tweets</li>
                <li>Tweets & replies</li>
                <li>Media</li>
                <li>Likes</li>
            </ul>
        </nav>
        <div class="latest_tweets" id="container-tweet">

        </div>
        `;
    }

    renderMyPosts() {
        return this.dataPosts.map(posts =>
            `
            <div class="tweet">
            <div class="header">
            <img class="radius-img" src="./assets/images/profilePicture.png" alt="">
                <div class="informations">
                    <div class="user_informations">
                        <p id="name">${posts.author.username}</p>
                        <p id="nickname">@${posts.author.username}</p>
                    </div>
                    <p class="post_description">${posts.content}</p>
                </div>
            </div>
            <div class="img-informations">
            <div class="image-legends">
                    <div class="icons-posts">
                        <figure class="post-social-icons">
                            <i class="fa-regular fa-comment fa-flip-horizontal fa-lg" style="color: #8899A6;"></i>
                            <figcaption>61</figcaption>
                        </figure>

                        <figure class="post-social-icons">
                            <i class="fa-solid fa-retweet fa-lg" style="color: #8899A6;"></i>
                            <figcaption>12</figcaption>
                        </figure>

                        <figure class="post-social-icons">
                            <i class="fa-solid fa-heart fa-lg" id="icon-like"></i>
                            <figcaption class="total-likes">0</figcaption>
                        </figure>

                        <figure class="post-social-icons">
                            <i class="fa-solid fa-arrow-up-from-bracket fa-lg" style="color: #8899A6;"></i>
                            <figcaption>73</figcaption>
                        </figure>
                    </div>
                    <p class="show-thread">Show this thread</p>
             </div>
         </div>
        </div>
    `).join('');
    }

    renderEditProfile() {
        return `
            <h1 class="title-update"> <i class="fa-solid fa-pencil fa-sm" style="color: #e7e9ea;"></i> Atualize sua conta</h1>
            <div class="loginField">
                <form class="login-form" id="register-form">
                    <input type="text" placeholder="Digite seu novo Nome" id="name" class="input-update">
                    <input type="email" placeholder="Digite seu novo Email" id="email" class="input-update">
                    <button type="submit"" class="btn-update">Atualizar</button>
                </form>
            </div>
        `
    }





}