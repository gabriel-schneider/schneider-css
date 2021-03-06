$(document).ready(function() {

    $(document).on('click', function() {
        $('.dropdown').prev('.has-dropdown').removeClass('active')
        $('.dropdown').removeClass('open')
    })

    $('.has-dropdown').on('click', function(e) {
        p = $(this).position();

        if ($(this).attr('dropdown-id') == undefined) {
            dropdown = $(this).next('.dropdown')
        } else {
            dropdown = $('#' + $(this).attr('dropdown-id'))
        }

        if (dropdown.length > 0) {

            offsetX = 0
            offsetY = 0

            if ($(dropdown).parent().hasClass('menu vertical')) {
                offsetX = $(this).outerWidth()
            } else {
                offsetY = $(this).outerHeight()
            }

            $(dropdown).css({
                top: p.top + offsetY,
                left: p.left + offsetX
            })

            if( $(dropdown).toggleClass('open').hasClass('open')) {
                $(this).addClass('active')
            } else {
                $(this).removeClass('active')
            }

            e.stopPropagation();
        }
    })

    $('.dropdown').on('click', function(e) {
        e.stopPropagation();
    })



})
