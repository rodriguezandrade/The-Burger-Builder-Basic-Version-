import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let tranformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {

            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ing + 1} type={ingKey} />;
            });

        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p> Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;