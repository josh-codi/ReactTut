import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import { createContext, useReducer } from 'react';
import { UserActions } from './misc/Constants';

const initialValue = {name: 'Josh', age: 45, tall: false}
const reducer = (state, action)=>{
    switch(action.type){
        case UserActions.NAME:
            return {...state, name: action.data}
        default:
            return state
    }
}

export const Store = createContext()
function App() {
  const name = 'Emmanuel'
  const [user, dispatch] = useReducer(reducer, initialValue)

  return (
    <Store.Provider value={{user, dispatch}}>
      <div className="App">
          <Routes>
            <Route path='/' element={<HomePage name={name} age={45}/>} />
            <Route path='/about' element={<AboutPage/>} />
          </Routes>
      </div>
    </Store.Provider>
    
  );
}

export default App;
