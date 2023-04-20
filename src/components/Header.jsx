/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Header.scss';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import iconMoon from '../images/icon-moon.svg';
import iconSun from '../images/icon-sun.svg';

function Header({ changeTheme }) {
    const [light, setLight] = useState(true);
    const body = document.querySelector('body');
    const main = document.querySelector('main');

    const toggleTheme = () => {
        if (light) {
            body.style.backgroundColor = 'hsl(236, 33%, 92%)';
            main.classList.add('light');
            main.classList.remove('dark');
            changeTheme('light');
        } else {
            body.style.backgroundColor = 'hsl(235, 21%, 11%)';
            main.classList.remove('light');
            main.classList.add('dark');
            changeTheme('dark');
        }
    };

    useEffect(() => {
        toggleTheme();
    }, [light]);

    return (
        <div className="header-task">
            <h1>T O D O</h1>
            <div className="theme-box">
                <img
                    alt=" "
                    src={light ? iconMoon : iconSun}
                    className="icon"
                    onClick={() => setLight((l) => !l)}
                />
            </div>
        </div>
    );
}

export default Header;
