var nome = "felipe";
var idade = 25;
var n1 = 90;
var programado = true;
var idades = [25, 35, 20];
var nomes = ["Felipe", "Silva", "Franca"];
var nomes2 = ["Silva", "Antonio", "Feelps"];
function firstLetterUpperCase(name) {
  var firtsLetter = name.charAt(0).toUpperCase();
  return firtsLetter + name.substring(1);
}
console.log(firstLetterUpperCase("felipe"));
