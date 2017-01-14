# ngThumbnails
Thumbnails preview for AngularJS

Demos
-----

Check out the example folder [from the master branch](https://github.com/Scrapeo/ngThumbnails/tree/master/example).

Getting Started
---------------

 * Download js and css files.
 * Include the script tag on your page after the AngularJS and the css:

        <script type='text/javascript' src='path/to/angular.min.js'></script>
        <script type='text/javascript' src='path/to/ng-thumbnails.js'></script>
        <link href='path/to/ng-thumbnails.css' rel="stylesheet">

 * Ensure that your application module specifies `ngThumbnails` as a dependency:

        angular.module('myApplication', ['ngThumbnails']);

 * Use the directive by specifying an `ng-thumbnails` attribute on an element.

        <div ng-thumbnails images='["images/t1.jpg", "images/t2.jpg", "images/t3.jpg", "images/t4.jpg", "images/t5.jpg"]' style="height:250px;width:250px;"></div>

Note that height and width styles are used by the directive.
