import styled from 'styled-components';
import { multiplierDisplayObjects } from '../utils/multiplierDisplayObjects';

const StyledDamageMultiplierSpan = styled.span`
    padding: 0.5em;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ textColor }) => textColor};
    text-align: center;
    flex: 1;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
`;

const DamageMultiplierSpan = (props) => {
    //Assign multiplierDisplayObject
    let multiplierDisplayObject = multiplierDisplayObjects.find(
        ({ multiplier }) => multiplier === props.multiplier
    ) || { multiplier: 1, colorCode: '#f0f0f0', displayText: '1' };
    return (
        <StyledDamageMultiplierSpan
            backgroundColor={multiplierDisplayObject.backgroundColorCode}
            textColor={multiplierDisplayObject.textColorCode}
        >
            {multiplierDisplayObject.displayText}
        </StyledDamageMultiplierSpan>
    );
};

export { DamageMultiplierSpan };
