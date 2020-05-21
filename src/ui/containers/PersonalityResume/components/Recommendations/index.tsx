import React from 'react'
import { SectionHeadline } from '../index'
import { ChatBubble } from '@components/Icons'
import { Box, Grid } from '@material-ui/core'
import classNames from 'classnames'
import useStyles from './style'
import UserPicture from '@components/UserPicture'
import { Formik } from 'formik'
import InputSwitchVisibility from '@components/InputSwitchVisibility'

export interface IRecommendationProps {
    isPublic: boolean
    picture: string | null
    author: string
    body: string
}

export const Recommendation: React.FunctionComponent<IRecommendationProps> = ({
    isPublic,
    author,
    picture,
    body,
}) => {
    const classes = useStyles()

    return (
        <Box
            p={2}
            className={classNames(
                classes.itemRoot,
                !isPublic && classes.hidden
            )}
        >
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <UserPicture
                        picture={picture}
                        alt={author}
                        size={'fluid'}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Box className={classes.author}>{author}</Box>
                    <Box>{body}</Box>
                </Grid>
                <Grid item xs={2}>
                    <Box textAlign="right">
                        <Formik
                            enableReinitialize
                            initialValues={{
                                id: 1,
                                visibility: isPublic,
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values)
                            }}
                        >
                            <InputSwitchVisibility checked={isPublic} />
                        </Formik>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export const Recommendations: React.FunctionComponent = () => {
    return (
        <>
            <SectionHeadline
                icon={<ChatBubble />}
                title="Recommendations"
                askFor="Ask for a recommendation"
            />

            {Array(5)
                .fill('')
                .map((i, index) => (
                    <Box key={index} mb={2}>
                        <Recommendation
                            picture={null}
                            author={`Author ${index}`}
                            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur cumque dicta saepe sunt. A ad facere obcaecati suscipit tenetur. Adipisci, aperiam dolor dolore ea facilis laudantium maxime mollitia nam optio."
                            isPublic={Boolean(index % 2)}
                        />
                    </Box>
                ))}
        </>
    )
}
