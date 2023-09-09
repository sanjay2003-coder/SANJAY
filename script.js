let btn=document.getElementById('add')
let todoList=document.getElementById('todoList')
let input=document.getElementById('input')

let todos=[];
window.onload= ()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || [ ]
    //console.log(localStorage.getItem('todos'))
    console.log(todos )
    todos.forEach(todo=>addtodo(todo))
}
btn.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))//'todos'->key,todos->value 
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
    let para= document.createElement('p')
    para.innerHTML=todo
    todoList.appendChild(para)
   
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })
}
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1)
      todos.splice(index,1)
      localStorage.setItem('todos',JSON.stringify(todos))  
}