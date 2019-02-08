(function() {
  'use strict';
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Loaded');
    
  })
}());
