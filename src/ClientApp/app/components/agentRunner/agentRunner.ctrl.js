
(function (angular) {
    'use strict';

    angular.module('app.agentRunner')
        .controller('AgentRunnerCtrl', ['AgentRunnerModalSvc','AgentRunnerRestSvc', 'ACLMessageModalSvc',

            function (agentRunnerModalSvc, restSvc, ACLMessageModalSvc) {

                var self = this;

                self.agentClasses = [];
                self.performatives = [];
                self.running = [];

                (function () {
                    restSvc.getClasses().then(
                        function (data) {
                            self.agentClasses = data;
                            console.log(self.agentClasses);
                        }
                    );

                    restSvc.getPerformaives().then(
                        function (data) {
                            self.performatives = data;
                            console.log(self.performatives);
                        }
                    );

                    restSvc.getRunning().then(
                        function (data) {
                            self.running = data;
                            console.log(self.running);
                        }
                    );

                }());


                self.getRunning = function () {
                    restSvc.getRunning().then(
                        function (data) {
                            self.running = data;
                            console.log(self.running);
                        }
                    );
                };

                self.newAgent = function (agentClass){
                    agentRunnerModalSvc.open(agentClass).result.then(function (agent) {
                        restSvc.runAgent(agent.agentClass, agent.name).then(function () {
                            self.getRunning();
                        });
                    });
                };

                self.sendMessage = function (index) {

                    var input = {};

                    if(index && index >= 0 && self.running.length > index){
                        input.recievers = [self.running[index]];
                    }

                    ACLMessageModalSvc.open(input, self.performatives, self.running).result.then(

                        function (result) {

                            restSvc.postMessage(result).then(

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

        }]);

}(angular));
