todos = [{
    text: 'Todo1',
    complited: true
}, {
    text: 'Todo2',
    complited: false
}, {
    text: 'Todo3',
    complited: false
}, {
    text: 'Todo4',
    complited: true
}, {
    text: 'Todo5',
    complited: true
    }

];

console.log(todos)
console.log('---------');
const deleteTodo = (todos, todoTitle) => {
    let index = todos.findIndex( ( todo, index ) => {
        return todo.title === todoTitle;
    })

    todos.splice(index, 1);
}

deleteTodo(todos, 'Todo3')

console.log(todos);
console.log('---------');


const getThingsToDo = ( todos ) => {

    filteredTodos = todos.filter( (todo) => {

       // if (todo.complited === false) { return todo  } 
       //or
       return !todo.complited
        
    }) 

    return filteredTodos;
}




console.log(getThingsToDo(todos))