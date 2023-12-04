document.querySelector("#btnGerar").addEventListener("click", () => {
  var nome = document.getElementById("razao-social").value;
  var CNPJ = document.getElementById("CNPJ").value;
  var inscMunicipal = document.getElementById("InscMunicipal").value;
  var endereco = document.getElementById("Endereco").value;

  // /*---------------TOMADOR DE SERVIÇO-------------------------------- */

  var nomeCliente = document.getElementById("Nome-do-Cliente").value;
  var CNPJCPFcliente = document.getElementById("CNPJ-CPF-Cliente").value;
  var enderecoCliente = document.getElementById("Endereço-Cliente").value;
  var descricao = document.getElementById("descricao").value;
  var valortotal = document.getElementById("valor-total").value;

  var valorFormatado = parseInt(valortotal);
  var aliquotaISS = 3;

  var valorISS = valorFormatado * (aliquotaISS / 100);
  console.log(valorISS);

  var valorTotal = parseFloat(valorFormatado + valorISS).toFixed(2);
  console.log(valorTotal);

  console.log(valorTotal);


  document.getElementById("razaoSocial-gerado").innerHTML = nome;
  document.getElementById("CNPJ-gerado").innerHTML = CNPJ;
  document.getElementById("Inscrição-Municipal-gerado").innerHTML =
    inscMunicipal;
  document.getElementById("Endereço-gerado").innerHTML = endereco;

  document.getElementById("Nome-do-Cliente-gerado").innerHTML = nomeCliente;
  document.getElementById("CNPJ/CPF-gerado").innerHTML = CNPJCPFcliente;
  document.getElementById("Endereço-Cliente-gerado").innerHTML =
    enderecoCliente;
  document.getElementById("descricao-gerado").innerHTML = descricao;
        document.getElementById("valor-total-gerado").innerHTML = valorTotal;
        document.getElementById("iss").innerHTML = valorISS;

  var dataAtual = new Date();

  // Formata a data para exibição
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  var dataFormatada = dataAtual.toLocaleDateString("pt-BR", options);

  // Exibe a data no elemento com id "data-local"
  document.getElementById("data-local").innerText = dataFormatada;

  console.log("clicou");
});
