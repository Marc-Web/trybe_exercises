function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function criaDiasDoMes() {
  const diasDeDezembro = document.querySelector("#days");
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let diasdez = dezDaysList[index];
    let elementoLi = document.createElement('li');

    if (diasdez === 24 || diasdez === 31) {
      elementoLi.className = 'day holiday';
      elementoLi.innerHTML = diasdez;
      diasDeDezembro.appendChild(elementoLi);
    } else if (diasdez === 4 || diasdez === 11 || diasdez === 18) {
      elementoLi.className = 'day friday-day';
      elementoLi.innerHTML = diasdez;
      diasDeDezembro.appendChild(elementoLi);
    } else if (diasdez === 25) {
      elementoLi.className = 'day holiday friday-day';
      elementoLi.innerHTML = diasdez;
      diasDeDezembro.appendChild(elementoLi);
    } else {
      elementoLi.innerHTML = diasdez;
      elementoLi.className = 'day';
      diasDeDezembro.appendChild(elementoLi);
    }
  };
};

criaDiasDoMes();

function botaoFeriados() {
  let posicaoDoBotao = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerText = 'Feriados';
  posicaoDoBotao.appendChild(botao);
};

botaoFeriados();

function clickMudaCor() {
  let botaoHoliday = document.querySelector('#btn-holiday');
  let diasDeFeriado = document.querySelectorAll('.holiday');
  let corDeFundo = 'rgb(238,238,238)';
  let novaCor = 'white';

  botaoHoliday.addEventListener('click', function() {
    for (let i = 0; i < diasDeFeriado.length; i += 1) {
      if (diasDeFeriado[i].style.backgroundColor === novaCor) {
        diasDeFeriado[i].style.backgroundColor = corDeFundo;
      } else {
        diasDeFeriado[i].style.backgroundColor = novaCor;
      }
      console.log(diasDeFeriado);
    }
  })
};

clickMudaCor();

function botaoSextaFeira(nomeDoBotao) {
  let posicaoDoBotao = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.id = 'btn-friday';
  botao.innerHTML = nomeDoBotao;
  posicaoDoBotao.appendChild(botao);
};

botaoSextaFeira('Sexta-feira');

let sextas = [4, 11, 18, 25];

function trocaTextoDoBtnSextaFeira(arraySextas) {
  let botaoSextaFeira = document.querySelector('#btn-friday');
  let sextasFeiras = document.getElementsByClassName('friday-day');
  console.log(sextasFeiras);
  let botaoTexto = 'SEXTOU';

  botaoSextaFeira.addEventListener('click', function() {
    for (let i = 0; i < sextasFeiras.length; i += 1) {
      if (sextasFeiras[i].innerHTML !== botaoTexto) {
        sextasFeiras[i].innerHTML = botaoTexto;
      } else {
        sextasFeiras[i].innerHTML = arraySextas[i];
      }
      console.log(sextasFeiras);
    }
  })
};

trocaTextoDoBtnSextaFeira(sextas);

function efeitoZoomIn() {
  let todosOsDias = document.querySelector('#days');
  todosOsDias.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

efeitoZoomIn();

function efeitoZoomOut() {
  let todosOsDias = document.querySelector('#days');
  todosOsDias.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

efeitoZoomOut();

function insereTarefa(tarefa) {
  let posicaoDaTarefa = document.querySelector('.my-tasks');
  let elementoTarefa = document.createElement('span');
  elementoTarefa.innerHTML = tarefa;
  posicaoDaTarefa.appendChild(elementoTarefa);
};

insereTarefa('Novo projeto:');

function insereCorTarefa(cor) {
  let posicaoDaLegenda = document.querySelector('.my-tasks');
  let elementoLegenda = document.createElement('div');
  elementoLegenda.className = 'task';
  elementoLegenda.style.backgroundColor = cor;
  posicaoDaLegenda.appendChild(elementoLegenda);
};

insereCorTarefa('blue');

function selecionaTarefa() {
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let tarefa = document.querySelector('.task');
  tarefa.addEventListener('click', function(event) {
      if (tarefaSelecionada.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
  });
};

selecionaTarefa();

function marcaDiaTarefa() {
  let tarefaSelecionada = document.getElementsByClassName('task selected');
  let todosOsDias = document.querySelector('#days');
  let tarefa = document.querySelector('.task');
  let corDaTarefa = tarefa.style.backgroundColor;
  todosOsDias.addEventListener('click', function(event) {
    let eventoCor = event.target.style.color;
    if (tarefaSelecionada.length > 0 && eventoCor !== corDaTarefa) {
      console.log(tarefaSelecionada);
      let cor = tarefaSelecionada[0].style.backgroundColor;
      event.target.style.color = cor;
    } else if (eventoCor === corDaTarefa && tarefaSelecionada.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

marcaDiaTarefa();