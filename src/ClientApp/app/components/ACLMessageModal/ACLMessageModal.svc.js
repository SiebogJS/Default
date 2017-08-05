
(function() {
    'use strict';

    angular
        .module('app.aclMessage')

        .factory('ACLMessageModalSvc', ['$uibModal',  function($uibModal) {

            return {
                
                open:  function(input, performatives, running) {
                
                    var modalInstance = $uibModal.open({
                
                        templateUrl: 'app/components/ACLMessageModal/ACLMessageModal.html',
                        controller: 'ACLMessageModalCtrl',
                        controllerAs: 'ammc',
                        size: 'lg',
                        resolve: {

                            input: function () {
                                return input;
                            },

                            performatives: function () {
                                return performatives;
                            },

                            running: function () {
                                return running;
                            }
                        }
                    });

                    return modalInstance;
                }
            };
        }]);
})();
