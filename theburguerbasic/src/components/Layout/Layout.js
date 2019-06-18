import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main classNam={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;