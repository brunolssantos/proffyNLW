//procurar o botão

document.querySelector("#add-time")
// quando clicar no botao
.addEventListener('click',cloneField);


//executar uma ação
function cloneField(){
    //duplicar os campos. que  campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); //boolean: true ou false
    
    //pegar os campos. Que campos?

    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo, limpar.
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = "";
    })

    fields[0].value = "";
    fields[1].value = "";


    // colocar na pagina. onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
