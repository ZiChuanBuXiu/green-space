import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {
    cyan500, grey100, cyan700, grey400, pinkA200, grey500, darkBlack, white,
    grey300, fullBlack
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';

import './App.css';
import SearchMap from "./containers/SearchMap";

const theme = getMuiTheme({
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: cyan500,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack,
    }
});


class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={theme}>
                <SearchMap/>
            </MuiThemeProvider>
        );
    }
}

export default App;
