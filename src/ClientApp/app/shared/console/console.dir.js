

(function (angular) {
    'use strict';

    angular.module('app.console')

        .directive('aeConsole', [function () {

            return {
                restrict: 'E',
                templateUrl: 'app/shared/console/console.html',
                scope: {
                    content: "=",
                    title: "@",
                    handler: "="
                }
            };
        }]);

}(angular));
