import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import { Checkbox, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { removeTask, selectTask } from '../../redux/taskSlice';
import { ITask } from './../../redux/taskSlice';

interface ITodoItemProps {
    todoItem: ITask;
}

const TodoItem = ({ todoItem }: ITodoItemProps) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(removeTask(todoItem));
    };

    const handleCheck = () => {
        dispatch(selectTask(todoItem));
    };

    return (
        <div className='todo-item'>
            <Checkbox
                checked={todoItem.selected}
                onChange={handleCheck}
                sx={{
                    color: '#FEB567',
                    '&.Mui-checked': {
                        color: '#FEB567',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                }}
            />
            <span className='checkbox-label'>{todoItem.name}</span>
            <IconButton
                onClick={handleDeleteClick}
                aria-label='delete'
                style={{
                    marginLeft: 'auto',
                    marginRight: '5px',
                }}>
                <CloseIcon
                    style={{
                        color: '#FC8F1A',
                    }}
                />
            </IconButton>
        </div>
    );
};

TodoItem.propTypes = {};

export default TodoItem;
