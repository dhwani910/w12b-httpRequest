

function sendTweet() {
    let tweetTitle = document.getElementById("title-input");
    let tweetBody = document.getElementById("body-input");
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    }
    ;
   
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            alert("your tweet have been post successfully");
            
        }
    }
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}
let tweetButton = document.getElementById("tweet-submit");
tweetButton.addEventListener("click", sendTweet);



function updateTweet() {
    let tweetTitle = document.getElementById("title-input");
    let tweetBody = document.getElementById("body-input");
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    }
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
    }
    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
}
updateTweet();



function deleteTweet() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        }
    }
    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
deleteTweet();



function showTweets() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let posts = JSON.parse(this.responseText);
            for(i = 0; i < posts.length; i++) {
                console.log(JSON.parse(this.responseText));
                let display = document.getElementById('display');
                display.innerText += 'title: ' + posts[i].title + '\n';
                display.innerText += 'message: ' + posts[i].body + '\n\n';

            }
        }
    }
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.send();
}
showTweets();






