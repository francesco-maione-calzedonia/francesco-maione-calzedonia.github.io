$(document).ready(function() {
    $('#signup').on('click', function() {
        gtag(
            'event',
            'click_signup',
            {
                'app_name': 'AnalyticsKT',
                'webpage': window.location.pathname === '/' ?? 'home',
                'touchpoint': 'signup'
            }
        );
    })
})