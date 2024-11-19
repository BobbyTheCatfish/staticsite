import {AppBar, Box, Toolbar} from '@mui/material'
import logo from '../assets/images/logo.png'
import textLogo from '../assets/images/textlogo.png'


export function Header () {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <img height="60px" width="60px" src={logo} alt="" style={{ marginRight: "10px" }}/>
        <Box sx={{ display: { xs: "none", sm: "initial" }}}>
          <img height="60px" width="398px" src={textLogo} alt="BobbyTheCatfish"/>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
