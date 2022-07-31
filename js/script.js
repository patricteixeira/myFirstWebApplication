function revelarResposta() {
  var resposta = document.querySelector("#resposta");
  resposta.classList.toggle("pergunta-resposta");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML = "";

  var cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "animate__animated", "animate__flipInX");
  cardDiv.innerHTML = `
  <div class="card-topo central">
    <h1 class="card-titulo">Defina: ${proximaPergunta.title}?</h1>
   </div>

   <div id="resposta" class="card-conteudo pergunta-resposta">
     <p>
       ${proximaPergunta.description}
      </p>
   </div>
  `;
  pergunta.appendChild(cardDiv);
}

function buscarCard() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarCard);
