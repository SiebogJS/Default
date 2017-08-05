
(function (angular) {
    'use strict';

    angular.module('app.console')

        .factory('ConsoleSvc', ['UtilSvc', function (Util) {
            
            var socket = io('ws://'+ window.location.host + '/console', {
                reconnection: false
            });

            socket.on('disconnect', function (err) {
                console.log(err);
            });

            socket.on('error', function (err) {
                console.log(err);
            });
            
            return {
              
                onLog: function (callback) {

                    if(Util.isFuncion(callback)){
                        socket.on('log', callback);
                    }
                },

                onRunning: function (callback) {

                    if(Util.isFuncion(callback)){
                        socket.on('running', callback);
                    }
                },

                onNewAgent: function (callback) {

                    if(Util.isFuncion(callback)){
                        socket.on('newAgent', callback);
                    }
                },

                onRemovedAgent: function (callback) {

                    if(Util.isFuncion(callback)){
                        socket.on('removeAgent', callback);
                    }
                }
            };
        }]);

}(angular));
