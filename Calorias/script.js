function Calcular() {
    // Utilizar o parseInt para converter para numero/inteiro
    // o " || 0 " usado no final é para evitar entradas vazias

    const qtdPaes = parseInt(document.getElementById('qtd_paes').value) || 0 ;
    const qtdBolacha = parseInt(document.getElementById('qtd_bolacha').value) || 0;
    const qtdAchocolatado = parseInt(document.getElementById('qtd_achocolatado').value) || 0 ;
    
    let calorias = (qtdPaes * 50) + (qtdBolacha * 80) + (qtdAchocolatado * 70);

    let mensagem = document.querySelector('.mensagem');

    if (calorias < 200) {
        mensagem.innerHTML = "<p>Parabéns, voce vai ficar em forma!</p>";
    }else if (calorias >=200 && calorias < 400){
        mensagem.innerHTML = "<p>Cuidado, vai ficar menos saudável!</p>";
    }else if (calorias > 400){
        mensagem.innerHTML = "<p>Alerta crítico de saúde!</p>";
    }
}