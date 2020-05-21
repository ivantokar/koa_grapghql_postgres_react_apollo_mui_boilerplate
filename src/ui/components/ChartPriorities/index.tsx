import React from 'react'
import useStyles from './style'
import { Box, Grid } from '@material-ui/core'
import classNames from 'classnames'

export type ChartPriorityType = { title: string; position: number }

export interface IChartPrioritiesProps {
    name: string
    data: ChartPriorityType[]
}

const ChartPriorities: React.FunctionComponent<IChartPrioritiesProps> = ({
    name,
    data,
}) => {
    const classes = useStyles()

    return (
        <>
            <Box className={classes.name}>{name}</Box>

            {data.map((i, index) => (
                <Grid
                    className={classes.item}
                    key={index}
                    container
                    spacing={2}
                >
                    <Grid item xs={7} className={classes.title}>
                        {i.title}
                    </Grid>
                    <Grid item xs={5} className={classes.progress}>
                        <Box className={classes.chart}>
                            <Box
                                className={classNames(
                                    classes.filled,
                                    i.position === 1 && classes.green
                                )}
                                style={{
                                    width: `calc(100% - (${
                                        i.position - 1
                                    }) * (100% / ${data.length}))`,
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}

export default ChartPriorities
