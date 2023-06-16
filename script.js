var listaTarefas = [];
var lista = document.querySelector('ul');
function addTarefa() {
    var tarefa = document.querySelector('#tarefa');
    if (tarefa != null) {
        listaTarefas.push(tarefa.value);
        carregarLista();
    }
}
function carregarLista() {
    console.clear();
    if (lista)
        lista.innerHTML = "";
    for (var i = 0; i < listaTarefas.length; i++) {
        var li = document.createElement('li');
        var div = document.createElement('div');
        //Criando botão de editar
        var btn_edit = document.createElement('button');
        btn_edit.setAttribute('class', 'botoes');
        var icon_edit = document.createElement('span');
        icon_edit.setAttribute('class', 'material-symbols-outlined');
        icon_edit.addEventListener('click', function () {
            abrirModal('editar');
        });
        icon_edit.textContent = 'Edit';
        btn_edit.appendChild(icon_edit);
        //Criando botão de deletar
        var btn_delete = document.createElement('button');
        btn_delete.setAttribute('class', 'botoes');
        var icon_delete = document.createElement('span');
        icon_delete.setAttribute('class', 'material-symbols-outlined');
        icon_delete.addEventListener('click', function () {
            abrirModal('excluir');
        });
        icon_delete.textContent = 'delete';
        btn_delete.appendChild(icon_delete);
        var fechar_edit_modal = document.querySelector('#fechar_editar');
        var fechar_delete_modal = document.querySelector('#fechar_excluir');
        fechar_edit_modal === null || fechar_edit_modal === void 0 ? void 0 : fechar_edit_modal.addEventListener('click', function () {
            fecharModal('editar');
        });
        fechar_delete_modal === null || fechar_delete_modal === void 0 ? void 0 : fechar_delete_modal.addEventListener('click', function () {
            fecharModal('excluir');
        });
        //Colando os botões na div de botões para
        //facilitar a edição
        div.appendChild(btn_edit);
        div.appendChild(btn_delete);
        //Criando div do card
        var card = document.createElement('article');
        card.innerText = listaTarefas[i];
        li.appendChild(card);
        card.appendChild(div);
        lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
    }
}
function excluirTarefa(tarefa) {
    listaTarefas = listaTarefas.filter(function (item) { return item !== tarefa; });
    carregarLista();
}
function editarTarefa(tarefa, novo_valor) {
    for (var i = 0; i < listaTarefas.length; i++) {
        if (listaTarefas[i] == tarefa) {
            listaTarefas[i] = novo_valor;
        }
    }
    carregarLista();
}
function abrirModal(tipo) {
    var modal = document.querySelector("#".concat(tipo));
    modal === null || modal === void 0 ? void 0 : modal.showModal();
}
function fecharModal(tipo) {
    var modal = document.querySelector("#".concat(tipo));
    modal === null || modal === void 0 ? void 0 : modal.close();
}
