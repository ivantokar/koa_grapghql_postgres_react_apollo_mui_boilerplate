import React from 'react'
import { SectionHeadline } from '../index'
import { ThumbUp } from '@components/Icons'

export const References: React.FunctionComponent = () => {
    return (
        <SectionHeadline
            icon={<ThumbUp />}
            title="My References"
            askFor="Ask for a reference"
        />
    )
}
