
(function (angular) {
    'use strict';

    angular.module('app.util')

        .factory('UtilSvc', [function () {

            return{

                isFuncion: function (fn) {

                    if(fn && typeof fn === 'function')
                        return true;
                }
            };
        }]);

}(angular));
