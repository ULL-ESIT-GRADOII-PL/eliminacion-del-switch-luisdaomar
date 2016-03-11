Temperatura.prototype = new Medida ();
Temperatura.prototype.constructor = Temperatura;

function Temperatura(valor,tipo)
{
  Medida.call(this,valor,tipo);
}

Celsius.prototype = new Temperatura ();
Celsius.prototype.constructor = Celsius;

function Celsius(valor)
{
  Temperatura.call(this,valor);
}

Celsius.prototype.toFarenheit = function () {
  return (((this.valor*9)/5)+32);
}

Celsius.prototype.toKelvin = function () {
  return parseFloat(this.valor)+273.15;
}

Farenheit.prototype = new Temperatura ();
Farenheit.prototype.constructor = Farenheit;

function Farenheit(valor)
{
  Temperatura.call(this,valor);
}

Farenheit.prototype.toCelsius = function () {
  return ((this.valor-32)/1.800);
}

Farenheit.prototype.toKelvin = function () {
  return (((this.valor-32)/1.8)+273.15);
}

Kelvin.prototype = new Temperatura ();
Kelvin.prototype.constructor = Kelvin;


function Kelvin(valor)
{
  Temperatura.call(this,valor);
}

Kelvin.prototype.toFarenheit = function () {
  return this.valor-273.15;
}

Kelvin.prototype.toCelsius = function () {
  return ((this.valor-273.15)*1.8)+32;
}
