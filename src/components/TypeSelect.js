import styled from 'styled-components';

const StyledTypeSelect = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: .5rem;
    & > label {
        padding-bottom: .25rem;
    }
`;
const TypeSelect = ({ name, types, onChange, labelText }) => {
    return (
        <StyledTypeSelect>
            <label htmlFor={name}>{labelText}</label>
            <select name={name} onChange={(e) => onChange(e)}>
                <option key='null' value='null'></option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type[0].toUpperCase() + type.slice(1)}
                    </option>
                ))}
            </select>
        </StyledTypeSelect>
    );
};

export default TypeSelect;
