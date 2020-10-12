function validation(){
	var user = document.getElementById('user').value;
	var  phone = document.getElementById('phone').value;
	var  mail = document.getElementById('mail').value;
	var  add = document.getElementById('add').value;
	var  aad = document.getElementById('aad').value;
	var  phone = document.getElementById('phone').value;
	var  pin = document.getElementById('pin').value;
	var  desc = document.getElementById('desc').value;
  var c = 0;

	if (user == ''){
		document.getElementById('username').innerHTML = '**please fill this field';
    c = 1;
	}
	if (phone == ''){
		document.getElementById('phn').innerHTML = '**please fill this field';
    c = 1;
	}
	if (mail == ''){
		document.getElementById('email').innerHTML = '**please fill this field';
    c = 1;
	}
	if (add == ''){
		document.getElementById('addr').innerHTML = '**please fill this field';
   c = 1;
	}
	if (pins == ''){
		document.getElementById('phn').innerHTML = '**please fill this field';
		c = 1;
	}
	if (aad == ''){
		document.getElementById('ad').innerHTML = '**please fill this field';
		c = 1;
	}
	if (pin == ''){
		document.getElementById('pins').innerHTML = '**please fill this field';
    c = 1;
	}
	if (desc == ''){
		document.getElementById('descs').innerHTML = '**please fill this field';
    c =1;
	}
	if(c == 1){
		return false;
	}
	else{
		window.alert('Complaint Registeted with Ref No. XXXX. Your petition will take atleast 24 to 48 hours to get filed and verified !!');
		window.open('index.html');
		return true;
	}

}


function letters(input){
		    var r = /[^a-g]/gi;
			input.value = input.value.replace(r,"");}
function digits(input){
			var v = /[^0-9]/gi;
			input.value = input.value.replace(v,"");}
