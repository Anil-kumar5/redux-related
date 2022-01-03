import React from 'react'

function ReduxIntro() {
    // store is an object
    // we can not directly modify the redux state because redux is built on top of the functional programming principles
    // we do  not mutate state because here our store is an immutable object
    // so to update it we should create a function that takes store as an argument and returns the updated store
    // type is the only property that redux excepts in actions, without type redux actions wont work
    // type value is  anything that is serializable which means we can store it on the desk i.e., not only strings
    // but for good description , it's better to use strings
    // and  we can give any case and can write however we want ,
    // to maintain standard practice of redux , use uppercase and add underscore bw words 
    // reducer are functions that can accept state as an first argument and action as an second argument
    // the job of this reducer is to return the new state based on this action
    return (
        <div>
            
        </div>
    )
}

export default ReduxIntro
