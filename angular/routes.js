(function(){
    "use strict";

    angular.module('app.routes').config(function($stateProvider, $urlRouterProvider){

        var
            dashboard = function(viewName){
                return './views/dashboard/' + viewName + '/' + viewName + '.html';
            },
            getView = function(viewName){
                return './views/app/' + viewName + '/' + viewName + '.html';
            },
            viewStatic = function(viewName){
                return './views/static/' + viewName + '/' + viewName + '.html';
            };

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                views: {
                    sidebar: {
                        templateUrl: dashboard('sidebar')
                    },
                    header: {
                        templateUrl: dashboard('header')
                    },
                    main: {}
                }
            })
            .state('app', {
                abstract: true,
                views: {
                    sidebar: {
                        templateUrl: getView('sidebar')
                    },
                    header: {
                        templateUrl: getView('header')
                    },
                    main: {}
                }
            })
            .state('static', {
                abstract: true,
                views: {
                    sidebar: {
                        templateUrl: viewStatic('sidebar')
                    },
                    header: {
                        templateUrl: viewStatic('header')
                    },
                    main: {}
                }
            })
            .state('static.landing', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('landing')
                    }
                }
            })
            .state('static.install', {
                url: '/install',
                data: { pageName: 'Install' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('install')
                    }
                }
            })
            .state('static.tabs', {
                url: '/features',
                data: { pageName: 'Features' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('tabs')
                    }
                }
            })
            .state('static.deploy', {
                url: '/deploy',
                data: { pageName: 'Deploy' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('deploy')
                    }
                }
            })
            .state('static.theme', {
                url: '/theme',
                data: { pageName: 'Theme' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('theme')
                    }
                }
            })
            .state('static.toasts', {
                url: '/toasts',
                data: { pageName: 'Toasts' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('toasts')
                    }
                }
            })
            .state('static.dialogs', {
                url: '/dialogs',
                data: { pageName: 'Dialogs' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('dialogs')
                    }
                }
            })
            .state('static.generators', {
                url: '/generators',
                data: { pageName: 'Artisan generators' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('generators')
                    }
                }
            })
            .state('static.jwt_auth', {
                url: '/jwt_auth',
                data: { pageName: 'JSON Web Token Authentication' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('jwt_auth')
                    }
                }
            })
            .state('static.elixir', {
                url: '/elixir',
                data: { pageName: 'Elixir' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('elixir')
                    }
                }
            })
            .state('static.rest_api', {
                url: '/rest_api',
                data: { pageName: 'REST API' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('rest_api')
                    }
                }
            })
            .state('static.unsupported_browser', {
                url: '/unsupported_browser',
                data: { pageName: 'Unsupported Browser' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('unsupported_browser')
                    }
                }
            })
            .state('static.misc', {
                url: '/misc',
                data: { pageName: 'Miscellaneous features' },
                views: {
                    'main@': {
                        templateUrl: viewStatic('misc')
                    }
                }
            });

    });
})();
