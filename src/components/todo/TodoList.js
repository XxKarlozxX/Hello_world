import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { getTodosByVisibilityFilter } from '../../redux/selector';

const TodoList = ({ todos }) => (
    <ul className="todo-list">
        {todos && todos.length
            ? todos.map( (todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
            })
            : 'No Todos, yay!'
        }
    </ul>
);

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
};

export default connect(mapStateToProps)(TodoList);