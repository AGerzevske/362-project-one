'use strict';
(function() {
  // Check for old browser
  if (!('querySelector' in document && 'addEventListener' in document)) {
    return;
  }

  // --- Data cleanup functions --- //
  function eq(value, condition) {
    return value === condition;
  }
  function gt(value, condition) {
    return value > condition;
  }

  function validate(value, check, condition) {
    if (eq(typeof(check.test), 'function')) {
      // Handle a regular expression
      return check.test(value);
    } else if (eq(typeof(check), 'function')) {
      // Handle a comparison function
      return check(value, condition);
    } else {
      return false;
    }
  }

  // returns value with all whitespace characters removed
  function clean_whitespace(value) {
    return value.replace(/\s/g, '');
  }

  // Email validity function
  function validate_email(value) {
    var email = clean_whitespace(value);
    return validate(email, /^[^@\s]+@[^@\s]+$/g);
  }

  // Utilize Stolley stuff to try and get name working
  // Name validity function
  function validate_name(value) {
    var name = clean_whitespace(value);
    return validate(name.length, gt, 0);
  }


  document.addEventListener('DOMContentLoaded', function(){
    var signup_form = document.querySelector('#signup-form');
    var info_submit = document.querySelector('#submit');
    var email_input = document.querySelector('#email');
    var name_input = document.querySelector('#name');
    var info_hint = document.querySelector('.hint');
    info_hint.innerHTML += ' <b id="info-error"></b>';

    // disable the submit button until we are resonable sure we have an email
    info_submit.setAttribute('disabled', 'disabled');


    signup_form.addEventListener('keyup',function(){
      var email_value = email_input.value;
      var name_value = name_input.value;

      info_submit.removeAttribute('disabled');

      if (validate_email(email_value) && validate_name(name_value)) {
        info_submit.removeAtrribute('disabled');
      } else {
        var info_error = document.querySelector('#info-error');
        if (email_value.length > 6 && info_error.innerText.length === 0) {
          info_error.innerText = 'You need a valid email and name.';
        }
        info_submit.setAttribute('disabled', 'disabled');
      }
    });

    // Email Java Stuff
    // Email on FOCUS
    email_input.addEventListener('focus', function(){
      console.log('Email Focus');
    });

    // Email off FOCUS (BLUR)
    email_input.addEventListener('blur', function(){
      console.log('Email Blur');
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

  });
}());
