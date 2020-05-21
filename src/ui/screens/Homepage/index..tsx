import React from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Helmet } from 'react-helmet'
import ScrollTop from '@components/ScrollTop'
import Page from '@components/Page'
import { Container } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const Homepage: React.FunctionComponent = () => {
    return (
        <>
            <ScrollTop />

            <Helmet
                title={`${process.env.REACT_APP_NAME} | Homepage`}
                meta={[
                    {
                        name: 'description',
                        content:
                            'Contact us to learn more about how we’re changing how companies hire talent.',
                    },
                ]}
            />

            <Header />

            <Page>
                <Container maxWidth="xl" fixed>
                    <NavLink to={'/cv/username'}>Resume</NavLink>
                </Container>
            </Page>

            <Footer />
        </>
    )
}

export default Homepage
