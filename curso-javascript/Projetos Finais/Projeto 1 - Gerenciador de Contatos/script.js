let contatos = [];

  window.onload = iniciar;

  function iniciar() {
    contatos = carregarContatosDoStorage();
    mostrarTodosOsContatos();
    document.getElementById('btn-adicionar').addEventListener('click', adicionarContato);
  }

  function adicionarContato() {
    const nome = document.getElementById('nome').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '' || numero === '') {
      alert('Por favor, preencha nome e número.');
      return;
    }

    const novoContato = {
      id: Date.now(),
      nome: nome,
      numero: numero,
      email: email
    };

    contatos.push(novoContato);
    salvarContatosNoStorage(contatos);
    mostrarContatoNaTela(novoContato);
    limparCampos();
  }

  function mostrarContatoNaTela(contato) {
    const lista = document.getElementById('lista-contatos');

    const div = document.createElement('div');
    div.className = 'contato';

    const h3 = document.createElement('h3');
    h3.textContent = contato.nome;

    const pNumero = document.createElement('p');
    pNumero.textContent = contato.numero;

    const pEmail = document.createElement('p');
    pEmail.textContent = contato.email;

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.onclick = function () {
      document.getElementById('nome').value = contato.nome;
      document.getElementById('numero').value = contato.numero;
      document.getElementById('email').value = contato.email;
      removerContato(contato.id, div);
    };

    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.className = 'remover';
    btnRemover.onclick = function () {
      removerContato(contato.id, div);
    };

    div.appendChild(h3);
    div.appendChild(pNumero);
    div.appendChild(pEmail);
    div.appendChild(btnEditar);
    div.appendChild(btnRemover);

    lista.appendChild(div);
  }

  function mostrarTodosOsContatos() {
    for (let i = 0; i < contatos.length; i++) {
      mostrarContatoNaTela(contatos[i]);
    }
  }

  function removerContato(id, elementoHtml) {
    contatos = contatos.filter(function (c) {
      return c.id !== id;
    });
    salvarContatosNoStorage(contatos);
    elementoHtml.remove();
  }

  function salvarContatosNoStorage(lista) {
    localStorage.setItem('contatos', JSON.stringify(lista));
  }

  function carregarContatosDoStorage() {
    const dados = localStorage.getItem('contatos');
    if (dados) {
      return JSON.parse(dados);
    } else {
      return [];
    }
  }

  function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('numero').value = '';
    document.getElementById('email').value = '';
  }
