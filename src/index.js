import React from "react";
import { render } from "react-dom";
import App from "./components/App/App";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#032541"
        },
        secondary: {
            main: "#01b4e4"
        },
        black: {
            main: "#000"
        },
        white: {
            main: "#fff"
        }
    },
    typography: {
        fontFamily: 'Roboto',
    }
})

render (
    <Provider store={store}>
        <ThemeProvider theme={customTheme}>
            <Router>
                <App/>
            </Router>
        </ThemeProvider>
    </Provider>
, document.getElementById("root"))