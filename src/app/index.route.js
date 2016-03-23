(function() {
  'use strict';

  angular
    .module('neminator')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/modules/login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'login'
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
