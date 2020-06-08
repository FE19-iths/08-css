import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const SpringDemo = () => {
    const [toggle, setToggle] = useState(false);
    const [animateBg, setAnimateBg] = useSpring(
        () => ({ backgroundColor: '#EEADE5', border: '1px solid gray' })
    )
    const handleToggle = () => {
        setToggle(!toggle);
    }
    setAnimateBg({
        backgroundColor: (toggle ? '#827FBB' : '#EEADE5'),
        border: (toggle ? '1px dotted black' : '1px solid gray')
    });

    return (
        <StyledContainer>
            <button onClick={handleToggle}> Toggle </button>
            {toggle ? 'toggled on' :'off'}

            <animated.div style={animateBg}> I am animated </animated.div>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    margin: 2em;
    border: 1px solid black;
    padding: 1em;
`;

export default SpringDemo;
