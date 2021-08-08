import styled from 'styled-components';
import TypeRow from './TypeRow';

const StyledTypeRowList = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0.5e;
`;

const TypeRowList = ({ moveTypes }) => {
    const sortedMoveTypes = [...moveTypes].sort((a, b) => {
        return b.multiplier - a.multiplier;
    });
    return (
        <StyledTypeRowList>
            {sortedMoveTypes.map((type) => (
                <TypeRow
                    moveType={type.type}
                    colorCode={type.colorCode}
                    key={type.type}
                    multiplier={type.multiplier}
                />
            ))}
        </StyledTypeRowList>
    );
};

export default TypeRowList;
