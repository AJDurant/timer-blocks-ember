(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['countdown'] };
  }

  define('countdown', [], vendorModule);
})();
