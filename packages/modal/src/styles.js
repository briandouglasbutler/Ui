import styled from 'react-emotion'

export const Container = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const Content = styled('div')`
background-color: white;
width: 400px;
height: 400px;
zindex: 10;
border-radius: 10px;
padding: 15px;
`;