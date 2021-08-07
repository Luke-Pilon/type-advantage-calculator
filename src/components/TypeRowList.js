import styled from 'styled-components';
import TypeRow from './TypeRow';
import { typeObjectsArray } from '../utils/types';
import { checkAdvantage } from '../utils/checkAdvantage';
const StyledTypeRowList = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0.5e;
`;

const TypeRowList = ({ firstDefenderType, secondDefenderType }) => {
    return (
        <StyledTypeRowList>
            {typeObjectsArray.map((typeObject) => (
                <TypeRow
                    moveType={typeObject.type}
                    colorCode={typeObject.colorCode}
                    key={typeObject.type}
                    multiplier={
                        checkAdvantage(typeObject.type, firstDefenderType) *
                        checkAdvantage(typeObject.type, secondDefenderType)
                    }
                />
            ))}
        </StyledTypeRowList>
    );
};

export default TypeRowList;
