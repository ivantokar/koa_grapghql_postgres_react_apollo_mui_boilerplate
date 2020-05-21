import React from 'react'
import { Box, Grid, IconButton, Typography } from '@material-ui/core'
import Block from '@components/Block'
import Divider from '@material-ui/core/Divider'
import { InfoLine } from '../InfoLine'
import { Edit, Visibility } from '@material-ui/icons'
import useStyles from './style'
import { Formik } from 'formik'
import InputSwitchVisibility from '@components/InputSwitchVisibility'
import UserPicture from '@components/UserPicture'

export const ProfileViews: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <Box className={classes.viewsRoot}>
            <Box className={classes.viewsLabel}>profile views</Box>
            <Box className={classes.viewsIcon}>
                <Visibility fontSize="small" />
            </Box>
            <Box className={classes.viewsCount}>74</Box>
        </Box>
    )
}

export const Intro: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <Box>
            <Block className={classes.cover}>
                <Box className={classes.picture}>
                    <UserPicture size="fluid" />
                </Box>
            </Block>

            <Block color="grey">
                <Grid container>
                    <Grid item xs={6}>
                        <Box pl={3}>
                            <InfoLine
                                label="industry speciality"
                                value="Sales, Customer Experience"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex" justifyContent="flex-end">
                            <ProfileViews />
                            <Box textAlign="right">
                                <Formik
                                    enableReinitialize
                                    initialValues={{
                                        id: 1,
                                        visibility: false,
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        console.log(values)
                                    }}
                                >
                                    <InputSwitchVisibility checked={false} />
                                </Formik>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Block>

            <Block>
                <Box className={classes.edit}>
                    <IconButton>
                        <Edit fontSize="small" />
                    </IconButton>
                </Box>

                <Box p={3} pt={0}>
                    <InfoLine
                        minWidth={200}
                        label="skill level"
                        value="Senior"
                    />
                    <InfoLine
                        minWidth={200}
                        label="preferred job title"
                        value="Account Manager"
                    />
                    <InfoLine
                        minWidth={200}
                        label="preferred job location"
                        value="Atlanta, GA"
                    />
                    <InfoLine
                        minWidth={200}
                        label="previous companies"
                        value="Apple, Google, Microsoft"
                    />
                </Box>

                <Divider />
                <Box p={3}>
                    <InfoLine
                        minWidth={200}
                        label="education level"
                        value="Bachelor"
                    />
                    <InfoLine
                        minWidth={200}
                        label="name of schools"
                        value="MIT"
                    />
                </Box>
                <Divider />
                <Box p={3}>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ad aliquam aliquid, cum dicta dolores eius
                        eligendi, eum maxime nam nobis nostrum nulla, quas quasi
                        quidem quis reiciendis repellat sed sit sunt ut
                        veritatis vitae voluptatum. Eum, in iusto laboriosam
                        nemo possimus ullam? Accusantium architecto debitis
                        dignissimos est fugit numquam suscipit? Aliquid
                        aspernatur incidunt, quibusdam ratione recusandae
                        reiciendis rerum sunt vel. Aliquid cupiditate dolorum
                        ducimus enim et laborum nulla optio quod repudiandae
                        sed. Adipisci at distinctio laborum maxime praesentium,
                        recusandae temporibus. Ab asperiores commodi, distinctio
                        doloribus ducimus exercitationem ipsa laudantium,
                        molestias necessitatibus odio perferendis porro
                        praesentium quaerat quam sunt totam veritatis?
                    </Typography>
                </Box>
            </Block>
        </Box>
    )
}
