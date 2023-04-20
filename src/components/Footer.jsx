import './Footer.scss';

import React from 'react';

function Footer() {
    return (
        <div className="footer-task">
            <span>Drag and drop to reorder list</span>
            <div className="attribution">
                Challenge by{' '}
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by{' '}
                <a
                    href="https://www.frontendmentor.io/profile/Fernando0654"
                    target="_blank"
                    rel="noreferrer"
                >
                    FernandoFeN
                </a>
                .
            </div>
        </div>
    );
}

export default Footer;
