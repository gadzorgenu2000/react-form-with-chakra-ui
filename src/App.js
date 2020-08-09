import React from 'react';
import ReactDOM from 'react-dom'
import Form from './Form/form';
import { ThemeProvider, theme, ColorModeProvider, CSSReset} from '@chakra-ui/core';
const App =()=>{
return (
  <ThemeProvider theme={theme}>
    <ColorModeProvider>
    <CSSReset/>
    <Form/>
    </ColorModeProvider>    
  </ThemeProvider>
);
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));