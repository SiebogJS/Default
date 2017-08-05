
(function (angular) {
    'use strict';

    angular.module('app.agentsConsole')
        .controller('AgentsConsoleCtrl', ['$scope', 'ConsoleSvc', 'AgentRunnerRestSvc', 'ACLMessageModalSvc',

            function ($scope, ConsoleSvc, AgentRunnerRestSvc, ACLMessageModalSvc) {

                var self = this;

                self.running = [];
                self.performatives = [];

                self.runningHandler = {

                    removeAt: function (index) {
                        AgentRunnerRestSvc.stopAgent(self.running[index]);
                        self.running.splice(index, 1);
                    },

                    sendMessage: function (index) {

                        var input = {};

                        if((index >= 0) && (self.running.length > index)){
                            input.receivers = [self.running[index]];
                        }

                        ACLMessageModalSvc.open(input, self.performatives, self.running).result.then(

                            function (result) {

                                AgentRunnerRestSvc.postMessage(result).then(

                                    function (data) {
                                        console.log(data);
                                    },

                                    function (err) {
                                        console.log(err);
                                    }
                                );
                            },

                            function (err) {
                                console.log(err);
                            }
                        );
                    }
                };

                ConsoleSvc.onRunning(function (running) {
                    self.running = running;
                    console.log(running);
                    $scope.$digest();
                });

                ConsoleSvc.onNewAgent(function (agent) {
                    self.running.push(agent);
                    console.log(agent);
                    $scope.$digest();
                });

                ConsoleSvc.onRemovedAgent(function (agent) {

                    for(var i = 0; i < self.running.length; i++){

                        if(agent === self.running[i]){
                            self.running.splice(i, 1);
                            break;
                        }
                    }
                });

                AgentRunnerRestSvc.getPerformaives().then(
                    function (data) {
                        self.performatives = data;
                        console.log(self.performatives);
                    }
                );

                AgentRunnerRestSvc.getRunning().then(
                    function (data) {
                        self.running = data;
                        console.log(self.running);
                    }
                );
            }]);

}(angular));

