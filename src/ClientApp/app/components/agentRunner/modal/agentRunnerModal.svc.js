
(function() {
    'use strict';

    angular
        .module('app.agentRunner')

        .factory('AgentRunnerModalSvc', ['$uibModal',  function($uibModal) {

            return {

                open:  function(agentClass) {

                    var modalInstance = $uibModal.open({

                        templateUrl: 'app/components/agentRunner/modal/agentRunnerModal.html',
                        controller: 'AgentRunnerModalCtrl',
                        controllerAs: 'armc',
                        size: 'sm',
                        resolve: {

                            agentClass: function () {
                                return agentClass;
                            }
                        }
                    });
                   
                    return modalInstance;
                }
            };
        }]);
})();
