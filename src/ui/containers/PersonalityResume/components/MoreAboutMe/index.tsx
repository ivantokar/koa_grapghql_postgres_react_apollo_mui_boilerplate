import React from 'react'
import { SectionHeadline } from '../index'
import { Box, Grid, IconButton } from '@material-ui/core'
import { Edit } from '@material-ui/icons'
import Tag, { TagVariantType } from '@components/Tag'
import Legend from '@components/Legend'
import {
    Award,
    Buildings,
    Certificate,
    Flag,
    Globe,
    LightBulb,
    Volunteers,
} from '@components/Icons'

interface IMoreAboutMeItemProps {
    title: string
    icon: React.ReactNode
    tags: {
        variant: TagVariantType
        value: string
    }[]
}

const grey_tags: {
    variant: TagVariantType
    value: string
}[] = [
    { variant: 'grey', value: 'EUISMOD TINCIDUNT' },
    { variant: 'grey', value: 'TINCIDUNT' },
    { variant: 'grey', value: 'MAGNA ALIQUAM' },
    { variant: 'grey', value: 'ESSE MOLESTIE' },
    { variant: 'grey', value: 'COMMODO CONSEQUAT' },
    { variant: 'grey', value: 'BLANDIT' },
    { variant: 'grey', value: 'ALIQUAM ERAT VOLUTPAT' },
    { variant: 'grey', value: 'NULLA FACILISIS' },
]

const green_tags: {
    variant: TagVariantType
    value: string
}[] = [
    { variant: 'green', value: 'EUISMOD TINCIDUNT' },
    { variant: 'green', value: 'TINCIDUNT' },
    { variant: 'green', value: 'MAGNA ALIQUAM' },
    { variant: 'green', value: 'ESSE MOLESTIE' },
    { variant: 'green', value: 'COMMODO CONSEQUAT' },
    { variant: 'green', value: 'BLANDIT' },
    { variant: 'green', value: 'ALIQUAM ERAT VOLUTPAT' },
    { variant: 'green', value: 'NULLA FACILISIS' },
]

const gold_tags: {
    variant: TagVariantType
    value: string
}[] = [
    { variant: 'gold', value: 'EUISMOD TINCIDUNT' },
    { variant: 'gold', value: 'TINCIDUNT' },
    { variant: 'gold', value: 'MAGNA ALIQUAM' },
    { variant: 'gold', value: 'ESSE MOLESTIE' },
    { variant: 'gold', value: 'COMMODO CONSEQUAT' },
    { variant: 'gold', value: 'BLANDIT' },
    { variant: 'gold', value: 'ALIQUAM ERAT VOLUTPAT' },
    { variant: 'gold', value: 'NULLA FACILISIS' },
]

const Item: React.FunctionComponent<IMoreAboutMeItemProps> = ({
    title,
    icon,
    tags,
}) => {
    return (
        <>
            <Box mb={1}>
                <Legend title={title} icon={icon} />
            </Box>
            <Box mb={2}>
                {tags.map((i, index) => (
                    <Box display="inline-block" mb={1} mr={0.5} key={index}>
                        <Tag variant={i.variant}>{i.value}</Tag>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export const MoreAboutMe: React.FunctionComponent = () => {
    return (
        <>
            <SectionHeadline title="More about me">
                <IconButton>
                    <Edit fontSize="small" />
                </IconButton>
            </SectionHeadline>

            <Grid container spacing={2}>
                <Grid item md={4} xl={4}>
                    <Item
                        title="cultural values"
                        icon={<Flag />}
                        tags={green_tags}
                    />
                </Grid>
                <Grid item md={4} xl={4}>
                    <Item
                        title="honors and awards"
                        icon={<Award />}
                        tags={gold_tags}
                    />
                </Grid>
                <Grid item md={4} xl={4}>
                    <Item
                        title="interests"
                        icon={<LightBulb />}
                        tags={grey_tags}
                    />
                </Grid>
                <Grid item md={4} xl={4}>
                    <Item
                        title="licenses and certifications"
                        icon={<Certificate />}
                        tags={gold_tags}
                    />
                </Grid>
                <Grid item md={4} xl={4}>
                    <Item
                        title="volunteering"
                        icon={<Volunteers />}
                        tags={green_tags}
                    />
                </Grid>
                <Grid item md={4} xl={4}>
                    <Item title="languages" icon={<Globe />} tags={grey_tags} />
                </Grid>
                <Grid item md={4} xl={4}>
                    <Item
                        title="organizations"
                        icon={<Buildings />}
                        tags={grey_tags}
                    />
                </Grid>
            </Grid>
        </>
    )
}
