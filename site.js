$('#sign-form').on('submit',
function(e) {
  var email = $('#email').val();
  var valid = /.+@.+\..+/g;
  var validemail = valid.test(email);
  var name = $('#name').val();
 e.preventDefault();
 if(!validemail){
   console.log('Invalid email');
   alert("The email you entered was invalid");
   return false;
 } else {
   console.log('Valid email');
   $('body').replaceWith('<h1 id="sumbission">Thank you ' + name + '!  your sign up has been completed.<h1>');
 }
});
