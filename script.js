const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value) 
    
    input.value="";

    mostrarTarefas();
}

function mostrarTarefas() {
    let novaLi = "";

    minhaListaDeItens.forEach((tarefa) => {
        novaLi += `
            <li class="task">
                <img src="./img/check.png" alt="check-na-tarefa">
                <p> ${tarefa} </p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo">
            </li>
        `;
    });

    listaCompleta.innerHTML = novaLi;

}

button.addEventListener("click", adicionarNovaTarefa);