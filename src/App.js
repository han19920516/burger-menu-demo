import React,{useRef, useState} from 'react'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './styles/globalStyle'
import {theme} from './theme/theme'
import Burger from './components/burger/Burger'
import Menu from './components/menu/Menu'


function App() {
  const [showMeun,setShowMenu] = useState(false);
  
  const setShowMenuHandler =(e)=>{
    setShowMenu(state=>!state);
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
       <GlobalStyle />
       <Burger open={showMeun} setOpen={setShowMenuHandler} />
       <Menu open={showMeun}  />
       <h1>Hello, this is a burger menu demo</h1>
       <small> made by Hudson</small>
      </div>
    </ThemeProvider>
  );
}

export default App;
