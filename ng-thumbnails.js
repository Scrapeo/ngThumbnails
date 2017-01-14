/* ng-thumbnails - 2017-01-14 */
angular.module('ngThumbnails', [])
  .directive('ngThumbnails', function($compile, $timeout) {
    return {
      template: '<div style="display:table;position:relative;height:{{height}}px;width:{{width}}px;"> <img ng-src={{current}} class="ng-thumbnails-img"></img> </div>',
      scope: {
        images: "="
      },
      replace: false,
      link: function(scope, element, attrs) {
        element.ready(function() {
         $timeout(function() {
          scope.height = element[0].offsetHeight;
          scope.width = element[0].offsetWidth;
          scope.current = scope.images[0];
          scope.spanWidth = scope.width / scope.images.length;

          scope.switchImage = function(index) {
            scope.current = scope.images[index];
          }

          scope.margin = scope.spanWidth * 0.02 / 2;

          if (scope.images.length > 1) {
            dividers = '<div style="position:relative;">';
            for (i = 0; i < scope.images.length; i++) {
              dividers += '<span class="ng-thumbnails-span" style="height:{{height}}px;width:{{spanWidth}}px;" ng-mouseover="switchImage(' + i + ')"><div style="margin-left:{{margin}}px" class="ng-thumbnails-footer"></div></span>';
            }
            dividers += '</div>'
            element.children().append($compile(dividers)(scope));
          }
        })})

      }
    };
  });
