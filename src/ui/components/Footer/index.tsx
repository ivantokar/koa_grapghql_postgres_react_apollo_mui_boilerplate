import React from 'react'
import useStyles from './style'
import { Box, Container } from '@material-ui/core'

const Footer: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <Container maxWidth="xl" fixed>
                <Box className={classes.copyright}>
                    TheSalesClub, Inc. &copy; 2020
                </Box>
            </Container>
        </footer>
    )
}

export default Footer
