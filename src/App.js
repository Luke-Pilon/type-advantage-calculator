import { useState, useEffect } from 'react';
import './App.css';
import { types } from './utils/types.js';
import TypeRowList from './components/TypeRowList';
import styled from 'styled-components';
import { typeObjectsArray } from './utils/types';
import { checkAdvantage } from './utils/checkAdvantage';

var typeOptions = types.map((type) => (
    <option key={type} value={type}>
        {type[0].toUpperCase() + type.slice(1)}
    </option>
));

const Wrapper = styled.div`
    width: 90%;
    height: 100vh;
    max-width: 450px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const TypeSelectContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

const App = () => {
    const [{ firstType, secondType }, setTypes] = useState({
        firstType: null,
        secondType: null,
    });
    const [moveTypes, setMoveTypes] = useState(typeObjectsArray);
    const handleTypeChange = (e) =>
        setTypes((state) => ({ ...state, [e.target.name]: e.target.value }));

    useEffect(() => {
        setMoveTypes(
            typeObjectsArray.map((type) => ({
                ...type,
                multiplier:
                    checkAdvantage(type.type, firstType) *
                    checkAdvantage(type.type, secondType),
            }))
        );
    }, [firstType, secondType]);

    return (
        <div className='App'>
            <Wrapper>
                <TypeSelectContainer>
                    <select
                        name='firstType'
                        onChange={(e) => handleTypeChange(e)}
                    >
                        <option key='null' value='null'></option>
                        {typeOptions.filter((item) => item.key !== secondType)}
                    </select>
                    <select
                        name='secondType'
                        onChange={(e) => handleTypeChange(e)}
                    >
                        <option key='null' value='null'></option>
                        {/*Prevent a type from being selected twice*/}
                        {typeOptions.filter((item) => item.key !== firstType)}
                    </select>
                </TypeSelectContainer>
                <TypeRowList
                    firstDefenderType={firstType}
                    secondDefenderType={secondType}
                    moveTypes={moveTypes}
                />
            </Wrapper>
        </div>
    );
};

export default App;
