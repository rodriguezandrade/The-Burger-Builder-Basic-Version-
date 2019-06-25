import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from './../../UI/Button/Button';


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

            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>

            <Button
                btnType="Danger"
                clicked={props.purchaseCancelled}  >Cancel</Button>

            <Button
                btnType="Success"
                clicked={props.purchaseContinue}> Purchase Continue</Button>
        </Aux>
    );

};

export default orderSummary;