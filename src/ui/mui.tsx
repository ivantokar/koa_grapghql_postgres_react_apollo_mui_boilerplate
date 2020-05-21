import { create } from 'jss'
import {
    jssPreset,
    MuiThemeProvider,
    StylesProvider,
} from '@material-ui/core/styles'
import jssExtend from 'jss-plugin-extend'
import jssCompose from 'jss-plugin-compose'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './theme'

const jss = create({
    plugins: [...jssPreset().plugins, jssExtend(), jssCompose()],
})

export const ThemeProvider: React.FunctionComponent = (props) => {
    return (
        <StylesProvider jss={jss}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {props.children}
            </MuiThemeProvider>
        </StylesProvider>
    )
}
