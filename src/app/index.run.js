(function() {
  'use strict';

  angular
    .module('neminator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
