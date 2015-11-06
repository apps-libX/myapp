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
            staticpage = function(viewName){
                return './views/staticpage/' + viewName + '/' + viewName + '.html';
            };

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url: '/dashboard',
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
            .state('dashboard.home', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@': {
                        templateUrl: dashboard('home')
                    }
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
            .state('app.home', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@': {
                        templateUrl: getView('home')
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url: '/page',
                views: {
                    sidebar: {
                        templateUrl: staticpage('sidebar')
                    },
                    header: {
                        templateUrl: staticpage('header')
                    },
                    main: {}
                }
            })
            .state('staticpage.landing', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@': {
                        templateUrl: staticpage('landing')
                    }
                }
            })
            .state('staticpage.install', {
                url: '/install',
                data: { pageName: 'Install' },
                views: {
                    'main@': {
                        templateUrl: staticpage('install')
                    }
                }
            })
            .state('staticpage.tabs', {
                url: '/features',
                data: { pageName: 'Features' },
                views: {
                    'main@': {
                        templateUrl: staticpage('tabs')
                    }
                }
            })
            .state('staticpage.deploy', {
                url: '/deploy',
                data: { pageName: 'Deploy' },
                views: {
                    'main@': {
                        templateUrl: staticpage('deploy')
                    }
                }
            })
            .state('staticpage.theme', {
                url: '/theme',
                data: { pageName: 'Theme' },
                views: {
                    'main@': {
                        templateUrl: staticpage('theme')
                    }
                }
            })
            .state('staticpage.toasts', {
                url: '/toasts',
                data: { pageName: 'Toasts' },
                views: {
                    'main@': {
                        templateUrl: staticpage('toasts')
                    }
                }
            })
            .state('staticpage.dialogs', {
                url: '/dialogs',
                data: { pageName: 'Dialogs' },
                views: {
                    'main@': {
                        templateUrl: staticpage('dialogs')
                    }
                }
            })
            .state('staticpage.generators', {
                url: '/generators',
                data: { pageName: 'Artisan generators' },
                views: {
                    'main@': {
                        templateUrl: staticpage('generators')
                    }
                }
            })
            .state('staticpage.jwt_auth', {
                url: '/jwt_auth',
                data: { pageName: 'JSON Web Token Authentication' },
                views: {
                    'main@': {
                        templateUrl: staticpage('jwt_auth')
                    }
                }
            })
            .state('staticpage.elixir', {
                url: '/elixir',
                data: { pageName: 'Elixir' },
                views: {
                    'main@': {
                        templateUrl: staticpage('elixir')
                    }
                }
            })
            .state('staticpage.rest_api', {
                url: '/rest_api',
                data: { pageName: 'REST API' },
                views: {
                    'main@': {
                        templateUrl: staticpage('rest_api')
                    }
                }
            })
            .state('staticpage.unsupported_browser', {
                url: '/unsupported_browser',
                data: { pageName: 'Unsupported Browser' },
                views: {
                    'main@': {
                        templateUrl: staticpage('unsupported_browser')
                    }
                }
            })
            .state('staticpage.misc', {
                url: '/misc',
                data: { pageName: 'Miscellaneous features' },
                views: {
                    'main@': {
                        templateUrl: staticpage('misc')
                    }
                }
            });

    });
})();
