const dojo = {};

dojo.traduza = function(letras ) {
	var resultadoTotal = '';
	letras = letras.toUpperCase();

	for(var i = 0; i < letras.length; i++ )
	{
		var letra = letras[i];
		if (letra == '-') {
			resultadoTotal += '-';
			continue;
		}

		if ('ABC'.indexOf(letra) != -1) {
			resultadoTotal += '2';
		} else if ('DEF'.indexOf(letra) != -1){
			resultadoTotal += '3';
		} else if ('GHI'.indexOf(letra) != -1){
			resultadoTotal += '4';
		} else if ('JKL'.indexOf(letra) != -1){
			resultadoTotal += '5';
		} else if ('MNO'.indexOf(letra) != -1){
			resultadoTotal += '6';
		} else if ('PQRS'.indexOf(letra) != -1){
			resultadoTotal += '7';
		} else if ('TUV'.indexOf(letra) != -1){
			resultadoTotal += '8';
		} else if ( 'WXYZ'.indexOf(letra) !=-1){
			resultadoTotal += '9';
		} else if ('*#'.indexOf(letra) != -1) {
			resultadoTotal += letra;
		} else {
			var isNumero = +letra || 0;			
			if(isNumero || letra === '-'){
				resultadoTotal += letra;
			}else{
				throw new Error('Blablabla');	
			}
		}
	}
	return resultadoTotal;
};

module.exports = dojo;
