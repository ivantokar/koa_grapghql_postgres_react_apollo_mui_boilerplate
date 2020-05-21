import React from 'react'
import classNames from 'classnames'
import noPhoto from './img/nophoto.png'
import useStyles from './style'
import { FormikValues, useFormikContext } from 'formik'
import ReactFilestack from 'filestack-react'
import { SwapHorizontalCircle } from '@material-ui/icons'
import AddCircle from '@material-ui/icons/AddCircle'
import { Box, Typography } from '@material-ui/core'

export type UserPictureSizeType = 'small' | 'medium' | 'large' | 'fluid'

export interface IUserPictureProps {
    picture?: string | null
    size?: UserPictureSizeType
    alt?: string
}

export interface IUserPictureEditableProps extends IUserPictureProps {
    upload_on_change?: boolean
}

/**
 * FileStack options
 */
const options = {
    fromSources: ['local_file_system', 'googledrive', 'dropbox'],
    accept: ['image/*'],

    transformations: {
        crop: false,
        circle: true,
        rotate: true,
    },

    imageMax: [1000, 1000],
    maxSize: 3024000,
    maxFiles: 1,
    uploadInBackground: true,
}

/**
 * Component user picture
 */
const UserPicture: React.FunctionComponent<IUserPictureProps> = ({
    picture,
    size,
    alt,
}) => {
    const classes = useStyles()

    return (
        <div
            className={classNames(
                classes.root,
                size ? classes[size] : classes.medium
            )}
        >
            <div className={classes.picture}>
                <img
                    src={picture ? picture : noPhoto}
                    // style={{
                    //     backgroundImage: `url(${picture ? picture : noPhoto})`,
                    // }}
                    alt={alt && alt}
                />
            </div>
        </div>
    )
}

/**
 * Component provides uploading user picture
 */
export const UserPictureEditable: React.FunctionComponent<IUserPictureEditableProps> = ({
    size,
    upload_on_change,
}) => {
    const classes = useStyles()

    const {
        values,
        errors,
        touched,
        submitForm,
        setFieldTouched,
        setFieldError,
        setFieldValue,
    } = useFormikContext<FormikValues>()

    const onSuccess = async (result: any) => {
        setFieldValue('picture_url', result.filesUploaded[0].url)

        if (upload_on_change) {
            await submitForm()
        }
    }

    const onError = () => {
        setFieldTouched('picture_url')
        setFieldError('picture_url', 'An unknown error occurred.')
    }

    return (
        <div
            className={classNames(
                classes.root,
                size ? classes[size] : classes.medium
            )}
        >
            <>
                <ReactFilestack
                    apikey={process.env.REACT_APP_FILE_STACK_API_KEY}
                    options={options}
                    onSuccess={onSuccess}
                    onError={onError}
                    preload={true}
                    render={({ onPick }: any) => (
                        <div className={classes.picture} onClick={onPick}>
                            <img
                                src={noPhoto}
                                style={{
                                    backgroundImage: `url(${
                                        values.picture_url
                                            ? values.picture_url
                                            : noPhoto
                                    })`,
                                }}
                                alt=""
                            />
                            {values.picture_url ? (
                                <SwapHorizontalCircle
                                    className={classes.icon}
                                />
                            ) : (
                                <AddCircle className={classes.icon} />
                            )}
                        </div>
                    )}
                />

                {touched.picture_url && errors.picture_url && (
                    <Box pt={2}>
                        <Typography variant="caption" color="error">
                            {errors.picture_url}
                        </Typography>
                    </Box>
                )}
            </>
        </div>
    )
}

export default UserPicture
