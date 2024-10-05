let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    amigo = amigo.toLowerCase();

    let listaAmigos = document.getElementById('lista-amigos');

    if (amigos.includes(amigo)) {
        alert('O nome inserido já esta incluído, por favor, insira um nome com sobrenome ou apelido do amigo');
        document.getElementById('nome-amigo').value = '';
        return;
    }

    amigos.push(amigo);

    if (amigo == '') {
        alert('por favor, insira um nome'); 
        return;
    }

    if (listaAmigos.innerHTML == '') {
        listaAmigos.innerHTML = listaAmigos.innerHTML + `${amigo}`
    }else {
        listaAmigos.innerHTML = listaAmigos.innerHTML + `, ${amigo}`;
    }
    document.getElementById('nome-amigo').value = '';

}

function sortear() {

    if (amigos.length <= 3 ) {
        alert('insira mais de 3 nomes para realizar o sorteio')
        return;
    }


    embaralhar(amigos);

    let listaSorteio = document.getElementById('lista-sorteio');


    for (let i =0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
    
}

function embaralhar(lista) {
    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);

        [lista[i - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[i - 1]];
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


