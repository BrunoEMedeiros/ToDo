
    let listaToDo: string[] = [];

    function openEditModal(){
        let modal: HTMLDialogElement | null 
        = document.querySelector('#editar')!;

        modal?.showModal();
    }

    function closeEditModal(){
        let modal: HTMLDialogElement | null 
        = document.querySelector('#editar')!;

        modal?.close()
    }

    function openDeleteModal(){
        let modal: HTMLDialogElement | null 
        = document.querySelector('#excluir')!;
        
        modal?.showModal();
    }

    function closeDeleteModal(){
        let modal: HTMLDialogElement | null 
        = document.querySelector('#excluir')!;

        modal?.close()
    }

    function handleToDo(){
        let input: HTMLInputElement | null = 
        document.querySelector('#tarefa')!;

        if(input.value !== ""){
            let lista: HTMLUListElement | null =
            document.querySelector('ul')!;

            let li: HTMLLIElement = 
            document.createElement('li');

            let div: HTMLDivElement =
            document.createElement('div');

            let btn_edit: HTMLButtonElement = 
            document.createElement('button');
            btn_edit.setAttribute('class','botoes');

            let icon_edit: HTMLSpanElement =
            document.createElement('span');
            icon_edit.setAttribute('class','material-symbols-outlined');
            icon_edit.textContent = 'Edit';
            icon_edit.addEventListener('click', openEditModal)
            
            btn_edit.appendChild(icon_edit);
            
            let btn_delete: HTMLButtonElement = 
            document.createElement('button');
            btn_delete.setAttribute('class','botoes');

            let icon_delete: HTMLSpanElement =
            document.createElement('span');
            icon_delete.setAttribute('class','material-symbols-outlined');
            icon_delete.textContent = 'delete';
            icon_delete.addEventListener('click', openDeleteModal)
            
            btn_delete.appendChild(icon_delete);

            div.appendChild(btn_edit);
            div.appendChild(btn_delete);

            let card: HTMLElement =
            document.createElement('article');

            let texto = 
            document.createTextNode(input.value);

            li.appendChild(card);
            card.appendChild(texto);
            card.appendChild(div);

            lista.appendChild(li);

            listaToDo.push(input.value);
        }

        input.value = "";
        console.log(listaToDo)
    }