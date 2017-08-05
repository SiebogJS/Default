
(function (angular) {
    'use strict';

    angular.module('app.agentRunner')

        .factory('AgentRunnerRestSvc', ['$resource', function ($resource) {

            return{

                getClasses: function () {
                    return  $resource('/api/agents/classes').query().$promise;
                },

                getRunning: function () {
                    return $resource('api/agents/running').query().$promise;
                },

                runAgent: function (agentClass, agentName) {
                    return $resource('api/agents/running/:type/:name',
                        {type: agentClass, name: agentName}, {put: {method : 'PUT'} }).put().$promise;
                },

                stopAgent: function (aid) {
                    return $resource('api/agents/running/:aid', {aid: aid}).delete().$promise;
                },

                postMessage: function (aclMsg) {
                    return $resource('api/messages').save(aclMsg).$promise;
                },

                getPerformaives: function () {
                    return $resource('api/messages').query().$promise;
                }
            };
        }]);

}(angular));
