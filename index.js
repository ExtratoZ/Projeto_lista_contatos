
const contatos = [];
const numeros = [];
let linhas = '';


addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha () {
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');

    if (contatos.includes(nome.value)) {
        alert(`O contato ${nome.value} já foi cadastrado anteriormente.`)
    } else {
        contatos.push(nome.value);
        numeros.push(numero.value);

        let linha = '<tr>';

        linha += `<td>${nome.value}</td>`;
        linha += `<td>${numero.value}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    nome.value = '';
    numero.value = '';
    
}

function atualizaTabela () {
    const bodyT = document.querySelector('tbody');

    bodyT.innerHTML = linhas;
}

const maskPhoneNumber = (value) => {
    if (!value) return ''

    return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(value[5] != 9 ? /(\d{4})(\d)/ : /(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}

const applyPhoneNumberMask = (input) => {
    input.value = maskPhoneNumber(input.value)
}