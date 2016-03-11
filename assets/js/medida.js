function Medida(valor,tipo)
{
    //if(!tipo)
    //{
    //  exp = XRegExp('(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) #val \n' +
    //                    '(\\s*) \n' +
    //                    '(?<tipo> [a-zA-Z]) #tipo \n','x');
//
    //  m = XRegExp.exec(valor, exp);
    //  this.valor = m.val;
    //  this.tipo = m.tipo;
  //  }
  //  else
  //  {
      this.valor = valor;
      this.tipo = tipo;
  //  }
}

Medida.match = function(valor) {
  xregexp = XRegExp('(?<val> [-+]?[0-9]+(\\.[0-9]+)?(?:e[+-]?[0-9]+)?) #val \n' +
                    '(\\s*) \n' +
                    '(?<tipo> [a-zA-Z]) #tipo \n' +
                    '(\\s*) \n' +
                    '(?<to> (to)?) #to \n' +
                    '(\\s*) \n' +
                    '(?<opt>  [a-zA-Z]) #opt','x');
  valor = XRegExp.exec(valor,xregexp);
  return valor;
}

Medida.measures = {};

Medida.convertir = function(valor) {
  var measures = Medida.measures;
  measures.c = Celsius;
  measures.C = Celsius;
  measures.f = Farenheit;
  measures.F = Farenheit;
  measures.k = Kelvin;
  measures.K = Kelvin;
  var match = Medida.match(valor);
  if (match) {
    var numero = match.val;
        tipo   = match.tipo;
        destino = match.opt;
    try {
      var source = new measures[tipo](numero);// new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+measures[destino].name; // "0 Celsius"
    }
    catch(err) {
      console.log(err);
      return 'Desconozco como convertir desde "' + tipo + '" hasta "' + destino + '"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
