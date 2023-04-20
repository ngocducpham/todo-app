import './Config.scss';

import React from 'react';
import { useState } from 'react';

function Config() {
    const numsTask = 3;
    const [filter, setFilter] = useState('all');

    const handleClearCompleted = () => {
        return;
    };

    return (
        <div className="config-task">
            <div className="counting-items">
                <span>{numsTask} items left</span>
                <div className="delete-items">
                    <button>Clear Completed</button>
                </div>
            </div>
            <div className="filter-items">
                <button className={filter === 'all' && 'active'}>All</button>
                <button className={filter === 'active' && 'active'}>Active</button>
                <button className={filter === 'all' && 'active'}>Completed</button>
            </div>
        </div>
    );
}

export default Config;
