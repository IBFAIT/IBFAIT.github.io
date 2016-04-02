$(document).ready(function() {
    $('button.hambi-topright').click(function(event) {
        var p = $(this).position();
        $(this).toggleClass('is-active').toggleClass('hambiFix').css({
            top: p.top,
            left: p.left
        });
        $('body').toggleClass('noscroll');
        $('#layerNav').toggleClass('layernav-active');
        $(document).keyup(function(e) {
            if (e.keyCode == 27 && $('body').hasClass('noscroll')) {
                $('button.hambi-topright').removeClass('is-active');
                $('body').removeClass('noscroll');
                $('#layerNav').removeClass('layernav-active');
            }
        });
    });
});
