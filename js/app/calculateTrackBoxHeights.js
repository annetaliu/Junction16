function calculateTrackBoxHeights() {
    var box1height = parseFloat($(".track-section").css("width")) / 4 - 20 + "px";
    var boxes = [];
    $('.box-1-height').css('height', box1height);
    $('.box-1-width').css('width', box1height);
    for (var i = 1; i < 5; ++i) {
        boxes[i] = parseFloat(box1height) * (i + 1) + i * 6 + 'px';
        var selector = '.box-' + (i + 1) + '-height';
        var selector2 = '.box-' + (i + 1) + '-width';
        $(selector).css("height", boxes[i]);
        $(selector2).css("width", boxes[i]);
    }
}