import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        // clone current array
        const newTodoList = [...todoList];

        console.log(todo, idx);
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        // newTodoList = newTodo;

        // update todo List
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderedTodoList = todoList.filter(todo =>filteredStatus === 'all' || filteredStatus === todo.status );

    return (
        <div>
            <h3> Todo List </h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <button onClick={handleShowAllClick}> Show all </button>
            <button onClick={handleShowCompletedClick}> Show Completed </button>
            {/* <button onClick={handleShowNewClick}> Show new </button> */}
        </div>
    );

  
}

export default TodoFeature;