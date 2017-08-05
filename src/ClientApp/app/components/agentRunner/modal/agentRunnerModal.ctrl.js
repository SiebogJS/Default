
(function(angular) {
    'use strict';

    angular.module('app.agentRunner')

        .controller('AgentRunnerModalCtrl', ['$uibModalInstance', 'agentClass',

            function($modalInstance, agentClass) {
                var self = this;

                self.agentClass = agentClass;
                self.agentName = '';

                self.confirm = function () {
                    var agentInstance = {'name': self.agentName, 'agentClass': self.agentClass};
                    $modalInstance.close(agentInstance);
                };

                self.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

                self.keyFn = function (event) {
                    if (event.keyCode == 13)
                        self.confirm();
                };
            }
        ]);

}(angular));