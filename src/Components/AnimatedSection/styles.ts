import styled from 'styled-components';


const Card = styled.div`
    font-size: 164px;
    width: 600px;
    height:430px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075),
    0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075),
    0 0 16px hsl(0deg 0% 0% / 0.075);
    transform-origin: 10% 60%;
`;

const CardContainer = styled.div`
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding-top: 20px;
    margin-bottom: -120px;
`;



export {Card, CardContainer}
