import { useMemo } from 'react';

const TypeCell = ({
    moveType,
    colorCode,
    firstDefenderType,
    secondDefenderType,
    checkAdvantage,
}) => {
    const firstDefenderTypeMultiplier = useMemo(
        () => checkAdvantage(moveType, firstDefenderType),
        [firstDefenderType, checkAdvantage, moveType]
    );
    const secondDefenderTypeMultiplier = useMemo(
        () => checkAdvantage(moveType, secondDefenderType),
        [secondDefenderType, checkAdvantage, moveType]
    );
    return (
        <div className='type-cell'>
            <div>{moveType}</div>
            <div>{firstDefenderTypeMultiplier}</div>
            <div>{secondDefenderTypeMultiplier}</div>
        </div>
    );
};

export default TypeCell;
