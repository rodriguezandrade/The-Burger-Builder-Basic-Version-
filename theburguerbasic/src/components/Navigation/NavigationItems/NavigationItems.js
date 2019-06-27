import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationsItems = () => (
    <ul>
        <li className={classes.NavigationItems}>
            <NavigationItem link="" active>Burger Builder</NavigationItem>
            <NavigationItem link="" >Checkout</NavigationItem>
        </li>
    </ul>
);

export default navigationsItems;