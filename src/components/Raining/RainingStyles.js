import styled from 'styled-components';

export const Canvas = styled.canvas`
background: #0F1524; 
display: inline; 
width: 1260px; 
height: 550px;
position: absolute;
@media ${(props) => props.theme.breakpoints.sm} {
    background: #0F1524;  
    position: absolute;
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
