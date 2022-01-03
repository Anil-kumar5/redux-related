import React from 'react'

function PureFunctions() {
    // pure functions are the functions when we given the same arguments and gives us a same result
    // for example 

    function fun(number) {
        return number * Math.random();
    };
    // above function is not a pure function because the value changes every time when the function calls

    function fun2(number) {
        return number * 5
    }
    // above is a pure bcoz if we pass one as an parameter while calling the value never changes

    // pure function examples

    // --- no random values
    // --- no current date / time
    // --- no global state (Dom,files,db,etc)
    // --- no  mutation of parameters 

    function age(age, minAge) {
        return age > minAge
    }
    console.log(age(180,18))
    // above one is 

    // benefits 
    // self documentation, easily testable , concurrency, Cacheable
    return (
        <div>

        </div>
    )
}

export default PureFunctions





