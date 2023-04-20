/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './List.scss';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import iconCheck from '../images/icon-check.svg';
import iconCross from '../images/icon-cross.svg';

function List({ items }) {
    const [list, setList] = useState([
        {
            id: 1,
            task: 'Create a todo list',
            completed: false,
        },

        {
            id: 2,
            task: 'Go to the gym',
            completed: false,
        },
        {
            id: 3,
            task: 'Study React',
            completed: true,
        },
    ]);
    const [completed, setCompleted] = useState();

    const reorder = (list, sourceIndex, destinationIndex) => {
        const result = list.slice();
        result.splice(destinationIndex, 0, result.splice(sourceIndex, 1)[0]);

        return result;
    };

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
            destination.index === source.index &&
            destination.droppableId === source.droppableId
        )
            return;

        setList(reorder(list, source.index, destination.index));
    };

    const handleCheck = (id) => {
        const taskIndex = list.findIndex((task) => task.id === id);
        const newList = list.slice();
        newList[taskIndex].completed = !newList[taskIndex].completed;
        setList(newList);
    };

    const handleDelete = (id) => {
        const taskIndex = list.findIndex((task) => task.id === id);
        const newList = list.slice();
        newList.splice(taskIndex, 1);
        setList(newList);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="task" key={list?.length}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="list-task"
                    >
                        {list?.map((task, index) => (
                            <Draggable
                                draggableId={task.id.toString()}
                                index={index}
                                key={task.id}
                            >
                                {(provided) => (
                                    <div
                                        {...provided.dragHandleProps}
                                        {...provided.draggableProps}
                                        ref={provided.innerRef}
                                        className="task-item"
                                    >
                                        <input
                                            type="checkbox"
                                            id={task.id}
                                            checked={task.completed}
                                            onChange={() => handleCheck(task.id)}
                                        />
                                        <label htmlFor={task.id}>
                                            <img
                                                className="icon"
                                                src={iconCheck}
                                                alt=""
                                            />
                                            <span>{task.task}</span>
                                        </label>
                                        <img
                                            alt=""
                                            className="icon-close"
                                            src={iconCross}
                                            onClick={() => handleDelete(task.id)}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default List;
