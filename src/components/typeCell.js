import { useMemo } from 'react';
import styled from 'styled-components';

const StyledTypeRow = styled.div`
    margin-top: 1em;
    justify-content: center;
`;

const MoveTypeSpan = styled.span`
    background: ${(props) => props.colorCode};
    padding: 0.5rem;
    color: white;
    min-width: 3.5rem;
    text-align: center;
    text-transform: capitalize;
    display: inline-box;
`;

const DamageMultiplierSpan = styled.span`
    padding: 0.5em;
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
            <DamageMultiplierSpan multiplier={damageMultiplier}>
                {firstDefenderTypeMultiplier * secondDefenderTypeMultiplier}
            </DamageMultiplierSpan>
        </StyledTypeRow>
    );
};

export default TypeRow;
