window.alert("Seja bem-vindo à assistência H7!");

//Data atual
function dataAtual() {
  //Objeto que define a data
  let data = new Date();

  //Variáveis para a data
  let dia = data.getDate();
  let mes = new Array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  );
  let ano = data.getFullYear();

  //Variáveis para a hora
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();

  //Formatando data e hora
  let dataAtual = dia + " de " + mes[data.getMonth()] + " de " + ano;
  let horaAtual = hora + ":" + minuto + ":" + segundo;

  //Exibindo data e hora atual
  window.alert("  Hoje é dia " + dataAtual + "  às  " + horaAtual);
}

function ligar() {
  document.getElementById("botao1").src = "./public/images/switch.png";
}

function desligar() {
  document.getElementById("botao1").src = "./public/images/switch-off.png";
}

function mudarcor() {
  document.getElementById("barra").style.background = "#2EFE64";
}

function desconto1() {
  document.getElementById("desconto1").innerHTML = "R$ 25";
  document.getElementById("desconto2").innerHTML = "R$ 35";
  document.getElementById("desconto3").innerHTML = "R$ 40";
  document.getElementById("desconto4").innerHTML = "R$ 60";
  document.getElementById("desconto5").innerHTML = "R$ 30";
  document.getElementById("desconto6").innerHTML = "R$ 37,5";
  document.getElementById("desconto7").innerHTML = "R$ 10 por hora";
  document.getElementById("desconto8").innerHTML = "R$ 15";
  window.alert("50% de desconto!");
}

function desconto2() {
  document.getElementById("desconto9").innerHTML = "R$ 60";
  document.getElementById("desconto10").innerHTML = "R$ 25";
  document.getElementById("desconto11").innerHTML = "R$ 25 por hora";
  document.getElementById("desconto12").innerHTML = "R$ 65";
  document.getElementById("desconto13").innerHTML = "R$ 72,5";
  document.getElementById("desconto14").innerHTML = "R$ 75";
  document.getElementById("desconto15").innerHTML = "R$ 55";
  document.getElementById("desconto16").innerHTML = "R$ 10 por hora";
  window.alert("Preço decaído pela metade!");
}

function tamanho() {
  document.getElementById("fonte").style.fontSize = "32px";
}

function $tamanho() {
  document.getElementById("fonte").style.fontSize = "16px";
}

function $noturno() {
  let container = document.getElementById("container");

  container.style.backgroundColor = "#0B0B61";

  container.style.color = "#F2F2F2";
}
