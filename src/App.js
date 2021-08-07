import { useState } from 'react';
import './App.css';
import { types } from './utils/types.js';
import TypeRowList from './components/TypeRowList';
import styled from 'styled-components';

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

const TypeRowContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0.5e;
`;

const App = () => {
    const [{ firstType, secondType }, setTypes] = useState({
        firstType: null,
        secondType: null,
    });
    const handleTypeChange = (e) =>
        setTypes((state) => ({ ...state, [e.target.name]: e.target.value }));

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
                />
            </Wrapper>
        </div>
    );
};

export default App;
