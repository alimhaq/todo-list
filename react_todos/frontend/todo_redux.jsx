import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import { receiveTodo, receiveTodos } from './actions/todo_actions.js';
import Root from './components/root.jsx';

const store = configureStore();
window.store = store;

window.allTodos = allTodos;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('content');
  ReactDOM.render(
    <Root store={store} /> , root
  );
});
