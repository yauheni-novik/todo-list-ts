import React from 'react';
import './todoFormFooter.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TodoFilterLink from '../todoFilterLink/todoFilterLink';
import { TaskFilterEnum } from '../../redux/taskSlice';

const TodoFormFooter = () => {
    const taskList = useSelector((state: RootState) => state.tasks.taskList);
    const completedTasksAmount = taskList.filter(
        (item) => item.selected
    ).length;
    console.log(completedTasksAmount);
    return (
        <div className='footer-wrapper'>
            <div className='tasks-info'>
                {completedTasksAmount}/{taskList.length} left
            </div>
            <div className='tasks-filters-wrapper'>
                <TodoFilterLink
                    filter={TaskFilterEnum.ALL_TASKS}
                    filterTitle={'All'}
                />
                <TodoFilterLink
                    filter={TaskFilterEnum.ACTIVE_TASKS}
                    filterTitle={'Active'}
                />
                <TodoFilterLink
                    filter={TaskFilterEnum.COMPLETED_TASKS}
                    filterTitle={'Completed'}
                />
            </div>
        </div>
    );
};

export default TodoFormFooter;
