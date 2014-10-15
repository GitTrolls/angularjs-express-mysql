'use strict';

angular.module('frontendApp', 
	['ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap','ui.select2','ui.sortable','ui.tree',
     'frontendApp.state', 'angularFileUpload', 'ui.pagedown'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$logProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $logProvider) {
            $logProvider.debugEnabled = true;
//            var access = routingConfig.accessLevels;
//
//            // Public controllers
//            $stateProvider
//                .state('public', {
//                    abstract: true,
//                    template: "<ui-view/>",
//                    data: {
//                        access: access.public
//                    }
//                })
//                .state('public.404', {
//                    url: '/404/',
//                    templateUrl: '404'
//                })
//                .state('public.home', {
//                    url: '/',
//                    templateUrl: '/views/main.html',
//                    controller: 'MainCtrl'
//                });
//            // Anonymous controllers
//            $stateProvider
//                .state('anon', {
//                    abstract: true,
//                    template: "<ui-view/>",
//                    data: {
//                        access: access.anon
//                    }
//                })
//                .state('anon.login', {
//                    url: '/login/',
//                    templateUrl: '/views/partials/login.html',
//                    controller: 'LoginCtrl'
//                })
//                .state('anon.signup', {
//                    url: '/signup/',
//                    templateUrl: '/views/partials/signup.html',
//                    controller: 'SignupCtrl'
//                });
//
//            // Regular user controllers
//            $stateProvider
//                .state('user', {
//                    abstract: true,
//                    template: "<ui-view/>",
//                    data: {
//                        access: access.user
//                    }
//                })
//                .state('user.home', {
//                    url: '/',
//                    templateUrl: '/views/main.html',
//                    controller: 'MainCtrl'
//                })
//                .state('user.password', {
//                    url: '/password/',
//                    templateUrl: '/views/partials/password.html',
//                    controller: 'PasswordCtrl'
//                })
//                .state('user.mail', {
//                    url: '/mail/',
//                    templateUrl: '/views/partials/mail.html',
//                    controller: 'MailCtrl'
//                })
//                .state('user.passwordToken', {
//                    url: '/resetPassword/:passwordToken/',
//                    templateUrl: '/views/partials/resetPassword.html',
//                    controller: 'MailCtrl'
//                })
//                .state('user.resetPassword', {
//                    url: '/resetPassword/',
//                    templateUrl: '/views/partials/resetPassword.html',
//                    controller: 'MailCtrl'
//                })
//                .state('user.private.nested', {
//                    url: 'nested/',
//                    templateUrl: 'private/nested'
//                })
//                .state('user.private.admin', {
//                    url: 'admin/',
//                    templateUrl: 'private/nestedAdmin',
//                    data: {
//                        access: access.admin
//                    }
//                });
//
//            // Admin controllers
//            $stateProvider
//                .state('admin', {
//                    abstract: true,
//                    templateUrl: 'views/partials/admin/layout.html',
//                    data: {
//                        access: access.admin
//                    }
//                })
//                .state('admin.users', {
//                    abstract: true,
//                    url: '/users/',
//                    templateUrl: 'views/partials/admin/users/layout.html'
//                })
//                .state('admin.users.list', {
//                    url: 'page/:page',
//                    templateUrl: 'views/partials/admin/users/users.list.html',
//                    controller: 'AdminUserCtrl'
//                })
//                .state('admin.users.edit', {
//                    url: ':id',
//                    templateUrl: 'views/partials/admin/users/users.edit.html',
//                    controller: 'UserEditCtrl',
//                    resolve: {
//                        user: function(UserFactory, $stateParams){
//                            return UserFactory.get({id: $stateParams.id});
//                        },
//                        roles: function(RoleFactory){
//                            return RoleFactory.query();
//                        }
//                    }
//                })
//                .state('admin.products', {
//                    abstract: true,
//                    url: '/admin/products/',
//                    // Example of loading a template from a file. This is also a top level state,
//                    // so this template file will be loaded and then inserted into the ui-view
//                    // within index.html.
//                    templateUrl: 'views/partials/admin/products/layout.html'
//                })
//                .state('admin.products.list', {
//                    url: 'page/:page',
//                    templateUrl: 'views/partials/admin/products/products.list.html',
//                    controller: 'AdminProductCtrl'
//                })
//                .state('admin.orders', {
//                    abstract: true,
//                    url: '/admin/orders/',
//                    // Example of loading a template from a file. This is also a top level state,
//                    // so this template file will be loaded and then inserted into the ui-view
//                    // within index.html.
//                    templateUrl: 'views/partials/admin/orders/layout.html'
//                })
//                .state('admin.orders.list', {
//                    url: '',
//                    templateUrl: 'views/partials/admin/orders/orders.list.html',
//                    controller: 'AdminProductCtrl'
//                });
//
//            $urlRouterProvider.otherwise('/404');
//
//
//            // FIX for trailing slashes. Gracefully "borrowed" from https://github.com/angular-ui/ui-router/issues/50
//            $urlRouterProvider.rule(function($injector, $location) {
//                if($location.protocol() === 'file')
//                    return;
//
//                var path = $location.path()
//                // Note: misnomer. This returns a query object, not a search string
//                    , search = $location.search()
//                    , params
//                    ;
//
//                // check to see if the path already ends in '/'
//                if (path[path.length - 1] === '/') {
//                    return;
//                }
//
//                // If there was no search string / query params, return with a `/`
//                if (Object.keys(search).length === 0) {
//                    return path + '/';
//                }
//                //console.log('>>search:'+ JSON.stringify(search));
//                // Otherwise build the search string and return a `/?` prefix
//                params = [];
//                angular.forEach(search, function(v, k){
//                    params.push(k + '=' + v);
//                });
//                return path + '/?' + params.join('&');
//            });
//
//            $logProvider.debugEnabled = true;
//            // gets rid of the # in urls
//            $locationProvider.html5Mode(false); //.hashPrefix('!');
//            /*
//             * Set up an interceptor to watch for 401 errors. The
//             * server, rather than redirect to a login page (or
//             * whatever), just returns a 401 error if it receives a
//             * request that should have a user session going. Angular
//             * catches the error below and says what happens - in this
//             * case, we just redirect to a login page. You can get a
//             * little more complex with this strategy, such as queueing
//             * up failed requests and re-trying them once the user logs
//             * in. Read all about it here:
//             * http://www.espeo.pl/2012/02/26/authentication-in-angularjs-application
//             */
//             var interceptor = ['$q', '$location', '$rootScope',function ($q, $location, $rootScope) {
//                 function success(response) {
//                    return response;
//                 }
//                 function error(response) {
//                    var status = response.status;
//                    if (status === 401 || status === 403) {
//                         //$rootScope.redirect = $location.url(); // save the current url so we can redirect the user back
//                         //$rootScope.currentUser = null;
//                         $location.path('/login');
//                    }
//                    return $q.reject(response);
//                 }
//                 return function (promise) {
//                    return promise.then(success, error);
//                 }
//             }];
//             $httpProvider.responseInterceptors.push(interceptor);
//
         }
    ])
    .run(['$rootScope', '$state','$stateParams', 'AuthFactory', function ($rootScope, $state, $stateParams, AuthFactory) {
        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
            if (!AuthFactory.authorize(toState.data.access)) {
                $rootScope.error = "Seems like you tried accessing a route you don't have access to...";
                event.preventDefault();

                if(fromState.url === '^') {
                    if(AuthFactory.isLoggedIn()) {
                        $state.go('user.home');
                    } else {
                        $rootScope.error = null;
                        $state.go('anon.login');
                    }
                }
            }
        });

    }]);