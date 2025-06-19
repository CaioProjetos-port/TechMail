document.getElementById("form-cadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  fetch("https://flask-backend-2wff.onrender.com/usuarios", { // depois troca esse URL pro backend real
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, email })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("mensagem").innerText = data.mensagem;
    document.getElementById("form-cadastro").reset();
  })
  .catch(err => {
    document.getElementById("mensagem").innerText = "Erro ao enviar.";
    console.error(err);
  });
});
