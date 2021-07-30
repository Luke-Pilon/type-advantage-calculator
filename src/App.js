import { useState } from 'react';
import './App.css';
import { typeOptions } from './utils/types.js';

const App = () => {
    const [{ firstType, secondType }, setTypes] = useState({
        firstType: null,
        secondType: null,
    });
    const handleTypeChange = (e) =>
        setTypes((state) => ({ ...state, [e.target.name]: e.target.value }));
    return (
        <div className='App'>
            <select name='firstType' onChange={(e) => handleTypeChange(e)}>
                {typeOptions}
            </select>
            <select name='secondType' onChange={(e) => handleTypeChange(e)}>
                {typeOptions}
            </select>
            <div>{firstType}</div>
            <div>{secondType}</div>
        </div>
    );
};

export default App;
