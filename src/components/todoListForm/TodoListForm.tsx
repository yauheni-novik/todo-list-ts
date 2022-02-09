import React, { ChangeEvent, FormEvent, useState } from 'react';
import './TodoListForm.scss';
import { useDispatch } from 'react-redux';
import { saveTask } from '../../redux/taskSlice';
import TodoList from '../todoList/TodoList';
import TodoFormFooter from '../todoFormFooter/todoFormFooter';

const TodoListForm = () => {
    const [task, setTask] = useState('');

    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(
            saveTask({
                id: Date.now(),
                name: task,
                selected: false,
            })
        );
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };
    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();
        addTask();
        setTask('');
    };
    return (
        <form className='task-form' onSubmit={handleSumbit}>
            <div className='form-header'>
                <span>to do list</span>
            </div>
            <TodoList />
            <input
                className='add-task-input'
                type='text'
                placeholder='Add a new Task'
                value={task}
                onChange={handleChange}
            />
            <TodoFormFooter />
        </form>
    );
};

export default TodoListForm;
