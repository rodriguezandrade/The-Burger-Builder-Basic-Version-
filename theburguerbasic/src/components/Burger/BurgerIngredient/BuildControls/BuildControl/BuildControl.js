import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div>
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button className={classes.Less} onClick={props.subtracted}> Less</button>
            <button className={classes.More} onClick={props.added}> More</button>
        </div>
    </div>

);

export default buildControl;