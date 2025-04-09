function mostrarMensagem() {
    alert("Em breve, mais novidades no nosso site!");
  }
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
  });