
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
            btn_edit.textContent = 'Editar';

            let btn_delete: HTMLButtonElement = 
            document.createElement('button');
            btn_delete.setAttribute('class','botoes');
            btn_delete.textContent = 'Excluir'

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
        }

    }