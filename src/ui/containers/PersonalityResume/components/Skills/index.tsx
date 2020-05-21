import React from 'react'
import { SectionHeadline } from '../index'
import { Box, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import TinySkill from '@components/TinySkill'

const data = [
    'social media',
    'email marketing',
    'online advertising',
    'social media',
    'email marketing',
    'online advertising',
]

export const Skills: React.FunctionComponent = () => {
    return (
        <>
            {/* Soft Skills */}
            <SectionHeadline
                title="Soft Skills"
                askFor="Ask for an endorsement"
            >
                <IconButton>
                    <Edit fontSize="small" />
                </IconButton>
            </SectionHeadline>

            <Box mb={5}>
                {data.map((i, index) => (
                    <Box pb={1} pr={1} key={index} display="inline-flex">
                        <TinySkill
                            value={i}
                            count={index * 10}
                            skillColor="green"
                        />
                    </Box>
                ))}
            </Box>

            {/* Hard Skills */}
            <SectionHeadline title="Hard Skills" />

            <Box mb={5}>
                {data.map((i, index) => (
                    <Box pb={1} pr={1} key={index} display="inline-flex">
                        <TinySkill value={i} count={index * 10} />
                    </Box>
                ))}
            </Box>
        </>
    )
}
