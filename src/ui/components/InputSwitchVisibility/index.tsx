import React, { useState } from 'react'
import useStyles from './style'
import { Form, FormikValues, useFormikContext } from 'formik'
import { FormControlLabel, Switch } from '@material-ui/core'

export interface IInputSwitchVisibilityProps {
    checked: boolean
}

const InputSwitchVisibility: React.FunctionComponent<IInputSwitchVisibilityProps> = ({
    checked,
}) => {
    const classes = useStyles()
    const [toggle, setToggle] = useState(checked)

    const { submitForm, setFieldValue } = useFormikContext<FormikValues>()

    const handleSwitch = async () => {
        setToggle(!toggle)
        setFieldValue('visibility', !toggle)

        await submitForm()
    }

    return (
        <Form>
            <FormControlLabel
                label={toggle ? 'public' : 'hidden'}
                name="visibility"
                value={toggle}
                labelPlacement="start"
                onChange={handleSwitch}
                control={<Switch checked={toggle} />}
                classes={{
                    root: classes.root,
                    label: classes.switchLabel,
                }}
            />
        </Form>
    )
}

export default InputSwitchVisibility
