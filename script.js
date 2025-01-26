const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
    if (input.value.trim() === "") {
        alert("Digite uma tarefa antes de adicionar.");
        return;
    }

    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    });

    input.value = ""; 
    
    mostrarTarefas();
    
}

function mostrarTarefas() {
    let novaLi = "";

    minhaListaDeItens.forEach((item, index) => {
        novaLi += `
            <li class="task ${item.concluida ? "done" : ""}">
                <img src="./imagens/check.png" alt="check-na-tarefa" onclick="concluirTarefa(${index})">
                <p> ${item.tarefa} </p>
                <img src="./imagens/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${index})">
            </li>
        `;
    });

    listaCompleta.innerHTML = novaLi;
    localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
}

function concluirTarefa(index) {
    minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;
    
    mostrarTarefas();
}

function deletarItem(index) {
    minhaListaDeItens.splice(index, 1);
    
    mostrarTarefas();
}

function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem("lista");

    minhaListaDeItens = tarefasLocalStorage ? JSON.parse(tarefasLocalStorage) || [] : [];

    mostrarTarefas();
}

recarregarTarefas();

button.addEventListener("click", adicionarNovaTarefa);