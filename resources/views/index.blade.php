<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Last-bee dashboard</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="{{mix('css/app.css')}}">
    </head>
    <body>
        <div id="app"></div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <script type="text/javascript" src="{{ URL::asset('js/vendor/jquery-3.2.1.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/bootstrap-4.1/popper.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/bootstrap-4.1/bootstrap.min.js') }}"></script>

        <!--<script type="text/javascript" src="{{ URL::asset('js/vendor/slick/slick.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/wow/wow.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/animsition/animsition.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/bootstrap-progressbar/bootstrap-progressbar.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/counter-up/jquery.waypoints.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/counter-up/jquery.counterup.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/circle-progress/circle-progress.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/perfect-scrollbar/perfect-scrollbar.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/chartjs/Chart.bundle.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/vendor/select2/select2.min.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/dashboardMain.js') }}"></script>-->

        
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
