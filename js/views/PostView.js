class PostView {
    constructor(data) {
        this.data=data;
    }

    render() {

        return this.data.map(post=>`
             <div class="tweet">
                <div class="header">
                    <img class="radius-img" src="./assets/images/profilePicture.png" alt="">
                    <div class="informations">
                        <div class="user_informations">
                            <p id="name">${post.author.username}</p>
                            <p id="nickname">@${post.author.username}</p>
                            <p>${new Date(post.createdAt).toLocaleString("pt-br")}</p>
                        </div>
                        <p class="post_description">${post.content}</p>
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
                                <i class="fa-solid fa-heart fa-lg" style="color: #8899A6;"></i>
                                <figcaption>6.2K</figcaption>
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
}