import styled from 'styled-components';

const TypeSelect = ({ name, types, onChange }) => {
    return (
        <select name={name} onChange={(e) => onChange(e)}>
            <option key='null' value='null'></option>
            {types.map((type) => (
                <option key={type} value={type}>
                    {type[0].toUpperCase() + type.slice(1)}
                </option>
            ))}
        </select>
    );
};

export default TypeSelect;
