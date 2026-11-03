/* Progresso dos tutoriais guiados, guardado no navegador do cursista (localStorage).
   Cada tutorial é identificado pela pasta e pelo nome do arquivo: "t3/ditado-tutorial".
   - No tutorial: o botão [data-concluir] marca a página como concluída antes de voltar à lista.
   - Na lista: window.tutoriais.concluidos() devolve o que já foi concluído. */
(function(){
  var CHAVE = "cursoia:tutoriais-concluidos";

  function idDe(caminho){
    var partes = caminho.replace(/\.html$/, "").split("/").filter(Boolean);
    return partes.slice(-2).join("/");
  }
  function concluidos(){
    try { return JSON.parse(localStorage.getItem(CHAVE)) || {}; } catch(e){ return {}; }
  }
  function marcar(id){
    var lista = concluidos();
    lista[id] = new Date().toISOString();
    try { localStorage.setItem(CHAVE, JSON.stringify(lista)); } catch(e){}
  }

  window.tutoriais = { idDe: idDe, concluidos: concluidos, marcar: marcar };

  document.addEventListener("click", function(e){
    var bt = e.target.closest && e.target.closest("[data-concluir]");
    if (bt) marcar(idDe(location.pathname));
  });
})();
