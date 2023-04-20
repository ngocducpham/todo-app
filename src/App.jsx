import './sass/index.scss';

import React, { useState } from 'react';

import Add from './components/Add';
import Config from './components/Config';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import Message from './components/Message';
import imgBgDesktopDark from './images/bg-desktop-dark.jpg';
import imgBgDesktopLight from './images/bg-desktop-light.jpg';
import imgBgMobileDark from './images/bg-mobile-dark.jpg';
import imgBgMobileLight from './images/bg-mobile-light.jpg';
import iconCheck from './images/icon-check.svg';
import iconCross from './images/icon-cross.svg';

function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <>
            <img src={imgBgDesktopDark} className="img-dark-desktop" alt="" />
            <img src={imgBgMobileDark} className="img-dark-mobile" alt="" />
            <img src={imgBgDesktopLight} className="img-light-desktop" alt="" />
            <img src={imgBgMobileLight} className="img-light-mobile" alt="" />
            <div className={'content ' + theme}>
                <Header
                    changeTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
                />
                <Add />
                <Message />
                <List />
                <Config />
                <Footer />
            </div>
        </>
    );
}

export default App;
