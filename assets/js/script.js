(function() {

    var glassDiv = $(".glasses");
    var emptyGlass = $("#emptyglass");
    var bottle = $("#bottle");

    glassDiv.click(function() {
        const fade = { height: 1, transition: 'height 5s' };
        const unfade = { height: 100, transition: 'height 5s swing 10s' };
        const turn = { transform: 'rotate(-100deg)' }; 
        emptyGlass.css(fade)/*.delay(5000).css(unfade)*/;
        bottle.css(turn);
    });

})();
