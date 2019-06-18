todos = [{
    title: 'Todo1',
    body: 'Body of Note1'
}, {
    title: 'Todo2',
    body: 'Body of Note2'
}, {
    title: 'Todo3',
    body: 'Body of Note3'
}, {
    title: 'Todo4',
    body: 'Body of Note4'
}];

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