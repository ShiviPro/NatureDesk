function validation() {
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var user = document.getElementById('user').value;
  var confirm = document.getElementById('confirm').value;
  var pass = document.getElementById('pass').value;
  var c = 0;

  if (fname == '') {
    document.getElementById('fnames').innerHTML = '**please fill this field';
    c = 1;
  }
  if (lname == '') {
    document.getElementById('lnames').innerHTML = '**please fill this field';
    c = 1;
  }
  if (user == '') {
    document.getElementById('username').innerHTML = '**please fill this field';
    c = 1;
  }
  if (confirm == '') {
    document.getElementById('confirms').innerHTML = '**please fill this field';
    c = 1;
  }
  if (pass == '') {
    document.getElementById('passes').innerHTML = '**please fill this field';
    c = 1;
  }
  if (pass != confirm) {
    window.alert('Please confirm the password.');
    return false;
  }
  if (c == 1) {
    return false;
  } else {
    window.alert('Signed Up Successfully. You will be redirected to the login page shortly...');
		window.open('login.html');
    return true;
  }

}




function letters(input) {
  var r = /[^a-z]/gi;
  input.value = input.value.replace(r, "");
}

function digits(input) {
  var v = /[^0-9]/gi;
  input.value = input.value.replace(v, "");
}
