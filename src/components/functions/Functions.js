import React from 'react';

const Functions = () => {
    function sayHello() {
        return 'hello';
    };
    let fun = sayHello;
    let fn = sayHello();

    // we can also pass function as argument to another function

    function greet(fnMessage) {
        return fnMessage()
    }
    function func(funArgument) {
        return funArgument
    }
    // we can also return a function inside a function

    function insideFunction() {
        return sayHello();
    };
    function nestedFunction() {
        console.log('parent function')
        let a = 0;
        return function() {
            console.log('inner function')
            let b = 1;
            console.log(a + b)
            return 'nested function'
        };
    };
    let callOuterFun = nestedFunction();
    return (
        <div>
            <p>{sayHello()}</p>
            <p>{fun()}</p>
            <p>{fn}</p>
            <p>{greet(sayHello)}</p>
            <p>{func(sayHello())}</p>
            <p>{insideFunction()}</p>
            <p>{callOuterFun()}</p>
        </div>
    );
};
export default Functions