// export const addTodoAction = {
//     type: 'todoList/addTodo', /*Tên hành động đặt giống cái initValue field bên Reducer */
//     payload: {id: 5, name: 'Learn Football', completed: false, priority:'Medium'}

// }

// Action creators => function

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filter/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filter/prioritiesFilterChange",
    payload: priorities,
  };
};