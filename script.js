const input = document.querySelector('#input');
const form= document.querySelector('#form');
const list = document.querySelector('#list');
const template = document.querySelector('#template');
form.addEventListener('submit',function(event){
    event.preventDefault()
    const text = input.value
    if (text.trim() === ''){
        alert('ведите текст')
        return
    }
    const clone = template.content.cloneNode(true)
    const texthtml = clone.querySelector('#text')
    const deleteBtn = clone.querySelector('#delete')
    const li = clone.querySelector('#li')
    deleteBtn.addEventListener('click',function(){
        li.remove()
    })   
    texthtml.innerHTML = text 
    list.append(clone)
    input.value = ''
    
})


