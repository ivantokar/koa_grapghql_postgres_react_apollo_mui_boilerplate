import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Typography } from '@material-ui/core'
import Header from '@components/Header'
import Page from '@components/Page'
import useStyles from './style'

const Page404: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <>
            <Helmet title="Page not found" />
            <Header />

            <Page>
                <Box className={classes.root}>
                    <Typography component="div" variant="body1">
                        404
                    </Typography>
                    <div className={classes.divider} />
                    <Typography component="div" variant="body1">
                        Page not found
                    </Typography>
                </Box>
            </Page>
        </>
    )
}

export default Page404
