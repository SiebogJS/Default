
(function (angular) {
    'use strict';

    angular.module('app.loggerConsole')
        .controller('LoggerConsoleCtrl', ['$scope','ConsoleSvc', function ($scope, ConsoleSvc) {

            var self = this;

            self.messages = [];


            self.messageHandler = {

                clear: function () {
                    self.messages = [];
                },

                removeAt: function (index) {
                    self.messages.splice(index, 1);
                }

            };

            ConsoleSvc.onLog(function (msg) {
                self.messages.push(msg);
                console.log(msg);
                $scope.$digest();
            });
        }]);

}(angular));
