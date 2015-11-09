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
                    'layout': {
                        templateUrl: dashboard('layout')
                    },
                    'sidebar@dashboard': {
                        templateUrl: dashboard('sidebar')
                    },
                    'header@dashboard': {
                        templateUrl: dashboard('header')
                    },
                    'main@dashboard': {}
                }
            })
            .state('dashboard.home', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@dashboard': {
                        templateUrl: dashboard('home')
                    }
                }
            })
            .state('app', {
                abstract: true,
                views: {
                    'layout': {
                        templateUrl: getView('layout')
                    },
                    'sidebar@app': {
                        templateUrl: getView('sidebar')
                    },
                    'header@app': {
                        templateUrl: getView('header')
                    },
                    'main@app': {}
                }
            })
            .state('app.home', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@app': {
                        templateUrl: getView('home')
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url: '/page',
                views: {
                    'layout': {
                        templateUrl: staticpage('layout')
                    },
                    'sidebar@staticpage': {
                        templateUrl: staticpage('sidebar')
                    },
                    'header@staticpage': {
                        templateUrl: staticpage('header')
                    },
                    'main@staticpage': {}
                }
            })
            .state('staticpage.landing', {
                url: '/',
                data: { pageName: 'Overview' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('landing')
                    }
                }
            })
            .state('staticpage.install', {
                url: '/install',
                data: { pageName: 'Install' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('install')
                    }
                }
            })
            .state('staticpage.tabs', {
                url: '/features',
                data: { pageName: 'Features' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('tabs')
                    }
                }
            })
            .state('staticpage.deploy', {
                url: '/deploy',
                data: { pageName: 'Deploy' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('deploy')
                    }
                }
            })
            .state('staticpage.theme', {
                url: '/theme',
                data: { pageName: 'Theme' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('theme')
                    }
                }
            })
            .state('staticpage.toasts', {
                url: '/toasts',
                data: { pageName: 'Toasts' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('toasts')
                    }
                }
            })
            .state('staticpage.dialogs', {
                url: '/dialogs',
                data: { pageName: 'Dialogs' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('dialogs')
                    }
                }
            })
            .state('staticpage.generators', {
                url: '/generators',
                data: { pageName: 'Artisan generators' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('generators')
                    }
                }
            })
            .state('staticpage.jwt_auth', {
                url: '/jwt_auth',
                data: { pageName: 'JSON Web Token Authentication' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('jwt_auth')
                    }
                }
            })
            .state('staticpage.elixir', {
                url: '/elixir',
                data: { pageName: 'Elixir' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('elixir')
                    }
                }
            })
            .state('staticpage.rest_api', {
                url: '/rest_api',
                data: { pageName: 'REST API' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('rest_api')
                    }
                }
            })
            .state('staticpage.unsupported_browser', {
                url: '/unsupported_browser',
                data: { pageName: 'Unsupported Browser' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('unsupported_browser')
                    }
                }
            })
            .state('staticpage.misc', {
                url: '/misc',
                data: { pageName: 'Miscellaneous features' },
                views: {
                    'main@staticpage': {
                        templateUrl: staticpage('misc')
                    }
                }
            });

    });
})();
