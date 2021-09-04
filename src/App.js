import { useState, useEffect } from 'react';
import './App.css';
import { types } from './utils/types.js';
import TypeRowList from './components/TypeRowList';
import TypeSelect from './components/TypeSelect';
import styled from 'styled-components';
import { typeObjectsArray } from './utils/types';
import { checkAdvantage } from './utils/checkAdvantage';

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
                    <label htmlFor='firstType'>Defender Type</label>
                    <TypeSelect
                        name='firstType'
                        onChange={handleTypeChange}
                        types={types.filter((type) => type !== secondType)}
                    />
                    <label htmlFor='secondType'>Secondary Defender Type</label>
                    <TypeSelect
                        name='secondType'
                        onChange={handleTypeChange}
                        types={types.filter((type) => type !== firstType)}
                    />
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
