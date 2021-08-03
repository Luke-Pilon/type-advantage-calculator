import { useState } from 'react';
import './App.css';
import { typeOptions, typeObjectsArray } from './utils/types.js';
import { checkAdvantage } from './utils/checkAdvantage.js';
import TypeCell from './components/TypeCell';

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
            <div>
                {typeObjectsArray.map((typeObject) => (
                    <TypeCell
                        moveType={typeObject.type}
                        colorCode={typeObject.colorCode}
                        key={typeObject.type}
                        firstDefenderType={firstType}
                        secondDefenderType={secondType}
                        checkAdvantage={checkAdvantage}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
