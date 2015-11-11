(function() {
    "use strict";

    angular.module('app.routes').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                abstract: true,
                url     : '/dashboard',
                views   : {
                    'layout@'          : {
                        templateUrl: view('dashboard.layout')
                    },
                    'sidebar@dashboard': {
                        templateUrl: view('dashboard.sidebar')
                    },
                    'header@dashboard' : {
                        templateUrl: view('dashboard.header')
                    },
                    'main@dashboard'   : {}
                }
            })
            .state('dashboard.home', {
                url  : '/',
                data : { pageName: 'Overview' },
                views: {
                    'main@dashboard': {
                        templateUrl: view('dashboard.home')
                    }
                }
            })
            .state('app', {
                abstract: true,
                views   : {
                    'layout@'    : {
                        templateUrl: view('app.layout')
                    },
                    'sidebar@app': {
                        templateUrl: view('app.sidebar')
                    },
                    'header@app' : {
                        templateUrl: view('app.header')
                    },
                    'main@app'   : {}
                }
            })
            .state('app.home', {
                url  : '/',
                data : { pageName: 'Overview' },
                views: {
                    'main@app': {
                        templateUrl: view('app.home')
                    }
                }
            })
            .state('jwtauth', {
                abstract: true,
                url     : '/auth',
                views   : {
                    'layout@'        : {
                        templateUrl: view('jwt_auth.layout')
                    },
                    'sidebar@jwtauth': {
                        templateUrl: view('jwt_auth.sidebar')
                    },
                    'header@jwtauth' : {
                        templateUrl: view('jwt_auth.header')
                    },
                    'main@jwtauth'   : {}
                }
            })
            .state('jwtauth.signin', {
                url  : '/signin',
                data : { pageName: 'Sign-in' },
                views: {
                    'main@jwtauth': {
                        templateUrl: view('jwt_auth.login')
                    }
                }
            })
            .state('staticpage', {
                abstract: true,
                url     : '/page',
                views   : {
                    'layout@'           : {
                        templateUrl: view('staticpage.layout')
                    },
                    'sidebar@staticpage': {
                        templateUrl: view('staticpage.sidebar')
                    },
                    'header@staticpage' : {
                        templateUrl: view('staticpage.header')
                    },
                    'main@staticpage'   : {}
                }
            })
            .state('staticpage.landing', {
                url  : '/',
                data : { pageName: 'Overview' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.landing')
                    }
                }
            })
            .state('staticpage.install', {
                url  : '/install',
                data : { pageName: 'Install' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.install')
                    }
                }
            })
            .state('staticpage.tabs', {
                url  : '/features',
                data : { pageName: 'Features' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.tabs')
                    }
                }
            })
            .state('staticpage.deploy', {
                url  : '/deploy',
                data : { pageName: 'Deploy' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.deploy')
                    }
                }
            })
            .state('staticpage.theme', {
                url  : '/theme',
                data : { pageName: 'Theme' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.theme')
                    }
                }
            })
            .state('staticpage.toasts', {
                url  : '/toasts',
                data : { pageName: 'Toasts' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.toasts')
                    }
                }
            })
            .state('staticpage.dialogs', {
                url  : '/dialogs',
                data : { pageName: 'Dialogs' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.dialogs')
                    }
                }
            })
            .state('staticpage.generators', {
                url  : '/generators',
                data : { pageName: 'Artisan generators' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.generators')
                    }
                }
            })
            .state('staticpage.jwt_auth', {
                url  : '/jwt_auth',
                data : { pageName: 'JSON Web Token Authentication' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.jwt_auth')
                    }
                }
            })
            .state('staticpage.elixir', {
                url  : '/elixir',
                data : { pageName: 'Elixir' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.elixir')
                    }
                }
            })
            .state('staticpage.rest_api', {
                url  : '/rest_api',
                data : { pageName: 'REST API' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.rest_api')
                    }
                }
            })
            .state('staticpage.unsupported_browser', {
                url  : '/unsupported_browser',
                data : { pageName: 'Unsupported Browser' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.unsupported_browser')
                    }
                }
            })
            .state('staticpage.misc', {
                url  : '/misc',
                data : { pageName: 'Miscellaneous features' },
                views: {
                    'main@staticpage': {
                        templateUrl: view('staticpage.misc')
                    }
                }
            });

        function view(viewName) {
            var
                appName  = function() {
                    if (viewName.split(".")[0]) {
                        return viewName.split(".")[0];
                    } else {
                        return 'app';
                    }
                },
                fileDir  = function() {
                    if (viewName.split(".")[1]) {
                        return viewName.split(".")[1];
                    } else if (!viewName.split(".")[0]) {
                        return viewName;
                    } else {
                        return 'home';
                    }
                },
                fileName = function() {
                    if (viewName.split(".")[2]) {
                        return viewName.split(".")[2];
                    } else if (!viewName.split(".")[2]) {
                        if (viewName.split(".")[1]) {
                            return viewName.split(".")[1];
                        }
                    } else {
                        return 'home';
                    }
                };

            return './views/' + appName() + '/' + fileDir() + '/' + fileName() + '.html';

        }
    });
})();
