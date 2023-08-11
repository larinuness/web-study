const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e34b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
    


}
//pega o que ta marcado com a classe '.tag'
document.querySelectorAll('.tag').forEach(elemento => {
    //pega o nome da tag e deixa em minusculo
    const tagName = elemento.tagName.toLowerCase()
    //aplicar uma cor na borda
    elemento.style.borderColor = colors.get(tagName)
    
    //se não tiver marcado como no label cai aqui
    if(!elemento.classList.contains('noLabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName;
        //add antes do primeiro filho
        elemento.insertBefore(label, elemento.childNodes[0]);
    }
})