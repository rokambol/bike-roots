(function() {
    
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
    var theModal = $("#modalID")
    
    var glassDiv = ginBtn;
    
    var drink_history = [
        "The origin of whiskey began over 1000 year ago when distillation made the migration from mainland Europe into Scotland and Ireland via traveling monks. The Scottish and Irish monasteries, lacking the vineyards and grapes of the continent, turn to fermenting grain mash, resulting in the first distillations of modern whisky.",
        "Vodka may have invented as early as the 900s. Originally made in home stills, it is believed to have first been concocted as a disinfectant and a treatment for wounds. For many years it was used in medicines and cosmetics as well as for drinking. For centuries vodka was known as bread wine or 'burnt wine'.",
        "Gin became popular in England after the Government allowed unlicensed gin production and at the same time imposed a heavy duty on all imported spirits. This created a market for poor-quality grain that was unfit for brewing beer, and thousands of gin-shops sprang up throughout England, a period known as the Gin Craze.",
        "A cocktail is an alcoholic mixed drink, which is either a combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream. There are various types of cocktails, based on the number and kind of ingredients added. The origins of the cocktail are debated, but he first definition of cocktail known to be an alcoholic beverage appeared in 'The Balance and Columbian Repository' (Hudson, New York) May 13, 1806",
        "Orange juice originated in the 17th century. In the 18th century, James Lind linked citrus fruits to the prevention of scurvy, which, a century later, led to the implementation of the Merchant Shipping Act of 1867, requiring all Ocean-bound British ships to carry citrus-based juice on board.",
        "Beer is one of the oldest drinks humans have produced, dating back to at least the 5th millennium BC in Iran, and was recorded in the written history of ancient Egypt and Mesopotamia and spread throughout the world, 1000-1200 AD"
    ];
    var drink_quotes = [

        "Whiskey is a Gaelic word which means 'water of life'!",
        "The Russians partied so hard once WWII ended, that the entire city of Moscow ran out vodka!",
        "The Gin Act 1736 imposed high taxes on retailers and led to riots in the streets of Britain!",
        "185,000 Margaritas are drunk every single hour in the USA, making it the most popular cocktail in the States!",
        "Marmalade is orange jam!",
        "Cenosillicaphobia is the fear of an empty beer glass!"
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

    whiskeyBtn.click(function() {
        targetDiv1[0].text(drink_history[0]);
        targetDiv2[0].text(drink_quotes[0]);
        theModal.modal('show');
    });

    vodkaBtn.click(function() {
        targetDiv1[0].text(drink_history[1]);
        targetDiv2[0].text(drink_quotes[1]);
        theModal.modal('show');
    });

    ginBtn.click(function() {
        /*debugger;*/
        targetDiv1[0].text(drink_history[2]);
        targetDiv2[0].text(drink_quotes[2]);
        theModal.modal('show');
    });
    cocktailsBtn.click(function() {
        targetDiv1[0].text(drink_history[3]);
        targetDiv2[0].text(drink_quotes[3]);
        theModal.modal('show');
    });
    oJBtn.click(function() {
        targetDiv1[0].text(drink_history[4]);
        targetDiv2[0].text(drink_quotes[4]);
        theModal.modal('show');
    });
    beerBtn.click(function() {
        targetDiv1[0].text(drink_history[5]);
        targetDiv2[0].text(drink_quotes[5]);
        theModal.modal('show');
    });

})();
