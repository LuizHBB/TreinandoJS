/*
    Ele ta craindo meio que um vetor para poder coletar info do checkbox
*/ 
document.addEventListener("DOMContentLoaded", function () {
    const produtos = [
        { id: "abacaxi", preco: 4, inputQtd: "p1_quantidade" },
        { id: "delicias", preco: 3, inputQtd: "p2_quantidade" },
        { id: "bombons", preco: 5, inputQtd: "p3_quantidade" }
    ];

    //variaveis  que serao usadas
    const botaoVender = document.querySelector(".botoes .botao[type='submit']");
    const botaoConfirmar = document.querySelector("#resumo .botao");
    const resumoVenda = document.querySelector("#resumo");
    const confirmacaoVenda = document.querySelector(".confirmacao");
    const spanProdutos = document.querySelector(".venda-produtos");
    const spanValor = document.querySelector(".valor-vendas");

    // tirar mensagem de confirmação e botão confirmar no início
    botaoConfirmar.style.display = "none";
    confirmacaoVenda.style.display = "none";

    botaoVender.addEventListener("click", function (event) {
        event.preventDefault(); // ele nao carrega a pagina de uma vez, como se fosse uma prev antes de enviar

        let resumoTexto = "<strong>Resumo da venda:</strong><br>";
        let totalCompra = 0;
        let itensResumo = "";
        let itensSelecionados = 0;

        produtos.forEach(produto => {
            const checkbox = document.querySelector(`input[name='${produto.id}']`);
            const quantidadeInput = document.getElementById(produto.inputQtd);
            const quantidade = parseInt(quantidadeInput.value) || 0;

            if (checkbox.checked && quantidade > 0) {
                let subtotal = quantidade * produto.preco;
                resumoTexto += `- ${quantidade}x ${checkbox.nextSibling.textContent.trim()} (Total: ${subtotal} Galeões)<br>`;
                totalCompra += subtotal;
                itensResumo += `${quantidade}x ${checkbox.nextSibling.textContent.trim()}, `;
                itensSelecionados++;
            }
        });

        if (totalCompra === 0) {
            resumoTexto = "<strong>Nenhum item selecionado!</strong>";
            botaoConfirmar.style.display = "none"; // Esconder botão confirmar se nada for selecionado
        } else {
            resumoTexto += `<br><strong>Valor Total:</strong> ${totalCompra} Galeões`;
            botaoConfirmar.style.display = "block"; // Mostrar botão confirmar
        }

        resumoVenda.querySelector("h3").innerHTML = resumoTexto;
    });

    botaoConfirmar.addEventListener("click", function () {
        let totalCompra = 0;
        let itensResumo = "";

        produtos.forEach(produto => {
            const checkbox = document.querySelector(`input[name='${produto.id}']`);
            const quantidadeInput = document.getElementById(produto.inputQtd);
            const quantidade = parseInt(quantidadeInput.value) || 0;

            if (checkbox.checked && quantidade > 0) {
                totalCompra += quantidade * produto.preco;
                itensResumo += `${quantidade}x ${checkbox.nextSibling.textContent.trim()}, `;
            }
        });

        let valorFinal = totalCompra;
        let mensagemFinal = "";
        let ajuste = 0;

        if (totalCompra < 10) {
            ajuste = totalCompra * 0.05; // 5% de taxa
            valorFinal += ajuste;
            mensagemFinal = `Obrigado por sua compra na Dedos de Mel, bruxinho. Após sua compra de <strong>${itensResumo.slice(0, -2)}</strong>, o valor final ficou em <strong>${valorFinal.toFixed(2)}</strong> Galeões, com um acréscimo de <strong>${ajuste.toFixed(2)}</strong> Galeões de taxa de maquininha. Volte sempre!`;
            confirmacaoVenda.style.color = "darkred"; // Rosa escuro
            confirmacaoVenda.style.fontStyle = "italic";
        } else if (totalCompra > 10) {
            ajuste = totalCompra * 0.03; // 3% de desconto
            valorFinal -= ajuste;
            mensagemFinal = `Obrigado por sua compra na Dedos de Mel, bruxinho. Após sua compra de <strong>${itensResumo.slice(0, -2)}</strong>, o valor final ficou em <strong>${valorFinal.toFixed(2)}</strong> Galeões, com um desconto de <strong>${ajuste.toFixed(2)}</strong> Galeões. Volte sempre!`;
            confirmacaoVenda.style.color = "green"; // Verde
            confirmacaoVenda.style.fontStyle = "normal";
        } else {
            mensagemFinal = `Obrigado por sua compra, bruxinho! Volte sempre e aproveite os seus <strong>${itensResumo.slice(0, -2)}</strong>.`;
            confirmacaoVenda.style.color = "black"; // Cor padrão
            confirmacaoVenda.style.fontStyle = "normal";
        }

        confirmacaoVenda.style.display = "block";
        confirmacaoVenda.innerHTML = `<h3>Venda finalizada!</h3><p>${mensagemFinal}</p>`;

        botaoConfirmar.style.display = "none"; // Esconder botão após confirmação
    });
});
