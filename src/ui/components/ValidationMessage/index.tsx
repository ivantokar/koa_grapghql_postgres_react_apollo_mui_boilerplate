import React from 'react'
import { useEffect } from 'react'
import { Box } from '@material-ui/core'
import * as Scroll from 'react-scroll'
import CallOut from '../CallOut'
import _ from 'lodash'

export interface ValidationMessageProps {
    errors: string[]
    success?: boolean
    loading?: boolean
    scrollTop?: boolean
    children?: React.ReactNode
}

const ValidationMessage: React.FunctionComponent<ValidationMessageProps> = ({
    children,
    errors,
    success,
    loading,
    scrollTop = true,
}: ValidationMessageProps) => {
    useEffect(() => {
        if (scrollTop) {
            return Scroll.animateScroll.scrollToTop({
                duration: 500,
                delay: 0,
                smooth: 'easeInOutQuart',
            })
        }
    }, [errors || loading])

    return (
        <Box mb={1}>
            {!loading && !_.isEmpty(errors) && (
                <CallOut variant="error" size="small">
                    {errors.map((error: string, i: number) => (
                        <span key={i}>{error}</span>
                    ))}
                </CallOut>
            )}

            {!loading && success && children && (
                <CallOut variant="success" size="small">
                    {children}
                </CallOut>
            )}

            {loading && (
                <CallOut variant="submitting" size="small">
                    Your data is being processed, please wait a moment...
                </CallOut>
            )}
        </Box>
    )
}

export default ValidationMessage
