(function() {

    var glassDiv = $(".glasses");
    var emptyGlass = $(".emptyglass-container");
    var bottle = $("#bottle");

    glassDiv.click(function() {
        const fade = { height: 1 };
                const turn = { transform: 'rotate(-100deg)' }; 
        const slide = { left: 710 };
        const lower = { top: 220 };
        
        emptyGlass.css(fade);
        bottle.css(turn).css(slide).css(lower);
    });

})();
