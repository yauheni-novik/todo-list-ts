import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export enum TaskFilterEnum {
    'ALL_TASKS',
    'ACTIVE_TASKS',
    'COMPLETED_TASKS',
}

export interface ITask {
    id: number;
    name: string;
    selected: boolean;
}

type TaskState = {
    taskList: ITask[];
    taskFilter: TaskFilterEnum;
};

const initialState: TaskState = {
    taskList: [
        {
            id: 124,
            name: 'First task',
            selected: true,
        },
        {
            id: 123,
            name: 'Second task',
            selected: false,
        },
    ],
    taskFilter: TaskFilterEnum.ALL_TASKS,
};

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        setTaskFilter: (
            state: TaskState,
            action: PayloadAction<TaskFilterEnum>
        ) => {
            state.taskFilter = action.payload;
        },
        saveTask: (state: TaskState, action: PayloadAction<ITask>) => {
            state.taskList.push(action.payload);
        },
        selectTask: (state: TaskState, action: PayloadAction<ITask>) => {
            state.taskList.map((item) => {
                if (action.payload.id === item.id) {
                    item.selected = !item.selected;
                }
            });
        },
        removeTask: (state: TaskState, action: PayloadAction<ITask>) => {
            console.log(action.payload);
            state.taskList = state.taskList.filter(
                (item) => action.payload.id !== item.id
            );
        },
    },
});

export const { saveTask, selectTask, removeTask, setTaskFilter } =
    taskSlice.actions;
export const currentTaskList = (state: RootState) => {
    switch (state.tasks.taskFilter) {
        case TaskFilterEnum.ACTIVE_TASKS:
            return state.tasks.taskList.filter((item) => !item.selected);
        case TaskFilterEnum.COMPLETED_TASKS:
            return state.tasks.taskList.filter((item) => item.selected);
        default:
            return state.tasks.taskList;
    }
};

export default taskSlice.reducer;
