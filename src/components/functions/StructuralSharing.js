import React from 'react'

function StructuralSharing() {
    // once if we created an object , it can not be changed
    // for example if we want to update an object then we have to create copy of an object and update it

    // strings are immutable , it means we can not change strings but we can copy that and we can change that copy

    let str = "anil";
    let updatedStr = str.toLocaleUpperCase();
    // arrays and objects are mutable, thats why we call javascript is not a complete pure functional programming language 

    // benefits of immutability 

    //--- predictability etc..


    // if you are using redux , then do not mutate the data , its the fundamental of redux
    // how to update the object

    const person = {name:'anil'};
    person.name = 'kumar';
    console.log(person.name)
    // if we want to update the object , then we are not supposed to directly update the object
    // there are two ways in javascript
    // by using assign 
    const updated = Object.assign({},person);
    // initially we have to pass an empty object and second one is the object name and third one is optional

    console.log(updated)
    const updateded = Object.assign({},person,{name:'kumar',age:24});
    console.log(updateded)

    // and another way is using spread operator
    const obj = {name:'anil'};
    const updatedObj = {...obj};
    console.log(updatedObj)
    // if you want to modify the object
    const modifiedObj = {...obj,name:'reddy'};
    console.log(modifiedObj)
    // if you want to add any extra properties
    const addedObj = {...obj,age:24};
    console.log(addedObj);

    // but be careful when you are working with nested objects

    const personData = {
        name:'anil',
        address:{
            area:'kphb'
        }
    };
    const updatedData = {...personData};
    // updatedData.address.area = "kukatpally";
    console.log(personData)
    // the area out is modified, but here we didnt modified the original object instead we modified the new one
    // but it also modifies the original object
    // because here the spread operator shallow copies the object 
    // so here the problem is both objects have only one address object in memory and it modifies that object
    // so we have to do deep copy to overcome the problem
    const reUpdatedObject = {
        ...personData,
        address:{
            ...personData.address,
            area : 'KPHB'
        }
    };
    console.log(reUpdatedObject,'re');
    console.log(personData,'personData')

    // updating the arrays 
    return (
        <div>

        </div>
    )
}

export default StructuralSharing
