export default class Model{
    constructor()
    {
        this.view=null;
        this.todos=[];
    }

    setView(view)
    {
        this.view=view;
    }

    getTodos()
    {
        return this.todos;
    }

    addTodo(title, descripcion)
    {
        const todo={
            id:0, 
            title, 
            descripcion, 
            completed: false,
        }
        this.todos.push(todo);
        console.log(this.todos);


        return {...todo};
    }
}