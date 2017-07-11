import { connect } from 'react-redux';
import TodoList from '../todo_list';
import allTodos from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});
