import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id
  });
}

export function reloadTodos() {
    dispatcher.dispatch({
        type: "FETCH_TODOS"
    });
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_TODOS",
            todos: [
                {
                    id: 1234567,
                    text: "Go Shopping Again!",
                    complete: false
                },
                {
                    id: 1234568,
                    text: "Sleep At The Yard!",
                    complete: true
                },
                
            ]
        });
    }, 1000);
}