import React from 'react'
import { Container, Grid } from '@material-ui/core'
import Page from '@components/Page'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet'
import Header from '@components/Header'
import ScrollTop from '@components/ScrollTop'
import Footer from '@components/Footer'
import {
    Intro,
    MoreAboutMe,
    MyFunSide,
    MySoftSkills,
    Recommendations,
    References,
    Skills,
    Urls,
} from './components'
import Block from '@components/Block'

const PersonalityResume: React.FunctionComponent = () => {
    const { username } = useParams()

    return (
        <>
            <ScrollTop />

            <Helmet
                title={`${process.env.REACT_APP_NAME} | ${username}`}
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
                    <Grid container spacing={3} justify="center">
                        <Grid item lg={8} xl={8}>
                            <Intro />

                            <Block>
                                <Urls user_id="0e58a5bb-c978-4c4b-92f5-ad0002363ee6" />

                                <Skills />
                                <MySoftSkills />
                                <MyFunSide />
                                <MoreAboutMe />
                            </Block>

                            <Block>
                                <Recommendations />
                                <References />
                            </Block>
                        </Grid>
                    </Grid>
                </Container>
            </Page>

            <Footer />
        </>
    )
}

export default PersonalityResume
