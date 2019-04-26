$(document).ready(function () {
    $('#options-toggle').click(function () {
        $('#options-panel').toggle(200);
    });

    // Delay user input in custom url field
    function delay(callback, ms) {
        var timer = 0;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                callback.apply(context, args);
            }, ms || 0);
        };
    }

    container = $('#customUrlcontainer');


    $('#customUrl').keyup(delay(function (e) {
        if($('#customUrl').val().length <= 3) {
            container.addClass('has-danger');
            $('#customUrlResult').text('Type a longer short URL');
        } else {
            $('#customUrlResult').text('Loading...  ').append('<i class="fa fa-spinner"></i>');
            $.ajax({
                type: "POST",
                url: '/url/short',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: {'input': $('#customUrl').val()},
                success: function () {
                    container.removeClass('has-danger');
                    container.addClass('has-success');
                    $('#customUrlResult').text('Custom URL available');
                },
                error: function (jqXHR) {
                    let msg = '';
                    if (jqXHR.status === 0) {
                        msg = 'Can\'t connect. Check your internet connection';
                    } else if (jqXHR.status == 409) {
                        msg = 'Custom URL already existing';
                    } else if (jqXHR.status == 500) {
                        msg = 'Internal Server Error: 500';
                    }
                    container.removeClass('has-success');
                    container.addClass('has-danger');
                    $('#customUrlResult').text(msg);
                }
            })
        }
    }, 500));

});