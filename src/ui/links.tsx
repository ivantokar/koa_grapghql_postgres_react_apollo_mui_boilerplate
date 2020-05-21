import React from 'react'
import { NavLink } from 'react-router-dom'

/*
|--------------------------------------------------------------------------
| External links
|--------------------------------------------------------------------------
|
*/

interface IExternalLinks {
    FACEBOOK: string
    LINKED_IN: string
    TWITTER: string
    PINTEREST: string
    INSTAGRAM: string
    BLOG: string
}

export const ExternalLinks: IExternalLinks = {
    FACEBOOK: 'https://www.facebook.com/ntroduced',
    LINKED_IN: 'https://www.linkedin.com/company/sales-club',
    TWITTER: 'https://twitter.com/ntroduced',
    PINTEREST: 'https://www.pinterest.com/Ntroduced/pins',
    INSTAGRAM: 'https://www.instagram.com/ntroduced',
    BLOG: 'https://blog.ntroduced.com',
}

/*
|--------------------------------------------------------------------------
| Common links
|--------------------------------------------------------------------------
|
*/

/**
 * Homepage
 */
export const LinkHome = React.forwardRef((props: any, ref: any) => {
    const { staticContext, ...attrs } = props
    return <NavLink role="button" to={'/'} innerRef={ref} {...attrs} />
})

/**
 * Homepage
 */
export const LinkPersonalityResume = React.forwardRef(
    (props: any, ref: any) => {
        const { staticContext, ...attrs } = props
        return <NavLink role="button" to={'/'} innerRef={ref} {...attrs} />
    }
)

// /**
//  * Logout
//  */
// export const LinkLogout = React.forwardRef((props: any, ref: any) => (
//     <a role="button" href={'/logout'} {...props} ref={ref} />
// ))
