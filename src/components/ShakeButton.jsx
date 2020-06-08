import React from 'react';
import styled from 'styled-components';

const ShakeButton = () => (
    <StyledButton> Pop up </StyledButton>
);

const StyledButton = styled.button`
    background-color: #E49020;
    color: white;
    padding: 0.3em 1em;
    margin-left: 2em;
    border: none;
    font-size: 1.1em;
    transition: transform 0.3s ease-out;

    &:hover {
        cursor: pointer;
        /* font-size: 2.4em; */
        transform: translateY(-0.3em) rotateZ(5deg);
    }
`

export default ShakeButton;
