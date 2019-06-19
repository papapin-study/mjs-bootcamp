todos = [{
    text: 'Todo1',
    complited: true
}, {
    text: 'Todo3',
    complited: false
}, {
    text: 'Todo5',
    complited: false
}, {
    text: 'Todo2',
    complited: true
}, {
    text: 'Todo4',
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

// deleteTodo(todos, 'Todo3')

// console.log(todos);
// console.log('---------');


const getThingsToDo = ( todos ) => {

    filteredTodos = todos.filter( (todo) => {

       // if (todo.complited === false) { return todo  } 
       //or
       return !todo.complited
        
    }) 

    return filteredTodos;
}


// console.log(getThingsToDo(todos))
// console.log('---------');


const sortTodos = (todos) => {
    todos.sort( (a, b) => {
        if ( a.complited === true  ) {
            return -1
        } else if ( b.complited === true ) {
            return 1
        } else {
            return 0
        }
    })
}



sortTodos(todos)
console.log(todos);

