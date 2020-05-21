import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll Restoration
 * More details: http://bit.ly/2JKPBa2
 */
const ScrollTop: React.FunctionComponent = (props) => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollTop
