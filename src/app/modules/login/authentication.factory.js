/**
 * Created by jerry on 3/23/16.
 */
(function () {
  'use strict';

  angular
    .module('neminator')
    .factory('AuthenticationFactory', AuthenticationFactory);


  ///// -- Controller Function -- /////

  /** @ngInject */
  function AuthenticationFactory ($log) {
    var factory = {
      helloWorld: helloWorld
    };

    return factory;


    ///// -- Factory Functions -- /////

    function helloWorld () {
      $log('hello world');
    }
  }

})();
