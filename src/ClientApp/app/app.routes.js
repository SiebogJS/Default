
(function (angular) {
    'use strict';

    angular.module('app')

        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',

            function ($stateProvider, $urlRouterProvider, $locationProvider) {

                $urlRouterProvider.otherwise('/home');

                $stateProvider

                    .state('main', {
                        abstract: true,
                        views: {
                            'header': {
                                templateUrl: 'html/header.html'
                            },
                            'content': {
                                templateUrl: 'html/home.html'
                            }
                        }
                    })

                    .state('home', {
                        parent: 'main',
                        url: '/home',
                        templateUrl: 'html/home.html'
                    })

                    .state('agentRunner', {
                        parent: 'main',
                        url: '/agentRunner',
                        views: {

                            "content@" : {
                                templateUrl: 'app/components/agentRunner/agentRunner.html',
                                controller: 'AgentRunnerCtrl',
                                controllerAs: 'arc'
                            },

                            "agentsConsole@agentRunner": {
                                templateUrl: 'app/components/agentsConsole/agentsConsole.html',
                                controller: 'AgentsConsoleCtrl',
                                controllerAs: 'acc'
                            },

                            "loggerConsole@agentRunner": {
                                templateUrl: 'app/components/loggerConsole/loggerConsole.html',
                                controller: 'LoggerConsoleCtrl',
                                controllerAs: 'lcc'
                            }
                        }
                    })

                    .state('examples',{
                        parent: 'main',
                        url: '/examples',
                        views: {
                            'content@' : {
                                templateUrl: 'app/components/agentExamples/agentExamples.html'
                            }
                        }

                    });

                $locationProvider.html5Mode(true);
            }
        ]);

}(angular));
