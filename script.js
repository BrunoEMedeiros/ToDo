var listaToDo = [];
function handleToDo() {
    var input = document.querySelector('#tarefa');
    if (input.value !== "") {
        var lista = document.querySelector('ul');
        var li = document.createElement('li');
        var div = document.createElement('div');
        var btn_edit = document.createElement('button');
        btn_edit.setAttribute('class', 'botoes');
        var icon_edit = document.createElement('span');
        icon_edit.setAttribute('class', 'material-symbols-outlined');
        icon_edit.textContent = 'Edit';
        btn_edit.appendChild(icon_edit);
        var btn_delete = document.createElement('button');
        btn_delete.setAttribute('class', 'botoes');
        var icon_delete = document.createElement('span');
        icon_delete.setAttribute('class', 'material-symbols-outlined');
        icon_delete.textContent = 'delete';
        btn_delete.appendChild(icon_delete);
        div.appendChild(btn_edit);
        div.appendChild(btn_delete);
        var card = document.createElement('article');
        var texto = document.createTextNode(input.value);
        li.appendChild(card);
        card.appendChild(texto);
        card.appendChild(div);
        lista.appendChild(li);
        listaToDo.push(input.value);
    }
    input.value = "";
    console.log(listaToDo);
}
