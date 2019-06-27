import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                <NavigationsItems />
            </nav>
        </header>
    );
};

export default toolbar;