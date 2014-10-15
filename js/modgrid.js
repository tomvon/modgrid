function sizer(s) {

    $('.mggroup').each( function() {
        boxes = []
        len = 0
        total = $(this).children().length - 1;
        $(this).children().each( function(index) {
            if ($('body.mgnomargin').length == 1) {
                $(this).css({'height':'auto'});
                $(this).css({'width':'100%'});
            } else {
                $(this).css({'height':'auto'});
                $(this).css({'width':'98%'});
            }
            if (this.className.match(s+"\\d")) {
                cols = this.className.match(s+"\\d")[0].split("-")[1];
                boxes.push($(this))
                if ($('body.mgnomargin').length == 1) {
                    w = (((cols / 12) * 100));
                } else {
                    w = (((cols / 12) * 100) - 2);
                }
                $(this).css({'width':w+'%'});
                len = len + parseInt(cols);
                if ( (len == 12) || (index == total) ) {
                    heights = []
                    $(boxes).each( function() {
                        heights.push($(this).height())
                    });
                    var largest = Math.max.apply(Math, heights);
                    $(boxes).each( function() {
                        $(this).height(largest);
                    });
                    boxes = [];
                    len = 0;
                }
            }
            if ($(this).hasClass('square')) {
                $(this).height($(this).width());
            }
        });
    });
}

function setsize() {
    if ($(window).width() >= 800) {
        sizer('lg-');
    }
    if ($(window).width() < 800) {
        sizer('med-');
    }
    if ($(window).width() < 500) {
        $('.mgbox').each( function() {
            if ($('body.mgnomargin').length == 1) {
                $(this).css({'width':'100%'});
                $(this).css({'height':'auto'});
            } else {
                $(this).css({'width':'98%'});
                $(this).css({'height':'auto'});
            }
        });
    }
}

function closeoverlay() {
    $('.mgover').fadeOut('fast')
    $('.mgover .mgdata').html('');
}

$(window).load( function() {
    setsize();
});

$(document).ready(function() {
    setsize();
    $(window).resize( function() {
        setsize();
        tablelaunch();
        if ($('.xnav').is(':visible')) {
            if ($(window).width() > 500) {
                $('#xmenu').css({'margin-bottom':'2px'});
                $('.xnav').css({'margin-bottom':'1%'});
            }
            if ($(window).width() <= 500) {
                $('#xmenu').css({'margin-bottom':'2px'});
                $('.xnav').css({'margin-bottom':'3%'});
            }
        } else {
            if ($(window).width() > 500) {
                $('#xmenu').css({'margin-bottom':'1%'});
                $('.xnav').css({'margin-bottom':'1%'});
            }
            if ($(window).width() <= 500) {
                $('#xmenu').css({'margin-bottom':'3%'});
                $('.xnav').css({'margin-bottom':'3%'});
            }
        }
    });
    
    $('.mgover a.close').on('click', function() {
        closeoverlay();
        return false;
    });
    
    $(document).keyup(function(e) {
      if (e.keyCode == 13) { // enter
        //
      }
      if (e.keyCode == 27) { // esc
        closeoverlay();
        return false;
      }
    });
    
    $('img.mgfeature').each( function() {
        if ($(this).attr('data-lg')) {
            $(this).css({'cursor':'pointer'});
        }
    });
    
    $('img.mgfeature').on('click', function() {
        if ($(this).attr('data-lg')) {
            $('.mgover').fadeIn('fast');
            img = '<img src="'+$(this).attr('data-lg')+'" class="mgfeature">';
            $('.mgover .mgdata').html(img);
        }
    });
    
    if ($('.xdata img.mgfeature').height() > $('.xdata').height()) {
        $('.xdata img.mgfeature').css({'height':'100px'});
    }
    
});