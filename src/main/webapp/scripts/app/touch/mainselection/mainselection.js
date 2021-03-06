'use strict';

angular.module('wayfindingApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('mainselection' , {
                url: "/mainselection",
                data: {
                    authorities: [],
                    pageTitle: 'mainselection.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/touch/mainselection/mainselection.html',
                        controller: 'MainSelectionController'
                    }
                },
                onEnter: function($rootScope) {
                    if ($rootScope.moveUpDown != "move-up") {
                        $rootScope.moveUpDown = "move-up";
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('mainselection');
                        return $translate.refresh();
                    }]
                }
            });
    });
