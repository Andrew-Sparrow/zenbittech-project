import Main from '../main/main';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Apercu Arabic Pro', 'Arial', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #ffffff;
  }
`;

const theme = {
  colors: {
    primary: '#111111',
    secondary: '#000000',
    orange: '#F44A1E'
  },
  media: {
    phone: "(max-width: 320px)"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main/>
    </ThemeProvider>
  );
}

export default App;
