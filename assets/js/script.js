(function() {

    var glassDiv = $(".jumbotron-text");
    var cancel = $(".jumbotron-main");
    var emptyGlass = $(".emptyglass-container");
    var bottle = $("#bottle");

    var fade = { height: 1 };
    var turn = { transform: 'rotate(-100deg)' };
    var slide = { left: 710 };
    var lower = { top: 220 };


    glassDiv.click(function() {
        var originalHeight = $(emptyGlass).height();
        fade = { height: 1 };
        turn = { transform: 'rotate(-100deg)' };
        slide = { left: 710 };
        lower = { top: 220 };

        emptyGlass.css(fade);
        bottle.css(turn).css(slide).css(lower);
    });

    cancel.click(function() {
        fade = { height: 74 };
        turn = { transform: 'rotate(0deg)' };
        slide = { left: 800 };
        lower = { top: 200 };

        emptyGlass.css(fade);
        bottle.css(turn).css(slide).css(lower);
    });


})();
