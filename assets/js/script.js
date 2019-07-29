(function() {
    var glassDiv = $(".jumbotron-text");
    var cancel = $(".jumbotron-main");
    var emptyGlass = $(".emptyglass-container");
    var bottle = $("#bottle");

    var fade = { height: 1 };
    var turn = { transform: 'rotate(-100deg)' };
    var slide = { left: 710 };
    var lower = { top: 220 };

    var ginBtn = $("#gin-btn");
    var whiskeyBtn = $("#whiskey-btn");
    var vodkaBtn = $("#vodka-btn");
    var cocktailsBtn = $("#cocktails-btn");
    var oJBtn = $("#oj-btn");
    var beerBtn = $("#beer-btn");
    var targetDiv1 = $(".jumbotron-text");
    var targetDiv2 = $(".modal-body p");
    var texts = ["gin serious text, here comes the more detailed explanation", "gin funny quote, this is shorter",
        "whiskey serious text, here comes the more detailed explanation", "gin funny quote, this is shorter"
    ];

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

    ginBtn.click(function() {
        targetDiv1.text(texts[0]);
        targetDiv2.text(texts[1]);
    });

    ginBtn.click(function() {
        targetDiv1.text(texts[2]);
        targetDiv2.text(texts[3]);
    });
    
    $(".modal-body p").text()
    
})();
