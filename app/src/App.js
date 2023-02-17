import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './app/routers/MainRouter'
import { createTheme, ThemeProvider } from '@mui/material'
import MainLayout from './app/layouts/MainLayout'

const primaryTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#52d1f4',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
        },
        contained: {
          // backgroundColor: 'red',
        },
      }
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={primaryTheme}>
        <BrowserRouter>
          <MainLayout>
            <MainRouter></MainRouter>
          </MainLayout>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App
