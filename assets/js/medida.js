function Medida(valor,tipo)
{
    this.valor = valor;
    this.tipo = tipo;
}

Medida.match = function(valor) {
  xregexp = XRegExp('(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?([ ]*)) #val \n' +
                    '(?<tipo> [cfkCFK]([ ]*)) #tipo \n' +
                    '(?<to> (to)([ ]+))? #to \n' +
                    '(?<opt>  [cfkCFK]([ ]*)) #opt','x');
  valor = XRegExp.exec(valor,xregexp);
  return valor;
}

Medida.measures = {};

Medida.convertir = function(valor) {
  var measures = Medida.measures;
  measures.c = Celsius;
  measures.f = Farenheit;
  measures.k = Kelvin;
  var match = Medida.match(valor);
  if (match) {
    var numero = match.val,
        tipo   = match.tipo,
        destino = match.opt;
    try {
      console.log(measures[tipo]);
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      console.log(err);
      return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
