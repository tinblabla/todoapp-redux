const initState = {
    search: "",
    status: "All",
    priority: [],
};
const filtersReducer = (state = initState, action) => {
  /*
    >>> ACTION <<<<
    {
        type: 'todoList/addTodo',
        payload: { id: 2, name: "Learn Redux", completed: true, priority: "High" },

    } */
  console.log({ state, action });
  switch (action.type) {
    case "filter/searchFilterChange":
      return {
          ...state,
          search: action.payload,
        };
    case 'filter/statusFilterChange':
        return {
            ...state,
            status: action.payload,
        }
    case 'filter/prioritiesFilterChange':
        return {
            ...state,
            priorities: action.payload,
        }
    default:
      return state;
  }
};

export default filtersReducer;
