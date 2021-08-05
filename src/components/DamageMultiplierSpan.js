import styled from 'styled-components';

const StyledDamageMultiplierSpan = styled.span`
    padding: 0.5em;
`;

const DamageMultiplierSpan = ({ multiplier }) => {
    return (
        <StyledDamageMultiplierSpan>{multiplier}</StyledDamageMultiplierSpan>
    );
};

export { DamageMultiplierSpan };
