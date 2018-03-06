$.noConflict();
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  $('#inputs li').on('click', function() {
    $(this).find('input').focus();
  });

  $('#sign-form').on("submit", function(e) {
    var name = $('#name').val();
    var email = {
      val: $('#email').val(),
      pattern: /^[^\s@]+@[^\s@]+$/
    };
    e.preventDefault();
    if (email.val === '') {
      console.log('email is empty');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter an email</li>');
    }
    else if (!(email.pattern).test(email.val)) {
      console.log('invalid email');
      $('#invalid').remove();
      $('#emailadd').append('<li id="invalid">Please enter a valid email</li>');
    }
    else {
      $(this).remove();
      $('#signup').append('<h1 id="submitted"> Thank you ' + name + '!  your sign up has been completed.</h1>');
    }
  });
});
