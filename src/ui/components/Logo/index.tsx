import React from 'react'
import useStyles from '@components/Logo/style'
import { LinkHome } from '@links'

export interface ILogoProps {
    isLogoStatic?: boolean
}

const Logo: React.FunctionComponent<ILogoProps> = ({ isLogoStatic }) => {
    const classes = useStyles()
    // const img = <img src={logo} alt="Personality Resume" />

    return (
        <>
            {isLogoStatic ? (
                <span className={classes.root}>LOGO HERE</span>
            ) : (
                <LinkHome className={classes.root}>LOGO HERE</LinkHome>
            )}
        </>
    )
}

export default Logo
