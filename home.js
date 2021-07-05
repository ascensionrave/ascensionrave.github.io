function animateSpotlight(spotlight) {
    var windowWidth, windowHeight;
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    var diameter = Math.floor(200 + Math.random() * 200) * (windowHeight/1080);
    var x,y;
    x = Math.floor(Math.random() * (windowWidth - diameter));
    y = Math.floor(Math.random() * (windowHeight - diameter));
    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
    spotlight.style.width = `${diameter}px`;
    spotlight.style.height = `${diameter}px`;
    setTimeout(function() {
        animateSpotlight(spotlight);
    }, Math.floor(Math.random() * 1500) + 3000);
}

function createSpotlights(count) {
    var spotlights = new Array(count);
    for(let i = 0; i < count; i++) {
        spotlights[i] = document.createElement('div');
        spotlights[i].setAttribute("class", "spotlight");
        animateSpotlight(spotlights[i]);
        document.body.appendChild(spotlights[i]);
    }
    return spotlights;
}

function animateMinilight(minilight) {
    var diameter = Math.floor(4 + Math.random() * 4);
    var windowWidth, windowHeight;
    windowWidth = $(window).width() - diameter;
    windowHeight = $(window).height() - diameter;
    var x,y;
    x = Math.floor(Math.random() * windowWidth);
    y = Math.floor(Math.random() * windowHeight);
    minilight.style.left = `${x}px`;
    minilight.style.top = `${y}px`;
    minilight.style.width = `${diameter}px`;
    minilight.style.height = `${diameter}px`;
    setTimeout(function() {
        animateMinilight(minilight);
    }, Math.floor(Math.random() * 4500) + 1000);
}

function createMinilight(count) {
    var minilights = new Array(count);
    for(let i = 0; i < count; i++) {
        minilights[i] = document.createElement('div');
        minilights[i].setAttribute("class", "minilight");
        animateMinilight(minilights[i]);
        document.body.appendChild(minilights[i]);
    }
    return minilights;
}

const minilights = createMinilight(100);