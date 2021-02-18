<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Medicīniskās pārbaudes</title>

    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

    <link rel="stylesheet" href="{{mix('css/app.css')}}">

    <script>
        PleaseRotateOptions = {
            message: "Lūdzu pagrieziet ierīci",
            subMessage: "",
            allowClickBypass: false
        };
    </script>
    <script src="./pleaserotate.js"></script>

    <style>
        html,
        body {
            padding-left: 32px;
            padding-right: 8px;
            padding-top: 10px;
            background-color: #fff;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #2c3e50;
            font-family: Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
        }
    </style>
</head>

<body>
    {{--<div class="flex-center position-ref full-height">--}}

    <div id="app">

        <div class="container">
            <task></task>
        </div>


    </div>

    {{--</div>--}}

    <script async src="{{mix('js/app.js')}}"></script>
</body>

</html>