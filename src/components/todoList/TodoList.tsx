import React from 'react';
import { useSelector } from 'react-redux';
import { currentTaskList } from '../../redux/taskSlice';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.scss';

const TodoList = () => {
    const taskList = useSelector(currentTaskList);
    return (
        <div className='todolist-wrapper'>
            {taskList.map((task) => (
                <TodoItem todoItem={task} key={task.id} />
            ))}
        </div>
    );
};

TodoList.propTypes = {};

export default TodoList;
