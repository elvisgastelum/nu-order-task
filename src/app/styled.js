import styled from 'styled-components'
import background from 'app/img/background.jpg';


export const Wrapper = styled.div`
  background: ${props => props.active
    ? `url(${background});`
    : `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${background});`};
  
  background-size: cover;
  height: 100vh;
`