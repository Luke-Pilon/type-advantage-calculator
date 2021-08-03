const TypeCell = ({ moveType, colorCode, defenderTypes }) => {
    return (
        <div className='type-cell'>
            <div>{moveType}</div>
        </div>
    );
};

export default TypeCell;
