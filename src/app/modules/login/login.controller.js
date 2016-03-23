/**
 * Created by jerry on 3/23/16.
 */
(function () {
  'use strict';

  angular
    .module('neminator')
    .controller('LoginController', LoginController);


  /** @ngInject */
  function LoginController () {
    var vm = this;

    vm.helloWorld = 'Hello, World!';

  }
})();
