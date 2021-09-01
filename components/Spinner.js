import React from 'react'
import styled, {keyframes} from 'styled-components';

const spin = keyframes`
    100% { 
        transform: rotate(360deg); 
        transform: rotate(360deg); 
    }
`;

const Container = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #000;
`;

const SpinDiv = styled.div`
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border-top: 75px solid #f00;
    border-right: 75px solid #0ff;
    border-bottom: 75px solid #0f0;
    border-left: 75px solid #00f;
    animation-name: ${spin};
    animation-iteration-count: infinite;
`;

const Spinner = (props) => {
    return (
        <Container>
            <SpinDiv/>
        </Container>
    )
}

export default Spinner
