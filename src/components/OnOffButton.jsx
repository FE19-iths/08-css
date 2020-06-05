import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    margin: 1.5em;
    font-size: 1.2em;
`;
const StyledButton = styled.button`
    color: white;
    padding: 0.3em 1em;
    border: none;

    &:hover {
        cursor: pointer;
    }
`;
// man kan använda CSS-variabler också!
const Left = styled(StyledButton)`
    background-color: ${({ selected }) => selected ? '#33A6DC' : '#E1D2D0'};
    border-radius: 1em 0px 0px 1em;
`;
const Right = styled(StyledButton)`
    background-color: ${({ selected }) => selected ? '#1C9F28' : '#E1D2D0'};
    border-radius: 0px 1em 1em 0px;
`;

const OnOffButton = () => {
    const [isOn, setIsOn] = useState(true);
    return (
        <StyledContainer>
            <Left selected={!isOn}
                onClick={() => setIsOn(false)}> Off </Left>
            <Right selected={isOn}
                onClick={() => setIsOn(true)}> On </Right>
        </StyledContainer>
    )};

export default OnOffButton;
