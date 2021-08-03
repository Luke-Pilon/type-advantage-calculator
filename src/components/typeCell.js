const TypeCell = ({ moveType, colorCode, defenderTypes, checkAdvantage }) => {
    return (
        <div className='type-cell'>
            <div>{moveType}</div>
            <div>{checkAdvantage(moveType, defenderTypes[0])}</div>
            <div>{checkAdvantage(moveType, defenderTypes[1])}</div>
        </div>
    );
};

export default TypeCell;
