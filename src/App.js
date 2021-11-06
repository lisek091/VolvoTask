import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from '@mui/material'
import theme from "./styles/theme"

function App() {
  return (
    <Fragment >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
