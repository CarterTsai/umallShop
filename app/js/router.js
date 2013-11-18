//ui-router
angular.module('umallApp').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");  
    $stateProvider
    .state('index', {
        url: '/index', 
        views: {
            'main': {
                templateUrl: 'view/main.html',
                //controller:  'mainCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_main.html'
            }
        }
    })
    .state('prods', {
        url: '/prods', 
        views: {
            'main': {
                templateUrl: 'view/prods.html',
                controller:  'prodCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_prod.html',
                controller: 'navsProdCtrl'
            },
        }
    })
    .state('shop', {
        url: '/shopCart/:steps/', 
        views: {
            'main': {
                templateUrl: 'view/shopcart.html',
                controller:  'shopCtrl'
            },
            'navs': {
                templateUrl: 'view/navs_shop.html',
                controller: 'navsProdCtrl'
            },
        }
    })
});