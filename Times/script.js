function meuTime() {
    //.trim() - serve para remover espaços que nao deveriam ter
    const time = document.getElementById("times").value.trim().toLowerCase();
    const mensagem = document.querySelector(".mensagem");

    if(time === "corinthians"){
        mensagem.style.backgroundColor = 'black';
        mensagem.style.color = 'white';
        mensagem.innerText = "Salve o Corinthians!";
    }else if (time==="palmeiras"){
        mensagem.style.backgroundColor = 'green';
        mensagem.style.color = 'white';
        mensagem.innerText = "Salve o alviverde imponente!";
    }else if(time==="são Paulo"){
        mensagem.style.backgroundColor = 'white';
        mensagem.style.color = 'black';
        mensagem.innerText = "Agora quem da a bola é o Santos!";
    }else if(time==="santos"){
        mensagem.style.backgroundColor = 'black';
        mensagem.style.color = 'red';
        mensagem.innerText = "Salve o tricolor paulista!";
    }
}

