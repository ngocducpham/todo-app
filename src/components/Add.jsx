/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-autofocus */
import './Add.scss';

import React from 'react';

function Add({ countTask, setReset, reset }) {
    const addTask = () => {
        setReset((r) => !r);
    };

    return (
        <form className="add-task" onSubmit={addTask}>
            <label htmlFor="task"></label>
            <input
                type="text"
                id="task"
                placeholder="Create a new task..."
                autoFocus
                autoComplete="off"
                required
            />
        </form>
    );
}

export default Add;
