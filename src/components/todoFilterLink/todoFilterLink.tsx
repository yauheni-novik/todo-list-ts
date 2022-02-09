import React from 'react';
import { RootState } from '../../redux/store';
import { TaskFilterEnum } from '../../redux/taskSlice';
import './todoFilterLink.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setTaskFilter } from '../../redux/taskSlice';

interface IFooterLinkProps {
    filter: TaskFilterEnum;
    filterTitle: string;
}

const TodoFilterLink = ({ filter, filterTitle }: IFooterLinkProps) => {
    const currentFilter = useSelector(
        (state: RootState) => state.tasks.taskFilter
    );
    const dispatch = useDispatch();

    const handleFilterChange = () => {
        dispatch(setTaskFilter(filter));
    };

    return (
        <span
            onClick={handleFilterChange}
            className={
                'filter-link ' + (currentFilter === filter ? 'selected' : '')
            }>
            {filterTitle}
        </span>
    );
};

TodoFilterLink.propTypes = {};

export default TodoFilterLink;
