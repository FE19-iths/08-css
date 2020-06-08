import React from 'react';
import styled from 'styled-components';

const GrowButton = () => (
    <StyledButton> I will grow </StyledButton>
);

const StyledButton = styled.button`
    background-color: #3678C7;
    color: white;
    padding: 0.3em 1em;
    margin-left: 2em;
    border: none;
    font-size: 1.1em;
    transition: transform 0.5s linear;

    &:hover {
        cursor: pointer;
        /* font-size: 2.4em; */
        transform: scale(1.4, 1.4);
    }
`

export default GrowButton;
