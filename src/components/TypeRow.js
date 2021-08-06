import { useMemo } from 'react';
import styled from 'styled-components';
import { DamageMultiplierSpan } from './DamageMultiplierSpan';

const StyledTypeRow = styled.div`
    margin: 0.5em 1em;
    justify-content: center;
    font-weight: bold;
    flex-basis: 40%;
    flex-grow: 1;
    display: flex;
`;

const MoveTypeSpan = styled.span`
    background: ${(props) => props.colorCode};
    padding: 0.5rem;
    color: white;
    text-align: center;
    text-transform: capitalize;
    display: inline-block;
    flex: 2;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
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
