'use strict';
(function() {
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    var info_sumbit = document.querySelector('#submit');
    var email_input = document.querySelector('#email');
    var name_input = document.querySelector('#name');
    console.log('DOM Loaded');

    // disable the submit button until we are resonable sure we have an email
    info_sumbit.setAttribute('disabled', 'disabled');

    // Email Java Stuff
    // Email on FOCUS
    email_input.addEventListener('focus', function(){
      console.log('Email Focus');
    });

    // Email off FOCUS (BLUR)
    email_input.addEventListener('blur', function(){
      console.log('Email Blur');
    });

    // Email read data
    email_input.addEventListener('keyup', function() {
      var email_data = this.value;
      console.log('The value of #email is ', email_data);
    });

    // Name Java Stuff
    // Name on FOCUS
    name_input.addEventListener('focus', function(){
      console.log('Name Focus');
    });

    // Name off FOCUS (BLUR)
    name_input.addEventListener('blur', function(){
      console.log('Name Blur');
    });

    // Name read data
    name_input.addEventListener('keyup', function() {
      var name_data = this.value;
      console.log('The value of #name is ', name_data);
    });
    /*
    var name_data = '#name';
    var email_data = '#email';
    // Enable submit button when valid data is in both forms
    if (name_data.length >= 1 && email_data.length >= 6) {
      console.log('Correct');
      info_sumbit.removeAttribute('disabled');
   }
   */
  });
}());

//  var clean_number = this.value.replace(/\D/g,'');
//  var sanatized_number = clean_number.value.replace.(/^1,'');
//  if (sanatized_number.length === 10) {
//    console.log('Correct');
//    email_sumbit.removeAttribute('disabled');
//  }
