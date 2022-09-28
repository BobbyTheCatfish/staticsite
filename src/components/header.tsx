import {AppBar, Toolbar} from '@mui/material'
import logo from '../assets/images/logo.png'
import textLogo from '../assets/images/textlogo.png'
import styled from 'styled-components'


export function Header () {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <HeaderImage src={logo} alt="BobbyTheCatfish" style={{ marginRight: "2%" }}/>
          <HeaderImage src={textLogo} alt="BobbyTheCatfish"/>
        </Toolbar>
      </AppBar>
    </>
  )
}

const HeaderImage = styled.img`
  max-height: 60px;
  overflow: scroll;
  object-fit: scale-down;
`