import './Message.scss';

import React from 'react';

function Message({ tasks = [], filter }) {
    let message;
    if (tasks.length > 0) {
        return;
    } else if (tasks.length <= 0 && filter === 'all') {
        message = {
            title: 'No tasks found',
            text: "You haven't added any task, Add one",
        };
    } else if (tasks.length <= 0 && filter === 'active') {
        message = {
            title: 'No active tasks found',
            text: "Great! You don't have any active task",
        };
    } else if (tasks.length <= 0 && filter === 'completed') {
        message = {
            title: 'No completed tasks found',
            text: 'So bad... You need to get back to work',
        };
    }

    return (
        <>
            {message && (
                <div className="msg">
                    <h2 className="title">{message.title}aaa</h2>
                    <span className="text">{message.text}bbb</span>
                </div>
            )}
        </>
    );
}

export default Message;
