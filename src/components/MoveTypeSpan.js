import styled from 'styled-components';

const MoveTypeSpan = styled.span`
    background: ${(props) => props.colorCode};
    padding: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    text-transform: capitalize;
    display: inline-block;
    flex: 2;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
`;

export { MoveTypeSpan };
