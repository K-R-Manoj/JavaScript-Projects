const addList  = document.querySelector('.add-todo');
const lists = document.querySelector('.lists');
const search = document.querySelector('.search input');



// adding new list to the to do list
const addNewList = (newTodo) =>{
    lists.innerHTML += 
    `                                                                                   
        <div class="list">
            <p>${newTodo}</p>
        </div>
    ` 
}
//

addList.addEventListener('submit',(e)=>{
    e.preventDefault();
    const addValue = addList.adding.value;
    addNewList(addValue);
    addList.reset();
});


// deleting the lists
lists.addEventListener('click',(e)=>{
        e.target.parentElement.remove();
})



//searching

const searchList = (term) =>
{
    Array.from(lists.children).filter((tooo)=>{return !tooo.textContent.includes(term)}).forEach((tooo)=>{ tooo.classList.add('filtred')})   
    Array.from(lists.children).filter((tooo)=>{return tooo.textContent.includes(term)}).forEach((tooo)=>{ tooo.classList.remove('filtred')})   
}



search.addEventListener('keyup',()=>{
    const term = search.value.trim();
    searchList(term);
});