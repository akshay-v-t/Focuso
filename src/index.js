import "./style.css";



const greeting = document.createElement('h1');
greeting.textContent = "Focuso";
greeting.style.color = '#ffff';
greeting.style.fontFamily = 'Poppins'
document.body.append(greeting)




function addTaskModal(){
    const modalContainer = document.querySelector('.modal-container');
    const closeBtn = document.querySelector('.close-btn');
    const addTaskBtn = document.querySelector('#addTask')
    closeBtn.addEventListener('click', ()=>{
    modalContainer.classList.remove('open')
    })

    addTaskBtn.addEventListener('click', ()=>{
        modalContainer.classList.add('open')
    })
    modalContainer.addEventListener('click', (e)=>{
        if(e.target===modalContainer){
            modalContainer.classList.remove('open')
        }
    })




}

addTaskModal()