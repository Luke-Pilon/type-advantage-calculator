import { memo } from 'react';
import styled from 'styled-components';
import TypeRow from './TypeRow';

const StyledTypeRowList = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0.5e;
    margin-top: 0.5rem;
`;

const TypeRowList = memo(({ moveTypes }) => {
    const sortedMoveTypes = [...moveTypes].sort((a, b) => {
        return (
            b.firstTypeMultiplier * b.secondTypeMultiplier -
            a.firstTypeMultiplier * a.secondTypeMultiplier
        );
    });

    return (
        <StyledTypeRowList>
            {sortedMoveTypes.map((type) => (
                <TypeRow
                    moveType={type.type}
                    colorCode={type.colorCode}
                    key={type.type}
                    multiplier={
                        type.firstTypeMultiplier * type.secondTypeMultiplier
                    }
                />
            ))}
        </StyledTypeRowList>
    );
});

export default TypeRowList;
