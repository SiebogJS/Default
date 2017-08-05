
(function(angular) {
    'use strict';

    angular.module('app.aclMessage')

        .controller('ACLMessageModalCtrl', ['$uibModalInstance', 'input', 'performatives', 'running',

            function($modalInstance, input, performatives, running) {
                var self = this;

                self.input = input;
                self.performatives = performatives;
                self.running = running;
                
                self.confirm = function () {
                    $modalInstance.close(self.input);
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
