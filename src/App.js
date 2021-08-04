import { useState } from 'react';
import './App.css';
import { types, typeObjectsArray } from './utils/types.js';
import { checkAdvantage } from './utils/checkAdvantage.js';
import TypeCell from './components/TypeCell';

var typeOptions = types.map((type) => (
    <option key={type} value={type}>
        {type[0].toUpperCase() + type.slice(1)}
    </option>
));
console.log(typeOptions);

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
                <option key='null' value='null'></option>
                {typeOptions}
            </select>
            <select name='secondType' onChange={(e) => handleTypeChange(e)}>
                <option key='null' value='null'></option>
                {/*Prevent a type from being selected twice*/}
                {typeOptions.filter((item) => item.key !== firstType)}
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
