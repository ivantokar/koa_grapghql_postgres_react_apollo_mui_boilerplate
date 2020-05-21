import React from 'react'
import Logo, { ILogoProps } from '@components/Logo'
import { Box, Container } from '@material-ui/core'
import useStyles from './style'

const Header: React.FunctionComponent<ILogoProps> = ({ isLogoStatic }) => {
    const classes = useStyles()

    return (
        <header className={classes.root}>
            <Container maxWidth="xl" fixed>
                <Box display="flex" justifyContent="center">
                    <Logo isLogoStatic={isLogoStatic} />
                </Box>
            </Container>
        </header>
    )
}

export default Header
