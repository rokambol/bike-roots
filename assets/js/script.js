(function() {

    var glassDiv = $(".glasses");
    var emptyGlass = $("#emptyglass");

    glassDiv.click(function() {
        const fade = { height: 1, transition: 'height 5s' };
        emptyGlass.css(fade).delay(5000).slideDown(1000);
    });

})();
