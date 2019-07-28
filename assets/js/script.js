(function() {

    var glassDiv = $(".glasses");
    var emptyGlass = $("#emptyglass");

    glassDiv.click(function() {
        emptyGlass
        .addClass("hide-glass")
        .removeClass("show-glass");
    });

})();
