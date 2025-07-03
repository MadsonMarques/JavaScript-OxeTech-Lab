let listaDeRacas = []

function iniciarAplicacao() {
  buscarRacasDaAPI()
  configurarEventosDeBusca()
}

function buscarRacasDaAPI() {
  fetch('https://api.thedogapi.com/v1/breeds')
    .then(receberRespostaAPI)
    .then(salvarListaDeRacas)
}

function receberRespostaAPI(resposta) {
  return resposta.json()
}

function salvarListaDeRacas(dados) {
  listaDeRacas = dados
}

function configurarEventosDeBusca() {
  const input = document.getElementById('busca')
  input.addEventListener('input', tratarInputBusca)
  input.addEventListener('keydown', tratarTeclaPressionada)
}

function tratarInputBusca(evento) {
  const textoBusca = evento.target.value.toLowerCase()
  const sugestoes = filtrarRacas(textoBusca)
  mostrarSugestoes(sugestoes)
}

function tratarTeclaPressionada(evento) {
  if (evento.key === 'Enter') {
    buscarRacaPorNome(evento.target.value.toLowerCase())
  }
}

function filtrarRacas(texto) {
  return listaDeRacas.filter(verificarNomeContemTexto)

  function verificarNomeContemTexto(raca) {
    return raca.name.toLowerCase().includes(texto)
  }
}

function mostrarSugestoes(racas) {
  const areaSugestoes = document.getElementById('sugestoes')
  areaSugestoes.innerHTML = ''

  let limite = Math.min(racas.length, 10)

  for (let i = 0; i < limite; i++) {
    let item = document.createElement('div')
    item.textContent = racas[i].name
    item.onclick = function clicarItem() {
      selecionarRaca(racas[i])
    }
    areaSugestoes.appendChild(item)
  }
}

function buscarRacaPorNome(nomeDigitado) {
  const racaEncontrada = listaDeRacas.find(verificarNomeIgual)

  function verificarNomeIgual(raca) {
    return raca.name.toLowerCase() === nomeDigitado
  }

  document.getElementById('sugestoes').innerHTML = ''

  if (racaEncontrada) {
    exibirDetalhesDaRaca(racaEncontrada)
  } else {
    document.getElementById('detalhes').innerHTML = '<p class="erro">Raça não encontrada.</p>'
  }
}

function selecionarRaca(raca) {
  document.getElementById('busca').value = raca.name
  document.getElementById('sugestoes').innerHTML = ''
  exibirDetalhesDaRaca(raca)
}

function exibirDetalhesDaRaca(raca) {
  const area = document.getElementById('detalhes')
  area.innerHTML = ''

  const nome = raca.name
  const origem = raca.origin || 'Não informada'
  const grupo = raca.breed_group || 'Indefinido'
  const vida = raca.life_span || '---'

  const imagem = document.createElement('img')
  const titulo = document.createElement('h3')
  const origemTexto = document.createElement('p')
  const grupoTexto = document.createElement('p')
  const vidaTexto = document.createElement('p')

  titulo.textContent = nome
  origemTexto.textContent = 'Origem: ' + origem
  grupoTexto.textContent = 'Grupo: ' + grupo
  vidaTexto.textContent = 'Expectativa de vida: ' + vida

  if (raca.reference_image_id) {
    const url = 'https://api.thedogapi.com/v1/images/' + raca.reference_image_id
    fetch(url)
      .then(converterJSONImagem)
      .then(function mostrarImagem(dados) {
        imagem.src = dados.url
        imagem.alt = nome
        montarDetalhesNaTela(area, imagem, titulo, origemTexto, grupoTexto, vidaTexto)
      })
      .catch(function tratarErroImagem() {
        imagem.src = 'https://via.placeholder.com/250x200?text=Sem+imagem'
        montarDetalhesNaTela(area, imagem, titulo, origemTexto, grupoTexto, vidaTexto)
      })
  } else {
    imagem.src = 'https://via.placeholder.com/250x200?text=Sem+imagem'
    montarDetalhesNaTela(area, imagem, titulo, origemTexto, grupoTexto, vidaTexto)
  }
}

function converterJSONImagem(resposta) {
  return resposta.json()
}

function montarDetalhesNaTela(container, imagem, titulo, origem, grupo, vida) {
  container.appendChild(imagem)
  container.appendChild(titulo)
  container.appendChild(origem)
  container.appendChild(grupo)
  container.appendChild(vida)
}

window.onload = iniciarAplicacao