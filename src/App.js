import logo from './logo.svg';
import './App.css';
import Functions from './components/functions/Functions';
import HigherOrderFunctions from './components/functions/HigherOrderFunctions';
import PureFunctions from './components/functions/PureFunctions';
import StructuralSharing from './components/functions/StructuralSharing';
import { store } from './redux/store';

function App() {
  console.log(store)
  // store is an object
  // if you want to know the state of a store then use getState() method
  store.subscribe(() =>{
    console.log('store changed!',store.getState())
  }) 
  store.dispatch({
     type:'ITEM_ADD',
     payload : {
       description:'item1'
     }
   });
   
  console.log(store.getState())

  return (
    <div className="App">
 {/* <Functions/> */}
 {/* <HigherOrderFunctions/> */}
 {/* <PureFunctions/> */}
 {/* <StructuralSharing/> */}
 
    </div>
  );
}

export default App;
