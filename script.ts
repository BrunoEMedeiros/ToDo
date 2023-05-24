
    function handleToDo(){
        let input: HTMLInputElement | null = 
        document.querySelector('#tarefa')!;

        if(input.value !== ""){
            let lista: HTMLUListElement | null =
            document.querySelector('ul')!;

            let li: HTMLLIElement = 
            document.createElement('li');

            let card: HTMLElement =
            document.createElement('article');

            let texto = 
            document.createTextNode(input.value);

            li.appendChild(card);
            card.appendChild(texto);

            lista.appendChild(li);
        }

    }