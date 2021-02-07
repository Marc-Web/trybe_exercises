const estados = document.getElementById('state');
function insereEstados() {
  const estadosDaFederacao = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let valor = 1;
  for (let i = 0; i < estadosDaFederacao.length; i += 1) {
    const criaOpcoes = document.createElement('option');
    estados.appendChild(criaOpcoes).innerText = estadosDaFederacao[i];
    estados.appendChild(criaOpcoes).valor = estadosDaFederacao[i];
  }
};

function validaData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const dia = data.substr(0, 2);
    const mes = data.substr(3, 2);
    const ano = data.substr(6, 4);
    if ((dia > 0 && dia < 31) && (mes > 0 && mes <= 12) && (ano > 0 && ano.length === 4)) {
      return true;
    }
  }
  return false;
};

function confereData() {
  const dataEntrada = document.querySelector('.input-data');
  let data = dataEntrada.value;
  const dataUsuario = validaData(data);
  if (!dataUsuario && data.length) {
    dataEntrada.value = '';
    alert('data inválida');
    return false;
  }
  return dataUsuario;
};

function confereEmail() {
  const email = document.querySelector('.email-input');
  let emailDoUsuario = email.value;
  const tipoEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(emailDoUsuario);
  if (!tipoEmail && emailDoUsuario.length) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return tipoEmail;
};

function carregaCurriculo(event) {
  event.preventDefault();
  const entradas = document.querySelectorAll('input');
  for (let i = 0; i < entradas.length; i += 1) {
    if (entradas[i].type === 'radio' && !entradas[i].checked) {
      continue;
    }
    const dadosDoUsuario = entradas[i].value;
    const dataUsuario = document.querySelector('.form-data');
    if (confereEmail() && confereData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = dadosDoUsuario;
      dataUsuario.appendChild(div);
    }
  }
};

const botaoLimpar = document.querySelector('.clear-button');
function limpaEntradas() {
  const entradas = document.querySelectorAll('input');
  const campoResumo = document.querySelector('textarea');
  const div = document.querySelectorAll('.div-curriculum');
  for (let i = 0; i < entradas.length && i < div.length; i += 1) {
    const entradaUsuario = entradas[i];
    entradaUsuario.value = '';
    campoResumo.value = '';
    div[i].innerText = '';
  }
};

const botaoSubmit = document.querySelector('.submit-button');
botaoSubmit.addEventListener('click', carregaCurriculo);
botaoLimpar.addEventListener('click', limpaEntradas);

window.onload = function() {
  insereEstados();
};
