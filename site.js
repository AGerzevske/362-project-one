(function() {
  'use strict';
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM Loaded');
    var info_sumbit = document.querySelector('#submit');
    // disable the submit button until we are resonable sure we have an email
    info_sumbit.setAttribute('disabled', 'disabled')
  });
  // Email Java Stuff
  // Email on FOCUS
  var email_input = document.querySelector('#email');
  email_input.addEventListener('focus', function(){
    console.log('Email Focus');
  });

  // Email off FOCUS (BLUR)
  email_input.addEventListener('blur', function(){
    console.log('Email Blur');
  });

  // Email read data
  email_input.addEventListener('keyup', function() {
    console.log('The value of #email is ', this.value);
    var email_data = this.value;
  });

  // Name Java Stuff
  // Name on FOCUS
  var name_input = document.querySelector('#name');
  name_input.addEventListener('focus', function(){
    console.log('Name Focus');
  });

  // Name off FOCUS (BLUR)
  name_input.addEventListener('blur', function(){
    console.log('Name Blur');
  });

  // Name read data
  name_input.addEventListener('keyup', function() {
    console.log('The value of #name is ', this.value);
    var name_data = this.value;
  });

  if ( name_data >= 1 && email_data >= 6) {
    console.log('Correct');
    info_sumbit.removeAttribute('disabled');
  }

}());

/*  var clean_number = this.value.replace(/\D/g,'');
 var sanatized_number = clean_number.value.replace.(/^1,'');
if (sanatized_number.length === 10) {
  console.log('Correct');
  email_sumbit.removeAttribute('disabled');
}
*/
