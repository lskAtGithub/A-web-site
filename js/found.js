var _Carousel = require('./carousel');
var _GoTop = require('./GoTop');
var _waterfallNew = require('./ajax');

_Carousel.init($(".carousel"));

$(document).ready(function () {
    _waterfallNew.init($("#portfolio"))
});

_GoTop.init($(".goTopSet"))