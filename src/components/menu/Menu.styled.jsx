import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  width:100vw;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s;
  transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  overflow: hidden;
`; 





