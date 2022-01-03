import React from 'react'
import { compose,pipe } from 'lodash/fp';
function HigherOrderFunctions() {

    //  we can pass function as an argument and also we can return a function
    // in functional programming we call them as higher order functions
    // simply a higher order function is an function which returns a function or takes function as an argument or both
    // instead of working on strings or numbers or booleans , it went higher to operate on functions
    let input = '  javascrIPt  ';
    let output = "<div>" + input.trim() + "</div>";
    const trim = str => str.trim();
    const wrapInDiv = str => `<div>${str}</div>`;
    const toLowerCase = str => str.toLowerCase();
 
    const result = wrapInDiv(toLowerCase(trim(input)));
    // the above functions are called as composition functions
    // because here we are using multiple functions as parenthesis 
    // here we are going to learn about lodash 
    //lodash is a famous utility for functional programming


    const transform = compose( wrapInDiv, toLowerCase,trim);
    // if you observe in above line we didn't called any function  instead we just give reference to them
    // here compose is a higher order function , where it taking all the functions as arguments and returning a new composed function
    // here also same we have to read from right to left

    const usingPipe = pipe(trim,toLowerCase,wrapInDiv);
    //using pipe the functionality is from left to right

    // we used all this code to get rid of that ugly code and from compose functions
    return (
        <div>
            <p>{result}</p>
            <p>{transform(input)}</p>
            <p>{usingPipe(input)}</p>
        </div>
    )
}

export default HigherOrderFunctions
