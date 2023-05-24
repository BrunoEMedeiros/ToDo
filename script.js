function handleToDo() {
    var input = document.querySelector('#tarefa');
    if (input.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var div = document.createElement('div');
        var btn_edit = document.createElement('button');
        btn_edit.setAttribute('class', 'botoes');
        btn_edit.textContent = 'Editar';
        var btn_delete = document.createElement('button');
        btn_delete.setAttribute('class', 'botoes');
        btn_delete.textContent = 'Excluir';
        div.appendChild(btn_edit);
        div.appendChild(btn_delete);
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div);
        lista.appendChild(li);
    }
}
