import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className={classes.BuildControl}>
            {props.label}
            <button className={classes.Less}> Less</button>
            <button className={classes.More}> More</button>
        </div>
    </div>

);

export default buildControl;