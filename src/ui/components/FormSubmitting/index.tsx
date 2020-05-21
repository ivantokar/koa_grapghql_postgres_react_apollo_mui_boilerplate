import React, { useEffect } from 'react'
import { FormikValues, useFormikContext } from 'formik'
import ValidationMessage, {
    ValidationMessageProps,
} from '@components/ValidationMessage'

/**
 *
 */
const FormSubmitting: React.FunctionComponent<ValidationMessageProps> = ({
    loading,
    ...restProps
}) => {
    const { setSubmitting } = useFormikContext<FormikValues>()

    useEffect(() => {
        if (!loading) {
            setSubmitting(false)
        }
    }, [loading])

    return <ValidationMessage {...restProps} />
}

export default FormSubmitting
