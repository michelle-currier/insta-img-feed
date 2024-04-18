// Replace with your Instagram Access Token
const accessToken = 'IGQWRNSUJ1bUpQcXJaNXhnUVVtaldQV21pRkhFbGg0dHh5dmc5UW5tNENXWE92QUNvNl9CbmhXUThYNXJYRTVYeENUNUZAINTZAqZAHZAFaUlTdk5DSWlZAZAXJKUGxRQklxUmpqWkhQVjJnYWNjckhIZAklBVl9lcGh3YnMZD';
// const accessToken = '752988190309698'; // app id
// 415732744422161 // instagram id
// IGQWRNSUJ1bUpQcXJaNXhnUVVtaldQV21pRkhFbGg0dHh5dmc5UW5tNENXWE92QUNvNl9CbmhXUThYNXJYRTVYeENUNUZAINTZAqZAHZAFaUlTdk5DSWlZAZAXJKUGxRQklxUmpqWkhQVjJnYWNjckhIZAklBVl9lcGh3YnMZD // token
// const accessToken = '313ef6220f137e1457bc9a8b733bc69e'; // client token 

// Function to fetch and display Instagram feed
function getInstagramFeed() {
    fetch(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`)
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('instagram-feed');
            let counter = 0;

            // data.data.forEach(post => {

            // Loop through the data in sets of four
            for (let i = 0; i < data.data.length; i += 4) {
            // Create a div to contain each set of four images
                const postSet = document.createElement('div');
                postSet.classList.add('post-set');

                // Loop through each item in the set of four
                for (let j = 0; j < 4; j++) {
                    if (i + j < data.data.length) {
                        const post = data.data[i + j];

                        const postLink = document.createElement('a');
                        postLink.href = post.permalink;
                        postLink.target = '_blank';

                        const postImage = document.createElement('img');
                        postImage.src = post.media_url;
                        postImage.alt = post.caption;
        
                        postLink.appendChild(postImage);
                        feedContainer.appendChild(postLink);

                        counter++;
                    }
                }
                feedContainer.appendChild(postSet);
            }
        })
        .catch(error => console.error(error));
}

// Call the function to fetch and display the Instagram feed
getInstagramFeed();