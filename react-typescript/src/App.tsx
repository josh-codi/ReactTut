import React, {createContext, FC} from 'react';
import './App.css';
import Select from './components/Select';

const options = [
  {label: "FirstName", value: 1},
  {label: "FirstName", value: 1},
  {label: "FirstName", value: 1},
  {label: "FirstName", value: 1},
  {label: "FirstName", value: 1}
]
const App: FC = () => {

  return (
    <div>
      <Select options={options} onChange={()=>{}}></Select>
    </div>
  );
}

export default App;
