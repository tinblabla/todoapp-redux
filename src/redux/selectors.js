import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritiesSelector = (state) => state.filter.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }

      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
