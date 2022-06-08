import Styled from 'styled-components'

export const StyledUl = Styled.ul`
 position:absolute;
 left:0;
 top:2em;
 right:0;
 bottom:0;
 padding:4em;
 ${(props)=>(`padding-top:${props.marginTop}em`)};
 transition:all 0.2s;
 display:flex;
 flex-direction:column;
 min-width:320px;
 ${(props)=>(props.showFromRight?'animation-duration: 0.5s;animation-name: example;':'')};
 @keyframes example {
  from {transform:translateX(100%)}
  to transform:translateX(0)}
}
`

export const styledLi=Styled.li`
display:flex;
justify-content:space-between;
align-items: center;
height:2.5em;
cursor:pointer;
opacity:0.8;
&:hover {
  opacity:1
 };
`
export const styledA=Styled.a`
font-size:1.15em;
opacity:0.8;
&:link, &:visited {
  color: ${({theme})=>(theme.primaryLight)};
  text-decoration: none;
  cursor: auto;
}

&:link:active, a:visited:active {
  color:${({theme})=>(theme.primaryLight)};
}
&:hover {
  opacity:1
 };
`