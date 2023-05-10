var form = document.getElementById("contact-form");

function handleSubmit(event) {
  event.preventDefault();
  var name = form.elements["Nome"].value;
  var email = form.elements["E-mail"].value;
  var mensagem = form.elements["Mensagem"].value;

  var resultado = "Nome:" + name + "\nE-mail" + email + "\nMensagem: " + mensagem;
  alert(resultado);
}

form.addEventListener("submit", handleSubmit);
