import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let tranformedIngredients = Object.keys(props.ingredients)
        .map(ingKey => {

            return [...Array(props.ingredients[ingKey])].map((_, i) => {
                return <BurgerIngredient key={ingKey + 1} type={ingKey} />;
            });

        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);


    let data;
    if (tranformedIngredients.length == 0) {
        tranformedIngredients = <p> Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            {data}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;