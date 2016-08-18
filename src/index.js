const dojo = {};
const referencias = {
	'1': '1',
	'ABC2': '2',
	'DEF3': '3',
	'GHI4': '4',
	'JKL5': '5',
	'MNO6': '6',
	'PQRS7': '7',
	'TUV8': '8',
	'WXYZ9': '9',
	' 0': '0',
	'*': '*',
	'#': '#'
};



dojo.traduza = function(letras ) {
	var resultadoTotal = '';
	if(!letras && letras!=''){
		throw new Error('Blablabla');
	}

	letras = letras.toUpperCase(); //ABCDEF

	for(var i = 0; i < letras.length; i++ )
	{
		var letra = letras[i];
		if (letra == '-') {
			resultadoTotal += '-';
			continue;
		}

		var achou = false;

		for(var conjunto in referencias){
			if(~conjunto.indexOf(letra)){
				resultadoTotal += referencias[conjunto];
				achou = true;
				break;
			}
		}

		if(!achou){
			throw new Error('Blablabla');
		}
	}
	return resultadoTotal;
};

module.exports = dojo;
