$(document).ready(function() {
    $('nav.vertical a').each(function() {
        next = $(this).next('.submenu');
        if (next.length > 0)
        {
            $(this).addClass('has-submenu');
            $(this).append('<i class="fa fa-chevron-left submenu-indicator" aria-hidden="true"></i>');
            if ($(this).hasClass('submenu-open'))
            {
                $(this).next('.submenu').show();
            } else {
                $(this).next('.submenu').hide();
            }
        }
    })

    $('a.has-submenu').on('click', function() {
        console.log('log')
        $(this).toggleClass('submenu-open');
        if ($(this).hasClass('submenu-open'))
        {
            $(this).next('.submenu').slideDown(200);
        } else {
            $(this).next('.submenu').slideUp(200);
        }
    })

    $('.offscreen-open').on('click', function() {
        if ($('.offscreen-overlay').length <= 0)
        {
            $('body').prepend('<div class="offscreen-overlay" for="' + $(this).attr('for') + '"></div>');
            $('.offscreen-overlay').hide();
            $('.offscreen-overlay').fadeIn(200);
        }
        $('#' + $(this).attr('for')).addClass('open');
    })


    $(document).on('click', '.offscreen-close, .offscreen-overlay', function() {
        $('.offscreen-overlay').fadeOut(200, function() {
            $(this).remove();
        });
        $('#' + $(this).attr('for')).removeClass('open');
    })

    // Accordion
    $(document).on('click', '.accordion .header', function() {
        $(this).toggleClass('open');
    })

    // Dropdown
    $(document).on('click', '[has-dropdown]', function(event) {
        dropdown = $(this).next('.dropdown')
        $(dropdown).toggleClass('open')
        $(dropdown).fadeToggle(150)


        if ($(dropdown).hasClass('open')) {
            ownerPos = $(this).position()
            dropPosX =  ownerPos.top + $(this).outerHeight() + 8
            dropPosY =  ownerPos.left

            if ((dropPosX + $(dropdown).outerWidth()) > document.documentElement.clientWidth) {
                dropPosX = ownerPos.left - Math.abs($(dropdown).outerWidth() - $(this).outerWidth())
            }
            $(dropdown).css({
                "left": dropPosY,
                "top": dropPosX
            })
            event.stopPropagation()
        }
    })

    $(document).click(function(event) {
        dropdown = $(event.target).closest('.dropdown')
        if(!dropdown.length) {
            if($('.dropdown').hasClass('open')) {
                $('.dropdown').fadeOut(150, function() {
                    $(this).removeClass('open')
                })
            }
        }
    })


})
