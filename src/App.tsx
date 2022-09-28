import { createTheme, CssBaseline, ThemeProvider, SvgIcon } from '@mui/material';
import {Discord, Patreon, Twitch} from './assets/svgs'
import { YouTube, SmartToy, Twitter, ShoppingBag } from '@mui/icons-material'
import styled from 'styled-components';
import CustomButton from './components/button';
import { Header } from './components/header';

const theme = createTheme({
  palette: {
    primary: {
      main: "#5496BF",
      dark: "#14364F"
    },
    background: {
      default: "#385773"
    },
  }
})


function App() {
  return (
    <div style={{height: "100vh"}}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Header/>
          <ButtonGroup>
            <CustomButton icon={<YouTube/>} caption="YOUTUBE" color="#FF0000" url="www.youtube.com/channel/UCw8DLllFiJOmevgDznFiQZw"/>
            <CustomButton icon={<SvgIcon><Twitch/></SvgIcon>} caption="TWITCH" color="#6441a5" url="www.twitch.tv/bobbydacatfish"/>
            <CustomButton icon={<SvgIcon><Discord/></SvgIcon>} caption="DISCORD" color="#5865F2" url="www.discord.gg/wj7VVPA"/>
            <CustomButton icon={<SmartToy/>} caption="BOBBY BOT" color="orange" url="bot.bobbythecat.fish"/>
            <CustomButton icon={<Twitter/>} caption="TWITTER" color="#1DA1F2" url="www.twitter.com/bobbythecatfish"/>
            <CustomButton icon={<SvgIcon><Patreon/></SvgIcon>} caption="PATREON" color="#f96854" url="www.patreon.com/bobbythecatfish"/>
            <CustomButton icon={<ShoppingBag/>} caption="MERCH" color="gray" url="www.teespring.com/stores/bobbys-gift-shop"/>
          </ButtonGroup>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

const ButtonGroup = styled.div`
  flex-direction: column;
  flex: 2;
  justify-content: space-evenly;
  align-items: center;
  display: flex;
  height: 90%;
  min-height: 500px;
  max-height: 1000px;
  overflow: auto;
`;

export default App;
