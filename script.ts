let listaTarefas: string[] = [];
let lista: HTMLUListElement | null =
document.querySelector('ul')!;

function addTarefa(){
    let tarefa: HTMLInputElement | null
    = document.querySelector('#tarefa');

    if(tarefa != null){
        listaTarefas.push(tarefa.value)
        carregarLista()
    }
}

function carregarLista(){
    console.clear()
    if(lista)
        lista.innerHTML = "";
    for(let i = 0; i < listaTarefas.length; i++){
        let li: HTMLLIElement = 
        document.createElement('li');

        let div: HTMLDivElement =
        document.createElement('div');

        //Criando botão de editar
        let btn_edit: HTMLButtonElement = 
        document.createElement('button');
        btn_edit.setAttribute('class','botoes');
        
        let icon_edit: HTMLSpanElement =
        document.createElement('span');
        icon_edit.setAttribute('class','material-symbols-outlined');
        icon_edit.addEventListener('click', () =>{
            abrirModal('editar');
        })
        icon_edit.textContent = 'Edit';
        btn_edit.appendChild(icon_edit);
        
        //Criando botão de deletar
        let btn_delete: HTMLButtonElement = 
        document.createElement('button');
        btn_delete.setAttribute('class','botoes');

        let icon_delete: HTMLSpanElement =
        document.createElement('span');
        icon_delete.setAttribute('class','material-symbols-outlined');
        icon_delete.addEventListener('click', () =>{
            abrirModal('excluir');
        })
        icon_delete.textContent = 'delete';
        btn_delete.appendChild(icon_delete);


        let fechar_edit_modal: HTMLButtonElement | null
        = document.querySelector('#fechar_editar')
        let fechar_delete_modal: HTMLButtonElement | null
        = document.querySelector('#fechar_excluir')

        fechar_edit_modal?.addEventListener('click', () =>{
            fecharModal('editar');
        })
        fechar_delete_modal?.addEventListener('click', () =>{
            fecharModal('excluir');
        })

        //Colando os botões na div de botões para
        //facilitar a edição
        div.appendChild(btn_edit);
        div.appendChild(btn_delete);

        //Criando div do card
        let card: HTMLElement =
        document.createElement('article');
        card.innerText = listaTarefas[i];

        li.appendChild(card);
        card.appendChild(div);
        lista?.appendChild(li);
    } 
}

function excluirTarefa(tarefa: string){
    listaTarefas = listaTarefas.filter(item => item !== tarefa)
    carregarLista()
}

function editarTarefa(tarefa: string, novo_valor: string){
    for(let i = 0; i < listaTarefas.length; i++){
        if(listaTarefas[i] == tarefa){
            listaTarefas[i] = novo_valor
        }
    }
    carregarLista() 
}

function abrirModal(tipo: string){
    let modal: HTMLDialogElement | null
    = document.querySelector(`#${tipo}`)

    modal?.showModal();
}

function fecharModal(tipo: string){
    let modal: HTMLDialogElement | null
    = document.querySelector(`#${tipo}`)

    modal?.close();
}