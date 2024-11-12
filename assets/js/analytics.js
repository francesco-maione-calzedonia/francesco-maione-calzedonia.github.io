$(document).ready(function () {
    function pushEvent(eventName, eventParams = {}) {

        eventParams['app_name'] = 'AnalyticsKT';
        eventParams['webpage'] = window.location.pathname === '/' ? 'home' : window.location.pathname;

        gtag(
            'event',
            eventName,
            eventParams
        );
    }


    $('#signup').on('click', function () {
        pushEvent('click_signup');
    })

    $(window).on('load', function () {
        pushEvent('page_view')
    })

    $('#signinForm').on('submit', function (e) {
        e.preventDefault()
        pushEvent(
            'signin',
            {
                email: $('#floatingInput').val(),
                firstName: $('#floatingFirstName').val(),
                lastName: $('#floatingLastName').val()
            }
        )
    })
})