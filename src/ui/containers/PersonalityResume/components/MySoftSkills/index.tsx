import React from 'react'
import { SectionHeadline } from '../index'
import { Box, Grid, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import ChartPriorities from '@components/ChartPriorities'

const softSkillsData = [
    { title: 'Lorem ipsum dolor', position: 3 },
    { title: 'Dignissimos eaque', position: 1 },
    { title: 'Sapiente tempore', position: 4 },
    { title: 'Dignissimos', position: 5 },
    { title: 'Accusantium aperiam', position: 2 },
]

export const MySoftSkills: React.FunctionComponent = () => {
    return (
        <Box mb={3}>
            <SectionHeadline title="My soft skills">
                <IconButton>
                    <Edit fontSize="small" />
                </IconButton>
            </SectionHeadline>

            <Grid container spacing={2}>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Career change motivators"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Communication style"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Coachability"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Learship"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Learnability"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Ability to work under pressure"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Another chart"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="One more"
                        />
                    </Box>
                </Grid>
                <Grid item md={4} xl={4}>
                    <Box mb={2}>
                        <ChartPriorities
                            data={softSkillsData}
                            name="Yet another chart"
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
