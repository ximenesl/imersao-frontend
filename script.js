// Busca no documento o elemento com id "btn-print"
document.getElementById("btn-print")
  // Adiciona um evento para quando o botão for clicado
  .addEventListener(
    "click",               // Tipo de evento que queremos: "click" (clique do mouse)
    () => {                // Função anônima (arrow function) que será executada quando o botão for clicado
        window.print();    // Comando que abre a caixa de diálogo de impressão do navegador
    }                      // Fecha a função
  );                       // Fecha o addEventListener
