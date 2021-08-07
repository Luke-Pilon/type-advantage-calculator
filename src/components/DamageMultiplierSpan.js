import styled from 'styled-components';
import { multiplierDisplayObjects } from '../utils/multiplierDisplayObjects';
import parse from 'html-react-parser';

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
    //Assign multiplierDisplayObject to matching multiplier from multiplierDisplayObjects.js, or 1 by default
    let multiplierDisplayObject = multiplierDisplayObjects.find(
        ({ multiplier }) => multiplier === props.multiplier
    ) || {
        multiplier: 1,
        backgroundColorCode: '#f0f0f0',
        textColorCode: '#000000',
        displayText: parse('1&times;'),
    };

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
