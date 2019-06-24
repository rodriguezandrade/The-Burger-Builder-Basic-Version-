import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(ingKey => {
        return <li>
            <span key={ingKey} style={{ textTransform: 'capitalize' }}> {ingKey} </span> : {props.ingredients[ingKey]}
        </li>;
    });
    return (
        <Aux>
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );

};

export default orderSummary;