import { useState, useEffect } from 'react';
import './App.css';
import { typeObjectsArray } from './utils/types';
import TypeRowList from './components/TypeRowList';
import TypeSelect from './components/TypeSelect';
import Wrapper from './components/Wrapper';
import TypeSelectContainer from './components/TypeSelectContainer';
import { checkAdvantage } from './utils/checkAdvantage';

const types = typeObjectsArray.map((typeObject) => typeObject['type']).sort();

const App = () => {
    const [{ firstType, secondType }, setTypes] = useState({
        firstType: null,
        secondType: null,
    });
    const [moveTypes, setMoveTypes] = useState(typeObjectsArray);
    const handleTypeChange = (e) =>
        setTypes((state) => ({ ...state, [e.target.name]: e.target.value }));
    useEffect(() => {
        setMoveTypes((moveTypes) =>
            moveTypes.map((type) => ({
                ...type,
                firstTypeMultiplier: checkAdvantage(type.type, firstType),
            }))
        );
    }, [firstType]);
    useEffect(() => {
        setMoveTypes((moveTypes) =>
            moveTypes.map((type) => ({
                ...type,
                secondTypeMultiplier: checkAdvantage(type.type, secondType),
            }))
        );
    }, [secondType]);
    return (
        <div className='App'>
            <Wrapper>
                <TypeSelectContainer>
                    <TypeSelect
                        name='firstType'
                        onChange={handleTypeChange}
                        types={types.filter((type) => type !== secondType)}
                        labelText='Defender Type'
                    />
                    <TypeSelect
                        name='secondType'
                        onChange={handleTypeChange}
                        types={types.filter((type) => type !== firstType)}
                        labelText='Secondary Defender Type'
                    />
                </TypeSelectContainer>
                <TypeRowList moveTypes={moveTypes} />
            </Wrapper>
        </div>
    );
};

export default App;
