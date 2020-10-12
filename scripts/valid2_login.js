function validation(){
	var user = document.getElementById('user').value;
	var  password = document.getElementById('password').value;
  var c = 0;

	if (user == ''){
		document.getElementById('username').innerHTML = '**please fill this field';
    c = 1;
	}
	if (password == ''){
		document.getElementById('pass').innerHTML = '**please fill this field';
    c = 1;
	}

	if(c == 1){
		return false;
	}
	else{
		window.alert('Logged in Successfully. You will be redirected to the home page in a few moments ...');
		window.open('index.html');
		return true;
	}

}


function letters(input){
		    var r = /[^a-z]/gi;
			input.value = input.value.replace(r,"");}
function digits(input){
			var v = /[^0-9]/gi;
			input.value = input.value.replace(v,"");}
