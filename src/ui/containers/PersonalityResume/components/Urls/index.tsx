import React from 'react'
import { Box } from '@material-ui/core'
import { SectionHeadline } from '../index'
import ListNumbered from '@components/ListNumbered'
import { Add } from '@material-ui/icons'
import TinyButton from '@components/TinyButton'
import { useQuery, gql } from '@apollo/client'
import { Link } from '@server/modules/links'
import { isNotEmpty } from '@utils'

const USER_LINKS = gql`
    query($id: ID) {
        user(id: $id) {
            links {
                url
            }
        }
    }
`

export const Urls: React.FunctionComponent<{ user_id: string }> = ({
    user_id,
}) => {
    const { loading, error, data } = useQuery(USER_LINKS, {
        variables: {
            id: user_id,
        },
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>`Error! ${error.message}`;</p>

    const urls: string[] = []

    data.user.links.filter((i: Link) => urls.push(i.url))

    return (
        <Box mb={5}>
            <SectionHeadline title="Project URL" />
            {isNotEmpty(urls) ? <ListNumbered list={urls} /> : 'Nothing here'}

            <Box pt={2}>
                <TinyButton
                    color="default"
                    variant="contained"
                    endIcon={<Add />}
                >
                    ADD
                </TinyButton>
            </Box>
        </Box>
    )
}
