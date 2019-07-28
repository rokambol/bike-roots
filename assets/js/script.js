(function() {

    var glassDiv = $(".glasses");
    var emptyGlass = $("#emptyglass");
    var bottle = $("#bottle");

    glassDiv.click(function() {
        const fade = { height: 1 };
        const unfade = { height: 100, transition: 'height 5s swing 10s' };
        const turn = { transform: 'rotate(-100deg)' }; 
        const slide = { left: 710 };
        const lower = { top: 220 };
        
        emptyGlass.css(fade)/*.delay(5000).css(unfade)*/;
        bottle.css(turn).css(slide).css(lower);
    });

})();
