import { useMemo } from 'react';
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

const TypeRow = ({
    moveType,
    colorCode,
    firstDefenderType,
    secondDefenderType,
    checkAdvantage,
}) => {
    //Memoize multipliers for each defender type so only the one that changes is rerendered upon a new selection
    const firstDefenderTypeMultiplier = useMemo(
        () => checkAdvantage(moveType, firstDefenderType),
        [firstDefenderType, checkAdvantage, moveType]
    );
    const secondDefenderTypeMultiplier = useMemo(
        () => checkAdvantage(moveType, secondDefenderType),
        [secondDefenderType, checkAdvantage, moveType]
    );

    const damageMultiplier =
        firstDefenderTypeMultiplier * secondDefenderTypeMultiplier;

    return (
        <StyledTypeRow>
            <MoveTypeSpan colorCode={colorCode}>{moveType}</MoveTypeSpan>
            <DamageMultiplierSpan multiplier={damageMultiplier} />
        </StyledTypeRow>
    );
};

export default TypeRow;
