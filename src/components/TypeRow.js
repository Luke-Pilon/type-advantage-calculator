import styled from 'styled-components';
import { DamageMultiplierSpan } from './DamageMultiplierSpan';
import { MoveTypeSpan } from './MoveTypeSpan';

const StyledTypeRow = styled.div`
    margin: 0.5em 1em;
    justify-content: center;
    font-weight: bold;
    flex-basis: 40%;
    flex-grow: 1;
    display: flex;
`;

const TypeRow = ({ moveType, colorCode, multiplier }) => {
    return (
        <StyledTypeRow>
            <MoveTypeSpan colorCode={colorCode}>{moveType}</MoveTypeSpan>
            <DamageMultiplierSpan multiplier={multiplier} />
        </StyledTypeRow>
    );
};

export default TypeRow;