<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="background-color: #f4ecec">
    <!-- 0 UNSENT Client has been created. open() not called yet. 1 OPENED open() has
    been called. 2 HEADERS_RECEIVED send() has been called, and headers and
    status are available. 3 LOADING Downloading; responseText holds partial
    data. 4 DONE The operation is complete. -->
    <h1>adarsh sharma</h1>
    <h2 id="followers">followers</h2>
    <p id="followerCount"></p>

    <img id="avatar" src="" alt="GitHub Avatar" />
  </body>
  <script>
    const requestUrl = "https://api.github.com/users/adarsharma02";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", requestUrl);
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);
        console.log(data.followers);

        const element = document.getElementById("followers");
        element.addEventListener("click", function () {
          console.log(data.avatar_url);
          console.log(data.followers);

          // Update the content of the "followerCount" element with the follower count
          const followerCountElement = document.getElementById("followerCount");
          followerCountElement.textContent = `Followers: ${data.followers}`;

          // Update the src attribute of the "avatar" image element= avatar URL
          const avatarElement = document.getElementById("avatar");
          avatarElement.src = data.avatar_url;
        });
      }
    };
    xhr.send();
  </script>
</html>
