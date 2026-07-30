const formulario = document.getElementById("formAluno");
const lista = document.getElementById("listaAlunos");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${nome}</td>
        <td>${idade}</td>
        <td>
            <button class="btnExcluir">Excluir</button>
        </td>
    `;

    lista.appendChild(linha);

    linha.querySelector(".btnExcluir").addEventListener("click", function(){
        linha.remove();
    });

    formulario.reset();

    document.getElementById("nome").focus();

});