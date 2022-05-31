const taskContainer = document.getElementById('task_container') //container pra add as tasks

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_task')) || []
const setLocalStorage = (dbTask) => localStorage.setItem('db_task', JSON.stringify(dbTask))

//read
const readTask = getLocalStorage()

//create
const createTask = (task) => { //task = o valor pego do input
    const dbTask = getLocalStorage() //definindo dbTask
    dbTask.push(task) //a 'task' sera adicionada ao dbTask
    setLocalStorage(dbTask) //mandando o dbTask pro localStorage
} 


const saveTask = () => { //botao de clique
    const taskText = {
        task: document.getElementById('input-task').value
    } //pegando o value do input

    createTask(taskText) //mandando o value do input pra function createTask

    location.reload() //f5 pra a task renderizar na tela
}


const createRow = (task) => {// task = o valor pego do dbTask que são os valores do localStorage
        const taskEl = document.createElement('div')
        taskEl.classList.add('taskEl')
        taskEl.innerHTML += `task ${task.task}`//1a 'task' = parametro ====== 2a 'task' = propriedade do objeto
        
        taskContainer.appendChild(taskEl)
}


const updateTable = () => {
    dbTask = readTask // readTask recebe o getLocalStorage
    dbTask.forEach(createRow) //forEach pra pega os valores e colocar os valores no createRow
}


updateTable()

document.getElementById('add').addEventListener('click', saveTask)

