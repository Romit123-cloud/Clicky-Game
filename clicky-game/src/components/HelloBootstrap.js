import React from "react";

function HelloBootstrap() {
    return (
       <html>
        <html lang = "en"></html>
        <head>
            <meta charset="utf-8"></meta>
            <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            <meta name="theme-color" content="#000000"></meta>
            <link rel="manifest" href="/manifest.json"></link>
            <link rel="shortcut icon" href="/favicon.ico"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"></link>
            <title>Clicky Game!</title>
            <link rel="stylesheet" href="https://d33wubrfki0l68.cloudfront.net/css/ba81d45f1eb54096e2d1717c5edcbf3af9a19812/static/css/main.269f401f.css"></link>
        </head>
    
        
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id = "root">
                <div>
                    <nav class="navbar navbar-light bg-dark">
                        <a class="navbar-brand" href="nav">Clicky Game</a>
                      </nav>
                      <header class ="header">
                        <h1>Clicky Game!</h1>
                        <h2>Click on an image to earn points, but don't click the same image twice!</h2>
                      </header>
                      <main class ="container">
                        <div role="image" aria-label="click item" class="click-item shake" style="background-image: url(https://clicky-game.netlify.com/assets/images/ichigo.png);"></div>
                      </main>
                      <footer class="footer">
                          <div class="bottom">
                              Clicky Game
                              <img alt="react" src="assets/images/react.svg"></img>
                          </div>
                      </footer>
                </div>
                </div>
                <script type="text/javascript" src="https://d33wubrfki0l68.cloudfront.net/js/69e9b48b853348cbee160b0699b939e7877c9e64/static/js/main.322bad46.js"></script>
        </body>
        </html>
    );
    }
    export default HelloBootstrap;
