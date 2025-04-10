<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ManageEmployee</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
    <link href="{{ mix('css/auth.css') }}" rel="stylesheet" />
    @routes
    <script src="{{ mix('js/app.js') }}" defer></script>
    <script>
        // Debug helper
        window.addEventListener('load', function() {
            console.log('Page loaded');
            if (typeof route === 'undefined') {
                console.error('Route helper is not defined!');
            } else {
                console.log('Route helper is defined');
                console.log('Available routes:', route);
            }
        });
    </script>
    @inertiaHead
</head>
<body class="font-sans antialiased">
    @inertia
</body>
</html> 